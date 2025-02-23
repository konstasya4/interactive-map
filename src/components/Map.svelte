<script>
  import { setContext, createEventDispatcher } from "svelte";
  import { mapboxgl, key } from "./mapboxgl.js";
  import geoData from "../assets/data/line.geojson";

  let map;
  let isBottomPanelVisible = $state(false);
  const dispatch = createEventDispatcher();

  setContext(key, {
    getMap: () => map,
  });

  function initMap(container) {
    let initialCenter = [35.3, 56.8];
    let initialZoom = 13;

    fetch(geoData)
      .then((res) => res.json())
      .then((data) => {
        const firstFeature = data.features[0];
        const initialCenter = firstFeature.geometry.coordinates[0];
        map.setCenter(initialCenter);
        map.setZoom(11);
      })
      .catch((err) => console.error("Ошибка загрузки geoData:", err));

    map = new mapboxgl.Map({
      container,
      style: "mapbox://styles/mapbox/streets-v9",
      projection: "mercator",
      center: initialCenter,
      zoom: initialZoom,
    });
    map.addControl(
      new mapboxgl.NavigationControl({
        showZoom: false,
        showCompass: false,
      })
    );
    map.scrollZoom.disable();

    map.on("idle", () => {
      map.addSource("rail-data", {
        type: "geojson",
        data: geoData,
      });

      map.addLayer({
        id: "rail-highspeed",
        type: "line",
        source: "rail-data",
        paint: {
          "line-color": "#FF0000",
          "line-width": 3,
        },
      });

      map.addLayer({
        id: "rail-bridge-left",
        type: "line",
        source: "rail-data",
        filter: ["==", ["get", "bridge"], "yes"],
        paint: {
          "line-color": "#0000FF",
          "line-width": 3,
          "line-offset": 3,
        },
      });

      map.addLayer({
        id: "rail-bridge-right",
        type: "line",
        source: "rail-data",
        filter: ["==", ["get", "bridge"], "yes"],
        paint: {
          "line-color": "#0000FF",
          "line-width": 3,
          "line-offset": -3,
        },
      });
      map.on("click", (e) => {
        isBottomPanelVisible = false;
        dispatch("bottomPanelVisible", { isBottomPanelVisible });
      });
      map.on("click", "rail-highspeed", (e) => {
        isBottomPanelVisible = true;
        dispatch("bottomPanelVisible", { isBottomPanelVisible });
      });
    });
  }
</script>

<div class="map" use:initMap></div>

<style>
  @import "mapbox-gl/dist/mapbox-gl.css";
  .map {
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    flex-grow: 1;
  }
</style>

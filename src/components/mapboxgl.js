import mapboxgl from 'mapbox-gl';

// https://docs.mapbox.com/help/glossary/access-token/
mapboxgl.accessToken = 'pk.eyJ1IjoibWFwLXZzbWV4cGVydCIsImEiOiJjbG03ams2dTQwMThwM2Vycm5tZ2V4ZTJtIn0.RRZEsbDbSSuIDTOrHXMUzw';

const key = Symbol();

export { mapboxgl, key };
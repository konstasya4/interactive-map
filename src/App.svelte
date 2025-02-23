<script>
  import Navbar from "./components/Navbar.svelte";
  import VideoPlayer from "./components/VideoPlayer.svelte";
  import BottomPanel from "./components/BottomPanel.svelte";
  import Map from "./components/Map.svelte";

  let showVideo = $state(false);
  let currentVideoId = $state(null);
  let isBottomPanelVisible = $state(false);

  function handleShowVideo(event) {
    currentVideoId = event.detail.videoId;
    showVideo = true;
    isBottomPanelVisible = false; 
  }

  function handleHideVideo() {
    showVideo = false;
    currentVideoId = null;
    isBottomPanelVisible = true; 
  }
</script>

<main class="container">
  <Navbar />

  {#if showVideo}
    <VideoPlayer videoId={currentVideoId} on:close={handleHideVideo} />
  {:else}
    <Map
      on:bottomPanelVisible={(e) =>
        (isBottomPanelVisible = e.detail.isBottomPanelVisible)}
    />
    {#if isBottomPanelVisible}
      <BottomPanel
        on:showVideo={handleShowVideo}
        on:close={() => (isBottomPanelVisible = false)}
      />
    {/if}
  {/if}
</main>

<style>
  body,
  html {
    height: 100vh;
    margin: 0;
    padding: 0;
  }
  .container {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
</style>

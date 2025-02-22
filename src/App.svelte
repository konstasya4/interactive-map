<script>
  import Navbar from './components/Navbar.svelte';
  import VideoPlayer from './components/VideoPlayer.svelte';
  import MainPage from './components/MainPage.svelte';
  let showVideo = $state(false);        
  let currentVideoId = $state(null);    

  function handleShowVideo(event) {
    currentVideoId = event.detail.videoId;
    showVideo = true;
  }

  function handleHideVideo() {
    showVideo = false;
    currentVideoId = null;
  }
</script>

<main class="container">
  <Navbar/>
  {#if showVideo}
  <VideoPlayer videoId={currentVideoId} on:close={handleHideVideo} />
{:else}
  <MainPage on:showVideo={handleShowVideo}/>
{/if} 
</main>

<style>
  .container {
    display: flex;
    flex-direction: column;
    height: 100vh; 
   }
</style>

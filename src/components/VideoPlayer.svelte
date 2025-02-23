<script>
    import { createEventDispatcher } from "svelte";
    import { onMount } from 'svelte';
    import Plyr from 'plyr';
    import 'plyr/dist/plyr.css';
    import Map from './Map.svelte';
  
    export let videoId 
  
    let playerContainer; 
    let player;
    const dispatch = createEventDispatcher();

    $: embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&controls=0&enablejsapi=1&origin=${location.origin}`;

    onMount(() => {
      player = new Plyr(playerContainer, {
        controls: [
          'play',
          'progress',
          'current-time',
          'settings',
        ],
        autoplay: true
      }); 
    });

    function handleClick(){
      dispatch('close');
    }
  </script>
  <div class="video" bind:this={playerContainer}>

    <iframe class="video__iframe"
      src={embedUrl}
      allowfullscreen
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    > 
    </iframe>
  
    <div class="video__mini-map">
      <Map />
    </div>
  
    <button class="video__button" onclick={handleClick}>Другие видео<svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="#FFFFFF" d="m12 10.108l-4.246 4.246q-.14.14-.344.15t-.364-.15t-.16-.354t.16-.354l4.389-4.388q.242-.242.565-.242t.566.242l4.388 4.388q.14.14.15.345q.01.203-.15.363t-.354.16t-.354-.16z"></path></svg></button>
  </div>
  
  <style>
    .video {
      position: relative;
      width: 100%;
    }
  
    .video, .video__iframe {
      position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1;
    }

    .video__mini-map {
    position: absolute;
    bottom: 3vw;
    left: 20px;
    pointer-events: none; 
    z-index: 2;
    width: 20vw;
    height: 15vw;
    overflow: hidden;
    }
  
    .video__button {
    position: absolute;
    bottom: 3vw;
    right: 20px;
    z-index: 2;
    padding: 0.5rem 1rem;
    display: inline-flex;     
    align-items: center;
    gap: 0.5rem;               
    background: rgba(44, 44, 44, 0.76);  
    border-radius: 6px;            
    border: none;                
    color: #fff;
    font-size: 1rem;
    cursor: pointer;
  }
  .video__button:hover {
    background: rgba(0, 0, 0, 0.8);
  }
    
  </style>
  
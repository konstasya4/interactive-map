<script>
  import { createEventDispatcher } from "svelte";
  import { Splide, SplideSlide } from "svelte-splide";
  import "@splidejs/splide/dist/css/splide.min.css";
  import Image1 from "../assets/images/image1.png";
  import Image2 from "../assets/images/image2.png";
  import Image3 from "../assets/images/image3.png";
  import Image4 from "../assets/images/image4.png";
  
  const dispatch = createEventDispatcher();

  let slides = [
    { src: Image1, alt: "23 августа 2024", caption: "23 августа 2024", videoId: "i88lNMnpvEk" },
    { src: Image2, alt: "1 августа 2024", caption: "1 августа 2024", videoId: "i88lNMnpvEk" },
    { src: Image3, alt: "14 июля 2024", caption: "14 июля 2024", videoId: "i88lNMnpvEk" },
    { src: Image4, alt: "7 июня 2024", caption: "7 июня 2024", videoId: "i88lNMnpvEk" },
  ];
  
  let options = {
    type: "loop", 
    perMove: 1, 
    gap: "2vw",
    fixedWidth: "400px",
    arrows: true,
    pagination: false,
    drag: false,
  };

  function handlePanelClick(event) {
    const slideContent = event.target.closest('.slide-content');
    if (slideContent && slideContent.dataset.videoId) {
      const videoId = slideContent.dataset.videoId;
      dispatch('showVideo', { videoId });
    }
  }
</script>

<div class="panel" on:click={handlePanelClick}>
  <Splide {options} >
    {#each slides as slide}
      <SplideSlide>
        <div class="slide-content" data-video-id={slide.videoId}>
          <img class="panel__image" src={slide.src} alt={slide.alt} />
          <div class="panel__overlay">
            <p class="panel__caption raleway-bold">{slide.caption}</p>
          </div>
        </div>
      </SplideSlide>
    {/each}
  </Splide>
</div>

<style>
  .slide-content {
    position: relative;
    border: 2px solid #fff;   
    box-sizing: border-box;
    cursor: pointer;
  }
  .panel__image {
    width: 100%;
    display: block;
  }
  .panel {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(58, 58, 58, 0.57);
    color: white;
    padding: 15px;
    border-top: 1px solid #ccc;
  }
  .panel__overlay {
    position: absolute;
    right: 0;
    top: 0;
    left: 0;
    padding: 0.4rem;
    background: rgba(0, 0, 0, 0.72);
  }
  .panel__caption {
    color: #fff;
    margin: 0;
    font-weight: 700;
  }
</style>


<!-- <script>
  import { createEventDispatcher } from "svelte";
  import { Splide, SplideSlide } from "svelte-splide";
  import "@splidejs/splide/dist/css/splide.min.css";
  import Image1 from "../assets/images/image1.png";
  import Image2 from "../assets/images/image2.png";
  import Image3 from "../assets/images/image3.png";
  import Image4 from "../assets/images/image4.png";
  
  const dispatch = createEventDispatcher();

  let slides = [
    { src: Image1, alt: "23 августа 2024", caption: "23 августа 2024", videoId: "i88lNMnpvEk" },
    { src: Image2, alt: "1 августа 2024", caption: "1 августа 2024", videoId: "i88lNMnpvEk" },
    { src: Image3, alt: "14 июля 2024", caption: "14 июля 2024", videoId: "i88lNMnpvEk" },
    { src: Image4, alt: "7 июня 2024", caption: "7 июня 2024", videoId: "i88lNMnpvEk" },
  ];
  
  let options = {
    type: "loop", 
    perMove: 1, 
    gap: "2vw",
    fixedWidth: "400px",
    arrows: true,
    pagination: false,
    drag: false,
  };

  function handlePanelClick(event) {
    const slideContent = event.target.closest('.slide-content');
    if (slideContent && slideContent.dataset.videoId) {
      const videoId = slideContent.dataset.videoId;
      console.log("Нажат слайд, videoId =", videoId);
      dispatch('showVideo', { videoId });
    }
  }
</script>

<div class="panel" on:click={handlePanelClick}>
  <Splide {options} class="mySplide">
    {#each slides as slide}
      <SplideSlide>
        <div class="slide-content" data-video-id={slide.videoId}>
          <img class="slide-image" src={slide.src} alt={slide.alt} />
          <div class="overlay">
            <p class="caption raleway-bold">{slide.caption}</p>
          </div>
        </div>
      </SplideSlide>
    {/each}
  </Splide>
</div>

<style>
  .slide-content {
    position: relative;
    border: 2px solid #fff;   
    box-sizing: border-box;
    cursor: pointer;
  }
  .slide-image {
    width: 100%;
    display: block;
  }
  .panel {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(58, 58, 58, 0.57);
    color: white;
    padding: 15px;
    border-top: 1px solid #ccc;
  }
  .overlay {
    position: absolute;
    right: 0;
    top: 0;
    left: 0;
    padding: 0.4rem;
    background: rgba(0, 0, 0, 0.72);
  }
  .caption {
    color: #fff;
    margin: 0;
    font-weight: 700;
  }
  .mySplide .splide__arrow--prev {
    background: rgba(58, 58, 58, 0.86);
  border: 1px solid rgba(0, 0, 0, 0.19);
  }
  .mySplide .splide__arrow--next {
    background: rgba(255, 255, 255, 0.5);
  }
</style> -->
<script>
  export let name = "";
  export let className = ""
</script>

{#if name === "menu"}
  <svg
    width="35"
    height="14"
    viewBox="0 0 35 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    class={className}
  >
    <line y1="1" x2="35" y2="1" stroke="#4547BB" stroke-width="2" />
    <line y1="7" x2="35" y2="7" stroke="#4547BB" stroke-width="2" />
    <line y1="13" x2="35" y2="13" stroke="#4547BB" stroke-width="2" />
  </svg>
{:else if name === "triangle"}
  <svg
    width="14"
    height="11"
    viewBox="0 0 14 11"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    class={className}
  >
    <path
      d="M7 11L0.937822 0.5H13.0622L7 11Z"
      fill="#4547BB"
      fill-opacity="0.4"
    />
  </svg>
  {:else if name === "filter"}
  <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg" >
    <path d="M0.59375 0.6875C0.59375 0.37684 0.831599 0.125 1.125 0.125H13.875C14.1684 0.125 14.4062 0.37684 14.4062 0.6875V2.9375C14.4062 3.07646 14.3577 3.2105 14.2699 3.31379L9.625 8.77835V14.1875C9.625 14.4296 9.47868 14.6446 9.26175 14.7211L6.07425 15.8461C5.91224 15.9033 5.73416 15.8745 5.59562 15.7688C5.45709 15.6631 5.375 15.4933 5.375 15.3125V8.77835L0.730125 3.31379C0.642329 3.2105 0.59375 3.07646 0.59375 2.9375V0.6875Z" fill="#4547BB"/>
    </svg>
    {:else if name === "menu-mobile"}
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" >
      <path fill-rule="evenodd" clip-rule="evenodd" d="M7.64645 13.8761C7.45118 13.6942 7.45118 13.3993 7.64645 13.2174L13.2929 7.9568L7.64645 2.69625C7.45118 2.51433 7.45118 2.21938 7.64645 2.03746C7.84171 1.85555 8.15829 1.85555 8.35355 2.03746L14.3536 7.62741C14.5488 7.80933 14.5488 8.10427 14.3536 8.28619L8.35355 13.8761C8.15829 14.0581 7.84171 14.0581 7.64645 13.8761Z" fill="black"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M3.64645 13.8761C3.45118 13.6942 3.45118 13.3993 3.64645 13.2174L9.29289 7.9568L3.64645 2.69625C3.45118 2.51433 3.45118 2.21938 3.64645 2.03746C3.84171 1.85555 4.15829 1.85555 4.35355 2.03746L10.3536 7.62741C10.5488 7.80933 10.5488 8.10427 10.3536 8.28619L4.35355 13.8761C4.15829 14.0581 3.84171 14.0581 3.64645 13.8761Z" fill="black"/>
      </svg>
      
{/if}


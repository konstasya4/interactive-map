<script>
    import BottomPanel from "./BottomPanel.svelte";
    import Map from "./Map.svelte";
    import { createEventDispatcher  } from "svelte";

    let isBottomPanelVisible = false;
    const dispatch = createEventDispatcher();
</script>
<Map on:bottomPanelVisible={() => (isBottomPanelVisible = true)}/>
{#if isBottomPanelVisible}
  <BottomPanel on:showVideo={event => dispatch('showVideo', event.detail)} on:close={() => (isBottomPanelVisible = false)} />
{/if}
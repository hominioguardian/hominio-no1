<script>
  import "../app.css";
  import Navbar from "$lib/components/Navbar.svelte";
  import BottomNotch from "$lib/components/BottomNotch.svelte";
</script>

<div class="min-h-screen bg-white">
  <Navbar />

  <!-- Main content - no padding, navbar is transparent over content -->
  <main>
    <slot />
  </main>

  <BottomNotch />
</div>

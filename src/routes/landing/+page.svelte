<script>
  import VisionStatement from "$lib/components/magazine/VisionStatement.svelte";
  import PersonalIntro from "$lib/components/magazine/PersonalIntro.svelte";
  import TournamentConcept from "$lib/components/magazine/TournamentConcept.svelte";
  import DirectAddress from "$lib/components/magazine/DirectAddress.svelte";
  import CallToAction from "$lib/components/magazine/CallToAction.svelte";
</script>

<svelte:head>
  <title>HominioNo1 - The Vision Awakens</title>
  <meta
    name="description"
    content="Where 1 million humans unite to back one vision that transforms tomorrow"
  />
</svelte:head>

<!-- Magazine-style storytelling layout -->
<main
  class="bg-gradient-to-b from-slate-50 via-white to-yellow-50 min-h-screen"
>
  <!-- Vision Statement -->
  <VisionStatement />

  <!-- Personal Introduction -->
  <PersonalIntro />

  <!-- Tournament Concept -->
  <TournamentConcept />

  <!-- Direct Address -->
  <DirectAddress />

  <!-- Call to Action -->
  <CallToAction />
</main>

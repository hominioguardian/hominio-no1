<script>
  import VisionStatement from "$lib/components/magazine/VisionStatement.svelte";
  // import PersonalIntro from "$lib/components/magazine/PersonalIntro.svelte";
  import TournamentConcept from "$lib/components/magazine/TournamentConcept.svelte";
  import QuestionBridge from "$lib/components/magazine/QuestionBridge.svelte";
  // import DirectAddress from "$lib/components/magazine/DirectAddress.svelte";
  // import CallToAction from "$lib/components/magazine/CallToAction.svelte";
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
  class="min-h-screen"
  style="background: linear-gradient(to bottom, var(--brand-honeydew), #ffffff, #fefce8);"
>
  <!-- Vision Statement -->
  <VisionStatement />

  <!-- Tournament Concept -->
  <TournamentConcept />

  <!-- Question Bridge -->
  <QuestionBridge />

  <!-- Direct Address -->
  <!-- <DirectAddress /> -->

  <!-- Call to Action -->
  <!-- <CallToAction /> -->
</main>

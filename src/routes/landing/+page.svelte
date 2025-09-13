<script>
  import HeroSection from "$lib/components/landing/HeroSection.svelte";
  import BrandIdentity from "$lib/components/magazine/BrandIdentity.svelte";
  import TournamentConcept from "$lib/components/magazine/TournamentConcept.svelte";
  import TournamentRoadmap from "$lib/components/magazine/TournamentRoadmap.svelte";
  import GoldenOffer from "$lib/components/offers/GoldenOffer.svelte";
  import TournamentMilestones from "$lib/components/magazine/TournamentMilestones.svelte";
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
  <!-- Hero Section -->
  <HeroSection />

  <!-- Brand Identity -->
  <BrandIdentity />

  <!-- Tournament Concept -->
  <TournamentConcept />

  <!-- Tournament Roadmap -->
  <TournamentRoadmap />

  <!-- Golden Offer -->
  <GoldenOffer />

  <!-- Tournament Milestones -->
  <TournamentMilestones />
</main>

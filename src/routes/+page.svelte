<script>
  import IntroBanner from "$lib/components/magazine/IntroBanner.svelte";
  import HeroSection from "$lib/components/landing/HeroSection.svelte";
  import BrandIdentity from "$lib/components/magazine/BrandIdentity.svelte";
  import TournamentConcept from "$lib/components/magazine/TournamentConcept.svelte";
  import VotingSystem from "$lib/components/magazine/VotingSystem.svelte";
  import TournamentRoadmap from "$lib/components/magazine/TournamentRoadmap.svelte";
  import GoldenOffer from "$lib/components/offers/GoldenOffer.svelte";
  import TournamentMilestones from "$lib/components/magazine/TournamentMilestones.svelte";
  // import SummitVision from "$lib/components/magazine/SummitVision.svelte";
  import FinalCallToAction from "$lib/components/magazine/FinalCallToAction.svelte";
  import FAQ from "$lib/components/magazine/FAQ.svelte";
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
  <!-- Intro Banner -->
  <IntroBanner />

  <!-- Hero Section -->
  <HeroSection />

  <!-- Brand Identity -->
  <BrandIdentity />

  <!-- Tournament Concept -->
  <TournamentConcept />

  <!-- Voting System -->
  <VotingSystem />

  <!-- Tournament Milestones -->
  <TournamentMilestones />

  <!-- Summit Vision -->
  <!-- <SummitVision /> -->

  <!-- Tournament Roadmap -->
  <TournamentRoadmap />

  <!-- Golden Offer -->
  <GoldenOffer />

  <!-- Final Call to Action -->
  <FinalCallToAction />

  <!-- FAQ Section -->
  <FAQ />
</main>

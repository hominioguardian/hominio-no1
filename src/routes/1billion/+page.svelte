<script>
  import IntroSection from "$lib/components/1billion/IntroSection.svelte";
  import HeroSection from "$lib/components/1billion/HeroSection.svelte";
  import VisionSection from "$lib/components/1billion/VisionSection.svelte";
  import HowItWorksSection from "$lib/components/1billion/HowItWorksSection.svelte";
  import TournamentDetailSection from "$lib/components/1billion/TournamentDetailSection.svelte";
  import FundingTimelineSection from "$lib/components/1billion/FundingTimelineSection.svelte";
  import VisionStatement from "$lib/components/1billion/VisionStatement.svelte";
  import BrandIdentity from "$lib/components/1billion/BrandIdentity.svelte";
  import GoldenOffer from "$lib/components/1billion/GoldenOffer.svelte";
  import CallToAction from "$lib/components/1billion/CallToAction.svelte";
</script>

<svelte:head>
  <title>
    Hominio | €25M Funding for Purpose Founders | 1 Billion Humans United
  </title>
  <meta
    name="description"
    content="Join the movement: Receive up to €25M funding while building a community of 1 billion humans united to upgrade civilization from survival to abundance. Apply for Cup #1 in Munich."
  />
  <style>
    :root {
      --brand-yellow: #fbbf24;
      --brand-teal: #14b8a6;
      --brand-cordovan: #7c2d12;
      --brand-honeydew: #f0fdf4;
      --brand-oxford: #1e293b;
    }

    .font-display {
      font-family:
        "Inter",
        system-ui,
        -apple-system,
        sans-serif;
      font-optical-sizing: auto;
      font-variation-settings: "slnt" 0;
    }

    .font-body {
      font-family:
        "Inter",
        system-ui,
        -apple-system,
        sans-serif;
      font-weight: 800;
      letter-spacing: -0.025em;
    }

    html {
      scroll-behavior: smooth;
    }

    body {
      font-family:
        "Inter",
        system-ui,
        -apple-system,
        sans-serif;
      line-height: 1.6;
      color: #1e293b;
    }

    .prose {
      max-width: none;
    }

    .prose p {
      margin-bottom: 1.25em;
    }

    .prose em {
      font-style: italic;
      opacity: 0.9;
    }
  </style>
</svelte:head>

<IntroSection />
<HowItWorksSection />
<HeroSection />
<FundingTimelineSection />
<VisionSection />
<TournamentDetailSection />
<VisionStatement />
<BrandIdentity />
<GoldenOffer />
<CallToAction />

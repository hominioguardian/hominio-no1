<script>
  import GoldenOfferHeader from "./GoldenOfferHeader.svelte";

  let showCountries = false;
</script>

<section class="py-12 bg-stone-100">
  <div class="container px-6 mx-auto">
    <!-- Header -->
    <GoldenOfferHeader />

    <!-- HOW: 3 Steps -->
    <div class="p-8 mx-auto mb-8 max-w-4xl bg-white rounded-2xl shadow-xl">
      <div class="grid gap-8 md:grid-cols-3">
        <div class="text-center">
          <div
            class="flex justify-center items-center mx-auto mb-3 w-12 h-12 rounded-full bg-slate-800"
          >
            <span class="font-bold text-white">1</span>
          </div>
          <h4 class="mb-2 font-semibold text-gray-800">Post 1-minute video</h4>
          <p class="text-sm text-gray-600">Share your vision</p>
        </div>
        <div class="text-center">
          <div
            class="flex justify-center items-center mx-auto mb-3 w-12 h-12 rounded-full bg-slate-800"
          >
            <span class="font-bold text-white">2</span>
          </div>
          <h4 class="mb-2 font-semibold text-gray-800">Get 100 likes</h4>
          <p class="text-sm text-gray-600">Rally your network</p>
        </div>
        <div class="text-center">
          <div
            class="flex justify-center items-center mx-auto mb-3 w-12 h-12 rounded-full bg-slate-800"
          >
            <span class="font-bold text-white">3</span>
          </div>
          <h4 class="mb-2 font-semibold text-gray-800">Enter tournament</h4>
          <p class="text-sm text-gray-600">€1M shot awaits</p>
        </div>
      </div>
    </div>

    <!-- Eligibility Footnote -->
    <div class="mx-auto max-w-4xl">
      <div class="p-4 rounded-xl border bg-white/60 border-white/50">
        <p class="mb-2 text-xs text-center text-slate-600">
          Any early stage • Idea to MVP • Solo-Founder to Team • Max €300k
          funding • European homebase
        </p>
        <div class="text-center">
          <button
            class="text-xs underline cursor-pointer text-slate-500 hover:text-slate-700"
            on:click={() => (showCountries = !showCountries)}
          >
            *48 countries {showCountries ? "▲" : "▼"}
          </button>

          {#if showCountries}
            <div
              class="p-3 mt-3 text-xs leading-relaxed rounded-lg border bg-slate-50 text-slate-600"
            >
              <strong>Eligible Countries:</strong><br />
              🇪🇺 All EU Member States (27 countries)<br />
              🏔️ EEA Countries: Iceland, Liechtenstein, Norway, Switzerland<br
              />
              🌍 Additional European Nations: United Kingdom, Turkey, Ukraine, Serbia,
              Albania, Kosovo, North Macedonia, Montenegro, Bosnia and Herzegovina,
              Moldova, Georgia, Armenia, Belarus<br />
              <em class="text-slate-500"
                >Total: 48 countries • Excludes: Russia, Vatican City</em
              >
            </div>
          {/if}
        </div>
      </div>
    </div>
  </div>
</section>

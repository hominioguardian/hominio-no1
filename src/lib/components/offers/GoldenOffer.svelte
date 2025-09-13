<script>
  let showCountries = false;
</script>

<section
  class="py-24 px-6 relative overflow-hidden"
  style="background: linear-gradient(to bottom, #f8fafc, var(--brand-honeydew), #fefce8);"
>
  <!-- Magazine-style Geometric Shapes -->
  <div class="absolute inset-0">
    <!-- Large circle - top left -->
    <div
      class="absolute -top-24 -left-24 w-80 h-80 rounded-full opacity-10"
      style="background-color: var(--brand-yellow);"
    ></div>
    <!-- Triangle shape - right -->
    <div
      class="absolute top-1/3 -right-16 w-40 h-40 opacity-8 transform rotate-12"
      style="background-color: var(--brand-cordovan);"
    ></div>
    <!-- Small circles scattered -->
    <div
      class="absolute bottom-1/4 left-1/4 w-20 h-20 rounded-full opacity-8"
      style="background-color: var(--brand-teal);"
    ></div>
  </div>

  <div class="max-w-6xl mx-auto relative z-10">
    <!-- Header -->
    <div class="text-center mb-16">
      <h2
        class="text-5xl md:text-7xl lg:text-8xl font-display font-light leading-tight text-slate-800 mb-4"
      >
        Ready to
        <span
          class="font-black font-body uppercase tracking-normal text-6xl md:text-8xl lg:text-9xl"
          style="color: var(--brand-yellow);">START</span
        >
        your journey?
      </h2>
      <p
        class="text-xl md:text-2xl font-display font-light italic text-slate-600 leading-relaxed"
      >
        Join the
        <span
          class="font-black font-body uppercase tracking-normal"
          style="color: var(--brand-cordovan);">Hominio Europe Cup</span
        >
        in just 3 simple steps
      </p>
    </div>

    <!-- HOW: 3 Steps - Magazine Style -->
    <div class="grid gap-6 md:grid-cols-3 mb-16 relative">
      <!-- Step 1: Video Submission - Tall Card -->
      <div class="group relative">
        <!-- Angled background element -->
        <div
          class="absolute -top-3 -right-3 w-full h-full transform rotate-1 opacity-30 rounded-3xl group-hover:-rotate-1 transition-transform duration-300"
          style="background-color: var(--brand-yellow);"
        ></div>

        <div
          class="relative bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/60 overflow-hidden h-72"
        >
          <!-- Giant number background -->
          <div
            class="absolute -top-4 -right-4 text-9xl font-black opacity-8 font-body leading-none"
            style="color: var(--brand-yellow);"
          >
            01
          </div>

          <!-- Content -->
          <div class="relative z-10 h-full flex flex-col justify-between">
            <div>
              <div class="mb-4">
                <div
                  class="w-3 h-16 rounded-full mb-4"
                  style="background: linear-gradient(to bottom, var(--brand-yellow), #F5E07A);"
                ></div>
                <h4
                  class="text-2xl md:text-3xl font-black font-body uppercase leading-tight mb-2"
                  style="color: var(--brand-oxford);"
                >
                  SUBMIT<br />
                  <span style="color: var(--brand-yellow);">1 MIN VIDEO</span>
                </h4>
              </div>
              <p
                class="text-base font-display leading-relaxed"
                style="color: var(--brand-oxford);"
              >
                <span class="font-bold">Share your vision</span><br />
                One minute to change everything
              </p>
            </div>

            <!-- Action arrow -->
            <div class="flex justify-end">
              <div
                class="w-8 h-8 rounded-full flex items-center justify-center"
                style="background-color: var(--brand-yellow);"
              >
                <span class="text-white font-bold">→</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Step 2: Get Likes - Medium Card with offset -->
      <div class="group relative md:mt-8">
        <!-- Triangular accent -->
        <div
          class="absolute -top-6 -left-6 w-24 h-24 transform rotate-45 opacity-25 group-hover:rotate-12 transition-transform duration-300"
          style="background-color: var(--brand-teal);"
        ></div>

        <div
          class="relative bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/60 overflow-hidden h-64"
        >
          <!-- Giant number background -->
          <div
            class="absolute -bottom-2 -left-2 text-8xl font-black opacity-8 font-body leading-none"
            style="color: var(--brand-teal);"
          >
            02
          </div>

          <!-- Content -->
          <div class="relative z-10 h-full flex flex-col justify-between">
            <div>
              <div class="mb-4">
                <div class="flex space-x-1 mb-4">
                  <div
                    class="w-2 h-2 rounded-full"
                    style="background-color: var(--brand-teal);"
                  ></div>
                  <div
                    class="w-2 h-2 rounded-full"
                    style="background-color: var(--brand-teal);"
                  ></div>
                  <div
                    class="w-2 h-2 rounded-full"
                    style="background-color: var(--brand-teal);"
                  ></div>
                </div>
                <h4
                  class="text-2xl md:text-3xl font-black font-body uppercase leading-tight mb-2"
                  style="color: var(--brand-oxford);"
                >
                  GET<br />
                  <span style="color: var(--brand-teal);">100 LIKES</span>
                </h4>
              </div>
              <p
                class="text-base font-display leading-relaxed"
                style="color: var(--brand-oxford);"
              >
                <span class="font-bold">Rally support</span><br />
                Build your champion network
              </p>
            </div>

            <!-- Floating hearts -->
            <div class="flex justify-start space-x-2">
              <div class="text-lg" style="color: var(--brand-teal);">♥</div>
              <div class="text-sm" style="color: var(--brand-teal);">♥</div>
              <div class="text-xs" style="color: var(--brand-teal);">♥</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Step 3: Tournament - Dynamic Card -->
      <div class="group relative md:mt-4">
        <!-- Hexagonal background -->
        <div
          class="absolute -top-4 -right-4 w-20 h-20 opacity-20 group-hover:scale-110 transition-transform duration-300"
          style="background-color: var(--brand-cordovan); clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);"
        ></div>

        <div
          class="relative bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/60 overflow-hidden h-80"
        >
          <!-- Giant number background -->
          <div
            class="absolute top-0 right-0 text-7xl font-black opacity-8 font-body leading-none"
            style="color: var(--brand-cordovan);"
          >
            03
          </div>

          <!-- Content -->
          <div class="relative z-10 h-full flex flex-col justify-between">
            <div>
              <div class="mb-4">
                <div
                  class="w-12 h-1 mb-4 rounded-full"
                  style="background: linear-gradient(to right, var(--brand-cordovan), #4A39A4);"
                ></div>
                <h4
                  class="text-2xl md:text-3xl font-black font-body uppercase leading-tight mb-2"
                  style="color: var(--brand-oxford);"
                >
                  ENTER<br />
                  <span style="color: var(--brand-cordovan);">TOURNAMENT</span>
                </h4>
              </div>
              <p
                class="text-base font-display leading-relaxed mb-4"
                style="color: var(--brand-oxford);"
              >
                <span class="font-bold">Your moment arrives</span><br />
                Time to claim your destiny
              </p>

              <!-- Prize highlight -->
              <div
                class="text-center p-3 rounded-2xl bg-gradient-to-r from-yellow-50 to-amber-50 border border-yellow-200"
              >
                <div
                  class="text-3xl font-black font-body"
                  style="color: var(--brand-yellow);"
                >
                  €1M
                </div>
                <div
                  class="text-xs font-display uppercase tracking-wide"
                  style="color: var(--brand-oxford);"
                >
                  AWAITS
                </div>
              </div>
            </div>

            <!-- Trophy icon -->
            <div class="flex justify-center">
              <div class="text-2xl" style="color: var(--brand-yellow);">🏆</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Video Requirements - Magazine Style -->
    <div class="mx-auto max-w-6xl mb-8 relative">
      <!-- Magazine-style header section -->
      <div class="text-center mb-12">
        <h3
          class="text-4xl md:text-5xl lg:text-6xl font-display font-light leading-tight mb-4"
          style="color: var(--brand-oxford);"
        >
          Your video must
          <span
            class="font-black font-body uppercase tracking-normal block text-5xl md:text-7xl lg:text-8xl"
            style="color: var(--brand-cordovan);">SHOWCASE</span
          >
        </h3>
        <div class="flex justify-center items-center space-x-4">
          <div
            class="w-16 h-1"
            style="background-color: var(--brand-yellow);"
          ></div>
          <div
            class="w-2 h-2 rounded-full"
            style="background-color: var(--brand-teal);"
          ></div>
          <div
            class="w-24 h-1"
            style="background-color: var(--brand-cordovan);"
          ></div>
        </div>
      </div>

      <!-- Three pillars with magazine-style cards -->
      <div class="grid gap-8 md:grid-cols-3">
        <!-- Purpose Card -->
        <div class="group relative">
          <!-- Background shape -->
          <div
            class="absolute -top-4 -left-4 w-full h-full rounded-3xl opacity-20 transform rotate-2 group-hover:rotate-1 transition-transform duration-300"
            style="background-color: var(--brand-cordovan);"
          ></div>
          <div
            class="relative bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/60 overflow-hidden"
          >
            <!-- Large number background -->
            <div
              class="absolute top-4 right-4 text-8xl font-black opacity-10 font-body"
              style="color: var(--brand-cordovan);"
            >
              1
            </div>

            <div class="relative z-10">
              <div class="mb-6">
                <div
                  class="text-3xl md:text-4xl font-black font-body uppercase tracking-tight leading-none"
                  style="color: var(--brand-cordovan);"
                >
                  PURPOSE
                </div>
                <div
                  class="w-12 h-1 mt-2"
                  style="background-color: var(--brand-cordovan);"
                ></div>
              </div>
              <p
                class="text-base font-display leading-relaxed"
                style="color: var(--brand-oxford);"
              >
                <span class="font-bold">Social impact</span><br />
                How it benefits humanity and creates meaningful change in people's
                lives
              </p>
            </div>
          </div>
        </div>

        <!-- Planet Card -->
        <div class="group relative">
          <!-- Background shape -->
          <div
            class="absolute -top-4 -right-4 w-full h-full rounded-3xl opacity-20 transform -rotate-1 group-hover:rotate-0 transition-transform duration-300"
            style="background-color: var(--brand-teal);"
          ></div>
          <div
            class="relative bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/60 overflow-hidden"
          >
            <!-- Large number background -->
            <div
              class="absolute top-4 right-4 text-8xl font-black opacity-10 font-body"
              style="color: var(--brand-teal);"
            >
              2
            </div>

            <div class="relative z-10">
              <div class="mb-6">
                <div
                  class="text-3xl md:text-4xl font-black font-body uppercase tracking-tight leading-none"
                  style="color: var(--brand-teal);"
                >
                  PLANET
                </div>
                <div
                  class="w-12 h-1 mt-2"
                  style="background-color: var(--brand-teal);"
                ></div>
              </div>
              <p
                class="text-base font-display leading-relaxed"
                style="color: var(--brand-oxford);"
              >
                <span class="font-bold">Environmental impact</span><br />
                How it protects our planet and promotes sustainable practices
              </p>
            </div>
          </div>
        </div>

        <!-- Profit Card -->
        <div class="group relative">
          <!-- Background shape -->
          <div
            class="absolute -top-4 -left-4 w-full h-full rounded-3xl opacity-20 transform rotate-1 group-hover:-rotate-1 transition-transform duration-300"
            style="background-color: var(--brand-yellow);"
          ></div>
          <div
            class="relative bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/60 overflow-hidden"
          >
            <!-- Large number background -->
            <div
              class="absolute top-4 right-4 text-8xl font-black opacity-10 font-body"
              style="color: var(--brand-yellow);"
            >
              3
            </div>

            <div class="relative z-10">
              <div class="mb-6">
                <div
                  class="text-3xl md:text-4xl font-black font-body uppercase tracking-tight leading-none"
                  style="color: var(--brand-yellow);"
                >
                  PROFIT
                </div>
                <div
                  class="w-12 h-1 mt-2"
                  style="background-color: var(--brand-yellow);"
                ></div>
              </div>
              <p
                class="text-base font-display leading-relaxed"
                style="color: var(--brand-oxford);"
              >
                <span class="font-bold">Business impact</span><br />
                How it generates sustainable profit and economic value
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Eligibility Footnote -->
    <div class="mx-auto max-w-5xl">
      <div
        class="p-6 rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg border border-white/50"
      >
        <p
          class="mb-4 text-sm text-center font-display text-slate-700 leading-relaxed"
        >
          <span
            class="font-black font-body uppercase tracking-normal"
            style="color: var(--brand-teal);">Open to:</span
          >
          Any early stage • Idea to MVP • Solo-Founder to Team • Max €300k funding
          • European homebase
        </p>
        <div class="text-center">
          <button
            class="text-sm font-medium cursor-pointer transition-colors duration-200 px-4 py-2 rounded-lg border"
            style="color: var(--brand-cordovan); border-color: var(--brand-cordovan); background: rgba(37, 30, 100, 0.05);"
            on:click={() => (showCountries = !showCountries)}
          >
            *48 eligible countries {showCountries ? "▲" : "▼"}
          </button>

          {#if showCountries}
            <div
              class="p-6 mt-4 text-sm leading-relaxed rounded-xl bg-white/90 backdrop-blur-sm shadow-md border border-white/60"
              style="color: var(--brand-oxford);"
            >
              <div
                class="font-black font-body uppercase tracking-normal mb-3"
                style="color: var(--brand-cordovan);"
              >
                Eligible Countries:
              </div>
              <div class="space-y-2 text-left max-w-3xl mx-auto">
                <div>
                  🇪🇺 <strong>All EU Member States</strong> (27 countries)
                </div>
                <div>
                  🏔️ <strong>EEA Countries:</strong> Iceland, Liechtenstein, Norway,
                  Switzerland
                </div>
                <div>
                  🌍 <strong>Additional European Nations:</strong> United Kingdom,
                  Turkey, Ukraine, Serbia, Albania, Kosovo, North Macedonia, Montenegro,
                  Bosnia and Herzegovina, Moldova, Georgia, Armenia, Belarus
                </div>
                <div
                  class="pt-2 text-xs italic"
                  style="color: var(--brand-teal);"
                >
                  Total: 48 countries • Excludes: Russia, Vatican City
                </div>
              </div>
            </div>
          {/if}
        </div>
      </div>
    </div>
  </div>
</section>

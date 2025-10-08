<script>
  let showCountries = false;
</script>

<section
  class="overflow-hidden relative px-6 py-24"
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
      class="absolute -right-16 top-1/3 w-40 h-40 transform rotate-12 opacity-8"
      style="background-color: var(--brand-cordovan);"
    ></div>
    <!-- Small circles scattered -->
    <div
      class="absolute bottom-1/4 left-1/4 w-20 h-20 rounded-full opacity-8"
      style="background-color: var(--brand-teal);"
    ></div>
  </div>

  <div class="relative z-10 mx-auto max-w-6xl">
    <!-- Header -->
    <div class="mb-16 text-center">
      <h2
        class="mb-4 text-5xl font-light leading-tight md:text-7xl lg:text-8xl font-display text-slate-800"
      >
        Ready to
        <span
          class="text-6xl font-black tracking-normal uppercase font-body md:text-8xl lg:text-9xl"
          style="color: var(--brand-yellow);">START</span
        >
        your journey?
      </h2>
      <p
        class="text-xl italic font-light leading-relaxed md:text-2xl font-display text-slate-600"
      >
        <span
          class="font-black tracking-normal uppercase font-body"
          style="color: var(--brand-cordovan);">Hominio Munich Cup No1</span
        >
      </p>
    </div>

    <!-- HOW: 3 Steps - Magazine Style -->
    <div class="grid relative gap-6 mb-16 md:grid-cols-3">
      <!-- Step 1: Video Submission - Tall Card -->
      <div class="relative group">
        <!-- Angled background element -->
        <div
          class="absolute -top-3 -right-3 w-full h-full rounded-3xl opacity-30 transition-transform duration-300 transform rotate-1 group-hover:-rotate-1"
          style="background-color: var(--brand-yellow);"
        ></div>

        <div
          class="overflow-hidden relative p-8 h-72 rounded-3xl border shadow-2xl backdrop-blur-md bg-white/90 border-white/60"
        >
          <!-- Giant number background -->
          <div
            class="absolute -top-4 -right-4 text-9xl font-black leading-none opacity-8 font-body"
            style="color: var(--brand-yellow);"
          >
            01
          </div>

          <!-- Content -->
          <div class="flex relative z-10 flex-col justify-between h-full">
            <div>
              <div class="mb-4">
                <div
                  class="mb-4 w-3 h-16 rounded-full"
                  style="background: linear-gradient(to bottom, var(--brand-yellow), #F5E07A);"
                ></div>
                <h4
                  class="mb-2 text-2xl font-black leading-tight uppercase md:text-3xl font-body"
                  style="color: var(--brand-oxford);"
                >
                  SUBMIT<br />
                  <span style="color: var(--brand-yellow);">1 MIN VIDEO</span>
                </h4>
              </div>
              <p
                class="text-base leading-relaxed font-display"
                style="color: var(--brand-oxford);"
              >
                <span class="font-bold">Share your vision</span><br />
                One minute to change everything
              </p>
            </div>

            <!-- Action arrow -->
            <div class="flex justify-end">
              <div
                class="flex justify-center items-center w-8 h-8 rounded-full"
                style="background-color: var(--brand-yellow);"
              >
                <span class="font-bold text-white">→</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Step 2: Get Likes - Medium Card with offset -->
      <div class="relative group md:mt-8">
        <!-- Triangular accent -->
        <div
          class="absolute -top-6 -left-6 w-24 h-24 opacity-25 transition-transform duration-300 transform rotate-45 group-hover:rotate-12"
          style="background-color: var(--brand-teal);"
        ></div>

        <div
          class="overflow-hidden relative p-8 h-64 rounded-3xl border shadow-2xl backdrop-blur-md bg-white/90 border-white/60"
        >
          <!-- Giant number background -->
          <div
            class="absolute -bottom-2 -left-2 text-8xl font-black leading-none opacity-8 font-body"
            style="color: var(--brand-teal);"
          >
            02
          </div>

          <!-- Content -->
          <div class="flex relative z-10 flex-col justify-between h-full">
            <div>
              <div class="mb-4">
                <div class="flex mb-4 space-x-1">
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
                  class="mb-2 text-2xl font-black leading-tight uppercase md:text-3xl font-body"
                  style="color: var(--brand-oxford);"
                >
                  GET<br />
                  <span style="color: var(--brand-teal);">250 LIKES</span>
                </h4>
              </div>
              <p
                class="text-base leading-relaxed font-display"
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
      <div class="relative group md:mt-4">
        <!-- Hexagonal background -->
        <div
          class="absolute -top-4 -right-4 w-20 h-20 opacity-20 transition-transform duration-300 group-hover:scale-110"
          style="background-color: var(--brand-cordovan); clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);"
        ></div>

        <div
          class="overflow-hidden relative p-8 h-80 rounded-3xl border shadow-2xl backdrop-blur-md bg-white/90 border-white/60"
        >
          <!-- Giant number background -->
          <div
            class="absolute top-0 right-0 text-7xl font-black leading-none opacity-8 font-body"
            style="color: var(--brand-cordovan);"
          >
            03
          </div>

          <!-- Content -->
          <div class="flex relative z-10 flex-col justify-between h-full">
            <div>
              <div class="mb-4">
                <div
                  class="mb-4 w-12 h-1 rounded-full"
                  style="background: linear-gradient(to right, var(--brand-cordovan), #4A39A4);"
                ></div>
                <h4
                  class="mb-2 text-2xl font-black leading-tight uppercase md:text-3xl font-body"
                  style="color: var(--brand-oxford);"
                >
                  ENTER<br />
                  <span style="color: var(--brand-cordovan);">TOURNAMENT</span>
                </h4>
              </div>
              <p
                class="text-base leading-relaxed font-display"
                style="color: var(--brand-oxford);"
              >
                <span class="font-bold">Your moment arrives</span><br />
                Time to claim your destiny
              </p>
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
    <div class="relative mx-auto mb-8 max-w-6xl">
      <!-- Magazine-style header section -->
      <div class="mb-12 text-center">
        <h3
          class="mb-4 text-4xl font-light leading-tight md:text-5xl lg:text-6xl font-display"
          style="color: var(--brand-oxford);"
        >
          Your video must
          <span
            class="block text-5xl font-black tracking-normal uppercase font-body md:text-7xl lg:text-8xl"
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
        <div class="relative group">
          <!-- Background shape -->
          <div
            class="absolute -top-4 -left-4 w-full h-full rounded-3xl opacity-20 transition-transform duration-300 transform rotate-2 group-hover:rotate-1"
            style="background-color: var(--brand-cordovan);"
          ></div>
          <div
            class="overflow-hidden relative p-8 rounded-2xl border shadow-xl backdrop-blur-sm bg-white/95 border-white/60"
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
                  class="text-3xl font-black tracking-tight leading-none uppercase md:text-4xl font-body"
                  style="color: var(--brand-cordovan);"
                >
                  PURPOSE
                </div>
                <div
                  class="mt-2 w-12 h-1"
                  style="background-color: var(--brand-cordovan);"
                ></div>
              </div>
              <p
                class="text-base leading-relaxed font-display"
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
        <div class="relative group">
          <!-- Background shape -->
          <div
            class="absolute -top-4 -right-4 w-full h-full rounded-3xl opacity-20 transition-transform duration-300 transform -rotate-1 group-hover:rotate-0"
            style="background-color: var(--brand-teal);"
          ></div>
          <div
            class="overflow-hidden relative p-8 rounded-2xl border shadow-xl backdrop-blur-sm bg-white/95 border-white/60"
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
                  class="text-3xl font-black tracking-tight leading-none uppercase md:text-4xl font-body"
                  style="color: var(--brand-teal);"
                >
                  PLANET
                </div>
                <div
                  class="mt-2 w-12 h-1"
                  style="background-color: var(--brand-teal);"
                ></div>
              </div>
              <p
                class="text-base leading-relaxed font-display"
                style="color: var(--brand-oxford);"
              >
                <span class="font-bold">Environmental impact</span><br />
                How it protects our planet and promotes sustainable practices
              </p>
            </div>
          </div>
        </div>

        <!-- Profit Card -->
        <div class="relative group">
          <!-- Background shape -->
          <div
            class="absolute -top-4 -left-4 w-full h-full rounded-3xl opacity-20 transition-transform duration-300 transform rotate-1 group-hover:-rotate-1"
            style="background-color: var(--brand-yellow);"
          ></div>
          <div
            class="overflow-hidden relative p-8 rounded-2xl border shadow-xl backdrop-blur-sm bg-white/95 border-white/60"
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
                  class="text-3xl font-black tracking-tight leading-none uppercase md:text-4xl font-body"
                  style="color: var(--brand-yellow);"
                >
                  PROFIT
                </div>
                <div
                  class="mt-2 w-12 h-1"
                  style="background-color: var(--brand-yellow);"
                ></div>
              </div>
              <p
                class="text-base leading-relaxed font-display"
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
        class="p-6 rounded-2xl border shadow-lg backdrop-blur-sm bg-white/80 border-white/50"
      >
        <p
          class="mb-4 text-sm leading-relaxed text-center font-display text-slate-700"
        >
          <span
            class="font-black tracking-normal uppercase font-body"
            style="color: var(--brand-teal);">Open to:</span
          >
          Any early stage • Idea to MVP • Solo-Founder to Team • Max €300k funding
          • European homebase
        </p>
        <div class="text-center">
          <button
            class="px-4 py-2 text-sm font-medium rounded-lg border transition-colors duration-200 cursor-pointer"
            style="color: var(--brand-cordovan); border-color: var(--brand-cordovan); background: rgba(37, 30, 100, 0.05);"
            on:click={() => (showCountries = !showCountries)}
          >
            *48 eligible countries {showCountries ? "▲" : "▼"}
          </button>

          {#if showCountries}
            <div
              class="p-6 mt-4 text-sm leading-relaxed rounded-xl border shadow-md backdrop-blur-sm bg-white/90 border-white/60"
              style="color: var(--brand-oxford);"
            >
              <div
                class="mb-3 font-black tracking-normal uppercase font-body"
                style="color: var(--brand-cordovan);"
              >
                Eligible Countries:
              </div>
              <div class="mx-auto space-y-2 max-w-3xl text-left">
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

<script>
  import VotingBenefitsModal from "./VotingBenefitsModal.svelte";

  let showBenefitsModal = false;

  function openBenefitsModal() {
    showBenefitsModal = true;
  }

  function closeBenefitsModal() {
    showBenefitsModal = false;
  }
</script>

<section
  class="overflow-hidden relative px-6 py-24"
  style="background: linear-gradient(135deg, #f8fafc, var(--brand-honeydew), #ffffff);"
>
  <!-- Minimal Decorative Elements -->
  <div
    class="absolute top-32 right-32 w-64 h-64 rounded-full opacity-5"
    style="background-color: var(--brand-yellow);"
  ></div>

  <div class="relative z-10 mx-auto max-w-6xl">
    <!-- Magazine-Style Title Area -->
    <div class="mb-20 text-center">
      <div class="mb-8">
        <h2
          class="mb-6 text-4xl font-black tracking-tight uppercase md:text-5xl font-body"
          style="color: var(--brand-cordovan); text-shadow: 2px 2px 0px rgba(0,0,0,0.05);"
        >
          AND HERE IS HOW
        </h2>
        <div
          class="mx-auto mb-8 w-32 h-2 rounded-full"
          style="background: linear-gradient(90deg, var(--brand-yellow), var(--brand-teal));"
        ></div>
      </div>

      <h3
        class="text-3xl font-light leading-tight md:text-5xl lg:text-6xl font-display"
        style="color: var(--brand-cordovan);"
      >
        we select the first project<br />
        that we
        <span class="font-black font-body" style="color: var(--brand-teal);"
          >build and own together</span
        >
      </h3>
    </div>

    <!-- Story Flow -->
    <div class="mx-auto space-y-16 max-w-4xl">
      <!-- Step 1: Visionary Founders -->
      <div class="text-center">
        <div class="mb-8">
          <div
            class="flex justify-center items-center mx-auto mb-6 w-20 h-20 text-4xl rounded-full"
            style="background: linear-gradient(135deg, var(--brand-yellow), var(--brand-teal));"
          >
            <svg class="w-10 h-10" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                fill="white"
                opacity="0.9"
              />
              <path
                d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77V2Z"
                fill="white"
              />
            </svg>
          </div>
          <p
            class="text-2xl leading-relaxed md:text-3xl font-display"
            style="color: var(--brand-oxford);"
          >
            Founders all around Europe<br />
            share their startup vision
          </p>
        </div>
      </div>

      <!-- Arrow Down -->
      <div class="text-center">
        <div class="text-6xl" style="color: var(--brand-teal);">↓</div>
      </div>

      <!-- Step 2: Tournament Voting -->
      <div class="text-center">
        <div class="mb-8">
          <div
            class="flex justify-center items-center mx-auto mb-6 w-20 h-20 text-4xl rounded-full"
            style="background: linear-gradient(135deg, var(--brand-teal), var(--brand-cordovan));"
          >
            <svg class="w-10 h-10" viewBox="0 0 24 24" fill="none">
              <path
                d="M7 4V2C7 1.45 7.45 1 8 1H16C16.55 1 17 1.45 17 2V4H20C20.55 4 21 4.45 21 5S20.55 6 20 6H19V10C19 11.66 17.66 13 16 13H15.5L16 18H17C17.55 18 18 18.45 18 19S17.55 20 17 20H7C6.45 20 6 19.55 6 19S6.45 18 7 18H8L8.5 13H8C6.34 13 5 11.66 5 10V6H4C3.45 6 3 5.55 3 5S3.45 4 4 4H7Z"
                fill="white"
                opacity="0.9"
              />
              <path
                d="M8 4H16V6H17V10C17 10.55 16.55 11 16 11H8C7.45 11 7 10.55 7 10V6H8V4Z"
                fill="white"
              />
            </svg>
          </div>
          <p
            class="text-2xl leading-relaxed md:text-3xl font-display"
            style="color: var(--brand-oxford);"
          >
            then we vote in tournament-like<br />
            knockout rounds, which project we execute
          </p>
        </div>
      </div>

      <!-- Central 1€ / 1V Concept -->
      <div class="my-20 text-center">
        <div class="inline-block relative">
          <!-- Subtle glow -->
          <div
            class="absolute inset-0 rounded-3xl opacity-20 blur-2xl transform scale-110"
            style="background: linear-gradient(45deg, var(--brand-yellow), var(--brand-teal));"
          ></div>

          <div
            class="relative p-12 rounded-3xl border-2 border-yellow-100 shadow-2xl backdrop-blur-sm bg-white/95"
          >
            <div class="flex justify-center items-center space-x-8">
              <h3
                class="text-6xl font-black md:text-7xl font-body"
                style="color: var(--brand-yellow);"
              >
                1€
              </h3>
              <div
                class="text-6xl font-black md:text-7xl font-body"
                style="color: var(--brand-cordovan);"
              >
                /
              </div>
              <h3
                class="text-6xl font-black md:text-7xl font-body"
                style="color: var(--brand-teal);"
              >
                1 VOTE
              </h3>
            </div>
          </div>
        </div>
      </div>

      <!-- Match Day Voting Example -->
      <div class="my-16">
        <div class="text-center mb-8">
          <h4
            class="text-2xl font-black font-body mb-2"
            style="color: var(--brand-oxford);"
          >
            LIVE MATCH DAY EXAMPLE
          </h4>
          <p class="text-lg font-display" style="color: var(--brand-oxford);">
            Real-time voting results
          </p>
        </div>

        <div
          class="max-w-4xl mx-auto p-8 rounded-3xl border border-yellow-100 shadow-xl backdrop-blur-sm bg-white/95"
        >
          <!-- Match Header -->
          <div class="text-center mb-6">
            <div
              class="text-sm font-bold uppercase tracking-wide mb-2"
              style="color: var(--brand-cordovan);"
            >
              ROUND 2 • MATCH 3
            </div>
            <div class="text-lg font-display">
              1,000 votes cast • Live results
            </div>
          </div>

          <!-- Voting Battle Display -->
          <div
            class="grid grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-lg"
          >
            <!-- Founder A Side -->
            <div
              class="relative"
              style="background: linear-gradient(135deg, var(--brand-yellow), #F5E07A);"
            >
              <div class="p-6 text-left">
                <div class="mb-4">
                  <h5
                    class="text-xl font-black font-body"
                    style="color: var(--brand-oxford);"
                  >
                    FOUNDER A
                  </h5>
                  <p
                    class="text-sm font-medium"
                    style="color: var(--brand-oxford);"
                  >
                    AI-powered urban farming platform
                  </p>
                </div>

                <!-- Vote Percentage -->
                <div class="mb-4">
                  <div
                    class="text-4xl font-black font-body"
                    style="color: var(--brand-oxford);"
                  >
                    54%
                  </div>
                  <div class="text-sm font-bold">540 votes</div>
                </div>

                <!-- Vote Button -->
                <button
                  class="w-full py-3 px-6 rounded-xl font-black font-body text-white transition-transform hover:scale-105"
                  style="background-color: var(--brand-oxford);"
                >
                  +1 VOTE
                </button>
              </div>

              <!-- Progress Bar -->
              <div class="absolute bottom-0 left-0 h-2 w-full bg-black/10">
                <div
                  class="h-full transition-all duration-1000"
                  style="width: 54%; background-color: var(--brand-oxford);"
                ></div>
              </div>
            </div>

            <!-- Founder B Side -->
            <div
              class="relative"
              style="background: linear-gradient(135deg, var(--brand-teal), #4AC5CB);"
            >
              <div class="p-6 text-right">
                <div class="mb-4">
                  <h5 class="text-xl font-black font-body text-white">
                    FOUNDER B
                  </h5>
                  <p class="text-sm font-medium text-white/90">
                    Blockchain supply chain transparency
                  </p>
                </div>

                <!-- Vote Percentage -->
                <div class="mb-4">
                  <div class="text-4xl font-black font-body text-white">
                    46%
                  </div>
                  <div class="text-sm font-bold text-white/90">460 votes</div>
                </div>

                <!-- Vote Button -->
                <button
                  class="w-full py-3 px-6 rounded-xl font-black font-body transition-transform hover:scale-105"
                  style="background-color: var(--brand-oxford); color: white;"
                >
                  +1 VOTE
                </button>
              </div>

              <!-- Progress Bar -->
              <div class="absolute bottom-0 left-0 h-2 w-full bg-black/10">
                <div
                  class="h-full transition-all duration-1000"
                  style="width: 46%; background-color: var(--brand-oxford);"
                ></div>
              </div>
            </div>
          </div>

          <!-- Live Status -->
          <div class="text-center mt-6">
            <div
              class="inline-flex items-center space-x-2 px-4 py-2 rounded-full"
              style="background-color: var(--brand-honeydew);"
            >
              <div
                class="w-2 h-2 rounded-full animate-pulse"
                style="background-color: var(--brand-cordovan);"
              ></div>
              <span
                class="text-sm font-bold"
                style="color: var(--brand-oxford);"
              >
                LIVE VOTING • Updates every second
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Win-Win Section -->
      <div
        class="p-12 rounded-3xl border border-yellow-100 shadow-xl backdrop-blur-sm bg-white/80"
      >
        <h4
          class="mb-8 text-3xl font-black text-center md:text-4xl font-body"
          style="color: var(--brand-cordovan);"
        >
          WIN-WIN FOR THE FOUNDER AND THE CONTRIBUTOR
        </h4>

        <div class="grid gap-12 text-center md:grid-cols-2">
          <div>
            <div class="flex justify-center mb-4">
              <div
                class="flex justify-center items-center w-16 h-16 rounded-full"
                style="background: linear-gradient(135deg, var(--brand-yellow), var(--brand-teal));"
              >
                <svg class="w-8 h-8" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L16 8H14V16H10V8H8L12 2Z" fill="white" />
                  <path
                    d="M8 18L10 16V22L8 20V18Z"
                    fill="white"
                    opacity="0.8"
                  />
                  <path
                    d="M16 18L14 16V22L16 20V18Z"
                    fill="white"
                    opacity="0.8"
                  />
                </svg>
              </div>
            </div>
            <h5
              class="mb-3 text-xl font-black font-body"
              style="color: var(--brand-cordovan);"
            >
              FOR THE FOUNDER
            </h5>
            <p
              class="text-xl leading-relaxed md:text-2xl font-display"
              style="color: var(--brand-oxford);"
            >
              Each vote gives your vision<br />
              the competitive advantage to proceed
            </p>
          </div>

          <div>
            <div class="flex justify-center mb-4">
              <div
                class="flex justify-center items-center w-16 h-16 rounded-full"
                style="background: linear-gradient(135deg, var(--brand-teal), var(--brand-cordovan));"
              >
                <svg class="w-8 h-8" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="9" fill="white" opacity="0.3" />
                  <circle cx="12" cy="12" r="6" fill="white" opacity="0.6" />
                  <circle cx="12" cy="12" r="3" fill="white" opacity="0.9" />
                  <circle cx="12" cy="12" r="1" fill="white" />
                </svg>
              </div>
            </div>
            <h5
              class="mb-3 text-xl font-black font-body"
              style="color: var(--brand-cordovan);"
            >
              FOR THE CONTRIBUTOR
            </h5>
            <p
              class="text-xl leading-relaxed md:text-2xl font-display"
              style="color: var(--brand-oxford);"
            >
              Each vote unlocks more benefits<br />
              while you level up your engagement
            </p>
          </div>
        </div>

        <!-- Benefits Button -->
        <div class="mt-12 text-center">
          <button
            class="px-16 py-8 text-2xl font-black text-white bg-gradient-to-r from-yellow-400 to-teal-500 rounded-full shadow-xl transition-all duration-200 transform hover:from-yellow-500 hover:to-teal-600 font-body hover:shadow-2xl hover:scale-105"
            style="color: var(--brand-cordovan);"
            on:click={openBenefitsModal}
          >
            EXPLORE ALL BENEFITS
          </button>
        </div>
      </div>

      <!-- Simple Conclusion -->
      <div class="text-center">
        <p
          class="text-3xl italic font-light md:text-4xl font-display"
          style="color: var(--brand-cordovan);"
        >
          That's it, as simple as that...
        </p>
      </div>
    </div>
  </div>
</section>

<!-- Benefits Modal -->
<VotingBenefitsModal
  bind:isOpen={showBenefitsModal}
  on:close={closeBenefitsModal}
/>

<script>
  import BottomNotch from "../BottomNotch.svelte";
</script>

<section
  class="py-20 px-6 relative overflow-hidden"
  style="background: linear-gradient(135deg, var(--brand-honeydew), #ffffff, rgba(37, 161, 167, 0.05));"
>
  <!-- Magazine Background Elements -->
  <div class="absolute inset-0 pointer-events-none">
    <div
      class="absolute top-1/4 left-0 w-full h-1 opacity-20"
      style="background: linear-gradient(90deg, transparent, var(--brand-yellow), transparent);"
    ></div>
    <div
      class="absolute bottom-1/4 right-0 w-full h-1 opacity-15"
      style="background: linear-gradient(90deg, transparent, var(--brand-cordovan), transparent);"
    ></div>

    <!-- Geometric shapes -->
    <div
      class="absolute top-20 right-20 w-16 h-16 rounded-full opacity-10"
      style="background: var(--brand-teal);"
    ></div>
    <div
      class="absolute bottom-32 left-16 w-8 h-32 opacity-10 transform rotate-12"
      style="background: var(--brand-yellow);"
    ></div>
  </div>

  <div class="max-w-5xl mx-auto relative z-10">
    <!-- Complete Magazine Editorial Redesign -->
    <div class="magazine-editorial-layout">
      <!-- Top Badge & Title Section -->
      <div class="editorial-header">
        <div class="moment-badge">THIS IS YOUR MOMENT</div>

        <div class="title-composition">
          <div class="yes-line">
            <span class="yes-word">YES,</span>
          </div>
          <div class="you-line">
            <span class="you-word">YOU</span>
          </div>
          <div class="decorative-dots">
            <span class="dot-sequence">···</span>
          </div>
        </div>
      </div>

      <!-- Editorial Body Text -->
      <div class="editorial-body">
        <div class="talking-statement">
          <h3>I am talking to <em>you</em>.</h3>
        </div>

        <div class="vision-quote">
          <div class="quote-styling">
            <p>
              You, with that vision in your heart, that you were always meant to
              bring into life.
            </p>
          </div>
        </div>

        <div class="tension-statements">
          <p class="world-statement">The world awaits you.</p>
          <p class="calling-statement">I am just calling you out.</p>
        </div>

        <div class="now-climax">
          <div class="now-treatment">
            <span class="now-word">NOW.</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Magazine-style Action Steps -->
    <div class="max-w-4xl mx-auto mb-16">
      <h3
        class="text-2xl md:text-3xl font-black uppercase tracking-normal text-center mb-12 font-body"
        style="color: var(--brand-cordovan);"
      >
        RIGHT NOW, GRAB YOUR PHONE
      </h3>

      <!-- Step Cards with Magazine Layout -->
      <div class="space-y-8">
        <!-- Step 1 -->
        <div
          class="bg-white rounded-2xl p-8 shadow-xl border-l-8"
          style="border-color: var(--brand-yellow);"
        >
          <div class="flex items-start space-x-6">
            <div class="flex-shrink-0">
              <div
                class="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg"
                style="background: linear-gradient(135deg, var(--brand-yellow), #f5e07a);"
              >
                📱
              </div>
            </div>
            <div class="flex-1">
              <p class="text-lg text-slate-700 mb-4">
                1-minute selfie video starting with:
              </p>
              <div
                class="rounded-xl p-6 border-l-4"
                style="background: linear-gradient(135deg, rgba(37, 161, 167, 0.05), rgba(233, 202, 90, 0.05)); border-color: var(--brand-teal);"
              >
                <p
                  class="text-xl italic font-medium leading-relaxed font-display"
                  style="color: var(--brand-cordovan);"
                >
                  "My friends, when 1 million sparkling eyes unite to solve one
                  global challenge, this is what I will do..."
                </p>
                <div
                  class="mt-4 p-4 rounded-lg border"
                  style="background: rgba(233, 202, 90, 0.1); border-color: rgba(233, 202, 90, 0.3);"
                >
                  <p
                    class="text-lg font-medium text-center"
                    style="color: var(--brand-cordovan);"
                  >
                    ——— Fill in the blanks ———
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Final motivation -->
    <div class="text-center">
      <div
        class="inline-block rounded-2xl shadow-xl px-8 py-6"
        style="background: linear-gradient(135deg, var(--brand-cordovan), #160F35);"
      >
        <p class="text-xl md:text-2xl font-light text-white">
          This is your step 1 into your first
          <span class="font-black" style="color: var(--brand-yellow);"
            >1 million in Seed funding</span
          >
        </p>
      </div>

      <div class="mt-12">
        <p
          class="text-2xl md:text-3xl font-light text-slate-700 italic font-display"
        >
          Your vision is waiting.
          <span class="font-medium" style="color: var(--brand-cordovan);"
            >The world is ready.</span
          >
        </p>
      </div>
    </div>
  </div>

  <!-- Bottom Apply Button -->
  <BottomNotch />
</section>

<style>
  /* Complete Magazine Editorial Styling */
  .magazine-editorial-layout {
    text-align: center;
    padding: 80px 0;
    max-width: 1200px;
    margin: 0 auto;
  }

  .editorial-header {
    margin-bottom: 60px;
  }

  .moment-badge {
    display: inline-block;
    background: linear-gradient(135deg, var(--brand-yellow), var(--brand-teal));
    color: var(--brand-cordovan);
    padding: 16px 40px;
    border-radius: 50px;
    font-family: "Inter", sans-serif;
    font-weight: 900;
    font-size: 1.1rem;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    margin-bottom: 40px;
    border: 3px solid rgba(37, 30, 100, 0.2);
  }

  .title-composition {
    margin-bottom: 40px;
  }

  .yes-line {
    margin-bottom: 20px;
  }

  .yes-word {
    font-family: "Playfair Display", serif;
    font-size: clamp(4rem, 10vw, 8rem);
    font-weight: 400;
    color: var(--brand-yellow);
    letter-spacing: 0.1em;
    text-transform: uppercase;
    line-height: 0.9;
    display: block;
  }

  .you-line {
    margin-bottom: 30px;
  }

  .you-word {
    font-family: "Inter", sans-serif;
    font-size: clamp(5rem, 12vw, 10rem);
    font-weight: 900;
    color: var(--brand-yellow);
    letter-spacing: 0.05em;
    text-transform: uppercase;
    line-height: 0.8;
    display: block;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  }

  .decorative-dots {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    margin: 30px 0;
  }

  .decorative-dots::before,
  .decorative-dots::after {
    content: "";
    width: 60px;
    height: 3px;
    background: var(--brand-teal);
    border-radius: 2px;
  }

  .dot-sequence {
    font-family: "Playfair Display", serif;
    font-size: 2.5rem;
    color: var(--brand-cordovan);
    letter-spacing: 0.5em;
    font-weight: 300;
  }

  .editorial-body {
    max-width: 800px;
    margin: 0 auto;
    padding: 0 20px;
  }

  .talking-statement {
    margin-bottom: 40px;
  }

  .talking-statement h3 {
    font-family: "Inter", sans-serif;
    font-size: clamp(1.8rem, 4vw, 2.5rem);
    font-weight: 300;
    color: #475569;
    line-height: 1.4;
  }

  .talking-statement em {
    font-family: "Inter", sans-serif;
    font-weight: 900;
    color: var(--brand-cordovan);
    font-style: normal;
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }

  .vision-quote {
    margin: 50px 0;
    position: relative;
  }

  .quote-styling {
    position: relative;
    padding: 30px 40px;
    background: rgba(255, 255, 255, 0.8);
    border-left: 6px solid var(--brand-cordovan);
    border-radius: 0 20px 20px 0;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
  }

  .quote-styling::before {
    content: '"';
    position: absolute;
    top: -10px;
    left: 20px;
    font-family: "Playfair Display", serif;
    font-size: 4rem;
    color: var(--brand-teal);
    opacity: 0.3;
    line-height: 1;
  }

  .quote-styling p {
    font-family: "Playfair Display", serif;
    font-size: clamp(1.2rem, 3vw, 1.5rem);
    font-style: italic;
    color: #475569;
    line-height: 1.6;
    margin: 0;
  }

  .tension-statements {
    margin: 60px 0;
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  .world-statement {
    font-family: "Inter", sans-serif;
    font-size: clamp(1.5rem, 3.5vw, 2.2rem);
    font-weight: 300;
    color: #334155;
    margin: 0;
  }

  .calling-statement {
    font-family: "Inter", sans-serif;
    font-size: clamp(1.3rem, 3vw, 1.8rem);
    font-weight: 600;
    color: var(--brand-cordovan);
    margin: 0;
  }

  .now-climax {
    margin: 80px 0 60px;
    position: relative;
  }

  .now-treatment {
    position: relative;
    display: inline-block;
  }

  .now-word {
    font-family: "Inter", sans-serif;
    font-size: clamp(4rem, 10vw, 8rem);
    font-weight: 900;
    color: var(--brand-yellow);
    letter-spacing: 0.2em;
    text-transform: uppercase;
    line-height: 1;
    display: block;
    text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.15);
    position: relative;
  }

  .now-word::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 120px;
    height: 6px;
    background: linear-gradient(
      90deg,
      var(--brand-yellow),
      var(--brand-cordovan)
    );
    border-radius: 3px;
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    .magazine-editorial-layout {
      padding: 60px 0;
    }

    .moment-badge {
      padding: 12px 30px;
      font-size: 0.9rem;
      letter-spacing: 0.2em;
    }

    .quote-styling {
      padding: 20px 25px;
      margin: 0 10px;
    }

    .decorative-dots::before,
    .decorative-dots::after {
      width: 40px;
      height: 2px;
    }

    .tension-statements {
      gap: 20px;
    }
  }
</style>

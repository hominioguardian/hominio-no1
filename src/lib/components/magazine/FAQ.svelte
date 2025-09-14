<script>
  let openQuestions = {};

  function toggleQuestion(questionId) {
    openQuestions[questionId] = !openQuestions[questionId];
    openQuestions = { ...openQuestions };
  }

  const faqs = [
    {
      id: 1,
      question: "How does the 1 million fund get filled?",
      answer:
        "50% of all tournament revenue contributes to filling the prize pool. This includes application fees, event summit tickets, online streaming tickets, 1€ votes, sponsorships, and speaker slots. The prize pool grows in real-time throughout the entire campaign phase, building organically as our community expands. With each successful milestone we achieve together, the fund becomes increasingly larger - and there's no cap! The final amount could potentially exceed 1 million euros, depending on our collective participation and engagement.",
    },
    {
      id: 2,
      question: "What happens if the fund doesn't reach 1 million?",
      answer:
        "The prize pool will be distributed at whatever final amount it reaches after the summit. Whether it ends up being 25,000€, 100,000€, 500,000€, or any other amount - the complete accumulated fund goes to our winners. Every euro contributed during the campaign becomes part of the final prize, ensuring founders receive real value regardless of the total size.",
    },
    {
      id: 3,
      question:
        "What happens if there aren't enough applications and founders participating?",
      answer:
        "The tournament structure is designed to adapt gracefully to any participation level. If we have 16 participants instead of hundreds, we'll create smaller tournament rounds, host a more intimate summit, and distribute proportionally sized funding pools. The core experience remains the same - talented founders competing for real prizes and recognition. Quality always trumps quantity, and every tournament will conclude with meaningful rewards for our participants.",
    },
  ];
</script>

<section class="faq-section py-20">
  <div class="max-w-4xl mx-auto px-6">
    <!-- Section Header -->
    <div class="text-center mb-16">
      <h2
        class="text-4xl md:text-5xl font-black uppercase tracking-normal mb-6 font-body"
        style="color: var(--brand-cordovan);"
      >
        FREQUENTLY ASKED QUESTIONS
      </h2>
      <p class="text-xl text-slate-600 font-light">
        Everything you need to know about the tournament
      </p>
    </div>

    <!-- FAQ Items -->
    <div class="space-y-4">
      {#each faqs as faq}
        <div
          class="faq-item rounded-2xl overflow-hidden transition-all duration-300"
          class:expanded={openQuestions[faq.id]}
        >
          <!-- Question Header -->
          <button
            class="w-full text-left p-6 flex items-center justify-between transition-all duration-300"
            on:click={() => toggleQuestion(faq.id)}
            class:question-open={openQuestions[faq.id]}
          >
            <h3 class="text-xl md:text-2xl font-bold leading-tight pr-4">
              {faq.question}
            </h3>
            <div
              class="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300"
              class:rotate-45={openQuestions[faq.id]}
              style="background: var(--brand-yellow);"
            >
              <span
                class="text-2xl font-bold"
                style="color: var(--brand-cordovan);">+</span
              >
            </div>
          </button>

          <!-- Answer Content -->
          {#if openQuestions[faq.id]}
            <div
              class="answer-content px-6 pb-6 transition-all duration-300"
              style="border-top: 2px solid var(--brand-teal);"
            >
              <div class="pt-4">
                <p class="text-lg leading-relaxed text-slate-700">
                  {faq.answer}
                </p>
              </div>
            </div>
          {/if}
        </div>
      {/each}
    </div>

    <!-- Coming Soon Notice -->
    <div class="text-center mt-12">
      <p class="text-lg text-slate-500 italic">
        More questions and answers coming soon...
      </p>
    </div>
  </div>
</section>

<style>
  .faq-section {
    background: linear-gradient(
      to bottom,
      #ffffff,
      #fefce8,
      var(--brand-light)
    );
  }

  .faq-item {
    background: white;
    border: 2px solid #e2e8f0;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease;
  }

  .faq-item:hover {
    border-color: var(--brand-teal);
    box-shadow: 0 8px 25px rgba(37, 161, 167, 0.15);
  }

  .faq-item.expanded {
    border-color: var(--brand-teal);
    box-shadow: 0 8px 25px rgba(37, 161, 167, 0.2);
  }

  .faq-item button {
    background: linear-gradient(135deg, #ffffff, #f8fafc);
    color: var(--brand-cordovan);
  }

  .faq-item button:hover {
    background: linear-gradient(135deg, #f8fafc, #f1f5f9);
  }

  .question-open {
    background: linear-gradient(
      135deg,
      rgba(37, 161, 167, 0.05),
      rgba(233, 202, 90, 0.05)
    ) !important;
  }

  .answer-content {
    background: linear-gradient(
      135deg,
      rgba(37, 161, 167, 0.02),
      rgba(233, 202, 90, 0.02)
    );
  }

  .rotate-45 {
    transform: rotate(45deg);
  }

  .font-body {
    font-family: "Inter", "ui-sans-serif", "system-ui", sans-serif;
  }
</style>

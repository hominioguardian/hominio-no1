<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  export let isOpen = false;

  const benefits = [
    {
      votes: 1,
      benefit: "Welcome to the Community",
      description: "Get started with your first vote",
    },
    {
      votes: 2,
      benefit: "Basic Access",
      description: "Access to founder updates",
    },
    {
      votes: 3,
      benefit: "Community Hub",
      description: "Join exclusive Discord channels",
    },
    {
      votes: 5,
      benefit: "Premium Newsletter",
      description: "Weekly insights & trends",
    },
    {
      votes: 8,
      benefit: "Early Access Content",
      description: "Preview upcoming features",
    },
    {
      votes: 13,
      benefit: "Priority Support",
      description: "Fast-track customer service",
    },
    {
      votes: 21,
      benefit: "Summit Streaming Ticket",
      description: "Watch the live summit online",
    },
    {
      votes: 34,
      benefit: "Founder Networking",
      description: "Connect with other entrepreneurs",
    },
    {
      votes: 55,
      benefit: "Beta Testing Access",
      description: "Test new products first",
    },
    {
      votes: 89,
      benefit: "Mentorship Opportunities",
      description: "1-on-1 sessions with experts",
    },
    {
      votes: 144,
      benefit: "VIP Community Access",
      description: "Elite founder circles",
    },
    {
      votes: 233,
      benefit: "Live Q&A Sessions",
      description: "Direct access to leadership",
    },
    {
      votes: 377,
      benefit: "Live Event Ticket",
      description: "Physical attendance at Hominio Summit",
    },
  ];

  function closeModal() {
    isOpen = false;
    dispatch("close");
  }

  function handleOutsideClick(event) {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  }
</script>

{#if isOpen}
  <!-- Modal Overlay -->
  <div
    class="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
    on:click={handleOutsideClick}
    on:keydown={(e) => e.key === "Escape" && closeModal()}
    role="dialog"
    aria-modal="true"
    tabindex="-1"
  >
    <!-- Modal Content -->
    <div
      class="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
    >
      <!-- Header -->
      <div
        class="p-8 border-b border-gray-200"
        style="background: linear-gradient(135deg, var(--brand-honeydew), #f8fafc);"
      >
        <div class="flex justify-between items-center">
          <div>
            <h3
              class="text-4xl font-black font-body"
              style="color: var(--brand-cordovan);"
            >
              VOTING BENEFITS
            </h3>
            <p class="text-xl font-display text-gray-600 mt-2">
              The more you vote, the more you unlock
            </p>
          </div>
          <button
            class="text-4xl text-gray-400 hover:text-gray-600 transition-colors"
            on:click={closeModal}
            aria-label="Close modal"
          >
            ×
          </button>
        </div>
      </div>

      <!-- Benefits Grid -->
      <div class="p-6 overflow-y-auto max-h-[70vh]">
        <div class="grid md:grid-cols-2 gap-8">
          <!-- Left Column -->
          <div class="space-y-3">
            {#each benefits.slice(0, 7) as benefit}
              <div
                class="flex items-center space-x-4 p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-100 hover:shadow-md transition-all duration-200"
              >
                <!-- Vote Badge -->
                <div class="flex-shrink-0">
                  <div
                    class="w-16 h-8 rounded-full flex items-center justify-center font-black font-body text-white text-sm"
                    style="background: linear-gradient(135deg, var(--brand-yellow), var(--brand-teal));"
                  >
                    {benefit.votes} Vote{benefit.votes > 1 ? "s" : ""}
                  </div>
                </div>

                <!-- Benefit Info -->
                <div class="flex-1 min-w-0">
                  <h4
                    class="text-base font-black font-body mb-1"
                    style="color: var(--brand-cordovan);"
                  >
                    {benefit.benefit}
                  </h4>
                  <p class="text-xs text-gray-600 font-display leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            {/each}
          </div>

          <!-- Right Column -->
          <div class="space-y-3">
            {#each benefits.slice(7) as benefit}
              <div
                class="flex items-center space-x-4 p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-100 hover:shadow-md transition-all duration-200"
              >
                <!-- Vote Badge -->
                <div class="flex-shrink-0">
                  <div
                    class="w-16 h-8 rounded-full flex items-center justify-center font-black font-body text-white"
                    class:text-xs={benefit.votes >= 100}
                    class:text-sm={benefit.votes < 100}
                    style="background: linear-gradient(135deg, var(--brand-yellow), var(--brand-teal));"
                  >
                    {benefit.votes} Vote{benefit.votes > 1 ? "s" : ""}
                  </div>
                </div>

                <!-- Benefit Info -->
                <div class="flex-1 min-w-0">
                  <h4
                    class="text-base font-black font-body mb-1"
                    style="color: var(--brand-cordovan);"
                  >
                    {benefit.benefit}
                  </h4>
                  <p class="text-xs text-gray-600 font-display leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            {/each}
          </div>
        </div>
      </div>
    </div>
  </div>
{/if}

<style>
  /* Custom scrollbar for modal */
  .overflow-y-auto::-webkit-scrollbar {
    width: 8px;
  }

  .overflow-y-auto::-webkit-scrollbar-track {
    background: #f1f5f9;
    border-radius: 4px;
  }

  .overflow-y-auto::-webkit-scrollbar-thumb {
    background: #cbd5e1;
    border-radius: 4px;
  }

  .overflow-y-auto::-webkit-scrollbar-thumb:hover {
    background: #94a3b8;
  }
</style>

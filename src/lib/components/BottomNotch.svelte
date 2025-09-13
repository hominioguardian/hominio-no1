<script>
  let isModalOpen = false;

  function openModal() {
    isModalOpen = true;
  }

  function closeModal() {
    isModalOpen = false;
  }

  function handleClickOutside(event) {
    if (event.target.classList.contains("modal-overlay")) {
      closeModal();
    }
  }

  function handleKeydown(event) {
    if (event.key === "Escape") {
      closeModal();
    }
  }
</script>

<!-- Bottom Notch -->
<div class="fixed bottom-0 left-1/2 transform -translate-x-1/2 z-50">
  <div class="bottom-notch">
    <button on:click={openModal} class="flex items-center space-x-2">
      <div class="submit-text font-black tracking-normal text-white uppercase">
        SUBMIT VIDEO
      </div>
      <div class="submit-icon">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
        </svg>
      </div>
    </button>
  </div>
</div>

<!-- Modal -->
{#if isModalOpen}
  <div
    class="modal-overlay fixed inset-0 z-60 flex items-end justify-center pb-4"
    on:click={handleClickOutside}
    on:keydown={handleKeydown}
    role="dialog"
    aria-modal="true"
    tabindex="-1"
  >
    <div class="modal-content">
      <!-- Magazine-style Header with geometric background -->
      <div class="modal-header-magazine">
        <div class="magazine-bg-shapes">
          <div class="shape-1"></div>
          <div class="shape-2"></div>
          <div class="shape-3"></div>
        </div>
        <div class="header-content">
          <div class="magazine-number">01</div>
          <h2 class="modal-title font-black tracking-normal uppercase">
            VIDEO SUBMISSION
          </h2>
          <div class="magazine-subtitle font-display italic">
            Ready to showcase your vision?
          </div>
        </div>
      </div>

      <!-- Modal Body with magazine layout -->
      <div class="modal-body-magazine">
        <!-- Main Content Grid -->
        <div class="magazine-grid">
          <!-- Left Column -->
          <div class="magazine-column-left">
            <div class="content-block">
              <div class="block-number">📹</div>
              <h3
                class="block-title font-black font-body uppercase tracking-normal"
              >
                QUICK RULES
              </h3>
              <div class="rule-list">
                <div class="rule-item">
                  <span class="rule-bullet" style="color: var(--brand-yellow);"
                    >●</span
                  >
                  <span>1 minute maximum</span>
                </div>
                <div class="rule-item">
                  <span class="rule-bullet" style="color: var(--brand-teal);"
                    >●</span
                  >
                  <span>Show purpose, planet, profit</span>
                </div>
                <div class="rule-item">
                  <span
                    class="rule-bullet"
                    style="color: var(--brand-cordovan);">●</span
                  >
                  <span>Be authentic & passionate</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Column -->
          <div class="magazine-column-right">
            <div class="content-block highlight-block">
              <div class="highlight-text font-display">
                Content details coming in next iteration
              </div>
              <div class="highlight-subtext">
                Full guidelines, examples & submission process
              </div>
            </div>
          </div>
        </div>

        <!-- Bottom Quote -->
        <div class="magazine-quote">
          <div class="quote-mark">"</div>
          <div class="quote-text font-display italic">
            Transform your vision into Europe's next breakthrough
          </div>
        </div>
      </div>

      <!-- Bottom Close Button -->
      <div class="modal-close-bottom">
        <button
          on:click={closeModal}
          class="close-button-bottom"
          aria-label="Close modal"
        >
          <div
            class="close-text font-black font-body uppercase tracking-normal"
          >
            Close
          </div>
          <div class="close-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"
                transform="rotate(45 12 12)"
              />
            </svg>
          </div>
        </button>
      </div>
    </div>
  </div>
{/if}

<style>
  .bottom-notch {
    background: rgba(19, 11, 52, 0.9);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-radius: 20px 20px 0 0;
    padding: 12px 24px 8px 24px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-bottom: none;
    box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.3);
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .bottom-notch:hover {
    background: rgba(19, 11, 52, 1);
    transform: translateY(-2px);
  }

  .submit-text {
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.8);
    font-family: "Inter", "ui-sans-serif", "system-ui", sans-serif;
    font-size: 0.9rem;
    font-weight: 900;
    letter-spacing: 0.025em;
  }

  .submit-icon {
    color: rgba(233, 202, 90, 1);
    filter: drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.5));
  }

  .modal-overlay {
    background: rgba(0, 0, 0, 0.75);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
  }

  .modal-content {
    background: white;
    border-radius: 24px 24px 12px 12px;
    max-width: 700px;
    width: 95vw;
    max-height: 85vh;
    overflow: hidden;
    box-shadow: 0 -10px 40px rgba(0, 0, 0, 0.3);
    border: 1px solid rgba(255, 255, 255, 0.2);
    position: relative;
  }

  /* Magazine Header */
  .modal-header-magazine {
    background: linear-gradient(135deg, #f8fafc, #e2e8f0);
    position: relative;
    padding: 32px 24px 24px;
    overflow: hidden;
  }

  .magazine-bg-shapes {
    position: absolute;
    inset: 0;
    pointer-events: none;
  }

  .shape-1 {
    position: absolute;
    top: -20px;
    right: -20px;
    width: 80px;
    height: 80px;
    background: rgba(233, 202, 90, 0.2);
    border-radius: 50%;
  }

  .shape-2 {
    position: absolute;
    bottom: -10px;
    left: -10px;
    width: 60px;
    height: 60px;
    background: rgba(37, 161, 167, 0.15);
    transform: rotate(45deg);
  }

  .shape-3 {
    position: absolute;
    top: 20px;
    left: 20px;
    width: 4px;
    height: 40px;
    background: rgba(37, 30, 100, 0.3);
  }

  .header-content {
    position: relative;
    z-index: 2;
    text-align: center;
  }

  .magazine-number {
    font-family: "Inter", "ui-sans-serif", "system-ui", sans-serif;
    font-size: 3rem;
    font-weight: 900;
    color: rgba(37, 30, 100, 0.1);
    line-height: 1;
    margin-bottom: -10px;
  }

  .modal-title {
    font-family: "Inter", "ui-sans-serif", "system-ui", sans-serif;
    font-size: 1.8rem;
    font-weight: 900;
    letter-spacing: 0.025em;
    color: #130b34;
    margin-bottom: 8px;
  }

  .magazine-subtitle {
    color: #64748b;
    font-size: 1.1rem;
  }

  /* Magazine Body */
  .modal-body-magazine {
    padding: 32px 24px 24px;
    max-height: 50vh;
    overflow-y: auto;
  }

  .magazine-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
    margin-bottom: 32px;
  }

  @media (max-width: 640px) {
    .magazine-grid {
      grid-template-columns: 1fr;
      gap: 20px;
    }
  }

  .content-block {
    position: relative;
  }

  .block-number {
    font-size: 2rem;
    margin-bottom: 12px;
  }

  .block-title {
    font-family: "Inter", "ui-sans-serif", "system-ui", sans-serif;
    font-size: 1rem;
    font-weight: 900;
    letter-spacing: 0.025em;
    color: #130b34;
    margin-bottom: 16px;
  }

  .rule-item {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 12px;
    font-size: 0.9rem;
    color: #475569;
  }

  .rule-bullet {
    font-size: 1.2rem;
    font-weight: 900;
  }

  .highlight-block {
    background: linear-gradient(
      135deg,
      rgba(241, 250, 238, 0.8),
      rgba(233, 202, 90, 0.1)
    );
    padding: 24px;
    border-radius: 16px;
    border-left: 4px solid rgba(37, 161, 167, 0.6);
    text-align: center;
  }

  .highlight-text {
    font-size: 1.1rem;
    color: #334155;
    margin-bottom: 8px;
    font-weight: 600;
  }

  .highlight-subtext {
    font-size: 0.85rem;
    color: #64748b;
  }

  .magazine-quote {
    text-align: center;
    padding: 24px 16px;
    background: linear-gradient(
      135deg,
      rgba(37, 30, 100, 0.03),
      rgba(37, 161, 167, 0.03)
    );
    border-radius: 16px;
    position: relative;
  }

  .quote-mark {
    font-size: 4rem;
    color: rgba(233, 202, 90, 0.3);
    font-family: serif;
    line-height: 1;
    position: absolute;
    top: -10px;
    left: 50%;
    transform: translateX(-50%);
  }

  .quote-text {
    font-size: 1.1rem;
    color: #475569;
    position: relative;
    z-index: 2;
    padding-top: 20px;
  }

  /* Bottom Close Button */
  .modal-close-bottom {
    padding: 16px 24px;
    background: linear-gradient(135deg, #f8fafc, #e2e8f0);
    border-top: 1px solid rgba(0, 0, 0, 0.05);
    display: flex;
    justify-content: center;
  }

  .close-button-bottom {
    display: flex;
    align-items: center;
    gap: 8px;
    background: linear-gradient(135deg, #e9ca5a, #f5e07a);
    color: #b8941f;
    padding: 10px 24px;
    border-radius: 20px;
    border: none;
    font-family: "Inter", "ui-sans-serif", "system-ui", sans-serif;
    font-size: 0.9rem;
    transition: all 0.2s ease;
    box-shadow: 0 4px 12px rgba(233, 202, 90, 0.3);
  }

  .close-button-bottom:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(233, 202, 90, 0.4);
    background: linear-gradient(135deg, #f5e07a, #e9ca5a);
  }

  .close-text {
    font-weight: 900;
    letter-spacing: 0.025em;
  }

  .close-icon {
    opacity: 0.8;
  }
</style>

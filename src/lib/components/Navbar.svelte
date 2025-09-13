<!-- Main Navbar -->
<nav class="fixed top-0 left-0 right-0 z-50">
  <!-- Left Brand Section -->
  <div class="absolute top-0 left-4">
    <div class="brand-notch">
      <a href="/" class="flex items-center space-x-3">
        <img src="/logo.png" alt="Hominio Logo" class="w-8 h-8" />
        <div class="brand-name font-black tracking-normal text-white uppercase">
          HOMINIO
        </div>
      </a>
    </div>
  </div>

  <!-- Center Event Info -->
  <div class="absolute top-0 left-1/2 transform -translate-x-1/2">
    <div class="navbar-notch">
      <a href="/" class="flex flex-col items-center">
        <div
          class="logo-text font-black tracking-normal text-white text-center"
        >
          <div class="text-lg font-black">Hominio Summit</div>
          <div class="text-xs font-medium opacity-80">#No1 - 2026 Limassol</div>
        </div>
      </a>
    </div>
  </div>

  <!-- Right Edge: Progress Notches Grid -->
  <div class="absolute top-0 right-0">
    <div class="notches-grid">
      <!-- Fund Progress -->
      <div class="fund-notch">
        <div class="flex flex-col items-center text-center">
          <div class="text-xs font-medium opacity-80 text-white">FUND</div>
          <div class="text-lg font-black text-white">1€</div>
        </div>
      </div>

      <!-- Day Counter -->
      <div class="day-notch">
        <div class="flex flex-col items-center text-center">
          <div class="text-xs font-medium opacity-80 text-white">DAY</div>
          <div class="text-lg font-black text-white">1</div>
        </div>
      </div>

      <!-- Cup Phase -->
      <div class="phase-notch">
        <div class="flex flex-col items-center text-center">
          <div class="text-xs font-medium opacity-80 text-white">CUP PHASE</div>
          <div class="text-sm font-black text-white uppercase tracking-tight">
            QUALI 1
          </div>
        </div>
      </div>
    </div>
  </div>
</nav>

<style>
  .navbar-notch {
    background: rgba(19, 11, 52, 0.8);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-radius: 0 0 20px 20px;
    padding: 8px 24px 12px 24px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-top: none;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  }

  .brand-notch {
    background: rgba(19, 11, 52, 0.8);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-radius: 0 0 20px 20px;
    padding: 8px 16px 12px 16px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-top: none;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  }

  .logo-text {
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.8);
    font-family: "Inter", "ui-sans-serif", "system-ui", sans-serif;
  }

  .brand-name {
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.8);
    font-family: "Inter", "ui-sans-serif", "system-ui", sans-serif;
    font-size: 1rem;
    font-weight: 900;
    letter-spacing: 0.025em;
  }

  .notches-grid {
    display: grid;
    grid-template-rows: auto auto auto;
    gap: 8px;
    align-items: start;
  }

  .fund-notch {
    background: rgba(19, 11, 52, 0.8);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-radius: 16px 0 0 16px;
    padding: 6px 10px 8px 10px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-top: none;
    border-right: none;
    box-shadow: 0 3px 15px rgba(0, 0, 0, 0.25);
    min-width: 60px;
  }

  .day-notch {
    background: rgba(19, 11, 52, 0.8);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-radius: 12px 0 0 12px;
    padding: 4px 8px 6px 8px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-top: none;
    border-right: none;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    min-width: 50px;
  }

  .phase-notch {
    background: rgba(19, 11, 52, 0.8);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-radius: 12px 0 0 12px;
    padding: 4px 8px 6px 8px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-top: none;
    border-right: none;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    min-width: 70px;
  }
</style>

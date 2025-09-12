<script>
  import projectsData from "$lib/data/projects.json";

  // Group letters for display
  const groupLetters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
  ];

  // Function to organize projects into groups according to seeding system
  function organizeIntoGroups(projects) {
    const groups = {};

    // Initialize empty groups
    groupLetters.forEach((letter) => {
      groups[letter] = [];
    });

    // Distribute projects according to seeding system
    // Position 1-12 go to seed #1 of each group
    // Position 13-24 go to seed #2 of each group, etc.
    for (let i = 0; i < projects.length; i++) {
      const project = projects[i];
      const groupIndex = i % 12; // Which group (0-11)
      const groupLetter = groupLetters[groupIndex];
      groups[groupLetter].push(project);
    }

    return groups;
  }

  $: tournamentGroups = organizeIntoGroups(projectsData);

  // Function to get country flag emoji (simplified)
  function getCountryFlag(country) {
    const flagMap = {
      Germany: "🇩🇪",
      France: "🇫🇷",
      Netherlands: "🇳🇱",
      Switzerland: "🇨🇭",
      Sweden: "🇸🇪",
      Denmark: "🇩🇰",
      Estonia: "🇪🇪",
      Poland: "🇵🇱",
      "Czech Republic": "🇨🇿",
      Austria: "🇦🇹",
      Finland: "🇫🇮",
      Norway: "🇳🇴",
      Belgium: "🇧🇪",
      Italy: "🇮🇹",
      Portugal: "🇵🇹",
      Spain: "🇪🇸",
      Ireland: "🇮🇪",
      "United Kingdom": "🇬🇧",
      Luxembourg: "🇱🇺",
      Slovenia: "🇸🇮",
      Croatia: "🇭🇷",
      Bulgaria: "🇧🇬",
      Romania: "🇷🇴",
      Greece: "🇬🇷",
      Slovakia: "🇸🇰",
      Lithuania: "🇱🇹",
      Latvia: "🇱🇻",
      Malta: "🇲🇹",
      Cyprus: "🇨🇾",
      Hungary: "🇭🇺",
      Iceland: "🇮🇸",
      Liechtenstein: "🇱🇮",
      Albania: "🇦🇱",
      Montenegro: "🇲🇪",
      Serbia: "🇷🇸",
      "North Macedonia": "🇲🇰",
      "Bosnia and Herzegovina": "🇧🇦",
      Moldova: "🇲🇩",
      Ukraine: "🇺🇦",
      Belarus: "🇧🇾",
      Georgia: "🇬🇪",
      Armenia: "🇦🇲",
      Azerbaijan: "🇦🇿",
      Turkey: "🇹🇷",
      Kosovo: "🇽🇰",
      Monaco: "🇲🇨",
      Andorra: "🇦🇩",
      "San Marino": "🇸🇲",
    };
    return flagMap[country] || "🏴";
  }
</script>

<section
  class="py-8 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50"
>
  <div class="container mx-auto px-6">
    <!-- Title -->
    <div class="text-center mb-8">
      <h2
        class="text-3xl md:text-4xl font-light text-gray-800 mb-4 tracking-tight"
      >
        Qualification Round 2
      </h2>
      <p class="text-base text-gray-600 max-w-4xl mx-auto leading-relaxed">
        96 European startups organized into 12 groups • Get 100 likes to qualify
        • Top 4 advance
      </p>
    </div>

    <!-- Tournament Groups Grid -->
    <div
      class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3"
    >
      {#each groupLetters as groupLetter}
        <div
          class="bg-white/70 backdrop-blur-sm border border-white/50 rounded-xl shadow-lg overflow-hidden"
        >
          <!-- Group Header -->
          <div class="bg-slate-800 text-white p-2">
            <h3 class="text-sm font-medium text-center tracking-wide">
              Group {groupLetter}
            </h3>
          </div>

          <!-- Group Projects -->
          <div class="p-2 space-y-1">
            {#each tournamentGroups[groupLetter] as project, index}
              <div
                class="bg-white/60 rounded-lg p-2 border border-white/30 backdrop-blur-sm"
              >
                <!-- Clean Row Layout: Flag + Project Name -->
                <div class="flex items-center space-x-2">
                  <!-- Country Flag -->
                  <span class="text-sm flex-shrink-0" title={project.country}>
                    {getCountryFlag(project.country)}
                  </span>

                  <!-- Project Name -->
                  <div class="flex-1 min-w-0">
                    <span
                      class="text-xs font-medium text-gray-800 truncate block"
                    >
                      {project.name}
                    </span>
                  </div>
                </div>
              </div>
            {/each}
          </div>

          <!-- Group Stats -->
          <div
            class="bg-amber-100/80 backdrop-blur-sm px-2 py-1 border-t border-amber-200/50"
          >
            <div class="text-center text-xs font-medium text-amber-800">
              Top 4 advance
            </div>
          </div>
        </div>
      {/each}
    </div>

    <!-- Tournament Info -->
    <div class="mt-8 text-center">
      <div
        class="bg-white/60 backdrop-blur-sm border border-white/50 rounded-2xl p-6 max-w-5xl mx-auto shadow-lg"
      >
        <h3 class="text-lg font-light text-gray-800 mb-6 tracking-wide">
          Competition Format
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="bg-white/40 rounded-xl p-4 border border-white/30">
            <div class="font-semibold text-gray-800 mb-2 text-sm">
              Central Platform
            </div>
            <div class="text-gray-600 text-sm">HominioNo1 YouTube Channel</div>
          </div>
          <div class="bg-white/40 rounded-xl p-4 border border-white/30">
            <div class="font-semibold text-gray-800 mb-2 text-sm">
              Scoring System
            </div>
            <div class="text-gray-600 text-sm">
              1 View = 1pt • 1 Like = 10pts • 1 Comment = 25pts
            </div>
          </div>
          <div class="bg-white/40 rounded-xl p-4 border border-white/30">
            <div class="font-semibold text-gray-800 mb-2 text-sm">Timeline</div>
            <div class="text-gray-600 text-sm">January 2026 • 1 Month</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

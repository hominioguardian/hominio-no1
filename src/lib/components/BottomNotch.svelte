<script>
  let isModalOpen = false;
  let currentStep = 1;
  const totalSteps = 5;

  // Application process steps
  const steps = [
    {
      id: 1,
      title: "Download Script Template",
      subtitle: "Get your video framework",
      icon: "📝",
      type: "download",
    },
    {
      id: 2,
      title: "Shoot Your 1 Min Video",
      subtitle: "Tell your personal story",
      icon: "🎬",
      type: "action",
    },
    {
      id: 3,
      title: "Post to Your Personal Instagram",
      subtitle: "Build your personal brand & rally your community",
      icon: "📱",
      type: "community",
    },
    {
      id: 4,
      title: "Submit Your Instagram Post",
      subtitle: "Share your post link when you hit 100 likes",
      icon: "🎯",
      type: "submit",
    },
    {
      id: 5,
      title: "Founders Interview",
      subtitle: "Receive your evaluation call",
      icon: "📞",
      type: "interview",
    },
  ];

  // Script template content
  const scriptTemplate = `UNIVERSAL MINI COMMERCIAL TEMPLATE
THREE-PART STRUCTURE

PART 1: INTRO (8-10 seconds)
"My friends, when 1 million sparkling eyes unite to solve one global challenge, this is what I will do. [PAIN] - I'm [NAME] and we [SOLUTION]. We compete in the Hominio Europe Cup for a 1 Million Euro seedfund, where your vote decides who wins."

PART 2: PERSONAL STORY (60 seconds)
---------- Placeholder For Your 1 Min Story ----------

PART 3: CALL TO ACTION (5-7 seconds)
"This is your call to action. We need 100 instagram likes to qualify for the Hominio Europe Cup. Press now Like to Vote and follow @HominioNo1"

FILL-IN-THE-BLANKS VARIABLES

PART 1 VARIABLES:
[PAIN]: 5-8 word problem statement
[NAME]: Your first name
[SOLUTION]: "built/created [PRODUCT NAME] that [BENEFIT]" (5-8 words)

PART 3 VARIABLES:
No variables - Fixed text only


PAIN POINT FORMULA
Structure: [PROBLEM] [ACTION/EFFECT] [VICTIM] [CONSEQUENCE]
Examples:
• "AI giants profit from your data you get nothing"
• "Therapy costs €200 per hour people suffer alone"
• "Energy companies raise bills while families struggle daily"
• "Plastic pollution destroys our oceans governments ignore it"
• "Student loans crush young people for decades"
• "800 million people starve while food gets wasted"


SOLUTION FORMULA
Structure: We + [ACTION VERB] + [PRODUCT NAME] + that + [SPECIFIC BENEFIT]
Examples:
• "we built Hominio that generates income for you"
• "we created SeaBot that restores ocean life automatically"
• "we designed MindHelper that provides free therapy 24/7"
• "we developed VertiFarms that grow food in any location"
• "we invented PowerYou that gives you clean energy ownership"
• "we founded LearnFree that makes genius education accessible"


COMPLETE WORKING EXAMPLES

EXAMPLE 1: VOICE AI
Part 1: "My friends, when 1 million sparkling eyes unite to solve one global challenge, this is what I will do. AI giants profit from your data you get nothing - I'm Sarah and we built Hominio that generates income for you. We compete in the Hominio Europe Cup for a 1 Million Euro seedfund, where your vote decides who wins."
Part 2: "Growing up in Romania, I watched my mother clean offices for €2 per hour while tech billionaires got richer from our data. That's my purpose - democratizing AI profits so everyone benefits. Our planet needs sustainable AI that serves people, not just corporations. When you use Hominio, 70% of AI-generated profits go directly to you. Imagine earning €500 monthly just by sharing your voice data ethically. We've already tested this with 1000 users - they're making real money while training AI responsibly. This isn't just profit, it's economic justice."
Part 3: "This is your call to action. We need 100 instagram likes to qualify for the Hominio Europe Cup. Press now Like to Vote and follow @HominioNo1"

EXAMPLE 2: OCEAN CLEANUP
Part 1: "My friends, when 1 million sparkling eyes unite to solve one global challenge, this is what I will do. Plastic pollution destroys our oceans governments ignore it - I'm Marcus and we created SeaBot that restores ocean life automatically. We compete in the Hominio Europe Cup for a 1 Million Euro seedfund, where your vote decides who wins."
Part 2: "I'm a marine biologist from Greece. Last year, I dove into waters where my grandfather caught fish - now it's a plastic cemetery. My purpose is restoring ocean life for future generations. SeaBot uses bio-mimetic design, powered by ocean currents - zero carbon footprint. Each robot removes 50kg of plastic daily while releasing beneficial microorganisms. We partner with fishing communities - they deploy SeaBots and earn €200 per month from carbon credits. Already, 3 prototypes in the Mediterranean increased fish populations by 40% in 6 months. This proves planet restoration creates sustainable profit."
Part 3: "This is your call to action. We need 100 instagram likes to qualify for the Hominio Europe Cup. Press now Like to Vote and follow @HominioNo1"

EXAMPLE 3: MENTAL HEALTH
Part 1: "My friends, when 1 million sparkling eyes unite to solve one global challenge, this is what I will do. Therapy costs €200 per hour people suffer alone - I'm Elena and we built MindHelper that provides free therapy 24/7. We compete in the Hominio Europe Cup for a 1 Million Euro seedfund, where your vote decides who wins."
Part 2: "I lost my brother to depression because he couldn't afford help. My purpose is making mental health accessible to everyone, everywhere. MindHelper uses AI trained on 10,000 therapy sessions, requiring 95% less server energy than traditional platforms - protecting our planet from digital waste. We monetize through corporate wellness programs - companies pay €5 per employee monthly while workers get free unlimited support. Our pilot with 500 users reduced sick days by 60%, saving companies thousands while healing people naturally. Mental health shouldn't be a luxury."
Part 3: "This is your call to action. We need 100 instagram likes to qualify for the Hominio Europe Cup. Press now Like to Vote and follow @HominioNo1"

EXAMPLE 4: FOOD SECURITY
Part 1: "My friends, when 1 million sparkling eyes unite to solve one global challenge, this is what I will do. 800 million people starve while food gets wasted - I'm Ahmed and we developed VertiFarms that grow food in any location. We compete in the Hominio Europe Cup for a 1 Million Euro seedfund, where your vote decides who wins."
Part 2: ---------- Your 1 Min Personal Story ----------
Part 3: "This is your call to action. We need 100 instagram likes to qualify for the Hominio Europe Cup. Press now Like to Vote and follow @HominioNo1"

EXAMPLE 5: CLEAN ENERGY
Part 1: "My friends, when 1 million sparkling eyes unite to solve one global challenge, this is what I will do. Energy companies raise bills while families struggle daily - I'm Lisa and we invented PowerYou that gives you clean energy ownership. We compete in the Hominio Europe Cup for a 1 Million Euro seedfund, where your vote decides who wins."
Part 2: ---------- Your 1 Min Personal Story ----------
Part 3: "This is your call to action. We need 100 instagram likes to qualify for the Hominio Europe Cup. Press now Like to Vote and follow @HominioNo1"

EXAMPLE 6: EDUCATION
Part 1: "My friends, when 1 million sparkling eyes unite to solve one global challenge, this is what I will do. Student loans crush young people for decades - I'm David and we founded LearnFree that makes genius education accessible. We compete in the Hominio Europe Cup for a 1 Million Euro seedfund, where your vote decides who wins."
Part 2: ---------- Your 1 Min Personal Story ----------
Part 3: "This is your call to action. We need 100 instagram likes to qualify for the Hominio Europe Cup. Press now Like to Vote and follow @HominioNo1"


AI GENERATION PROMPT
Create a universal mini commercial using this 3-part template:

PART 1 (8-10 seconds):
"My friends, when 1 million sparkling eyes unite to solve one global challenge, this is what I will do. [PAIN] - I'm [NAME] and we [SOLUTION]. We compete in the Hominio Europe Cup for a 1 Million Euro seedfund, where your vote decides who wins."

PART 2 (60 seconds):
---------- Placeholder For Your 1 Min Story ----------

PART 3 (5-7 seconds):
"This is your call to action. We need 100 instagram likes to qualify for the Hominio Europe Cup. Press now Like to Vote and follow @HominioNo1"

INPUT DETAILS:
- Problem: [INPUT]
- Founder name: [INPUT]
- Solution/Product: [INPUT]

REQUIREMENTS:
- Must start with: "My friends, when 1 million sparkling eyes unite to solve one global challenge, this is what I will do."
- Pain point: 5-8 words showing problem + consequence
- Solution: "we built/created/invented [product] that [specific benefit]"
- Keep Part 1 under 50 words total
- Part 3 is FIXED TEXT ONLY - no variables
- Use "we" for team approach
- All examples use "Hominio Europe Cup for a 1 Million Euro seedfund"
- Part 3 must be exactly: "This is your call to action. We need 100 instagram likes to qualify for the Hominio Europe Cup. Press now Like to Vote and follow @HominioNo1"


QUALITY CHECKLIST

PART 1 VALIDATION:
✅ Starts with "My friends, when 1 million sparkling eyes unite to solve one global challenge, this is what I will do."?
✅ Pain point shows problem + consequence?
✅ 5-8 words for pain point?
✅ Solution includes specific benefit?
✅ Uses "we" for team approach?
✅ Mentions "Hominio Europe Cup for a 1 Million Euro seedfund"?

PART 3 VALIDATION:
✅ Hard-coded "Hominio Europe Cup"?
✅ Clear instagram target (100 likes)?
✅ Starts with "This is your call to action"?
✅ Ends with "Press now Like to Vote and follow @HominioNo1"?
✅ Creates urgency to qualify?

OVERALL FLOW:
✅ Smooth transition between parts?
✅ Maintains team energy throughout?
✅ Easy to customize for any industry?
✅ Consistent branding with Hominio ecosystem?
✅ Unifying opening creates connection?


PRODUCTION SPECS

TIMING BREAKDOWN:
0-10s: Part 1 (Intro with opening statement)
10-70s: Part 2 (Personal Story)
70-77s: Part 3 (Call to Action)

VISUAL REQUIREMENTS:
Portrait 9:16 ratio
Text overlay for key numbers
"1 million sparkling eyes" visual emphasis
"Hominio Europe Cup" branding
"1 Million Euro seedfund" highlight
"@HominioNo1" follow button animation
Vote button animation at end

SUCCESS METRICS:
Engagement rate on vote requests
Like-to-vote conversion for Hominio Europe Cup
Story completion rate (85%+ target)
@HominioNo1 follow rate
Brand awareness for Hominio ecosystem
Emotional connection to "1 million sparkling eyes" message`;

  function openModal() {
    isModalOpen = true;
    currentStep = 1;
  }

  function closeModal() {
    isModalOpen = false;
    currentStep = 1;
  }

  function nextStep() {
    if (currentStep < totalSteps) {
      currentStep += 1;
    }
  }

  function previousStep() {
    if (currentStep > 1) {
      currentStep -= 1;
    }
  }

  function goToStep(stepNumber) {
    currentStep = stepNumber;
  }

  function downloadTemplate() {
    generateStyledPDF();
  }

  function generateStyledPDF() {
    const styledHTML = createStyledHTML();

    // Create a new window for PDF generation
    const printWindow = window.open("", "_blank");
    printWindow.document.write(styledHTML);
    printWindow.document.close();

    // Wait longer for fonts and styles to load completely
    setTimeout(() => {
      printWindow.focus();

      // Additional delay for font loading
      setTimeout(() => {
        printWindow.print();

        // Close the window after printing
        setTimeout(() => {
          printWindow.close();
        }, 2000);
      }, 1000);
    }, 1500);
  }

  function createStyledHTML() {
    return getHTMLTemplate();
  }

  function getHTMLTemplate() {
    return `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Hominio Video Script Template</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
        
        * { 
            margin: 0; 
            padding: 0; 
            box-sizing: border-box; 
        }
        
        body {
            font-family: 'Inter', 'Arial', 'Helvetica', sans-serif !important;
            line-height: 1.6;
            color: #1e293b !important;
            background: linear-gradient(135deg, #F1FAEE, #ffffff) !important;
            padding: 40px;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
        }
        
        .header {
            text-align: center;
            margin-bottom: 40px;
            padding: 30px;
            background: linear-gradient(135deg, #251E64, #1e1b4b) !important;
            border-radius: 20px;
            color: white !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
        }
        
        .header h1 {
            font-family: 'Playfair Display', 'Georgia', serif !important;
            font-size: 2.5rem;
            font-weight: 800;
            margin-bottom: 10px;
            color: #E9CA5A !important;
        }
        
        .section {
            background: white !important;
            border-radius: 16px;
            padding: 30px;
            margin-bottom: 30px;
            border-left: 6px solid #25A1A7 !important;
            box-shadow: 0 10px 25px rgba(0,0,0,0.1);
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
        }
        
        .section-title {
            font-family: 'Inter', 'Arial', sans-serif !important;
            font-size: 1.4rem;
            font-weight: 900;
            color: #251E64 !important;
            margin-bottom: 20px;
            text-transform: uppercase;
            letter-spacing: 0.05em;
        }
        
        .part-header {
            background: linear-gradient(135deg, #E9CA5A, #f5e07a) !important;
            color: #251E64 !important;
            padding: 15px 20px;
            border-radius: 12px;
            font-weight: 800;
            margin: 20px 0 15px 0;
            font-size: 1.1rem;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
        }
        
        .quote-text {
            background: rgba(37, 161, 167, 0.05) !important;
            border-left: 4px solid #25A1A7 !important;
            padding: 20px;
            border-radius: 8px;
            font-style: italic;
            margin: 15px 0;
            font-size: 1.05rem;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
        }
        
        .example-section {
            background: rgba(233, 202, 90, 0.1) !important;
            border-radius: 12px;
            padding: 25px;
            margin: 20px 0;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
        }
        
        .formula-list {
            list-style: none;
            padding-left: 0;
        }
        
        .formula-list li {
            background: white !important;
            margin: 8px 0;
            padding: 12px 15px;
            border-radius: 8px;
            border-left: 3px solid #E9CA5A !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
        }
        
        strong { 
            color: #251E64 !important; 
        }
        
        h3 {
            color: #251E64 !important;
        }
        
        h4 {
            color: #251E64 !important;
        }
        
        
        @media print {
            body { 
                background: white !important;
                -webkit-print-color-adjust: exact !important;
                print-color-adjust: exact !important;
            }
            .section { 
                break-inside: avoid;
                -webkit-print-color-adjust: exact !important;
                print-color-adjust: exact !important;
            }
            .header {
                -webkit-print-color-adjust: exact !important;
                print-color-adjust: exact !important;
            }
            .part-header {
                -webkit-print-color-adjust: exact !important;
                print-color-adjust: exact !important;
            }
            .quote-text {
                -webkit-print-color-adjust: exact !important;
                print-color-adjust: exact !important;
            }
            .example-section {
                -webkit-print-color-adjust: exact !important;
                print-color-adjust: exact !important;
            }
            .formula-list li {
                -webkit-print-color-adjust: exact !important;
                print-color-adjust: exact !important;
            }
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>HOMINIO VIDEO SCRIPT TEMPLATE</h1>
        <p>Qualifying 1 Script Template for Europe's First Startup Tournament</p>
    </div>
    
    <div class="section">
        <h2 class="section-title">Three-Part Structure</h2>
        
        <div class="part-header">PART 1: INTRO (8-10 seconds)</div>
        <div class="quote-text">
            "My friends, when 1 million sparkling eyes unite to solve one global challenge, this is what I will do. <strong>[PAIN]</strong> - I'm <strong>[NAME]</strong> and we <strong>[SOLUTION]</strong>. We compete in the Hominio Europe Cup for a 1 Million Euro seedfund, where your vote decides who wins."
        </div>
        
        <div class="part-header">PART 2: PERSONAL STORY (60 seconds)</div>
        <div class="quote-text">
            ---------- Placeholder For Your 1 Min Story ----------
        </div>
        
        <div class="part-header">PART 3: CALL TO ACTION (5-7 seconds)</div>
        <div class="quote-text">
            "This is your call to action. We need 100 instagram likes to qualify for the Hominio Europe Cup. Press now Like to Vote and follow @HominioNo1"
        </div>
    </div>
    
    <div class="section">
        <h2 class="section-title">Fill-in-the-Blanks Variables</h2>
        
        <h3 style="color: var(--brand-cordovan); margin: 20px 0 10px 0;">PART 1 VARIABLES:</h3>
        <ul class="formula-list">
            <li><strong>[PAIN]:</strong> 5-8 word problem statement</li>
            <li><strong>[NAME]:</strong> Your first name</li>
            <li><strong>[SOLUTION]:</strong> "built/created [PRODUCT NAME] that [BENEFIT]" (5-8 words)</li>
        </ul>
        
        <h3 style="color: var(--brand-cordovan); margin: 20px 0 10px 0;">PART 3 VARIABLES:</h3>
        <ul class="formula-list">
            <li>No variables - Fixed text only</li>
        </ul>
    </div>
    
    <div class="section">
        <h2 class="section-title">Pain Point Formula</h2>
        <p><strong>Structure:</strong> [PROBLEM] [ACTION/EFFECT] [VICTIM] [CONSEQUENCE]</p>
        
        <h3 style="color: var(--brand-cordovan); margin: 20px 0 10px 0;">Examples:</h3>
        <ul class="formula-list">
            <li>"AI giants profit from your data you get nothing"</li>
            <li>"Therapy costs €200 per hour people suffer alone"</li>
            <li>"Energy companies raise bills while families struggle daily"</li>
            <li>"Plastic pollution destroys our oceans governments ignore it"</li>
            <li>"Student loans crush young people for decades"</li>
            <li>"800 million people starve while food gets wasted"</li>
        </ul>
    </div>
    
    <div class="section">
        <h2 class="section-title">Solution Formula</h2>
        <p><strong>Structure:</strong> We + [ACTION VERB] + [PRODUCT NAME] + that + [SPECIFIC BENEFIT]</p>
        
        <h3 style="color: var(--brand-cordovan); margin: 20px 0 10px 0;">Examples:</h3>
        <ul class="formula-list">
            <li>"we built Hominio that generates income for you"</li>
            <li>"we created SeaBot that restores ocean life automatically"</li>
            <li>"we designed MindHelper that provides free therapy 24/7"</li>
            <li>"we developed VertiFarms that grow food in any location"</li>
            <li>"we invented PowerYou that gives you clean energy ownership"</li>
            <li>"we founded LearnFree that makes genius education accessible"</li>
        </ul>
    </div>
    
    <div class="section">
        <h2 class="section-title">Complete Working Examples</h2>
        
        <div class="example-section">
            <h4 style="color: var(--brand-cordovan); margin-bottom: 15px;">EXAMPLE 1: VOICE AI</h4>
            <p><strong>Part 1:</strong> "My friends, when 1 million sparkling eyes unite to solve one global challenge, this is what I will do. AI giants profit from your data you get nothing - I'm Sarah and we built Hominio that generates income for you. We compete in the Hominio Europe Cup for a 1 Million Euro seedfund, where your vote decides who wins."</p>
            <p><strong>Part 2:</strong> "Growing up in Romania, I watched my mother clean offices for €2 per hour while tech billionaires got richer from our data. That's my purpose - democratizing AI profits so everyone benefits. Our planet needs sustainable AI that serves people, not just corporations. When you use Hominio, 70% of AI-generated profits go directly to you. Imagine earning €500 monthly just by sharing your voice data ethically. We've already tested this with 1000 users - they're making real money while training AI responsibly. This isn't just profit, it's economic justice."</p>
            <p><strong>Part 3:</strong> "This is your call to action. We need 100 instagram likes to qualify for the Hominio Europe Cup. Press now Like to Vote and follow @HominioNo1"</p>
        </div>
        
        <div class="example-section">
            <h4 style="color: var(--brand-cordovan); margin-bottom: 15px;">EXAMPLE 2: OCEAN CLEANUP</h4>
            <p><strong>Part 1:</strong> "My friends, when 1 million sparkling eyes unite to solve one global challenge, this is what I will do. Plastic pollution destroys our oceans governments ignore it - I'm Marcus and we created SeaBot that restores ocean life automatically. We compete in the Hominio Europe Cup for a 1 Million Euro seedfund, where your vote decides who wins."</p>
            <p><strong>Part 2:</strong> "I'm a marine biologist from Greece. Last year, I dove into waters where my grandfather caught fish - now it's a plastic cemetery. My purpose is restoring ocean life for future generations. SeaBot uses bio-mimetic design, powered by ocean currents - zero carbon footprint. Each robot removes 50kg of plastic daily while releasing beneficial microorganisms. We partner with fishing communities - they deploy SeaBots and earn €200 per month from carbon credits. Already, 3 prototypes in the Mediterranean increased fish populations by 40% in 6 months. This proves planet restoration creates sustainable profit."</p>
            <p><strong>Part 3:</strong> "This is your call to action. We need 100 instagram likes to qualify for the Hominio Europe Cup. Press now Like to Vote and follow @HominioNo1"</p>
        </div>
        
        <div class="example-section">
            <h4 style="color: var(--brand-cordovan); margin-bottom: 15px;">EXAMPLE 3: MENTAL HEALTH</h4>
            <p><strong>Part 1:</strong> "My friends, when 1 million sparkling eyes unite to solve one global challenge, this is what I will do. Therapy costs €200 per hour people suffer alone - I'm Elena and we built MindHelper that provides free therapy 24/7. We compete in the Hominio Europe Cup for a 1 Million Euro seedfund, where your vote decides who wins."</p>
            <p><strong>Part 2:</strong> "I lost my brother to depression because he couldn't afford help. My purpose is making mental health accessible to everyone, everywhere. MindHelper uses AI trained on 10,000 therapy sessions, requiring 95% less server energy than traditional platforms - protecting our planet from digital waste. We monetize through corporate wellness programs - companies pay €5 per employee monthly while workers get free unlimited support. Our pilot with 500 users reduced sick days by 60%, saving companies thousands while healing people naturally. Mental health shouldn't be a luxury."</p>
            <p><strong>Part 3:</strong> "This is your call to action. We need 100 instagram likes to qualify for the Hominio Europe Cup. Press now Like to Vote and follow @HominioNo1"</p>
        </div>
    </div>
    
</body>
</html>`;
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
    <button on:click={openModal} class="apply-button">
      <div class="submit-text font-black tracking-normal uppercase">
        Apply Now
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
      <!-- Progress Stepper Header - Dynamic Titles -->
      <div class="progress-header">
        <div class="progress-title">
          <span class="step-indicator">STEP {currentStep} OF {totalSteps}</span>
          <h2 class="main-title font-black tracking-normal uppercase">
            {steps[currentStep - 1].title}
          </h2>
          <p class="step-description">
            {steps[currentStep - 1].subtitle}
          </p>
        </div>

        <!-- Progress Bar -->
        <div class="progress-bar-container">
          <div class="progress-bar">
            <div
              class="progress-fill"
              style="width: {(currentStep / totalSteps) * 100}%"
            ></div>
          </div>
          <div class="progress-steps">
            {#each steps as step}
              <button
                class="step-dot {currentStep >= step.id
                  ? 'completed'
                  : ''} {currentStep === step.id ? 'active' : ''}"
                on:click={() => goToStep(step.id)}
                aria-label="Go to step {step.id}"
              >
                <span class="step-number">{step.id}</span>
              </button>
            {/each}
          </div>
        </div>
      </div>

      <!-- Dynamic Content Area -->
      <div class="modal-body-dynamic">
        {#each steps as step}
          {#if currentStep === step.id}
            <div class="step-content">
              <!-- Step-specific Content -->
              <div class="step-body">
                {#if step.id === 1}
                  <!-- Download Template Step -->
                  <div class="download-content">
                    <div class="content-grid">
                      <div class="preview-section">
                        <div class="template-preview">
                          <div class="template-section">
                            <strong>PART 1: INTRO (8-10 sec)</strong>
                            <p>
                              "My friends, when 1 million sparkling eyes unite
                              to solve one global challenge, this is what I will
                              do. [PAIN] - I'm [NAME] and we [SOLUTION]. We
                              compete in the Hominio Europe Cup..."
                            </p>
                          </div>
                          <div class="template-section">
                            <strong>PART 2: YOUR STORY (60 sec)</strong>
                            <p class="placeholder">
                              ---------- Placeholder For Your 1 Min Story
                              ----------
                            </p>
                          </div>
                          <div class="template-section">
                            <strong>PART 3: CALL TO ACTION (5-7 sec)</strong>
                            <p>
                              "This is your call to action. We need 100
                              instagram likes to qualify for the Hominio Europe
                              Cup. Press now Like to Vote and follow
                              @HominioNo1"
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="action-section">
                        <div class="download-card">
                          <h4 class="card-title">GET YOUR TEMPLATE</h4>
                          <p class="card-description">
                            Complete script with examples, formulas, and
                            fill-in-the-blanks
                          </p>
                          <button
                            class="download-button"
                            on:click={downloadTemplate}
                          >
                            <span class="download-icon">📥</span>
                            <span>Download Template</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                {:else if step.id === 2}
                  <!-- Shoot Video Step -->
                  <div class="shoot-content">
                    <div class="tips-grid">
                      <div class="tip-card">
                        <div
                          class="tip-icon"
                          style="color: var(--brand-yellow);"
                        >
                          🎯
                        </div>
                        <h4>KEEP IT FOCUSED</h4>
                        <p>
                          Maximum 1 minute. Every second counts in your story.
                        </p>
                      </div>
                      <div class="tip-card">
                        <div class="tip-icon" style="color: var(--brand-teal);">
                          💡
                        </div>
                        <h4>BE AUTHENTIC</h4>
                        <p>
                          Show your passion. Genuine emotion connects with
                          viewers.
                        </p>
                      </div>
                      <div class="tip-card">
                        <div
                          class="tip-icon"
                          style="color: var(--brand-cordovan);"
                        >
                          🌟
                        </div>
                        <h4>SHOW IMPACT</h4>
                        <p>Demonstrate purpose, planet, and profit clearly.</p>
                      </div>
                    </div>
                    <div class="filming-checklist">
                      <h4 class="checklist-title">FILMING CHECKLIST</h4>
                      <div class="checklist-items">
                        <div class="checklist-item">
                          ✓ Good lighting (natural light preferred)
                        </div>
                        <div class="checklist-item">
                          ✓ Clear audio (minimize background noise)
                        </div>
                        <div class="checklist-item">
                          ✓ Stable camera (tripod or stable surface)
                        </div>
                        <div class="checklist-item">✓ Passionate delivery</div>
                      </div>
                    </div>
                  </div>
                {:else if step.id === 3}
                  <!-- Post to Personal Instagram Step -->
                  <div class="community-content">
                    <div class="instagram-central">
                      <div class="central-message">
                        <p class="central-subtitle">
                          Personal brand building - use YOUR account, not your
                          startup's
                        </p>
                      </div>

                      <div class="essentials-box">
                        <div class="essential-item">
                          <span class="essential-label">Account:</span>
                          <span class="essential-value"
                            >Your personal Instagram</span
                          >
                        </div>
                        <div class="essential-item">
                          <span class="essential-label">Required:</span>
                          <span class="essential-value"
                            >Tag @HominioNo1 + #HominioEuropeCup</span
                          >
                        </div>
                        <div class="essential-item">
                          <span class="essential-label">Goal:</span>
                          <span class="essential-value"
                            >100 Instagram likes</span
                          >
                        </div>
                      </div>

                      <div class="rally-note-box">
                        <div class="rally-highlight">
                          <span class="highlight-emoji">🚀</span>
                          <div class="highlight-text">
                            <strong
                              >Rally everywhere, but only Instagram likes count!</strong
                            >
                            <p>
                              Share on LinkedIn, YouTube, TikTok to drive people
                              to your Instagram post
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                {:else if step.id === 4}
                  <!-- Submit Success Step -->
                  <div class="submit-content">
                    <div class="submit-area">
                      <div class="submit-box">
                        <div class="submit-icon">🎯</div>
                        <h4 class="submit-title">SUBMIT YOUR SUCCESS</h4>
                        <p class="submit-subtitle">
                          Share your Instagram post link when you hit 100+ likes
                        </p>

                        <div class="link-submission">
                          <div class="input-group">
                            <label for="video-link" class="input-label"
                              >INSTAGRAM POST LINK</label
                            >
                            <input
                              type="url"
                              id="video-link"
                              placeholder="https://instagram.com/p/your-post..."
                              class="link-input"
                            />
                          </div>
                          <button class="submit-button"
                            >Submit Application</button
                          >
                        </div>

                        <div class="submit-note">
                          <p>
                            <strong>Note:</strong> We'll verify your post engagement
                            before scheduling your founders interview.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                {:else if step.id === 5}
                  <!-- Personal Call Step -->
                  <div class="call-content">
                    <div class="success-celebration">
                      <div class="celebration-header">
                        <div class="trophy-icon">📞</div>
                        <h4 class="celebration-title">
                          FOUNDERS INTERVIEW UNLOCKED!
                        </h4>
                        <p class="celebration-subtitle">
                          You've reached 100 likes and earned your personal
                          founders interview
                        </p>
                      </div>

                      <div class="call-details">
                        <div class="call-card">
                          <h5 class="call-title">YOUR FOUNDERS INTERVIEW</h5>
                          <div class="call-info">
                            <div class="call-item">
                              <span class="call-label">Duration:</span>
                              <span class="call-value"
                                >1 hour evaluation call</span
                              >
                            </div>
                            <div class="call-item">
                              <span class="call-label">Purpose:</span>
                              <span class="call-value"
                                >Deep dive into your vision & readiness</span
                              >
                            </div>
                            <div class="call-item">
                              <span class="call-label">Outcome:</span>
                              <span class="call-value"
                                >Tournament participation offer (if selected)</span
                              >
                            </div>
                          </div>
                          <div class="interview-info">
                            <h6 class="interview-title">WHAT TO EXPECT</h6>
                            <div class="interview-points">
                              <div class="interview-point">
                                💡 Vision assessment & potential evaluation
                              </div>
                              <div class="interview-point">
                                🎯 Market fit & scalability discussion
                              </div>
                              <div class="interview-point">
                                🚀 Tournament readiness & commitment check
                              </div>
                            </div>
                          </div>
                          <div class="scheduling-note">
                            <p>
                              <strong>We'll contact you within 48h</strong> to schedule
                              your personal interview. After the call, you'll receive
                              our decision and potential tournament entry offer.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                {/if}
              </div>
            </div>
          {/if}
        {/each}
      </div>

      <!-- Navigation Controls -->
      <div class="modal-navigation">
        <button
          class="nav-button prev-button {currentStep === 1 ? 'disabled' : ''}"
          on:click={previousStep}
          disabled={currentStep === 1}
        >
          ← Previous
        </button>

        <div class="step-counter">
          {currentStep} of {totalSteps}
        </div>

        {#if currentStep < totalSteps}
          <button class="nav-button next-button" on:click={nextStep}>
            Next →
          </button>
        {:else}
          <button class="nav-button close-button" on:click={closeModal}>
            Close
          </button>
        {/if}
      </div>
    </div>
  </div>
{/if}

<style>
  .bottom-notch {
    background: linear-gradient(135deg, #e9ca5a, #f5e07a);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-radius: 24px 24px 0 0;
    padding: 16px 32px 12px 32px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-bottom: none;
    box-shadow: 0 -6px 30px rgba(233, 202, 90, 0.4);
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .bottom-notch:hover {
    background: linear-gradient(135deg, #f5e07a, #e9ca5a);
    transform: translateY(-4px);
    box-shadow: 0 -8px 40px rgba(233, 202, 90, 0.6);
  }

  .apply-button {
    animation: pulse-soft 3s ease-in-out infinite;
  }

  .submit-text {
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
    font-family: "Inter", "ui-sans-serif", "system-ui", sans-serif;
    font-size: 1.1rem;
    font-weight: 900;
    letter-spacing: 0.025em;
    color: #251e64;
  }

  @keyframes pulse-soft {
    0%,
    100% {
      transform: scale(1);
      box-shadow: 0 -6px 30px rgba(233, 202, 90, 0.4);
    }
    50% {
      transform: scale(1.02);
      box-shadow: 0 -8px 35px rgba(233, 202, 90, 0.6);
    }
  }

  .modal-overlay {
    background: rgba(0, 0, 0, 0.75);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
  }

  .modal-content {
    background: white;
    border-radius: 24px 24px 12px 12px;
    max-width: 900px;
    width: 95vw;
    max-height: 90vh;
    overflow: hidden;
    box-shadow: 0 -10px 40px rgba(0, 0, 0, 0.3);
    border: 1px solid rgba(255, 255, 255, 0.2);
    position: relative;
    display: flex;
    flex-direction: column;
  }

  /* Progress Header */
  .progress-header {
    background: linear-gradient(135deg, #f8fafc, #e2e8f0);
    padding: 24px 32px 24px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  }

  .progress-title {
    text-align: center;
    margin-bottom: 20px;
  }

  .step-indicator {
    font-family: "Inter", "ui-sans-serif", "system-ui", sans-serif;
    font-size: 0.9rem;
    font-weight: 600;
    color: #64748b;
    letter-spacing: 0.05em;
  }

  .main-title {
    font-family: "Inter", "ui-sans-serif", "system-ui", sans-serif;
    font-size: 1.6rem;
    font-weight: 900;
    letter-spacing: 0.025em;
    color: #130b34;
    margin-top: 4px;
    margin-bottom: 8px;
  }

  .step-description {
    color: #64748b;
    font-size: 1rem;
    line-height: 1.5;
    margin-bottom: 4px;
  }

  .progress-bar-container {
    position: relative;
  }

  .progress-bar {
    height: 4px;
    background: #e2e8f0;
    border-radius: 2px;
    overflow: hidden;
    margin-bottom: 16px;
  }

  .progress-fill {
    height: 100%;
    background: linear-gradient(90deg, #e9ca5a, #25a1a7);
    border-radius: 2px;
    transition: width 0.3s ease;
  }

  .progress-steps {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .step-dot {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: 2px solid #e2e8f0;
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8rem;
    font-weight: 700;
    color: #64748b;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .step-dot.completed {
    border-color: #25a1a7;
    background: #25a1a7;
    color: white;
  }

  .step-dot.active {
    border-color: #e9ca5a;
    background: #e9ca5a;
    color: #251e64;
    transform: scale(1.1);
  }

  /* Dynamic Content Area */
  .modal-body-dynamic {
    flex: 1;
    overflow-y: auto;
    padding: 24px 32px;
  }

  .step-content {
    max-width: 100%;
  }

  .step-body {
    padding: 0;
  }

  /* Step 1: Download Content */
  .content-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
  }

  @media (max-width: 768px) {
    .content-grid {
      grid-template-columns: 1fr;
    }
  }

  .template-preview {
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    border-radius: 12px;
    padding: 20px;
  }

  .template-section {
    margin-bottom: 16px;
  }

  .template-section:last-child {
    margin-bottom: 0;
  }

  .template-section strong {
    display: block;
    color: #251e64;
    font-size: 0.9rem;
    margin-bottom: 8px;
  }

  .template-section p {
    color: #475569;
    font-size: 0.85rem;
    line-height: 1.5;
  }

  .placeholder {
    font-style: italic;
    color: #94a3b8 !important;
  }

  .download-card {
    background: linear-gradient(
      135deg,
      rgba(233, 202, 90, 0.1),
      rgba(37, 161, 167, 0.1)
    );
    border: 1px solid rgba(233, 202, 90, 0.3);
    border-radius: 16px;
    padding: 24px;
    text-align: center;
  }

  .card-title {
    font-family: "Inter", "ui-sans-serif", "system-ui", sans-serif;
    font-size: 1.1rem;
    font-weight: 900;
    letter-spacing: 0.025em;
    color: #130b34;
    margin-bottom: 8px;
  }

  .card-description {
    color: #64748b;
    font-size: 0.9rem;
    margin-bottom: 16px;
  }

  .download-button {
    background: linear-gradient(135deg, #e9ca5a, #f5e07a);
    color: #251e64;
    border: none;
    border-radius: 12px;
    padding: 12px 24px;
    font-family: "Inter", "ui-sans-serif", "system-ui", sans-serif;
    font-weight: 700;
    font-size: 0.9rem;
    cursor: pointer;
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    gap: 8px;
    margin: 0 auto;
  }

  .download-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(233, 202, 90, 0.4);
  }

  .download-icon {
    font-size: 1.2rem;
  }

  /* Step 2: Shoot Video */
  .tips-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    margin-bottom: 24px;
  }

  @media (max-width: 768px) {
    .tips-grid {
      grid-template-columns: 1fr;
    }
  }

  .tip-card {
    background: white;
    border: 1px solid #e2e8f0;
    border-radius: 12px;
    padding: 20px;
    text-align: center;
    transition: all 0.2s ease;
  }

  .tip-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  }

  .tip-icon {
    font-size: 2rem;
    margin-bottom: 12px;
  }

  .tip-card h4 {
    font-family: "Inter", "ui-sans-serif", "system-ui", sans-serif;
    font-size: 0.9rem;
    font-weight: 900;
    letter-spacing: 0.025em;
    color: #130b34;
    margin-bottom: 8px;
  }

  .tip-card p {
    color: #64748b;
    font-size: 0.85rem;
    line-height: 1.4;
  }

  .filming-checklist {
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    border-radius: 12px;
    padding: 24px;
  }

  .checklist-title {
    font-family: "Inter", "ui-sans-serif", "system-ui", sans-serif;
    font-size: 1rem;
    font-weight: 900;
    letter-spacing: 0.025em;
    color: #130b34;
    margin-bottom: 16px;
  }

  .checklist-item {
    color: #475569;
    font-size: 0.9rem;
    margin-bottom: 8px;
    padding-left: 8px;
  }

  /* Step 3: Personal Instagram */
  .instagram-central {
    max-width: 600px;
    margin: 0 auto;
    text-align: center;
  }

  .central-message {
    margin-bottom: 32px;
  }

  .central-subtitle {
    color: #64748b;
    font-size: 1.1rem;
    line-height: 1.5;
    text-align: center;
  }

  .essentials-box {
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    border-radius: 16px;
    padding: 24px;
    margin-bottom: 24px;
  }

  .essential-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 0;
    border-bottom: 1px solid #e2e8f0;
  }

  .essential-item:last-child {
    border-bottom: none;
  }

  .essential-label {
    font-family: "Inter", "ui-sans-serif", "system-ui", sans-serif;
    font-weight: 700;
    color: #475569;
    font-size: 0.9rem;
  }

  .essential-value {
    font-family: "Inter", "ui-sans-serif", "system-ui", sans-serif;
    font-weight: 900;
    color: #130b34;
    font-size: 0.9rem;
  }

  .rally-note-box {
    background: linear-gradient(
      135deg,
      rgba(37, 161, 167, 0.1),
      rgba(233, 202, 90, 0.1)
    );
    border: 1px solid rgba(37, 161, 167, 0.2);
    border-radius: 16px;
    padding: 20px;
  }

  .rally-highlight {
    display: flex;
    align-items: flex-start;
    gap: 16px;
    text-align: left;
  }

  .highlight-emoji {
    font-size: 1.5rem;
    flex-shrink: 0;
    margin-top: 2px;
  }

  .highlight-text strong {
    display: block;
    color: #130b34;
    font-size: 1rem;
    margin-bottom: 8px;
  }

  .highlight-text p {
    color: #475569;
    font-size: 0.9rem;
    line-height: 1.4;
    margin: 0;
  }

  /* Step 4: Submit Success */
  .submit-area {
    display: flex;
    justify-content: center;
  }

  .submit-box {
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    border-radius: 16px;
    padding: 32px;
    text-align: center;
    max-width: 500px;
    width: 100%;
  }

  .submit-icon {
    font-size: 3rem;
    margin-bottom: 16px;
  }

  .submit-title {
    font-family: "Inter", "ui-sans-serif", "system-ui", sans-serif;
    font-size: 1.2rem;
    font-weight: 900;
    letter-spacing: 0.025em;
    color: #130b34;
    margin-bottom: 8px;
  }

  .submit-subtitle {
    color: #64748b;
    font-size: 0.9rem;
    margin-bottom: 24px;
  }

  .link-submission {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-bottom: 20px;
  }

  .input-group {
    display: flex;
    flex-direction: column;
    gap: 8px;
    text-align: left;
  }

  .input-label {
    font-family: "Inter", "ui-sans-serif", "system-ui", sans-serif;
    font-size: 0.8rem;
    font-weight: 700;
    letter-spacing: 0.025em;
    color: #475569;
    text-transform: uppercase;
  }

  .link-input {
    padding: 12px 16px;
    border: 1px solid #cbd5e1;
    border-radius: 8px;
    font-size: 0.9rem;
    transition: all 0.2s ease;
    background: white;
  }

  .link-input:focus {
    outline: none;
    border-color: #25a1a7;
    box-shadow: 0 0 0 3px rgba(37, 161, 167, 0.1);
  }

  .submit-button {
    background: linear-gradient(135deg, #25a1a7, #36bdc4);
    color: white;
    border: none;
    border-radius: 12px;
    padding: 14px 32px;
    font-family: "Inter", "ui-sans-serif", "system-ui", sans-serif;
    font-weight: 700;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.2s ease;
    margin-top: 8px;
  }

  .submit-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(37, 161, 167, 0.4);
  }

  .submit-note {
    background: rgba(37, 161, 167, 0.1);
    border-radius: 8px;
    padding: 12px;
    margin-top: 16px;
  }

  .submit-note p {
    color: #475569;
    font-size: 0.8rem;
    line-height: 1.4;
    margin: 0;
  }

  /* Step 5: Founders Interview */
  .celebration-header {
    text-align: center;
    margin-bottom: 24px;
  }

  .trophy-icon {
    font-size: 4rem;
    margin-bottom: 16px;
  }

  .celebration-title {
    font-family: "Inter", "ui-sans-serif", "system-ui", sans-serif;
    font-size: 1.6rem;
    font-weight: 900;
    letter-spacing: 0.025em;
    color: #130b34;
    margin-bottom: 8px;
  }

  .celebration-subtitle {
    color: #64748b;
    font-size: 1rem;
    line-height: 1.5;
  }

  .call-card {
    background: linear-gradient(
      135deg,
      rgba(233, 202, 90, 0.1),
      rgba(37, 161, 167, 0.1)
    );
    border: 1px solid rgba(233, 202, 90, 0.3);
    border-radius: 16px;
    padding: 24px;
  }

  .call-title {
    font-family: "Inter", "ui-sans-serif", "system-ui", sans-serif;
    font-size: 1.2rem;
    font-weight: 900;
    letter-spacing: 0.025em;
    color: #130b34;
    margin-bottom: 16px;
    text-align: center;
  }

  .call-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
    padding: 8px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  }

  .call-item:last-child {
    border-bottom: none;
    margin-bottom: 0;
  }

  .call-label {
    font-weight: 600;
    color: #475569;
  }

  .call-value {
    font-weight: 700;
    color: #130b34;
  }

  .interview-info {
    background: rgba(37, 30, 100, 0.05);
    border-radius: 8px;
    padding: 16px;
    margin-top: 16px;
    margin-bottom: 16px;
  }

  .interview-title {
    font-family: "Inter", "ui-sans-serif", "system-ui", sans-serif;
    font-size: 0.9rem;
    font-weight: 900;
    letter-spacing: 0.025em;
    color: #130b34;
    margin-bottom: 12px;
    text-align: center;
  }

  .interview-points {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .interview-point {
    color: #475569;
    font-size: 0.85rem;
    line-height: 1.4;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .scheduling-note {
    background: rgba(37, 161, 167, 0.1);
    border-radius: 8px;
    padding: 16px;
    margin-top: 16px;
  }

  .scheduling-note p {
    color: #475569;
    font-size: 0.9rem;
    line-height: 1.5;
    margin: 0;
  }

  /* Navigation Controls */
  .modal-navigation {
    background: linear-gradient(135deg, #f8fafc, #e2e8f0);
    border-top: 1px solid rgba(0, 0, 0, 0.05);
    padding: 16px 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .nav-button {
    background: linear-gradient(135deg, #e9ca5a, #f5e07a);
    color: #251e64;
    border: none;
    border-radius: 12px;
    padding: 10px 20px;
    font-family: "Inter", "ui-sans-serif", "system-ui", sans-serif;
    font-weight: 700;
    font-size: 0.9rem;
    cursor: pointer;
    transition: all 0.2s ease;
    min-width: 100px;
  }

  .nav-button:hover:not(.disabled) {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(233, 202, 90, 0.4);
  }

  .nav-button.disabled {
    opacity: 0.5;
    cursor: not-allowed;
    background: #e2e8f0;
    color: #94a3b8;
  }

  .next-button,
  .close-button {
    background: linear-gradient(135deg, #25a1a7, #36bdc4);
    color: white;
  }

  .next-button:hover,
  .close-button:hover {
    box-shadow: 0 6px 20px rgba(37, 161, 167, 0.4);
  }

  .step-counter {
    font-family: "Inter", "ui-sans-serif", "system-ui", sans-serif;
    font-weight: 600;
    color: #64748b;
    font-size: 0.9rem;
  }
</style>

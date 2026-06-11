// Main JavaScript for Bob's Pizza Adventure

// State Management
let currentPhase = 0;
const phases = ['planning', 'design', 'coding', 'testing', 'deployment'];
let metrics = {
    timeSaved: 0,
    linesOfCode: 0,
    bugsPrevented: 0,
    testsWritten: 0
};

// Start the adventure
function startAdventure() {
    document.querySelector('.hero-section').style.display = 'none';
    document.getElementById('progressSection').style.display = 'block';
    document.getElementById('contentSection').style.display = 'block';
    document.getElementById('metricsSection').style.display = 'block';
    
    // Load first phase
    loadPhase(0);
    animateMetrics();
}

// Load a specific phase
function loadPhase(phaseIndex) {
    currentPhase = phaseIndex;
    const phaseName = phases[phaseIndex];
    
    // Update progress tracker
    updateProgressTracker();
    
    // Load phase content
    loadPhaseContent(phaseName);
    
    // Update navigation buttons
    updateNavigationButtons();
    
    // Scroll to content
    document.getElementById('contentSection').scrollIntoView({ behavior: 'smooth' });
}

// Update progress tracker UI
function updateProgressTracker() {
    phases.forEach((phase, index) => {
        const phaseElement = document.getElementById(`phase-${phase}`);
        const statusElement = phaseElement.querySelector('.phase-status');
        
        if (index < currentPhase) {
            phaseElement.classList.add('completed');
            phaseElement.classList.remove('active');
            statusElement.textContent = '✅';
        } else if (index === currentPhase) {
            phaseElement.classList.add('active');
            phaseElement.classList.remove('completed');
            statusElement.textContent = '⏳';
        } else {
            phaseElement.classList.remove('active', 'completed');
            statusElement.textContent = '⏸️';
        }
    });
}

// Load phase content dynamically
function loadPhaseContent(phaseName) {
    const contentDiv = document.getElementById('phaseContent');
    
    // Phase content templates
    const phaseContents = {
        planning: `
            <h2>🎯 Phase 1: Planning</h2>
            <div class="speech-bubble">
                <p><strong>Bob says:</strong> "First, I need to understand what we're building!"</p>
            </div>
            
            <h3>📋 Requirements Gathering</h3>
            <p>Bob analyzed the requirements and created user stories:</p>
            <ul>
                <li>✅ As a customer, I want to browse pizza options</li>
                <li>✅ As a customer, I want to customize my pizza with toppings</li>
                <li>✅ As a customer, I want to add items to my cart</li>
                <li>✅ As a customer, I want to place an order</li>
                <li>✅ As a customer, I want to see my order confirmation</li>
            </ul>
            
            <h3>🎮 Mini-Challenge: Help Bob Choose Features!</h3>
            <div class="feature-selector">
                <div class="feature-item" onclick="selectFeature(this)">
                    <span class="feature-icon">🍕</span>
                    <span class="feature-name">Pizza Menu</span>
                </div>
                <div class="feature-item" onclick="selectFeature(this)">
                    <span class="feature-icon">🛒</span>
                    <span class="feature-name">Shopping Cart</span>
                </div>
                <div class="feature-item" onclick="selectFeature(this)">
                    <span class="feature-icon">💳</span>
                    <span class="feature-name">Checkout</span>
                </div>
                <div class="feature-item" onclick="selectFeature(this)">
                    <span class="feature-icon">📱</span>
                    <span class="feature-name">Mobile Friendly</span>
                </div>
            </div>
            
            <div class="phase-stats">
                <p><strong>Time Saved:</strong> 2 hours of requirements analysis</p>
                <p><strong>Bob's Contribution:</strong> Generated user stories, acceptance criteria, and technical requirements</p>
            </div>
        `,
        
        design: `
            <h2>🎨 Phase 2: Design</h2>
            <div class="speech-bubble">
                <p><strong>Bob says:</strong> "Time to make it look delicious!"</p>
            </div>
            
            <h3>🖼️ UI/UX Design</h3>
            <p>Bob created wireframes and component designs:</p>
            
            <div class="design-showcase">
                <div class="wireframe">
                    <h4>Homepage Layout</h4>
                    <div class="wireframe-box">
                        <div class="wireframe-header">🍕 Pizza Paradise</div>
                        <div class="wireframe-content">
                            <div class="wireframe-item">Pizza 1</div>
                            <div class="wireframe-item">Pizza 2</div>
                            <div class="wireframe-item">Pizza 3</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <h3>🎨 Design System</h3>
            <div class="color-palette">
                <div class="color-box" style="background: #ff6b6b;">Primary</div>
                <div class="color-box" style="background: #4ecdc4;">Secondary</div>
                <div class="color-box" style="background: #ffe66d;">Accent</div>
                <div class="color-box" style="background: #2c3e50;">Dark</div>
            </div>
            
            <h3>🎮 Mini-Challenge: Arrange the Components!</h3>
            <p>Drag and drop to create the perfect layout (simulated):</p>
            <div class="component-builder">
                <button class="component-btn" onclick="addComponent('Header')">+ Header</button>
                <button class="component-btn" onclick="addComponent('Menu')">+ Menu</button>
                <button class="component-btn" onclick="addComponent('Cart')">+ Cart</button>
                <button class="component-btn" onclick="addComponent('Footer')">+ Footer</button>
            </div>
            <div id="componentCanvas" class="component-canvas"></div>
            
            <div class="phase-stats">
                <p><strong>Time Saved:</strong> 3 hours of design work</p>
                <p><strong>Bob's Contribution:</strong> Created wireframes, design system, and component library</p>
            </div>
        `,
        
        coding: `
            <h2>💻 Phase 3: Coding</h2>
            <div class="speech-bubble">
                <p><strong>Bob says:</strong> "Let's write some code! Watch me work my magic!"</p>
            </div>
            
            <h3>⚡ Code Generation in Action</h3>
            <p>Bob is writing the pizza ordering app code...</p>
            
            <div class="code-display" id="codeDisplay">
                <pre><code>// Pizza App - Main Component
class PizzaApp {
    constructor() {
        this.cart = [];
        this.pizzas = this.loadPizzas();
    }
    
    loadPizzas() {
        return [
            { id: 1, name: 'Margherita', price: 12.99 },
            { id: 2, name: 'Pepperoni', price: 14.99 },
            { id: 3, name: 'Veggie Supreme', price: 13.99 }
        ];
    }
    
    addToCart(pizza) {
        this.cart.push(pizza);
        this.updateCartDisplay();
    }
}</code></pre>
            </div>
            
            <button class="cta-button" onclick="typeCode()">▶️ Watch Bob Code</button>
            
            <h3>📊 Code Statistics</h3>
            <div class="code-stats">
                <div class="stat-item">
                    <span class="stat-number">342</span>
                    <span class="stat-label">Lines of Code</span>
                </div>
                <div class="stat-item">
                    <span class="stat-number">15</span>
                    <span class="stat-label">Components</span>
                </div>
                <div class="stat-item">
                    <span class="stat-number">8</span>
                    <span class="stat-label">Functions</span>
                </div>
            </div>
            
            <h3>🎮 Mini-Challenge: Spot the Bug!</h3>
            <p>Can you find the bug in this code?</p>
            <div class="code-display">
                <pre><code>function calculateTotal(items) {
    let total = 0;
    for (let i = 0; i <= items.length; i++) {
        total += items[i].price;
    }
    return total;
}</code></pre>
            </div>
            <button class="cta-button" onclick="revealBug()">🐛 Reveal Bug</button>
            <div id="bugReveal" style="display: none; margin-top: 20px;">
                <p><strong>Bug Found!</strong> The loop condition should be <code>i < items.length</code> not <code>i <= items.length</code></p>
                <p>Bob caught this during code review! 🎉</p>
            </div>
            
            <div class="phase-stats">
                <p><strong>Time Saved:</strong> 8 hours of coding</p>
                <p><strong>Bob's Contribution:</strong> Generated components, business logic, and API integration</p>
            </div>
        `,
        
        testing: `
            <h2>🧪 Phase 4: Testing</h2>
            <div class="speech-bubble">
                <p><strong>Bob says:</strong> "Time to make sure everything works perfectly!"</p>
            </div>
            
            <h3>✅ Automated Testing</h3>
            <p>Bob generated comprehensive test suites:</p>
            
            <div class="test-results">
                <div class="test-suite">
                    <h4>Unit Tests</h4>
                    <div class="test-item passed">✅ Pizza menu loads correctly</div>
                    <div class="test-item passed">✅ Add to cart functionality</div>
                    <div class="test-item passed">✅ Price calculation</div>
                    <div class="test-item passed">✅ Order validation</div>
                </div>
                
                <div class="test-suite">
                    <h4>Integration Tests</h4>
                    <div class="test-item passed">✅ Cart updates on add</div>
                    <div class="test-item passed">✅ Checkout process</div>
                    <div class="test-item passed">✅ Order confirmation</div>
                </div>
            </div>
            
            <h3>🎮 Mini-Challenge: Squash the Bugs!</h3>
            <div class="bug-game">
                <p>Click the bugs to squash them!</p>
                <div class="bug-container" id="bugContainer">
                    <span class="bug" onclick="squashBug(this)">🐛</span>
                    <span class="bug" onclick="squashBug(this)">🐛</span>
                    <span class="bug" onclick="squashBug(this)">🐛</span>
                </div>
                <p id="bugScore">Bugs Squashed: 0/3</p>
            </div>
            
            <h3>📊 Test Coverage</h3>
            <div class="coverage-bar">
                <div class="coverage-fill" style="width: 95%">95%</div>
            </div>
            
            <div class="phase-stats">
                <p><strong>Time Saved:</strong> 4 hours of test writing</p>
                <p><strong>Bob's Contribution:</strong> Generated 28 unit tests, 12 integration tests, and caught 12 potential bugs</p>
            </div>
        `,
        
        deployment: `
            <h2>🚀 Phase 5: Deployment</h2>
            <div class="speech-bubble">
                <p><strong>Bob says:</strong> "Let's launch this pizza app to the world!"</p>
            </div>
            
            <h3>🔧 CI/CD Pipeline</h3>
            <p>Bob set up automated deployment:</p>
            
            <div class="pipeline-steps">
                <div class="pipeline-step completed">
                    <span class="step-icon">✅</span>
                    <span class="step-name">Code Commit</span>
                </div>
                <div class="pipeline-step completed">
                    <span class="step-icon">✅</span>
                    <span class="step-name">Run Tests</span>
                </div>
                <div class="pipeline-step completed">
                    <span class="step-icon">✅</span>
                    <span class="step-name">Build App</span>
                </div>
                <div class="pipeline-step completed">
                    <span class="step-icon">✅</span>
                    <span class="step-name">Deploy</span>
                </div>
            </div>
            
            <h3>🎮 Launch Sequence!</h3>
            <button class="cta-button" onclick="launchRocket()">🚀 LAUNCH!</button>
            <div id="rocketAnimation" class="rocket-container" style="display: none;">
                <div class="rocket">🚀</div>
            </div>
            
            <h3>📊 Deployment Metrics</h3>
            <div class="deployment-metrics">
                <div class="metric">
                    <span class="metric-label">Build Time:</span>
                    <span class="metric-value">2 minutes</span>
                </div>
                <div class="metric">
                    <span class="metric-label">Deploy Time:</span>
                    <span class="metric-value">30 seconds</span>
                </div>
                <div class="metric">
                    <span class="metric-label">Success Rate:</span>
                    <span class="metric-value">100%</span>
                </div>
            </div>
            
            <div class="phase-stats">
                <p><strong>Time Saved:</strong> 3 hours of DevOps setup</p>
                <p><strong>Bob's Contribution:</strong> Configured CI/CD pipeline, Docker containers, and automated deployment</p>
            </div>
            
            <div class="completion-message">
                <h3>🎉 Congratulations!</h3>
                <p>You've completed the entire SDLC journey with Bob!</p>
                <p>The pizza app is now live and ready to use!</p>
            </div>
        `
    };
    
    contentDiv.innerHTML = phaseContents[phaseName];
    
    // Add CSS for phase-specific elements
    addPhaseStyles();
}

// Update navigation buttons
function updateNavigationButtons() {
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');
    
    if (currentPhase === 0) {
        prevButton.style.display = 'none';
    } else {
        prevButton.style.display = 'block';
    }
    
    if (currentPhase === phases.length - 1) {
        nextButton.textContent = '🎉 Finish!';
    } else {
        nextButton.textContent = 'Next ➡️';
    }
}

// Navigate to next phase
function nextPhase() {
    if (currentPhase < phases.length - 1) {
        loadPhase(currentPhase + 1);
        updateMetrics();
    } else {
        // Show final section
        showFinalSection();
    }
}

// Navigate to previous phase
function previousPhase() {
    if (currentPhase > 0) {
        loadPhase(currentPhase - 1);
    }
}

// Show final completion section
function showFinalSection() {
    document.getElementById('contentSection').style.display = 'none';
    document.getElementById('progressSection').style.display = 'none';
    document.getElementById('finalSection').style.display = 'block';
    document.getElementById('finalSection').scrollIntoView({ behavior: 'smooth' });
    
    // Trigger confetti
    createConfetti();
}

// Restart the adventure
function restartAdventure() {
    currentPhase = 0;
    document.getElementById('finalSection').style.display = 'none';
    document.querySelector('.hero-section').style.display = 'flex';
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Update metrics with animation
function updateMetrics() {
    const metricsData = {
        planning: { timeSaved: 2, linesOfCode: 0, bugsPrevented: 0, testsWritten: 0 },
        design: { timeSaved: 5, linesOfCode: 0, bugsPrevented: 0, testsWritten: 0 },
        coding: { timeSaved: 13, linesOfCode: 342, bugsPrevented: 5, testsWritten: 0 },
        testing: { timeSaved: 17, linesOfCode: 342, bugsPrevented: 12, testsWritten: 28 },
        deployment: { timeSaved: 20, linesOfCode: 342, bugsPrevented: 12, testsWritten: 28 }
    };
    
    const phaseName = phases[currentPhase];
    const newMetrics = metricsData[phaseName];
    
    animateValue('timeSaved', metrics.timeSaved, newMetrics.timeSaved, 1000);
    animateValue('linesOfCode', metrics.linesOfCode, newMetrics.linesOfCode, 1000);
    animateValue('bugsPrevented', metrics.bugsPrevented, newMetrics.bugsPrevented, 1000);
    animateValue('testsWritten', metrics.testsWritten, newMetrics.testsWritten, 1000);
    
    metrics = newMetrics;
}

// Animate metric values
function animateValue(id, start, end, duration) {
    const element = document.getElementById(id);
    
    // If values are the same, just set it without animation
    if (start === end) {
        element.textContent = end;
        return;
    }
    
    const range = end - start;
    const increment = range / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
            current = end;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current);
    }, 16);
}

// Initial metrics animation
function animateMetrics() {
    updateMetrics();
}

// Share on LinkedIn
function shareOnLinkedIn() {
    const text = "I just completed Bob's Pizza Adventure - an interactive showcase of AI-powered SDLC! Check it out:";
    const url = window.location.href;
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}&summary=${encodeURIComponent(text)}`, '_blank');
}

// Share on Twitter
function shareOnTwitter() {
    const text = "I just completed Bob's Pizza Adventure 🍕🤖 - an interactive AI-powered SDLC showcase! #AI #SDLC #Coding";
    const url = window.location.href;
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
}

// Create confetti effect
function createConfetti() {
    const colors = ['#ff6b6b', '#4ecdc4', '#ffe66d', '#a8edea', '#fed6e3'];
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDelay = Math.random() * 3 + 's';
            document.body.appendChild(confetti);
            
            setTimeout(() => confetti.remove(), 3000);
        }, i * 30);
    }
}

// Add phase-specific styles
function addPhaseStyles() {
    if (!document.getElementById('phaseStyles')) {
        const style = document.createElement('style');
        style.id = 'phaseStyles';
        style.textContent = `
            .feature-selector { display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 20px; margin: 20px 0; }
            .feature-item { padding: 20px; background: #fff; border: 2px solid #ddd; border-radius: 10px; text-align: center; cursor: pointer; transition: all 0.3s; }
            .feature-item:hover { transform: translateY(-5px); border-color: #667eea; box-shadow: 0 5px 15px rgba(0,0,0,0.1); }
            .feature-item.selected { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: #fff; border-color: #667eea; }
            .feature-icon { font-size: 2rem; display: block; margin-bottom: 10px; }
            .phase-stats { margin-top: 30px; padding: 20px; background: #e8f5e9; border-radius: 10px; }
            .wireframe-box { background: #fff; border: 2px solid #ddd; padding: 20px; border-radius: 10px; margin: 20px 0; }
            .wireframe-header { background: #667eea; color: #fff; padding: 10px; border-radius: 5px; margin-bottom: 10px; }
            .wireframe-content { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }
            .wireframe-item { background: #f0f0f0; padding: 20px; border-radius: 5px; text-align: center; }
            .color-palette { display: flex; gap: 20px; margin: 20px 0; }
            .color-box { flex: 1; padding: 30px; border-radius: 10px; color: #fff; text-align: center; font-weight: bold; }
            .component-builder { margin: 20px 0; }
            .component-btn { margin: 5px; padding: 10px 20px; background: #667eea; color: #fff; border: none; border-radius: 5px; cursor: pointer; }
            .component-canvas { min-height: 200px; background: #f8f9fa; border: 2px dashed #ddd; border-radius: 10px; padding: 20px; margin-top: 20px; }
            .code-stats { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin: 20px 0; }
            .stat-item { text-align: center; padding: 20px; background: #fff; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
            .stat-number { display: block; font-size: 2.5rem; font-weight: bold; color: #667eea; }
            .stat-label { display: block; margin-top: 10px; color: #666; }
            .test-results { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin: 20px 0; }
            .test-suite { background: #fff; padding: 20px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
            .test-item { padding: 10px; margin: 5px 0; border-radius: 5px; }
            .test-item.passed { background: #e8f5e9; color: #2e7d32; }
            .bug-game { text-align: center; padding: 20px; background: #fff; border-radius: 10px; margin: 20px 0; }
            .bug-container { font-size: 3rem; padding: 20px; }
            .bug { cursor: pointer; margin: 0 10px; transition: transform 0.2s; }
            .bug:hover { transform: scale(1.2); }
            .coverage-bar { background: #e0e0e0; height: 40px; border-radius: 20px; overflow: hidden; margin: 20px 0; }
            .coverage-fill { background: linear-gradient(90deg, #4caf50, #8bc34a); height: 100%; display: flex; align-items: center; justify-content: center; color: #fff; font-weight: bold; transition: width 1s ease; }
            .pipeline-steps { display: flex; justify-content: space-between; margin: 30px 0; }
            .pipeline-step { text-align: center; flex: 1; }
            .step-icon { font-size: 2rem; display: block; margin-bottom: 10px; }
            .deployment-metrics { background: #fff; padding: 20px; border-radius: 10px; margin: 20px 0; }
            .metric { display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #eee; }
            .metric:last-child { border-bottom: none; }
            .completion-message { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: #fff; padding: 30px; border-radius: 20px; text-align: center; margin-top: 30px; }
            .rocket-container { text-align: center; padding: 50px; }
            .rocket { font-size: 5rem; animation: launch 2s ease-out forwards; }
            @keyframes launch { from { transform: translateY(0); } to { transform: translateY(-500px); opacity: 0; } }
        `;
        document.head.appendChild(style);
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    console.log('Bob\'s Pizza Adventure loaded! 🍕🤖');
});

// Made with Bob

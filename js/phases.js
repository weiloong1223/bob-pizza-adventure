// Phase-specific interactive functions

let bugsSquashed = 0;
let componentsAdded = [];

// Feature selection mini-game
function selectFeature(element) {
    element.classList.toggle('selected');
    
    // Check if all features are selected
    const allFeatures = document.querySelectorAll('.feature-item');
    const selectedFeatures = document.querySelectorAll('.feature-item.selected');
    
    if (selectedFeatures.length === allFeatures.length) {
        setTimeout(() => {
            alert('🎉 Great! All features selected! Bob will include these in the app!');
        }, 300);
    }
}

// Component builder mini-game
function addComponent(componentName) {
    const canvas = document.getElementById('componentCanvas');
    if (!canvas) return;
    
    componentsAdded.push(componentName);
    
    const componentDiv = document.createElement('div');
    componentDiv.className = 'added-component';
    componentDiv.innerHTML = `
        <div style="background: #667eea; color: #fff; padding: 15px; margin: 10px; border-radius: 10px; display: inline-block;">
            ${componentName}
        </div>
    `;
    canvas.appendChild(componentDiv);
    
    // Check if all components are added
    if (componentsAdded.length === 4) {
        setTimeout(() => {
            alert('🎉 Perfect layout! Bob approves this design!');
        }, 300);
    }
}

// Code typing animation
let isTyping = false;
function typeCode() {
    if (isTyping) return;
    isTyping = true;
    
    const codeDisplay = document.getElementById('codeDisplay');
    const button = event.target;
    button.disabled = true;
    button.textContent = '⏳ Bob is coding...';
    
    const additionalCode = `
    
    // Bob adds more functionality...
    updateCartDisplay() {
        const cartElement = document.getElementById('cart');
        cartElement.innerHTML = this.cart
            .map(item => \`<div>\${item.name} - $\${item.price}</div>\`)
            .join('');
    }
    
    checkout() {
        const total = this.cart.reduce((sum, item) => sum + item.price, 0);
        alert(\`Order placed! Total: $\${total.toFixed(2)}\`);
        this.cart = [];
    }
}

// Initialize the app
const app = new PizzaApp();
console.log('Pizza app ready! 🍕');`;
    
    let index = 0;
    const typingSpeed = 20;
    
    const typeInterval = setInterval(() => {
        if (index < additionalCode.length) {
            const currentCode = codeDisplay.querySelector('code');
            currentCode.textContent += additionalCode[index];
            index++;
            
            // Auto-scroll to bottom
            codeDisplay.scrollTop = codeDisplay.scrollHeight;
        } else {
            clearInterval(typeInterval);
            button.textContent = '✅ Code Complete!';
            button.style.background = 'linear-gradient(135deg, #4caf50 0%, #8bc34a 100%)';
            isTyping = false;
            
            // Show success message
            setTimeout(() => {
                alert('🎉 Bob finished coding! The app is taking shape!');
            }, 500);
        }
    }, typingSpeed);
}

// Bug reveal function
function revealBug() {
    const bugReveal = document.getElementById('bugReveal');
    if (bugReveal) {
        bugReveal.style.display = 'block';
        bugReveal.style.animation = 'slideInUp 0.5s ease-out';
        
        // Confetti effect
        createMiniConfetti();
    }
}

// Bug squashing mini-game
function squashBug(bugElement) {
    bugElement.style.transform = 'scale(0)';
    bugElement.style.transition = 'transform 0.3s ease';
    
    setTimeout(() => {
        bugElement.remove();
        bugsSquashed++;
        
        const scoreElement = document.getElementById('bugScore');
        if (scoreElement) {
            scoreElement.textContent = `Bugs Squashed: ${bugsSquashed}/3`;
            
            if (bugsSquashed === 3) {
                scoreElement.innerHTML = '🎉 All bugs squashed! Bob is proud of you!';
                scoreElement.style.color = '#4caf50';
                scoreElement.style.fontWeight = 'bold';
                createMiniConfetti();
            }
        }
    }, 300);
}

// Rocket launch animation
function launchRocket() {
    const rocketAnimation = document.getElementById('rocketAnimation');
    const button = event.target;
    
    if (rocketAnimation) {
        button.disabled = true;
        button.textContent = '🚀 Launching...';
        rocketAnimation.style.display = 'block';
        
        // Play launch sound (if available)
        playSound('launch');
        
        setTimeout(() => {
            button.textContent = '✅ Deployed Successfully!';
            button.style.background = 'linear-gradient(135deg, #4caf50 0%, #8bc34a 100%)';
            
            // Show success message
            setTimeout(() => {
                alert('🎉 Deployment successful! The pizza app is now live!');
            }, 500);
        }, 2000);
    }
}

// Mini confetti for small celebrations
function createMiniConfetti() {
    const colors = ['#ff6b6b', '#4ecdc4', '#ffe66d', '#a8edea', '#fed6e3'];
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.style.position = 'fixed';
            confetti.style.width = '8px';
            confetti.style.height = '8px';
            confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.top = '50%';
            confetti.style.borderRadius = '50%';
            confetti.style.animation = 'confetti-fall 2s linear forwards';
            confetti.style.zIndex = '9999';
            document.body.appendChild(confetti);
            
            setTimeout(() => confetti.remove(), 2000);
        }, i * 20);
    }
}

// Sound effects (optional)
function playSound(soundName) {
    // This is a placeholder for sound effects
    // You can add actual sound files later
    console.log(`Playing sound: ${soundName}`);
}

// Phase click handlers
document.addEventListener('DOMContentLoaded', () => {
    // Add click handlers to phase items
    const phaseItems = document.querySelectorAll('.phase-item');
    phaseItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            if (index <= currentPhase) {
                loadPhase(index);
            }
        });
    });
});

// Easter egg: Konami code
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);
    
    if (konamiCode.join(',') === konamiSequence.join(',')) {
        activateEasterEgg();
    }
});

function activateEasterEgg() {
    alert('🎮 Easter Egg Activated! Bob says: "You found the secret code! Here\'s a virtual pizza: 🍕"');
    
    // Add pizza rain effect
    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            const pizza = document.createElement('div');
            pizza.textContent = '🍕';
            pizza.style.position = 'fixed';
            pizza.style.fontSize = '3rem';
            pizza.style.left = Math.random() * 100 + '%';
            pizza.style.top = '-50px';
            pizza.style.animation = 'confetti-fall 3s linear forwards';
            pizza.style.zIndex = '9999';
            document.body.appendChild(pizza);
            
            setTimeout(() => pizza.remove(), 3000);
        }, i * 100);
    }
}

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Arrow keys for navigation
    if (e.key === 'ArrowRight' && currentPhase < phases.length - 1) {
        nextPhase();
    } else if (e.key === 'ArrowLeft' && currentPhase > 0) {
        previousPhase();
    }
    
    // Space bar to start adventure
    if (e.key === ' ' && document.querySelector('.hero-section').style.display !== 'none') {
        e.preventDefault();
        startAdventure();
    }
});

// Smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Progress save/load (using localStorage)
function saveProgress() {
    localStorage.setItem('bobPizzaProgress', JSON.stringify({
        currentPhase,
        metrics,
        timestamp: new Date().toISOString()
    }));
}

function loadProgress() {
    const saved = localStorage.getItem('bobPizzaProgress');
    if (saved) {
        const data = JSON.parse(saved);
        return data;
    }
    return null;
}

// Auto-save progress
setInterval(() => {
    if (currentPhase > 0) {
        saveProgress();
    }
}, 30000); // Save every 30 seconds

// Tooltip system
function showTooltip(element, text) {
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltip.textContent = text;
    tooltip.style.position = 'absolute';
    tooltip.style.background = '#333';
    tooltip.style.color = '#fff';
    tooltip.style.padding = '8px 12px';
    tooltip.style.borderRadius = '5px';
    tooltip.style.fontSize = '0.9rem';
    tooltip.style.zIndex = '10000';
    tooltip.style.pointerEvents = 'none';
    
    document.body.appendChild(tooltip);
    
    const rect = element.getBoundingClientRect();
    tooltip.style.left = rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2) + 'px';
    tooltip.style.top = rect.top - tooltip.offsetHeight - 10 + 'px';
    
    setTimeout(() => tooltip.remove(), 2000);
}

// Performance monitoring
const performanceMetrics = {
    startTime: Date.now(),
    interactions: 0,
    phasesCompleted: 0
};

function trackInteraction(action) {
    performanceMetrics.interactions++;
    console.log(`User interaction: ${action}`);
}

// Analytics (placeholder for future integration)
function trackEvent(category, action, label) {
    console.log(`Analytics: ${category} - ${action} - ${label}`);
    // This is where you'd integrate with Google Analytics or similar
}

// Accessibility features
document.addEventListener('DOMContentLoaded', () => {
    // Add ARIA labels
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        if (!button.getAttribute('aria-label')) {
            button.setAttribute('aria-label', button.textContent);
        }
    });
    
    // Keyboard focus indicators
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
        }
    });
    
    document.addEventListener('mousedown', () => {
        document.body.classList.remove('keyboard-navigation');
    });
});

console.log('🎮 Phase interactions loaded! Ready for adventure!');

// Made with Bob

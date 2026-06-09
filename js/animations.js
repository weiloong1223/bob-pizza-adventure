// Advanced animations and visual effects for Bob's Pizza Adventure

// Particle system for background effects
class ParticleSystem {
    constructor() {
        this.particles = [];
        this.canvas = null;
        this.ctx = null;
        this.init();
    }
    
    init() {
        // Create canvas for particles
        this.canvas = document.createElement('canvas');
        this.canvas.style.position = 'fixed';
        this.canvas.style.top = '0';
        this.canvas.style.left = '0';
        this.canvas.style.width = '100%';
        this.canvas.style.height = '100%';
        this.canvas.style.pointerEvents = 'none';
        this.canvas.style.zIndex = '1';
        document.body.appendChild(this.canvas);
        
        this.ctx = this.canvas.getContext('2d');
        this.resize();
        
        window.addEventListener('resize', () => this.resize());
    }
    
    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
    
    addParticle(x, y, emoji) {
        this.particles.push({
            x,
            y,
            emoji,
            vx: (Math.random() - 0.5) * 2,
            vy: Math.random() * 2 + 1,
            rotation: Math.random() * 360,
            rotationSpeed: (Math.random() - 0.5) * 5,
            life: 1,
            decay: 0.01
        });
    }
    
    update() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.particles = this.particles.filter(p => {
            p.x += p.vx;
            p.y += p.vy;
            p.rotation += p.rotationSpeed;
            p.life -= p.decay;
            
            if (p.life > 0) {
                this.ctx.save();
                this.ctx.globalAlpha = p.life;
                this.ctx.font = '24px Arial';
                this.ctx.translate(p.x, p.y);
                this.ctx.rotate(p.rotation * Math.PI / 180);
                this.ctx.fillText(p.emoji, 0, 0);
                this.ctx.restore();
                return true;
            }
            return false;
        });
        
        requestAnimationFrame(() => this.update());
    }
}

// Initialize particle system
const particleSystem = new ParticleSystem();
particleSystem.update();

// Mouse trail effect
let mouseTrail = [];
document.addEventListener('mousemove', (e) => {
    if (Math.random() > 0.9) { // Only add particles occasionally
        particleSystem.addParticle(e.clientX, e.clientY, '✨');
    }
});

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe all sections
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.progress-section, .content-section, .metrics-section, .final-section');
    sections.forEach(section => {
        observer.observe(section);
    });
});

// Typing effect for text
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Number counter animation
function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Shake animation
function shake(element) {
    element.style.animation = 'shake 0.5s';
    setTimeout(() => {
        element.style.animation = '';
    }, 500);
}

// Add shake keyframes
const shakeStyle = document.createElement('style');
shakeStyle.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        10%, 30%, 50%, 70%, 90% { transform: translateX(-10px); }
        20%, 40%, 60%, 80% { transform: translateX(10px); }
    }
    
    .animate-in {
        animation: fadeInUp 0.6s ease-out;
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .keyboard-navigation *:focus {
        outline: 3px solid #667eea;
        outline-offset: 2px;
    }
`;
document.head.appendChild(shakeStyle);

// Parallax effect for hero section
document.addEventListener('mousemove', (e) => {
    const hero = document.querySelector('.hero-section');
    if (!hero) return;
    
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;
    
    const bobAvatar = document.querySelector('.bob-avatar');
    if (bobAvatar) {
        bobAvatar.style.transform = `translate(${x}px, ${y}px)`;
    }
});

// Progress bar animation
function animateProgressBar(element, targetWidth, duration = 1000) {
    element.style.transition = `width ${duration}ms ease-out`;
    element.style.width = targetWidth + '%';
}

// Ripple effect on buttons
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('button, .cta-button');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    });
});

// Add ripple styles
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    button, .cta-button {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);

// Smooth page transitions
function smoothTransition(fromElement, toElement, duration = 500) {
    fromElement.style.transition = `opacity ${duration}ms ease-out`;
    fromElement.style.opacity = '0';
    
    setTimeout(() => {
        fromElement.style.display = 'none';
        toElement.style.display = 'block';
        toElement.style.opacity = '0';
        toElement.style.transition = `opacity ${duration}ms ease-in`;
        
        setTimeout(() => {
            toElement.style.opacity = '1';
        }, 50);
    }, duration);
}

// Loading spinner
function showLoadingSpinner(container) {
    const spinner = document.createElement('div');
    spinner.className = 'loading-spinner';
    spinner.innerHTML = '<div class="spinner"></div>';
    container.appendChild(spinner);
    return spinner;
}

function hideLoadingSpinner(spinner) {
    if (spinner) {
        spinner.style.opacity = '0';
        setTimeout(() => spinner.remove(), 300);
    }
}

// Add spinner styles
const spinnerStyle = document.createElement('style');
spinnerStyle.textContent = `
    .loading-spinner {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 40px;
        transition: opacity 0.3s ease;
    }
    
    .spinner {
        width: 50px;
        height: 50px;
        border: 5px solid rgba(102, 126, 234, 0.2);
        border-top-color: #667eea;
        border-radius: 50%;
        animation: spin 1s linear infinite;
    }
    
    @keyframes spin {
        to { transform: rotate(360deg); }
    }
`;
document.head.appendChild(spinnerStyle);

// Toast notifications
function showToast(message, type = 'info', duration = 3000) {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = message;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.classList.add('show');
    }, 100);
    
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, duration);
}

// Add toast styles
const toastStyle = document.createElement('style');
toastStyle.textContent = `
    .toast {
        position: fixed;
        bottom: 20px;
        right: 20px;
        padding: 15px 25px;
        background: #333;
        color: #fff;
        border-radius: 10px;
        box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
        transform: translateY(100px);
        opacity: 0;
        transition: all 0.3s ease;
        z-index: 10000;
    }
    
    .toast.show {
        transform: translateY(0);
        opacity: 1;
    }
    
    .toast-success {
        background: linear-gradient(135deg, #4caf50 0%, #8bc34a 100%);
    }
    
    .toast-error {
        background: linear-gradient(135deg, #f44336 0%, #e91e63 100%);
    }
    
    .toast-info {
        background: linear-gradient(135deg, #2196f3 0%, #03a9f4 100%);
    }
`;
document.head.appendChild(toastStyle);

// Celebration effects
function celebrate() {
    // Confetti
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const x = Math.random() * window.innerWidth;
            const y = -50;
            const emojis = ['🎉', '🎊', '✨', '🌟', '⭐', '🍕'];
            const emoji = emojis[Math.floor(Math.random() * emojis.length)];
            particleSystem.addParticle(x, y, emoji);
        }, i * 50);
    }
    
    // Sound effect (if available)
    playSound('celebration');
    
    // Toast notification
    showToast('🎉 Awesome! Keep going!', 'success');
}

// Idle animation for Bob's avatar
function startBobIdleAnimation() {
    const bobAvatar = document.querySelector('.bob-avatar');
    if (!bobAvatar) return;
    
    setInterval(() => {
        // Random blink
        if (Math.random() > 0.7) {
            const eyes = document.querySelectorAll('.eye');
            eyes.forEach(eye => {
                eye.style.height = '3px';
                setTimeout(() => {
                    eye.style.height = '25px';
                }, 150);
            });
        }
    }, 3000);
}

// Start idle animations when page loads
document.addEventListener('DOMContentLoaded', () => {
    startBobIdleAnimation();
    console.log('✨ Animations loaded and ready!');
});

// Performance optimization: Reduce animations on low-end devices
if (navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4) {
    document.body.classList.add('reduced-motion');
    
    const reducedMotionStyle = document.createElement('style');
    reducedMotionStyle.textContent = `
        .reduced-motion * {
            animation-duration: 0.01ms !important;
            transition-duration: 0.01ms !important;
        }
    `;
    document.head.appendChild(reducedMotionStyle);
}

// Respect user's motion preferences
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.body.classList.add('reduced-motion');
}

console.log('🎨 Advanced animations initialized!');

// Made with Bob

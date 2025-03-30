// Initialize on document load
document.addEventListener('DOMContentLoaded', () => {
    // Initialize animations
    initAnimations();
    
    // Initialize terminal animation
    initTerminal();
    
    // Initialize particles background
    initParticles();
    
    // Initialize scroll events
    initScrollEvents();
    
    // Initialize mobile navigation
    initMobileNav();
    
    // Initialize product hover effects
    initProductHover();
});

// Initialize GSAP animations
function initAnimations() {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);
    
    // Hero section animations
    gsap.from('.hero-content', {
        duration: 1,
        y: 50,
        opacity: 0,
        ease: 'power3.out'
    });
    
    gsap.from('.hero-image', {
        duration: 1,
        y: 50,
        opacity: 0,
        delay: 0.3,
        ease: 'power3.out'
    });
    
    // Animate feature cards on scroll
    gsap.utils.toArray('.feature-card').forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            delay: i * 0.1,
            ease: 'power3.out'
        });
    });
    
    // Animate steps
    gsap.utils.toArray('.step').forEach((step, i) => {
        gsap.from(step, {
            scrollTrigger: {
                trigger: step,
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            delay: i * 0.2,
            ease: 'power3.out'
        });
    });
    
    // Animate testimonial cards
    gsap.utils.toArray('.testimonial-card').forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            y: 30,
            opacity: 0,
            duration: 0.8,
            delay: i * 0.2,
            ease: 'power3.out'
        });
    });
    
    // Animate pricing cards
    gsap.utils.toArray('.pricing-card').forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            y: 30,
            opacity: 0,
            duration: 0.8,
            delay: i * 0.2,
            ease: 'power3.out'
        });
    });
    
    // Animate stars
    const stars = document.querySelectorAll('.stars i');
    gsap.from(stars, {
        scrollTrigger: {
            trigger: '.stars',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        scale: 0,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: 'back.out(1.7)'
    });
}

// Terminal animation
function initTerminal() {
    const terminal = document.getElementById('terminal-content');
    const progress = document.getElementById('cooking-progress');
    
    const commands = [
        { text: 'Initializing Smart Automated Chief...', delay: 0 },
        { text: 'Scanning Ingredients...', delay: 1500 },
        { text: 'Selecting Optimal Cooking Parameters...', delay: 3000 },
        { text: 'Cooking in Progress...', delay: 4500 },
        { text: '✅ Meal Ready! Enjoy Your AI-Cooked Dish.', delay: 7500 }
    ];
    
    let progressValue = 0;
    const progressInterval = setInterval(() => {
        if (progressValue < 100) {
            progressValue += 1;
            progress.style.width = progressValue + '%';
        } else {
            clearInterval(progressInterval);
        }
    }, 80);
    
    commands.forEach((command, index) => {
        setTimeout(() => {
            const line = document.createElement('p');
            line.innerHTML = `<span class="prompt">$</span> <span id="text${index + 1}">${command.text}</span>`;
            terminal.appendChild(line);
            
            // Scroll to bottom of terminal
            terminal.scrollTop = terminal.scrollHeight;
            
            // Add typewriter effect
            if (index < commands.length - 1) {
                const textElement = document.getElementById(`text${index + 1}`);
                const text = textElement.textContent;
                textElement.textContent = '';
                
                let i = 0;
                const typeInterval = setInterval(() => {
                    if (i < text.length) {
                        textElement.textContent += text.charAt(i);
                        i++;
                    } else {
                        clearInterval(typeInterval);
                    }
                }, 30);
            }
        }, command.delay);
    });
}

// Initialize particles background
function initParticles() {
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 500
                    }
                },
                color: {
                    value: '#7b2ff7'
                },
                shape: {
                    type: 'circle',
                    stroke: {
                        width: 0,
                        color: '#000000'
                    },
                    polygon: {
                        nb_sides: 8
                    }
                },
                opacity: {
                    value: 0.3,
                    random: false,
                    anim: {
                        enable: false,
                        speed: 1,
                        opacity_min: 1,
                        sync: false
                    }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {
                        enable: false,
                        speed: 40,
                        size_min: 0.1,
                        sync: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#00c7fc',
                    opacity: 0.3,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: 'none',
                    random: false,
                    straight: false,
                    out_mode: 'out',
                    bounce: false,
                    attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200
                    }
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: {
                        enable: true,
                        mode: 'grab'
                    },
                    onclick: {
                        enable: true,
                        mode: 'push'
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 140,
                        line_linked: {
                            opacity: 0.5
                        }
                    },
                    push: {
                        particles_nb: 4
                    }
                }
            },
            retina_detect: true
        });
    }
}

// Initialize scroll events
function initScrollEvents() {
    // Show/hide header based on scroll direction
    let lastScrollTop = 0;
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down
            header.classList.add('hide');
        } else {
            // Scrolling up
            header.classList.remove('hide');
        }
        
        lastScrollTop = scrollTop;
        
        // Add active class to menu items based on section
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-links a');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollTop >= (sectionTop - 200) && scrollTop < (sectionTop + sectionHeight - 200)) {
                const id = section.getAttribute('id');
                
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Initialize mobile navigation
function initMobileNav() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
}
function scrollToDemo() {
    document.getElementById("demo-video").scrollIntoView({
        behavior: "smooth"
    });
}

document.getElementById("get-smart-chief").addEventListener("click", function () {
    document.getElementById("pricing").scrollIntoView({ behavior: "smooth" });
});


document.addEventListener("DOMContentLoaded", function () {
    const terminal = document.querySelector(".terminal");
    const terminalText = document.querySelector(".terminal-content");

    function handleScroll() {
        const terminalPosition = terminal.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (terminalPosition < screenHeight - 100) {
            terminalText.style.animation = "typing 3s steps(30, end) forwards";
        }
    }

    window.addEventListener("scroll", handleScroll);
});

// Initialize product hover effects
function initProductHover() {
    const productImage = document.querySelector('.product-render img');
    
    if (productImage) {
        productImage.addEventListener('mousemove', (e) => {
            const { left, top, width, height } = productImage.getBoundingClientRect();
            const x = (e.clientX - left) / width;
            const y = (e.clientY - top) / height;
            
            const rotateY = 10 * (0.5 - x);
            const rotateX = 10 * (y - 0.5);
            
            gsap.to(productImage, {
                duration: 0.5,
                rotateY: rotateY,
                rotateX: rotateX,
                transformPerspective: 1000,
                ease: 'power1.out'
            });
            
            // Update glow effect
            const glowEffect = document.querySelector('.glow-effect');
            if (glowEffect) {
                glowEffect.style.background = `radial-gradient(circle at ${x * 100}% ${y * 100}%, rgba(123, 47, 247, 0.3) 0%, rgba(0, 0, 0, 0) 50%)`;
            }
        });
        
        productImage.addEventListener('mouseleave', () => {
            gsap.to(productImage, {
                duration: 0.5,
                rotateY: 0,
                rotateX: 0,
                ease: 'power1.out'
            });
            
            // Reset glow effect
            const glowEffect = document.querySelector('.glow-effect');
            if (glowEffect) {
                glowEffect.style.background = 'none';
            }
        });
    }
    document.getElementById("get-started").addEventListener("click", function () {
        document.getElementById("pricing").scrollIntoView({ behavior: "smooth" });
    });
    
    
    // Video play button hover effect
    document.querySelectorAll('.video-thumbnail').forEach(thumbnail => {
        thumbnail.addEventListener('mouseenter', () => {
            const playButton = thumbnail.querySelector('.play-button');
            gsap.to(playButton, {
                duration: 0.3,
                scale: 1.2,
                opacity: 1,
                ease: 'back.out'
            });
        });
        
        thumbnail.addEventListener('mouseleave', () => {
            const playButton = thumbnail.querySelector('.play-button');
            gsap.to(playButton, {
                duration: 0.3,
                scale: 1,
                opacity: 0.8,
                ease: 'power1.out'
            });
        });
        
        // Handle click on video thumbnail
        thumbnail.addEventListener('click', () => {
            // Here you would normally open a video modal
            console.log('Video clicked');
        });
    });
    document.getElementById("contact-form").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission
    
        const name = document.querySelector('input[placeholder="Your Name"]').value.trim();
        const email = document.querySelector('input[placeholder="Your Email"]').value.trim();
        const topic = document.querySelector('select').value;
        const message = document.querySelector('textarea').value.trim();
    
        if (!name || !email || !topic || !message) {
            alert("Please fill in all fields before submitting.");
            return;
        }
    
        const subject = `${topic} Inquiry`;
        const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0ATopic: ${topic}%0D%0AMessage: ${message}`;
    
        const mailtoLink = `mailto:swastikmanna2006@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
        window.location.href = mailtoLink; // Opens default email client
    });
    
    
}
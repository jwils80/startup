/**
 * THE LEGO LEARNING MODEL - INTERACTION SCRIPT
 * Implements scroll reveals, progress tracking, and lightweight interactions
 * that reinforce the pacing and layering concept.
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. SCROLL REVEAL LOGIC
    // Using Intersection Observer to trigger CSS animations when sections enter viewport.
    // This enforces "pacing" - content appears only when the reader is ready for it.
    
    const revealOptions = {
        root: null,
        rootMargin: '0px 0px -15% 0px', // Trigger slightly before the element hits the bottom
        threshold: 0.1
    };

    const revealCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add class to trigger CSS transition
                entry.target.classList.add('is-visible');
                
                // Optional: Stop observing once revealed if we want it to stay
                observer.unobserve(entry.target);
            }
        });
    };

    const revealObserver = new IntersectionObserver(revealCallback, revealOptions);
    
    // Select all sections that should be revealed on scroll
    const sections = document.querySelectorAll('.reveal-section');
    sections.forEach(section => {
        revealObserver.observe(section);
    });

    // Ensure hero is visible immediately on load (or slight delay for effect)
    setTimeout(() => {
        const hero = document.getElementById('hero');
        if (hero) hero.classList.add('is-visible');
    }, 100);

    // 2. READING PROGRESS INDICATOR
    // Reinforces the concept of "layering" and visual progression top to bottom.
    
    const progressBar = document.getElementById('progressBar');
    
    window.addEventListener('scroll', () => {
        // Calculate scroll percentage
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
        const clientHeight = document.documentElement.clientHeight || window.innerHeight;
        
        const scrolled = (scrollTop / (scrollHeight - clientHeight)) * 100;
        
        if (progressBar) {
            progressBar.style.width = scrolled + '%';
        }
    });

    // 3. LIGHTWEIGHT STACK INTERACTION (HERO)
    // Add subtle staggered animation to the LEGO blocks in the hero
    // to emphasize the "building" process on load.
    
    const legoBlocks = document.querySelectorAll('.hero-visual .lego-block');
    legoBlocks.forEach((block, index) => {
        // Initial state before transition
        block.style.opacity = '0';
        block.style.transform = `translateY(50px) scale(0.9)`;
        
        // Reverse index so the bottom block builds first
        const reverseIndex = legoBlocks.length - 1 - index;
        
        setTimeout(() => {
            block.style.transition = 'all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
            block.style.opacity = '1';
            block.style.transform = `translateY(0) scale(1)`;
            
            // Clean up inline styles to let hover effects work in CSS
            setTimeout(() => {
                block.style.transition = '';
                block.style.transform = '';
            }, 600);
            
        }, 500 + (reverseIndex * 200)); // Stagger connection
    });

});

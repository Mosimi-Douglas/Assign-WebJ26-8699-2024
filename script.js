/**
 * script.js
 * Handles interactivity for Mosimi's Digital Nexus
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Navigation: Close mobile hamburger menu automatically when a link is clicked
    const navLinks = document.querySelectorAll('.nav-links a');
    const navCheck = document.getElementById('nav-check');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navCheck) navCheck.checked = false;
        });
    });

    // 2. Signup Form Handling
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('emailInput').value;
            
            showNexusNotification(`Success! ${email} has been added to the collective.`);
            signupForm.reset();
        });
    }

    // 3. Feedback Form Handling
    const feedbackForm = document.getElementById('feedbackForm');
    if (feedbackForm) {
        feedbackForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('nameInput').value;
            
            showNexusNotification(`Thank you, ${name}. Your insight has been woven into our database.`);
            feedbackForm.reset();
        });
    }

    /**
     * Helper function to show a tech-styled notification
     * instead of a browser alert.
     */
    function showNexusNotification(message) {
        const toast = document.createElement('div');
        
        // Styling the notification dynamically to match global.css
        Object.assign(toast.style, {
            position: 'fixed',
            bottom: '30px',
            right: '30px',
            backgroundColor: '#00d4ff', // tech-blue
            color: '#0a0a0a', // deep-black
            padding: '15px 25px',
            borderRadius: '4px',
            fontWeight: 'bold',
            boxShadow: '0 4px 15px rgba(0,0,0,0.5)',
            zIndex: '9999',
            fontFamily: 'Consolas, monospace',
            borderLeft: '5px solid #ff4d4d' // vibrant-red
        });

        toast.innerText = message;
        document.body.appendChild(toast);

        // Remove the notification after 4 seconds
        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transition = 'opacity 0.5s ease';
            setTimeout(() => toast.remove(), 500);
        }, 4000);
    }

    console.log("Nexus System Active. The geometry is listening.");
});

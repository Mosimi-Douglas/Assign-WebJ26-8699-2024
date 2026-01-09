**
 * script.js
 * Handles interactivity and navigation for Mosimi's Digital Nexus
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
            showNexusNotification(`Success! ${email} added to the nexus.`);
            signupForm.reset();
        });
    }

    // 3. Feedback Form Handling
    const feedbackForm = document.getElementById('feedbackForm');
    if (feedbackForm) {
        feedbackForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('nameInput').value;
            showNexusNotification(`Thank you, ${name}. Message received.`);
            feedbackForm.reset();
        });
    }

    /**
     * Helper function to show a custom tech-styled notification
     */
    function showNexusNotification(message) {
        const toast = document.createElement('div');
        
        Object.assign(toast.style, {
            position: 'fixed',
            bottom: '30px',
            right: '30px',
            backgroundColor: '#00d4ff',
            color: '#0a0a0a',
            padding: '15px 25px',
            borderRadius: '4px',
            fontWeight: 'bold',
            boxShadow: '0 4px 15px rgba(0,0,0,0.5)',
            zIndex: '9999',
            fontFamily: 'Consolas, monospace',
            borderLeft: '5px solid #ff4d4d'
        });

        toast.innerText = message;
        document.body.appendChild(toast);

        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transition = 'opacity 0.5s ease';
            setTimeout(() => toast.remove(), 500);
        }, 4000);
    }
});

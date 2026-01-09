/* script.js */

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {

    // 1. Handle the Signup Form
    const signupForm = document.getElementById('signupForm');
    if(signupForm) {
        signupForm.addEventListener('submit', function(event) {
            event.preventDefault(); 
            let email = document.getElementById('emailInput').value;
            // Create a custom modal effect instead of simple alert
            const feedbackBox = document.createElement('div');
            feedbackBox.style.cssText = "position:fixed; top:20%; left:50%; transform:translate(-50%, -50%); background:#00d4ff; color:#000; padding:20px; border-radius:8px; z-index:2000; font-weight:bold; text-align:center; box-shadow: 0 0 20px rgba(0,0,0,0.5);";
            feedbackBox.innerHTML = `SUCCESS: [${email}] SYNCED TO THE LOOM.`;
            document.body.appendChild(feedbackBox);
            
            setTimeout(() => { feedbackBox.remove(); }, 3000);
            signupForm.reset();
        });
    }

    // 2. Handle the Feedback Form
    const feedbackForm = document.getElementById('feedbackForm');
    if(feedbackForm) {
        feedbackForm.addEventListener('submit', function(event) {
            event.preventDefault();
            let name = document.getElementById('nameInput').value;
            
            const feedbackBox = document.createElement('div');
            feedbackBox.style.cssText = "position:fixed; top:20%; left:50%; transform:translate(-50%, -50%); background:#00ff00; color:#000; padding:20px; border-radius:8px; z-index:2000; font-weight:bold; text-align:center;";
            feedbackBox.innerHTML = `MESSAGE RECEIVED, ${name.toUpperCase()}. WE APPRECIATE YOUR INSIGHT!`;
            document.body.appendChild(feedbackBox);

            setTimeout(() => { feedbackBox.remove(); }, 3000);
            feedbackForm.reset();
        });
    }

    // 3. Navigation Highlighting
    const currentLocation = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        if(link.getAttribute('href') === currentLocation) {
            link.style.color = '#00ff00';
            link.style.borderBottom = '1px solid #00ff00';
        }
    });

    console.log("Welcome to the code behind the curtain. The geometry is listening.");
});

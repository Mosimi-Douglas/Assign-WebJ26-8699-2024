/* script.js */
// 1. Handle the Signup Form
const signupForm = document.getElementById('signupForm');
if(signupForm) {
 signupForm.addEventListener('submit', function(event) {
 event.preventDefault(); // Stops the page from refreshing
 
 // Get the value the user typed
 let email = document.getElementById('emailInput').value;
 
 // Simulating sending data
 alert("Thank you! " + email + " has been added to our curious collective.");
 
 // Clear the form
 signupForm.reset();
 });
}
// 2. Handle the Feedback Form
const feedbackForm = document.getElementById('feedbackForm');
if(feedbackForm) {
 feedbackForm.addEventListener('submit', function(event) {
 event.preventDefault();
 
 let name = document.getElementById('nameInput').value;
 
 alert("Message received, " + name + ". We appreciate your insight!");
 feedbackForm.reset();
 });
}
// 3. A Curiosity Trigger (Console Message)
// Only developers or curious users who press F12 will see this.
console.log("Welcome to the code behind the curtain. The geometry is listening.");
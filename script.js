// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Check if we're on the contact page
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form values
            const name = document.getElementById('name').value;
            const feedback = document.getElementById('feedback').value;

            // Simple form validation
            if (name.trim() === '' || feedback.trim() === '') {
                document.getElementById('message').textContent = 'Please fill in all fields.';
                return;
            }

            // Show success message (simulating form submission)
            document.getElementById('message').textContent = 'Thank you for your submission, ' + name + '!';
            document.getElementById('contactForm').reset();

            // Log the form data (for demonstration purposes)
            console.log('Form submitted:', { name, feedback, timestamp: new Date().toString() });
        });
    }
});

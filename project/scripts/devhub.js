// Form submission handling
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const userName = document.getElementById('userName').value;
    const userEmail = document.getElementById('userEmail').value;
    const userMessage = document.getElementById('userMessage').value;
    
    // Basic validation
    if (!userName.trim() || !userEmail.trim() || !userMessage.trim()) {
        alert('Please fill in all required fields.');
        return;
    }
    
    if (!isValidEmail(userEmail)) {
        alert('Please enter a valid email address.');
        return;
    }
    
    // In a real application, you would send the data to a server here
    // For this example, we'll just simulate a successful submission
    
    // Show success message at the top
    showSuccessMessage();
    
    // Reset form
    this.reset();
    
    // Optional: Reload page after 5 seconds
    // setTimeout(() => {
    //     location.reload();
    // }, 5000);
});

// Email validation function
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Show success message at the top
function showSuccessMessage() {
    const successMessage = document.getElementById('successMessage');
    successMessage.classList.add('show');
    
    // Auto-hide after 5 seconds
    setTimeout(() => {
        successMessage.classList.remove('show');
    }, 5000);
}

// Close success message when X is clicked
document.getElementById('closeSuccess').addEventListener('click', function() {
    document.getElementById('successMessage').classList.remove('show');
});

// Optional: Add character count for message
document.getElementById('userMessage').addEventListener('input', function() {
    const charCount = this.value.length;
    // You could display this count somewhere if desired
    console.log(`Character count: ${charCount}`);
});
// Form Submission Logic
document.getElementById("recommendationForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const type = document.getElementById("type").value;
    const message = document.getElementById("message").value.trim();

    // Validate form values
    if (!name || !email || !type || !message) {
        alert("Please fill out all fields before submitting.");
        return;
    }

    // Show the success popup
    const popup = document.getElementById("successPopup");
    popup.classList.remove("hidden");

    // Reset the form
    document.getElementById("recommendationForm").reset();
});

// Close Popup Logic
document.getElementById("closePopup").addEventListener("click", function () {
    const popup = document.getElementById("successPopup");
    popup.classList.add("hidden");
});

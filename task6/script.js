document.addEventListener("DOMContentLoaded", function () {
    // Variable to store the selected number
    let selectedNumber = "";

    // Get all number buttons
    const numberButtons = document.querySelectorAll(".numbers");

    // Add click event listener to each number button
    numberButtons.forEach(button => {
        button.addEventListener("click", function () {
            // Set the selected number to the clicked button's value
            selectedNumber = this.value;
        });
    });

    // Get the submit button
    const submitButton = document.querySelector(".sub");

    // Add click event listener to the submit button
    submitButton.addEventListener("click", function () {
        // Display the selected number in an alert
        alert(selectedNumber);
    });
});
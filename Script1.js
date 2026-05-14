// display hello students welcome to this website
// This function runs when the user clicks a button
function welcomeStudent() {
    // 1. Grab the value from an input field
    const name = document.getElementById('studentName').value;

    // 2. Find the display area
    const display = document.getElementById('welcomeMessage');

    // 3. Logic: Check if the user actually typed a name correctly
    if (name === "") {
        display.innerText = "Please enter your name!";
        display.style.color = "red";
    } else {
        display.innerText = "Welcome to the portal, " + name + "!";
        display.style.color = "green";
        function saveStudentData() {
            // Collect values using the IDs we created
            const name = document.getElementById('studentName').value;
            const idNum = document.getElementById('studentID').value;
            const course = document.getElementById('course').value;
            const year = document.getElementById('yearLevel').value;

            // Display it (assuming you have a <p id="output"></p> in your HTML)
            const output = document.getElementById('output');

            if (name && idNum) {
                output.innerHTML = `
            <strong>Saved Student:</strong><br>
            Name: ${name}<br>
            ID: ${idNum}<br>
            Course: ${course} - Year: ${year}
            
             } else {
                alert("Please fill in at least the Name and ID.");
            }
        }
    }
}
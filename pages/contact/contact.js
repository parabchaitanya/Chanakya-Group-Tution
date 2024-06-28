document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    const firstname = document.getElementById("fname").value;
    const lastname = document.getElementById("lname").value;
    const email = document.getElementById("email").value;
    const contact = document.getElementById("contact").value;
    const comments = document.getElementById("comments").value; // Get the comments

    // Display the values in a new tab
    const displayWindow = window.open("", "_blank");
    displayWindow.document.write(`
        <html>
        <head>
            <title>Form Submission Details</title>
        </head>
        <body>
            <h1>Form Submission Details</h1>
            <p><strong>First Name:</strong> ${firstname}</p>
            <p><strong>Last Name:</strong> ${lastname}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Contact Number:</strong> ${contact}</p>
            <p><strong>Comments:</strong> ${comments}</p> <!-- Display the comments -->
        </body>
        </html>
    `);
});

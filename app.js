
function convertAndCalculate() {
    const input = document.getElementById('dateInput').value;
    const inputDate = new Date(input);
    const today = new Date();

    if (isNaN(inputDate.getTime())) {
        document.getElementById('result').innerText = "Please enter a valid date.";
        document.getElementById('timePassed').innerText = "";
        return;
    }

    // Convert date
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const day = days[inputDate.getDay()];
    const month = months[inputDate.getMonth()];
    const year = inputDate.getFullYear();

    const result = `Your Age: ${day}, ${month} ${inputDate.getDate()}, ${year}`;
    document.getElementById('result').innerText = result;

    // Calculate time passed
    const yearsPassed = today.getFullYear() - inputDate.getFullYear();
    const monthsPassed = today.getMonth() - inputDate.getMonth() + (yearsPassed * 12);
    const daysPassed = Math.floor((today - inputDate) / (1000 * 60 * 60 * 24));

    // Calculate total days, months, and years
    const totalDays = daysPassed;
    const totalMonths = Math.floor(daysPassed / 30.44); // Average days in a month
    const totalYears = Math.floor(daysPassed / 365.25); // Account for leap years

    const timePassedText = `
            <hr>
        <h2>Time Passed Since:</h2>
        
        <ul>
            <li>${yearsPassed} Years, ${monthsPassed % 12} Months, ${daysPassed % 30} Days</li>
        </ul>
        <hr>
        <h2>Total Time Passed:</h2>
        
        <ul>
            
            <li>Days: ${totalDays} days</li>
            <li>Months: ${totalMonths} months</li>
            <li>Year: ${totalYears} years</li>
            
        </ul>`;

    document.getElementById('timePassed').innerHTML = timePassedText;
}

document.addEventListener("keyup", function (e) {
    if (e.key === "Enter") {
        convertAndCalculate();
    }
});


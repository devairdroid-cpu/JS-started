var isStart = confirm("Do you want to start interview?");
if (!isStart) {
    alert("Interview canceled. Bye!");
} else {
    alert("Welcome to the interview!");
    let fullName = prompt("What is your full name?");
    if (fullName) {
        fullName = fullName.trim();
        if (fullName.length !== 2) {
    }        alert("Please enter your full name (2 words needed)");
    }else {
    alert("Full Name status cannot be empty!");
    }

    let age = prompt("How old are you?");
    age = parseInt(age);
    if (isNaN(age) || age <= 18 || age >= 50) {
        alert("Please enter a valid age (18–50)");
    }else {
        alert("age section cannot be empty!");
    }

    let education = prompt("What is your education status? (high school, bachelor, master, phd)");
    if (education) {
        education = education.toLowerCase();
        
    } else {
        alert("Education status cannot be empty!");
    }

    let branch = prompt("Which branch are you applying to? (IT, HR, Sales, Marketing)");
    if (branch) {
        branch = branch.toUpperCase();
    } else {
        alert("Branch status cannot be empty!");
    }
 
    if (fullName && age && education && branch) {
        alert("Interview completed. Thank you!");
    } else {
        alert("Interview incomplete. Please provide all information.");
    }
}
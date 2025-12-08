// var isStart = confirm("Do you want to start interview?");
// if (!isStart) {
//     alert("Interview canceled. Bye!");
// } else {
//     alert("Welcome to the interview!");
//     let fullName = prompt("What is your full name?");
//     if (fullName) {
//         fullName = fullName.trim();
//         if (fullName.length !== 2) {
//     }        alert("Please enter your full name (2 words needed)");
//     }else {
//     alert("Full Name status cannot be empty!");
//     }

//     let age = prompt("How old are you?");
//     age = parseInt(age);
//     if (isNaN(age) || age <= 18 || age >= 50) {
//         alert("Please enter a valid age (18–50)");
//     }else {
//         alert("age section cannot be empty!");
//     }

//     let education = prompt("What is your education status? (high school, bachelor, master, phd)");
//     if (education) {
//         education = education.toLowerCase();
        
//     } else {
//         alert("Education status cannot be empty!");
//     }

//     let branch = prompt("Which branch are you applying to? (IT, HR, Sales, Marketing)");
//     if (branch) {
//         branch = branch.toUpperCase();
//     } else {
//         alert("Branch status cannot be empty!");
//     }
 
//     if (fullName && age && education && branch) {
//         alert("Interview completed. Thank you!");
//     } else {
//         alert("Interview incomplete. Please provide all information.");
//     }
// }



// 1.Convert to Uppercase
let pet = "golden retriever";
let result = pet.toUpperCase();
console.log("golden retriever - UpperCase: " + result);

// 2. Find the Length of a String
let question = "Can you solve this problem?";
let lengthOfQuestion = question.length;
console.log("Length of question: Can you solve this problem? = "+lengthOfQuestion);

// 3. Replace a Word in a String
let activity = "This game is boring";
let newActivity = activity.replace("boring", "exciting");
console.log("Original Activity: " + activity + " Modified Activity: " + newActivity);
console.log("Modified Activity: " + newActivity);

// 4. Extract a Substring
let headline = "Choose Your Adventure!";
let substring = headline.substring(0, 6);
console.log("Extracted Substring: " + substring);

// 5. Add an Item to an Array
let desserts = ["Ice Cream", "Pie", "Pudding"];
desserts.push("Cake");
console.log("Desserts after adding Cake: " + desserts);

// 6. Check if an Array Includes an Item
let cities = ["London", "New York", "Tokyo"];
let OtherCity = cities.includes("Pariss");
console.log("Does city include Pariss? " + OtherCity);

// 7. Combine Two Arrays
let cars = ["Sedan", "Coupe"];
let trucks = ["Pickup", "SUV"];
let vehicles = cars.concat(trucks);
console.log("Combined Vehicles: " + vehicles);

// 8. Find the Index of an Item in an Array
let deserts = ["Ice Cream", "Pie", "Pudding", "Cake"];
let indexOfPie = deserts.indexOf("Pie");
console.log("Index of Pie: " + indexOfPie);

// 9. Reverse a String
let word = "Technology"
let reversedWord = word.split("").reverse().join("");
console.log("Reversed Word: " + reversedWord);


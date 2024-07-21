let userRole = "admin";
let accessLevel;

if (userRole === "admin") {
  accessLevel = "Full access granted";
} else if (userRole === "manager") {
  accessLevel = "Limited access granted";
} else {
  accessLevel = "No access granted";
}

console.log("Access Level:", accessLevel);

let isLoggedIn = true;
let userMessage;

if (isLoggedIn) {
  if (userRole === "admin") {
    userMessage = "Welcome, Admin";
  } else {
    userMessage = "Welcome, User";
  }
} else {
  userMessage = "Please log in to access the system";
}
console.log("User Message:", userMessage);

let userType = "subscriber";
let userCategory;

switch (userType) {
  case "admin":
    userCategory = "Administrator";
    break;
  case "manager":
    userCategory = "Manager";
    break;
  case "subscriber":
    userCategory = "Subscriber";
    break;
  default:
    userCategory = "Unknown";
}

console.log("User Category:", userCategory);

let isAuthenticated = true;
let authenticationStatus = isAuthenticated
  ? "Authenticated"
  : "Not authenticated";

console.log("Authentication Status:", authenticationStatus);

let DietaryUserRole;
let DietaryUserCategory;

let options = [
  "Employee",
  "Enrolled Member",
  "Subscriber",
  "Non-Subscriber",
  "I don't know",
];
let choice = window.prompt(
  "Please enter the number corresponding to your choice:\n\n" +
    "1." +
    options[0] +
    "\n" +
    "2." +
    options[1] +
    "\n" +
    "3." +
    options[2] +
    "\n" +
    "4." +
    options[3] +
    "\n" +
    "5." +
    options[4],
);

if (choice == "1") {
  DietaryUserRole = "Employee";
  console.log("You chose: " + options[0]);
} else if (choice == "2") {
  DietaryUserRole = "Enrolled Member";
  console.log("You chose: " + options[1]);
} else if (choice == "3") {
  DietaryUserRole = "Subscriber";
  console.log("You chose: " + options[2]);
} else if (choice == "4") {
  DietaryUserRole = "Non-Subscriber";
  console.log("You chose: " + options[3]);
} else {
  DietaryUserRole = "I do not know";
  console.log("You chose: " + options[4]);
}

switch (DietaryUserRole) {
  case "Employee":
    DietaryUserCategory = "Dietary Services";
    break;
  case "Enrolled Member":
    DietaryUserCategory =
      "Dietary Service and one-on-one interaction with a dietician";
    break;
  case "Subscriber":
    DietaryUserCategory = "Dietary Services";
    break;
  case "Non-Subscriber":
    DietaryUserCategory =
      "Please enroll or at least subscribe first to avail this facility.";
    break;
  default:
    DietaryUserCategory = "Unknown";
}

console.log("Dietary Status:", DietaryUserCategory);

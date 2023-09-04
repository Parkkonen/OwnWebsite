/* Age calculation I stole off the internet */
var dateOfBirth = '17.7.2006'

var today = new Date();
var parts = dateOfBirth.split('.');
var birthDate = new Date(parts[2], parts[1] - 1, parts[0]);
  
var age = today.getFullYear() - birthDate.getFullYear();
var monthDiff = today.getMonth() - birthDate.getMonth();
var dayDiff = today.getDate() - birthDate.getDate();
  
if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    age--;
}



export const aboutMe = [
    "First name: Mikko",
    " ",
    "Last name: Parkkonen",
    " ",
    "Age: " + age,
    " ",
    "Description: ",
    "[Temporary placeholder]",
    " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    " enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    " Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "[Temporary placeholder]"
];

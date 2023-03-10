/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/



/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
Start Index = (page parameter * items per page) - items per page
End Index = page parameter * items per page
*/


function showPage (list, page) {
   const perPage = 9; 
   // two variables which will represent the index for the first and last student on the page
   const startIndex = (page * perPage) - perPage
   const endIndex = page * perPage
   // select the element with a class of `student-list` and assign it to a variable and set it to an empty string
   const studentList = document.querySelector(".student-list");
   studentList.innerHTML = "";
   // create variables for each student info item and insert it to the DOM inside of a loop
   for (let i = 0; i < list.length; i++ ) {
      if (i >= startIndex && i < endIndex) {
       const img = `${data[i].picture.medium}`
       const name = `${data[i].name.first} ${data[i].name.last}`
       const email = `${data[i].email}`
       const joined = `${data[i].registered.date}`    
       const studentItem = `
          <li class="student-item cf">
            <div class="student-details">
               <img class="avatar" src=${data[i].picture.medium} alt="Profile Picture">
               <h3> ${data[i].name.first} ${data[i].name.last} </h3>
               <span class="email">${data[i].email} </span>
            </div>
            <div class="joined-details">
               <span class="date">${data[i].registered.date}</span>
            </div>
         </li>`;
      studentList.insertAdjacentHTML("beforeend", studentItem)
      }
   }
}

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

function addPagination (list) {
   //variable to calculate the number of pages needed
const numOfPages = Math.ceil(list.length / 9)
//select the element with a class of `link-list` and assign it to a variable and set the inner HTML to empty string
const linkList = document.querySelector(".link-list")
linkList.innerHTML = ""
// loop over number of pages needed to create elements need to display the buttons, then insert 
for (let i = 1; i <= numOfPages; i ++){
   const button = `
   <li>
      <button type="button">${i}</button>
   </li>
   `
   linkList.insertAdjacentHTML("beforeend", button)
   document.querySelector('button').className = "active"; //Select the first pagination button and give it a class name of active.
   }

linkList.addEventListener('click', (e) => {
   // returns true if clicked element is a button
   if (e.target.tagName === "BUTTON") {
      //select the first button with active className and set it equal to empty string
   const bar = document.querySelector(".active")
   bar.className = "";
   //assign active class name to button clicked
   e.target.className = "active";
   // returns pages of students
   showPage(list, e.target.textContent);
}})}


// Call functions//
showPage(data, 1);
addPagination(data);

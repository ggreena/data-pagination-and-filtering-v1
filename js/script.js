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
   const perPage = 9; //how to make perpage more dynamic?
   const startIndex = (page * perPage) - perPage
   const endIndex = page * perPage
 
   const studentList = document.querySelector(".student-list");
   studentList.innerHTML = "";
 
   for (let i = 0; i < list.length; i++) {

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

showPage(data, 1);

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

function addPagination (list) {
const numButt = Math.ceil(list.length / 9)
const linkList = document.querySelector(".link-list")
linkList.innerHTML = ""
for (let i = 1; i < numButt; i ++){
   const btn = i
   const list = `
   <li>
      <button type="button">${btn}</button>
   </li>
   `
   linkList.insertAdjacentHTML("beforeend", list)
   btn.className = 'active' 
}
//Select the first pagination button and give it a class name of active.



document.addEventListener('click', (e) => {
   if (e.tagName = "BUTTON") {
   const active = document.querySelector(".active")
   active.className = "";
   linkList.className = "active";
   showPage(list, linkList.textContent)
   }
   ;       
              });
console.log(list);
}


// Call functions//
addPagination(data);
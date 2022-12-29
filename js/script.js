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
   const startIndex = (page * perPage) - perPage
   const endIndex = page * perPage
   const perPage = 9;
   const studentList = document.getElementsByClassName(student-list);
   studentList.innerHTML = "";
   for (let i =0; i<studentList.length; i++) {
      if (i>=startIndex && i<endIndex) {
         const body = document.querySelector('body');

         const lilist = document.createElement('li');
         lilist.className = "student-item cf"
         body.appendChild(lilist);

         const div = document.querySelector('div')
         div.className = "student-details";

         const img = document.createElement('img')
         img.className = "avatar";
         img.src = ;
         // reference the pic array on data.js? data[i]
         img.alt = "Profile Picture"
         div.appendChild(img);

         const name = document.createElement('h3');
         name.innerHTML = `${first} ${last}`
         //// reference the name array on data.js? data[i]
         div.appendChild(name);
      }
   }
}


/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/



// Call functions

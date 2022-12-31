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
   console.log(startIndex);
   console.log(endIndex);
   
   
   const studentList = document.querySelector(".student-list");
   studentList.innerHTML = "";
   console.log(list.length)
   for (let i = 0; i < list.length; i++) {

      if (i >= startIndex && i < endIndex) {
         const lilist = document.createElement('li');
         lilist.className = "student-item cf"
         studentList.appendChild(lilist);}

         const div1 = document.createElement('div')
         div1.className = "student-details";
         // studentList.insertAdjacentHTML('beforeend', div1);
      

         // const img = document.createElement('img')
         // img.className = "avatar";
         // img.src = `${data[i].picture.medium}`;
         // img.alt = "Profile Picture"
         // div1.appendChild(img);

         // const name = document.createElement('h3');
         // name.innerHTML = `${data[i].name.first} ${data[i].name.last}`
         // div1.appendChild(name);

         // const email = document.createElement('span');
         // email.innerHTML = `${data[i].email}`
         // email.className = "email";
         // div1.appendChild(email);

         // const div2 = document.querySelector('div')
         // div1.className = "student-details";
         // studentList.appendChild(div2);

         // const joineddate = document.createElement('span');
         // joineddate.innerHTML = `${data[i].registered.date}`
         // // div2.appendChild(joineddate);
         
      }
   
return console.log(studentList) ;
}

showPage(data, 1);
// console.log(showPage());

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/



// Call functions

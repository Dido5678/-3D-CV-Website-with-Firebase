//turn pages when click next or prev button
const pageTurnBtn = document.querySelectorAll('.nextprev-btn');

pageTurnBtn.forEach((el, index)=>{
    el.onclick = () => {
        const pageTurnId = el.getAttribute('data-page');
        const pageTurn = document.getElementById(pageTurnId);

        if(pageTurn.classList.contains('turn')){
            pageTurn.classList.remove('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 20 - index;
            }, 500);
        }
        else{
            pageTurn.classList.add('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 20 + index;
            }, 500);
        }
    }
})
//contact me button when click
const pages = document.querySelectorAll(".book-page.page-right");
const contactMeBtn = document.querySelector(".btn.contact-me");

contactMeBtn.onclick = () => {
    pages.forEach((page, index) => {
        setTimeout(() => {
            page.classList.add("turn");
            setTimeout(() => {
                page.style.zIndex = 20 + index;
            }, 500)
        }, (index + 1) * 200 + 100)
    })
}
//create reverse index function

let totalPages = pages.length;
let pageNumber = 0;
 function reserveIndex(){
    pageNumber--;
    if(pageNumber < 0){
        pageNumber = totalPages - 1;
    }
 }

//back profile button when click
const backProfileBtn = document.querySelector(".back-profile");

backProfileBtn.onclick = () => {
    pages.forEach((_, index) => {
        setTimeout(() => {
            reserveIndex();
           pages[pageNumber].classList.remove('turn');

           setTimeout(() => {
            reserveIndex();
            pages[pageNumber].style.zIndex = 10 + index;
           }, 500);
        }, (index + 1) * 200 + 100);
    })
}
//opening animation
const coverRight = document.querySelector(".cover.cover-right");
const pageLeft = document.querySelector(".book-page.page-left");


//opening animation (cover right animation)
setTimeout(() => {
    coverRight.classList.add("turn");
}, 2100);

setTimeout(() => {
    coverRight.style.zIndex = -1;
}, 2800);

//opening animation (page left or profile page animation)
setTimeout(() => {
    pageLeft.style.zIndex = 20;
}, 3200);

//opening animation (all page right animation)

pages.forEach((_, index) => {
    setTimeout(() => {
        reserveIndex();
       pages[pageNumber].classList.remove('turn');

       setTimeout(() => {
        reserveIndex();
        pages[pageNumber].style.zIndex = 10 + index;
       }, 500);
    }, (index + 1) * 200 + 2100);
})

// My web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyDMR5dAPNgqR6dpwncpYUEefq-IUBi3kOY",
    authDomain: "project-3d-cv.firebaseapp.com",
    databaseURL: "https://project-3d-cv-default-rtdb.firebaseio.com",
    projectId: "project-3d-cv",
    storageBucket: "project-3d-cv.appspot.com",
    messagingSenderId: "1030243747076",
    appId: "1:1030243747076:web:d81b66f3cc80f1cac97c51"
  };
//   initialize firebase
  firebase.initializeApp(firebaseConfig);

//   reference my database
var contactFormDB = firebase.database().ref("project-3d-cv");
document.getElementById("project-3d-cv").addEventListener("submit",submitForm)
function submitForm(e){
    e.preventDefault();
    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    var msgContent = getElementVal("msgContent");
    
    saveMessages(name, emailid, msgContent);
    // console.log(name, emailid, msgContent)
    
    // enable alert
    document.querySelector(".alert").style.display = "block";
    
}
const saveMessages = (name, emailid, msgContent) => {
    var newContactForm = contactFormDB.push();

newContactForm.set({
        name : name,
        emailid : emailid,
        msgContent : msgContent,
});
}
const getElementVal = (id) => {
    return document.getElementById(id).value;
}
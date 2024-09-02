/* ----- Arrow JAVASCRIPT ----- */
const arrowupEl = document.querySelector(".arrow-up");

arrowupEl.addEventListener("click",()=>{
    window.scrollTo(0, 0);
})
/* ----- PORTFOLIO JAVASCRIPT ------- */
const boxEl = document.querySelector(".box");
const box2El = document.querySelector(".box2");
const box3El = document.querySelector(".box3");
const filereviewEl = document.querySelector(".file-review");
const filereview2El = document.querySelector(".file-review2");
const filereview3El = document.querySelector(".file-review3");

boxEl.addEventListener("mouseover", ()=>{
    filereviewEl.classList.remove("active");
    boxEl.addEventListener("mouseout", ()=>{
        filereviewEl.classList.add("active");
    })
})
box2El.addEventListener("mouseover", ()=>{
    filereview2El.classList.remove("active");
    box2El.addEventListener("mouseout", ()=>{
       filereview2El.classList.add("active");
    })
})
box3El.addEventListener("mouseover", ()=>{
    filereview3El.classList.remove("active");
    box3El.addEventListener("mouseout", ()=>{
       filereview3El.classList.add("active");
    })
})

/* ----- SERVICES ----- */

const bodyservicesEl = document.querySelector(".body-services");

const btn4El = document.querySelector(".btn4");
const closinglogoEl = document.querySelector(".closing-logo");
const htmlreadmoreEl = document.querySelector(".html-readmore");

const btn5El = document.querySelector(".btn5");
const closinglogo2El = document.querySelector(".closing-logo2");
const javareadmoreEl = document.querySelector(".java-readmore");

const btn6El = document.querySelector(".btn6");
const closinglogo3El = document.querySelector(".closing-logo3");
const cssreadmoreEl = document.querySelector(".css-readmore");

btn4El.addEventListener("click", ()=>{
    bodyservicesEl.classList.add("active");
    htmlreadmoreEl.classList.remove("active")
});
closinglogoEl.addEventListener("click", ()=>{
    bodyservicesEl.classList.remove("active");
    htmlreadmoreEl.classList.add("active")
});

btn5El.addEventListener("click", ()=>{
    bodyservicesEl.classList.add("active");
    javareadmoreEl.classList.remove("active")
});
closinglogo2El.addEventListener("click", ()=>{
    bodyservicesEl.classList.remove("active");
    javareadmoreEl.classList.add("active")
});


btn6El.addEventListener("click", ()=>{
    bodyservicesEl.classList.add("active");
    cssreadmoreEl.classList.remove("active")
});
closinglogo3El.addEventListener("click", ()=>{
    bodyservicesEl.classList.remove("active");
    cssreadmoreEl.classList.add("active")
});


/* ----- POP UP MENU ---- */
const navlistEL = document.querySelector(".nav-list");
const menuEl = document.querySelector(".menu");
const xlogoEl = document.querySelector(".x-logo");

menuEl.addEventListener("click", ()=>{
    navlistEL.classList.remove("active")
    menuEl.classList.add("active");
});
xlogoEl.addEventListener("click", ()=>{
    navlistEL.classList.add("active")
    menuEl.classList.remove("active");
  
});









const mainContEl = document.querySelector(".container");
const appleLeftEl = document.querySelector(".left");
const samsungRightEl = document.querySelector(".right")

appleLeftEl.addEventListener("mouseenter", () => {
    mainContEl.classList.add("active-left");
})

appleLeftEl.addEventListener("mouseleave", () => {
    mainContEl.classList.remove("active-left");
})


samsungRightEl.addEventListener("mouseenter", () =>{
    mainContEl.classList.add("active-right");
})

samsungRightEl.addEventListener("mouseleave", () =>{
    mainContEl.classList.remove("active-right");
})
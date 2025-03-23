const scrollContainer = document.querySelector(".container");
const nextBtn = document.getElementById("nextbtn");
const backtBtn = document.getElementById("backtbtn");

scrollContainer.addEventListener("wheel", (e) =>{
    e.preventDefault();
    scrollContainer.scrollLeft += e.deltaY * 1;
});

nextBtn.addEventListener("click", ()=>{
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft = Math.min(scrollContainer.scrollLeft + 900, scrollContainer.scrollWidth - scrollContainer.clientWidth);
});

backtBtn.addEventListener("click", ()=>{
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft = Math.max(scrollContainer.scrollLeft - 900, 0);
});
//sticky header start
let head = document.getElementById("header");
const sticky = head.offsetTop;
window.addEventListener('scroll', () => {
const height = window.pageYOffset;
if(height > sticky){
    head.classList.add('sticky_header');
    
}
else{
    head.classList.remove('sticky_header');
}
});
//sticky header end

// //Side Bar start
// let menuBtn = document.getElementById("menu_btn");
// let SideBar = document.getElementById("sidebar");
// menuBtn.addEventListener('click', () => {
//   SideBar.style.display = "block";
// });
// SideBar.addEventListener('click', () => {
//     SideBar.style.display = "none";
//   });
// //Side Bar end

// for top menu
document.getElementById("menu").innerHTML =
  `<li class="list"><a href="../index.html">Home</a></li>
  <li class="list dropdown-toggle"><a href="#">Tutorials
  <a href="#" class="fa fa-angle-down"
          style="font-size: 1.5vw;"></a>
</a>
<div class="dropdown-content">
<a href="#">Data Analytics</a>
<a href="#">Java Script</a>
<a href="#">Python</a>
<a href="#">Java Script</a>
<a href="#">CS Subjects</a>
<a href="#">Linux</a>
<a href="#">Web Building</a>
<a href="#">Back End</a>
<a href="#" style = "background-color:#04AA6D;">More Courses...</a>
</div>
</li>
<li class="list dropdown-toggle"><a href="#">Courses MCQs
  <a href="#" class="fa fa-angle-down"
          style="font-size: 1.5vw;"></a>
</a>
<div class="dropdown-content">
  <a href="#">Class-8</a>
  <a href="#">Class-9</a>
  <a href="#">Class-10</a>
  <a href="#">Class-11</a>
  <a href="#">Class-12</a>
  <a href="#">B.Tech</a>
  <a href="#">M.Tech</a>
  <a href="#">MCA</a>
  <a href="#">BCA</a>
  <a href="#">Agriculture</a>
  <a href="more_courses_mcq.html" style = "background-color:#04AA6D;">More Courses...</a>
  
</div>
</li>
<li class="list dropdown-toggle"><a href="#">DSA
  <a href="#" class="fa fa-angle-down"
          style="font-size: 1.5vw;"></a>
</a>
<div class="dropdown-content">
  <a href="#">C Programs</a>
  <a href="#">Algorithms in C</a>
  <a href="#">Data Structure in C</a>
  <a href="#">C++ Programs</a>
  <a href="#">C++ Algorithms</a>
  <a href="#">Data Structure in C++</a>
  <a href="#">Jva Programs</a>
  <a href="#">Java Algorithms</a>
  <a href="#">Data Structure in Java</a>
  <a href="#">PythonPrograms</a>
  <a href="#">C# Programs</a>
</div>
</li>
<li class="list dropdown-toggle"><a href="#">Services</a></li>
<li class="list dropdown-toggle"><a href="#">Contact</a></li>`;
//for quick links
document.getElementById("text-widget").innerHTML =
  `<li><a href="#">About</a></li>|
<li><a href="#">Certifications</a></li>|
<li><a href="#">Internships</a></li>|
<li><a href="#">Jobs</a></li>|
<li><a href="#">Privacy Policy</a></li>|
<li><a href="#">Terms</a></li>|
<li><a href="#">Copyright</a></li>|
<li><a href="#">Contact</a></li>`;
//for social media links
document.getElementById("social-widgets").innerHTML =
  `<li><a href="#" class="fa fa-facebook"></a> </li>
<li><a href="#" class="fa fa-instagram"></a></li>
<li><a href="#" class="fa fa-twitter"></a></li>
<li><a href="#" class="fa fa-linkedin"></a></li>
<li> <a href="#" class="fa fa-pinterest"></a></li>
<li><a href="#" class="fa fa-youtube"></a></li>`;

// for footer text
document.getElementById("site-info").innerHTML = "<p>&copy; 2011 - 2024 ApnaSchool. All Rights Reserved</p>";

function myFunction() {
  var x = document.getElementById("menu");
  x.classList.toggle("menu");
  x.style.transition = ".3s linear";
}
function myMenu() {
  var showMenu = document.getElementById("content-lft");
  showMenu.style.display = "block";
}

tagButtons = document.querySelectorAll(".subnav")
tagButtons.forEach((button) => {
  button.addEventListener("click", () => {
    tagButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
  });
});
tagButton = document.querySelectorAll(".list")
tagButton.forEach((button) => {
  button.addEventListener("click", () => {
    // tagButton.forEach((btn) => btn.classList.add("dropdown-toggle"));
    button.classList.toggle("dropdown-toggle");
  });
});




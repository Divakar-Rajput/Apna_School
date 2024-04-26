// for top menu
document.getElementById("menu").innerHTML =
  `<li class="list dropdown-toggle"><a href="#">BranchWise MCQs
  <a href="#" class="fa fa-angle-down"
          style="font-size: 1.5vw;"></a>
</a>
<div class="dropdown-content">
  <a href="#">CS-IT-IS</a>
  <a href="#">ECE-EEE-EE</a>
  <a href="#">Civil</a>
  <a href="#">Mechanical</a>
  <a href="#">Chemical</a>
  <a href="#">Metallurgy</a>
  <a href="#">Mining</a>
  <a href="#">Instrumentation</a>
  <a href="#">Aerospace</a>
  <a href="#">Aeronautical</a>
  <a href="#">Biotchnology</a>
  <a href="#">Agriculture</a>
  <a href="#">Marine</a>
  <a href="#">Mechatronics</a>
  <a href="#">MCA</a>
  <a href="#">BCA</a>
</div>
</li>
<li class="list dropdown-toggle"><a href="#">School MCQs
  <a href="#" class="fa fa-angle-down"
          style="font-size: 1.5vw;"></a>
</a>
<div class="dropdown-content">
  <a href="#">Class-8</a>
  <a href="#">Class-9</a>
  <a href="#">Class-10</a>
  <a href="#">Class-11</a>
  <a href="#">Class-12</a>
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
<li class="list dropdown-toggle"><a href="#">Test
  <a href="#" class="fa fa-angle-down"
          style="font-size: 1.5vw;"></a>
</a>
<div class="dropdown-content">
  <a href="#">All-Test</a>
  <a href="#">Certification</a>
  <a href="#">Dowmload Certificates</a>
</div>
</li>
<li class="list dropdown-toggle"><a href="#">Job
  <a href="#" class="fa fa-angle-down"
          style="font-size: 1.5vw;"></a>
</a>
<div class="dropdown-content">
  <a href="#">All-Jobs</a>
  <a href="#">Job Test</a>
</div>
</li>
<li class="list dropdown-toggle"><a href="#">Internship</a></li>
<li class="list dropdown-toggle"><a href="#">Training</a></li>
<li class="list dropdown-toggle"><a href="#">Books</a></li>
<li class="list dropdown-toggle"><a href="#">Contact</a></li>`;
//for sub menu 
document.getElementById("sub_menu_container").innerHTML =
  `<li><a class="subnav" href="#">HTML</a></li>
<li><a class="subnav" href="#">CSS</a></li>
<li><a class="subnav" href="#">JAVASCRIPT</a></li>
<li><a class="subnav" href="#">SQL</a></li>
<li><a class="subnav" href="#">PYTHON</a></li>
<li><a class="subnav" href="#">JAVA</a></li>
<li><a class="subnav" href="#">PHP</a></li>
<li><a class="subnav" href="#">HOW_TO</a></li>
<li><a class="subnav" href="#">W3.CSS</a></li>
<li><a class="subnav" href="#">C</a></li>
<li><a class="subnav" href="#">C++</a></li>
<li><a class="subnav" href="#">C#</a></li>
<li><a class="subnav" href="#">BOOTSTRAP</a></li>
<li><a class="subnav" href="#">REACT</a></li>
<li><a class="subnav" href="#">MYSQL</a></li>
<li><a class="subnav" href="#">JQUERY</a></li>
<li><a class="subnav" href="#">EXCEL</a></li>
<li><a class="subnav" href="#">XML</a></li>
<li><a class="subnav" href="#">DJANGO</a></li>
<li><a class="subnav" href="#">NUMPY</a></li>
<li><a class="subnav" href="#">PANDAS</a></li>
<li><a class="subnav" href="#">NODEJS</a></li>
<li><a class="subnav" href="#">R</a></li>
<li><a class="subnav" href="#">TYPESCRIPT</a></li>
<li><a class="subnav" href="#">ANGULAR</a></li>
<li><a class="subnav" href="#">GIT</a></li>
<li><a class="subnav" href="#">POSTGRASQL</a></li>
<li><a class="subnav" href="#">MONODB</a></li>
<li><a class="subnav" href="#">ASP</a></li>
<li><a class="subnav" href="#">AI</a></li>
<li><a class="subnav" href="#">GO</a></li>
<li><a class="subnav" href="#">KOTLIN</a></li>
<li><a class="subnav" href="#">SASS</a></li>
<li><a class="subnav" href="#">VUE</a></li>
<li><a class="subnav" href="#">DSA</a></li>
<li><a class="subnav" href="#">GEN_AI</a></li>
<li><a class="subnav" href="#">SCIPY</a></li>
<li><a class="subnav" href="#">AWS</a></li>
<li><a class="subnav" href="#">CYBERSECURITY</a></li>
<li><a class="subnav" href="#">DATASCIENCE</a></li>`;
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

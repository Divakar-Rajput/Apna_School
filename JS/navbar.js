// for top menu
document.getElementById("menu").innerHTML =
  `<li class="list"><a href="/index.html">Home</a></li>
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



/* <script>
                            var internalFeatureRnd = Math.floor(Math.random() * (5 - 1)) + 1;
                            function addTryitSpaces(subject,spacesurl) {
                              let spacesButt = document.createElement("a");
                              let ribb = document.createElement("span");
                              spacesButt.innerHTML="Get your own " + subject + " Server"
                              spacesButt.classList.add("ws-black", "ws-hover-black", "spaces-tryit", "ga-featured");
                              spacesButt.href=spacesurl;
                              spacesButt.setAttribute("title", "W3Schools Spaces");
                              spacesButt.setAttribute("target", "_blank");
                            
                              var tryits = document.getElementsByClassName("w3-example");
                              for (var i = 0; i < tryits.length; i++) {
                                if (tryits[i].firstElementChild.nodeName == "H3") {
                                  tryits[i].firstElementChild.appendChild(spacesButt.cloneNode(true));
                                  break;
                                }
                              }
                            }
                            
                            var upimgsubject1 = "";
                            var uplink1 = "https://campus.w3schools.com/products/w3schools-full-access-course";
                            var upclass1 = "ga-top-fullaccess-jan";
                            var upimgstart1 = "/images/img_fullaccess_up_sep1_green_";
                            var upimgend1 = ".png";
                            var upimgsubject2 = "";
                            var uplink2 = "https://campus.w3schools.com/collections/package-deals";
                            var upclass2 = "ga-top-package-mar";
                            var upimgstart2 = "/images/img_package_up_";
                            var upimgend2 = ".png";
                            var upimgsubject3 = "";
                            var uplink3 = "https://campus.w3schools.com/collections/course-catalog";
                            var upclass3 = "ga-top-certification-generic";
                            var upimgstart3 = "/images/img_certification_up_generic_";
                            var upimgend3 = ".png";
                            var upimgsubject4 = "";        
                            var uplink4 = "https://campus.w3schools.com/collections/course-catalog/products/front-end-course";
                            var upclass4 = "ga-top-program";
                            var upimgstart4 = "/images/img_program_up_";
                            var upimgend4 = ".png";
                            
                            var upshowcase120 = document.getElementById("upperfeatureshowcase120");
                            var upshowcase160 = document.getElementById("upperfeatureshowcase160");
                            var upshowcase300 = document.getElementById("upperfeatureshowcase300");
                            var upshowcase3001 = document.getElementById("upperfeatureshowcase3001");
                            var upshowcaselink = document.getElementById("upperfeatureshowcaselink");
                            
                            switch (subjectFolder) {
                              case "accessibility":
                                break;
                              case "angular":
                                break;
                              case "aws":
                                break;
                              case "bootstrap":
                                break;
                              case "bootstrap4":
                                break;
                              case "bootstrap5":
                                break;
                              case "c":
                                break;
                              case "cpp":
                                break;
                              case "cs":
                                addTryitSpaces("C#","/cs/cs_server.php");    
                                break;
                              case "css":
                                upimgsubject3 = "css_";
                                uplink3 = "https://campus.w3schools.com/collections/course-catalog/products/css-course";
                                upclass3 = "ga-top-certification-generic-css";    
                                break;
                              case "cssref":
                                upimgsubject3 = "css_";
                                uplink3 = "https://campus.w3schools.com/collections/course-catalog/products/css-course";
                                upclass3 = "ga-top-certification-generic-css";    
                                break;
                              case "cybersecurity":
                                break;
                              case "datascience":
                                break;
                              case "django":
                                upimgsubject3 = "django_";
                                uplink3 = "https://campus.w3schools.com/collections/certifications/products/django-certification-exam";
                                upclass3 = "ga-top-certification-generic-django";
                                addTryitSpaces("Django","/django/django_server.php");
                                break;
                              case "excel":
                                break;
                              case "git":
                                break;
                              case "go":
                                break;
                              case "html":
                                upimgsubject3 = "html_";
                                uplink3 = "https://campus.w3schools.com/collections/course-catalog/products/html-course";
                                upclass3 = "ga-top-certification-generic-html";    
                                break;
                              case "java":
                                addTryitSpaces("Java","/java/java_server.asp");
                                break;
                              case "jquery":
                                break;
                              case "js":
                                upimgsubject3 = "js_";
                                uplink3 = "https://campus.w3schools.com/collections/course-catalog/products/javascript-course";
                                upclass3 = "ga-top-certification-generic-js";
                                break;
                              case "jsref":
                                upimgsubject3 = "js_";
                                uplink3 = "https://campus.w3schools.com/collections/course-catalog/products/javascript-course";
                                upclass3 = "ga-top-certification-generic-js";
                                break;
                              case "kotlin":
                                break;
                              case "mongodb":
                                break;
                              case "mysql":
                                upimgsubject3 = "sql_";
                                uplink3 = "https://campus.w3schools.com/collections/course-best-sellers/products/sql-course";
                                upclass3 = "ga-top-certification-generic-sql";
                                upimgsubject4 = "modernweb_";
                                uplink4 = "https://campus.w3schools.com/collections/course-best-sellers/products/learn-modern-web-development";
                                upclass4 = "ga-top-program-modernweb";
                                addTryitSpaces("SQL","/sql/sql_server.asp");
                                break;
                              case "nodejs":
                                addTryitSpaces("Node.js","/nodejs/nodejs_server.asp");
                                break; 
                              case "numpy":
                                upimgsubject3 = "python_";
                                uplink3 = "https://campus.w3schools.com/collections/course-best-sellers/products/python-course";
                                upclass3 = "ga-top-certification-generic-python";
                                upimgsubject4 = "dataanalytics_";
                                uplink4 = "https://campus.w3schools.com/collections/course-catalog/products/data-analytics-program";
                                upclass4 = "ga-top-program-dataanalytics";
                                addTryitSpaces("Python","/python/python_server.asp");   
                                break;
                              case "pandas":
                                upimgsubject3 = "python_";
                                uplink3 = "https://campus.w3schools.com/collections/course-best-sellers/products/python-course";
                                upclass3 = "ga-top-certification-generic-python";
                                upimgsubject4 = "dataanalytics_";
                                uplink4 = "https://campus.w3schools.com/collections/course-catalog/products/data-analytics-program";
                                upclass4 = "ga-top-program-dataanalytics";
                                addTryitSpaces("Python","/python/python_server.asp");   
                                break;
                              case "php":
                                upimgsubject4 = "webapp_";
                                uplink4 = "https://campus.w3schools.com/collections/course-best-sellers/products/web-application-development-course";
                                upclass4 = "ga-top-program-webapp";
                                addTryitSpaces("PHP","/php/php_server.asp");
                                break;
                              case "postgresql":
                                break;
                              case "r":
                                break;
                              case "react":
                                upimgsubject3 = "react_";
                                uplink3 = "https://campus.w3schools.com/collections/course-best-sellers/products/react-js-course";
                                upclass3 = "ga-top-certification-generic-react";
                                upimgsubject4 = "modernweb_";
                                uplink4 = "https://campus.w3schools.com/collections/course-best-sellers/products/learn-modern-web-development";
                                upclass4 = "ga-top-program-modernweb";
                                addTryitSpaces("React.js","/react/react_server.asp");
                                break;
                              case "sass":
                                break;
                              case "scipy":
                                addTryitSpaces("Python","/python/python_server.asp");   
                                break;    
                              case "sql":
                                upimgsubject3 = "sql_";
                                uplink3 = "https://campus.w3schools.com/collections/course-best-sellers/products/sql-course";
                                upclass3 = "ga-top-certification-generic-sql";
                                upimgsubject4 = "modernweb_";
                                uplink4 = "https://campus.w3schools.com/collections/course-best-sellers/products/learn-modern-web-development";
                                upclass4 = "ga-top-program-modernweb";
                                addTryitSpaces("SQL","/sql/sql_server.asp");   
                                break;
                              case "tags":
                                upimgsubject3 = "html_";
                                uplink3 = "https://campus.w3schools.com/collections/course-catalog/products/html-course";
                                upclass3 = "ga-top-certification-generic-html";
                                break;
                              case "typescript":
                                upimgsubject4 = "modernweb_";
                                uplink4 = "https://campus.w3schools.com/collections/course-best-sellers/products/learn-modern-web-development";
                                upclass4 = "ga-top-program-modernweb";    
                                addTryitSpaces("TypeScript","/spaces/");
                                break;
                              case "vue":
                                addTryitSpaces("Vue","/vue/vue_server.php");    
                                break;
                              case "w3css":
                                break;
                              case "xml":
                                break;
                              case "python":
                                upimgsubject3 = "python_";
                                uplink3 = "https://campus.w3schools.com/collections/course-best-sellers/products/python-course";
                                upclass3 = "ga-top-certification-generic-python";
                                upimgsubject4 = "dataanalytics_";
                                uplink4 = "https://campus.w3schools.com/collections/course-catalog/products/data-analytics-program";
                                upclass4 = "ga-top-program-dataanalytics";
                                addTryitSpaces("Python","/python/python_server.asp");
                                break;
                              default:
                                upimgsubject1 = "";
                                upimgsubject2 = "";
                                upimgsubject3 = "";
                                upimgsubject4 = "";        
                                loimgsubject1 = "";
                                loimgsubject2 = "";
                                loimgsubject3 = "";
                                loimgsubject4 = "";        
                            }
                            
                            upshowcaselink.classList.remove("ga-top-fullaccess-jan");
                            if (internalFeatureRnd == 1) {
                              upshowcase120.srcset = upimgstart1 + upimgsubject1 + "120" + upimgend1;
                              upshowcase160.srcset = upimgstart1 + upimgsubject1 + "160" + upimgend1;
                              upshowcase300.src = upimgstart1 + upimgsubject1 + "300" + upimgend1;
                              upshowcase3001.srcset = upimgstart1 + upimgsubject1 + "300" + upimgend1;
                              upshowcaselink.href = uplink1;
                              upshowcaselink.classList.add(upclass1);
                            } else if (internalFeatureRnd == 2) {
                              upshowcase120.srcset = upimgstart2 + upimgsubject2 + "120" + upimgend2;
                              upshowcase160.srcset = upimgstart2 + upimgsubject2 + "160" + upimgend2;
                              upshowcase300.src = upimgstart2 + upimgsubject2 + "300" + upimgend2;
                              upshowcase3001.srcset = upimgstart2 + upimgsubject2 + "300" + upimgend2;
                              upshowcaselink.href = uplink2;
                              upshowcaselink.classList.add(upclass2);
                            } else if (internalFeatureRnd == 3) {
                              upshowcase120.srcset = upimgstart3 + upimgsubject3 + "120" + upimgend3;
                              upshowcase160.srcset = upimgstart3 + upimgsubject3 + "160" + upimgend3;
                              upshowcase300.src = upimgstart3 + upimgsubject3 + "300" + upimgend3;
                              upshowcase3001.srcset = upimgstart3 + upimgsubject3 + "300" + upimgend3;
                              upshowcaselink.href = uplink3;
                              upshowcaselink.classList.add(upclass3);
                            } else if (internalFeatureRnd == 4) {
                              upshowcase120.srcset = upimgstart4 + upimgsubject4 + "120" + upimgend4;
                              upshowcase160.srcset = upimgstart4 + upimgsubject4 + "160" + upimgend4;
                              upshowcase300.src = upimgstart4 + upimgsubject4 + "300" + upimgend4;
                              upshowcase3001.srcset = upimgstart4 + upimgsubject4 + "300" + upimgend4;
                              upshowcaselink.href = uplink4;
                              upshowcaselink.classList.add(upclass4);
                            }
                            </script> */


                            // <script>
                            //         function secondSnigel() {
                            //           if(window.adngin && window.adngin.adnginLoaderReady) {
                            //             if (Number(w3_getStyleValue(document.getElementById("main"), "height").replace("px", "")) > 2200) {         
                            //               if (document.getElementById("adngin-mid_content-0")) {
                            //                 adngin.queue.push(function(){  adngin.cmd.startAuction([
                            //                   {placement: "adngin-sidebar_sticky-0", adUnit: "sidebar_sticky" },
                            //                   {placement: "adngin-mid_content-0", adUnit: "mid_content" },
                            //                   ]);
                            //                 });
                            //               } else {
                            //                 adngin.queue.push(function(){  adngin.cmd.startAuction([
                            //                   {placement: "adngin-sidebar_sticky-0", adUnit: "sidebar_sticky" },
                            //                   ]);
                            //                 });
                            //               }
                            //             } else {
                            //               if (document.getElementById("adngin-mid_content-0")) {
                            //                 adngin.queue.push(function(){  adngin.cmd.startAuction([
                            //                   {placement: "adngin-mid_content-0", adUnit: "mid_content" },
                            //                   ]);
                            //                 });
                            //               }
                            //             }
                            //           } else {
                            //             window.addEventListener('adnginLoaderReady', function() {
                            //               if (Number(w3_getStyleValue(document.getElementById("main"), "height").replace("px", "")) > 2200) {
                            //                 if (document.getElementById("adngin-mid_content-0")) {
                            //                   adngin.queue.push(function(){  adngin.cmd.startAuction([
                            //                     {placement: "adngin-sidebar_sticky-0", adUnit: "sidebar_sticky" },
                            //                     {placement: "adngin-mid_content-0", adUnit: "mid_content" },
                            //                     ]);
                            //                   });
                            //                 } else {
                            //                   adngin.queue.push(function(){  adngin.cmd.startAuction([
                            //                     {placement: "adngin-sidebar_sticky-0", adUnit: "sidebar_sticky" },
                            //                     ]);         
                            //                   });
                            //                 }
                            //               } else {
                            //                 if (document.getElementById("adngin-mid_content-0")) {
                            //                   adngin.queue.push(function(){  adngin.cmd.startAuction([
                            //                     {placement: "adngin-mid_content-0", adUnit: "mid_content" },
                            //                     ]);
                            //                   });
                            //                 }
                            //               }
                            //             });
                            //           }
                            //         }
                            //       </script>


                            // <script>
                            // uic_r_c()
                            // </script>


                            // <script>
                            // var foldername;
                            // function getCourseFolder() {
                            //   var pathname = window.location.pathname;
                            //   if (pathname.substr(0,1) == "/") {pathname = pathname.substr(1);}
                            //   pos = pathname.indexOf("/");
                            //   foldername = pathname.substr(0, pos);
                            //   foldername = foldername.toUpperCase();
                            //   certLink = "";
                            //   switch (foldername) {
                            //   case "CPP":
                            //     certLink = "https://campus.w3schools.com/collections/course-catalog/products/c-course-1?utm_source=classic&utm_medium=tutorials&utm_campaign=first-page-ad";
                            //     foldername = "C++";
                            //     break;
                            //   case "JAVA":
                            //     certLink = "https://campus.w3schools.com/collections/course-catalog/products/java-course?utm_source=classic&utm_medium=tutorials&utm_campaign=first-page-ad";
                            //     break;
                            //   case "BOOTSTRAP4":
                            //     certLink = "https://campus.w3schools.com/collections/course-catalog/products/bootstrap-4-course?utm_source=classic&utm_medium=tutorials&utm_campaign=first-page-ad";
                            //     break;  
                            //   case "XML":
                            //     certLink = "https://campus.w3schools.com/collections/course-catalog/products/xml-course?utm_source=classic&utm_medium=tutorials&utm_campaign=first-page-ad";
                            //     break;
                            //   case "JQUERY":
                            //     certLink = "https://campus.w3schools.com/collections/course-catalog/products/jquery-course?utm_source=classic&utm_medium=tutorials&utm_campaign=first-page-ad";
                            //     break;
                            //   case "ACCESSIBILITY":
                            //     certLink = "https://campus.w3schools.com/collections/course-catalog/products/accessibility-course?utm_source=classic&utm_medium=tutorials&utm_campaign=first-page-ad";
                            //     break;
                            //   case "BOOTSTRAP":
                            //     certLink = "https://campus.w3schools.com/collections/course-catalog/products/bootstrap-course?utm_source=classic&utm_medium=tutorials&utm_campaign=first-page-ad";
                            //     break;
                            //   case "HTML":
                            //     certLink = "https://campus.w3schools.com/collections/course-catalog/products/html-course?utm_source=classic&utm_medium=tutorials&utm_campaign=first-page-ad";
                            //     break;
                            //   case "CSS":
                            //     certLink = "https://campus.w3schools.com/collections/course-catalog/products/css-course?utm_source=classic&utm_medium=tutorials&utm_campaign=first-page-ad";
                            //     break;
                            //   case "JS":
                            //     certLink = "https://campus.w3schools.com/collections/course-catalog/products/javascript-course?utm_source=classic&utm_medium=tutorials&utm_campaign=first-page-ad";
                            //     foldername = "JavaScript";
                            //     break;
                            //   case "REACT":
                            //     subjectText = "React.js";
                            //     certLink = "https://campus.w3schools.com/collections/course-catalog/products/react-js-course?utm_source=classic&utm_medium=tutorials&utm_campaign=first-page-ad";
                            //     break;
                            //   case "SQL":
                            //     certLink = "https://campus.w3schools.com/collections/course-catalog/products/sql-course?utm_source=classic&utm_medium=tutorials&utm_campaign=first-page-ad";
                            //     break;
                            //   case "PHP":
                            //     certLink = "https://campus.w3schools.com/collections/course-catalog/products/php-course?utm_source=classic&utm_medium=tutorials&utm_campaign=first-page-ad";
                            //     break;
                            //   case "CYBERSECURITY":
                            //     certLink = "https://campus.w3schools.com/collections/course-catalog/products/cyber-security-course?utm_source=classic&utm_medium=tutorials&utm_campaign=first-page-ad";
                            //     foldername = "Cyber Security";
                            //     break;
                            //   case "R":
                            //     certLink = "https://campus.w3schools.com/collections/course-catalog/products/r-course?utm_source=classic&utm_medium=tutorials&utm_campaign=first-page-ad";
                            //     break;
                            //   case "NUMPY":
                            //     certLink = "https://campus.w3schools.com/collections/course-catalog/products/numpy-course?utm_source=classic&utm_medium=tutorials&utm_campaign=first-page-ad";
                            //     break;
                            //   case "TYPESCRIPT":
                            //     certLink = "https://campus.w3schools.com/collections/course-catalog/products/learn-typescript?utm_source=classic&utm_medium=tutorials&utm_campaign=first-page-ad";
                            //     break; 
                            //   case "PANDAS":
                            //     certLink = "https://campus.w3schools.com/collections/course-catalog/products/pandas-course?utm_source=classic&utm_medium=tutorials&utm_campaign=first-page-ad";
                            //     break;
                            //   case "PYTHON":
                            //     certLink = "https://campus.w3schools.com/collections/course-catalog/products/python-course?utm_source=classic&utm_medium=tutorials&utm_campaign=first-page-ad";
                            //     break;
                            //   case "CS":
                            //     certLink = "https://campus.w3schools.com/collections/course-catalog/products/c-course?utm_source=classic&utm_medium=tutorials&utm_campaign=first-page-ad";
                            //     foldername = "C#";
                            //     break;    
                            //   default:
                            //     certLink = "https://campus.w3schools.com/collections/course-catalog?utm_source=classic&utm_medium=tutorials&utm_campaign=first-page-ad";
                            //   }
                            //   document.getElementById("cert_firstpage").href = certLink;
                            //   if (foldername == "QUIZTEST" || foldername == "EXERCISES") {
                            //     document.getElementById("hey").innerText = "a";
                            //   }
                            //   if (foldername == "QUIZTEST" || foldername == "EXERCISES") foldername = "";
                            //   document.getElementById("coursetopic").innerText = foldername;
                            // }
                            // getCourseFolder();
                            // </script>
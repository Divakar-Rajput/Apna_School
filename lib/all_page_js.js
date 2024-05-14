var array_search_suggestions = [
    ["html", "/Apna_School/tutorials/html/default.html", "HTML Tutorial"],
    ["html", "/Apna_School/tutorials/html/html_intro.html", "HTML Introduction"],
    ["html", "/Apna_School/tutorials/html/html_basic.html", "HTML Basic"],
    ["html", "/Apna_School/tutorials/html/html_elements.html", "HTML Elements"],
    ["html", "/Apna_School/tutorials/html/html_attributes.html", "HTML Attributes"],
    ["html", "/Apna_School/tutorials/html/html_headings.html", "HTML Headings"],
    ["html", "/Apna_School/tutorials/html/html_paragraphs.html", "HTML Paragraph"],
    ["html", "/Apna_School/tutorials/html/html_styles.html", "HTML Styles"],
    ["html", "/Apna_School/tutorials/html/html_formatting.html", "HTML Text Formatting"],
    ["html", "/Apna_School/tutorials/html/html_formatting.html", "HTML Formatting"],
    ["html", "/Apna_School/tutorials/html/html_quotatian_elements.html", "HTML Quatatons"],
    ["html", "/Apna_School/tutorials/html/html_comments.html", "HTML Comments"],
    ["html", "/Apna_School/tutorials/html/html_colors.html", "HTML Colors"],
    ["html", "/Apna_School/tutorials/html/html_colors_rgb.html", "HTML Colors RBG & RGBA"],
    ["html", "/Apna_School/tutorials/html/html_colors_hex.html", "HTML  Hexadecimal Colors"],
    ["html", "/Apna_School/tutorials/html/html_colors_hsl.html", "HTML HSL & HSLA colors"],
    ["html", "/Apna_School/tutorials/html/html_css.html", "HTML Style-CSS"],
  ];

  (
    function setThemeMode() {
      var x = localStorage.getItem("preferredmode");
      var y = localStorage.getItem("preferredpagemode");
      if (x == "dark") {
        document.body.className += " darktheme";
      }
      if (y == "dark") {
        document.body.className += " darkpagetheme";
      }
    })();


    activate_subtopnav_scroll = 0;
    from_scrollpos = -1;
    current_scrollpos = -1;
    goto_tut = 1;
    function startscrolling_subtopnav(event) {
      event.preventDefault();
      from_scrollpos = event.clientX;
      activate_subtopnav_scroll = 1;
    }
    function scrolling_subtopnav(event) {
      current_scrollpos = event.clientX;
      if (current_scrollpos == from_scrollpos) return false;
      event.preventDefault();
      if (event.buttons == 0) return false;
      var scrollspeed;
      if (activate_subtopnav_scroll == 1) {
        goto_tut = 0;
        scrollspeed = current_scrollpos - from_scrollpos;
        scrollspeed = Math.abs(scrollspeed);
        if (current_scrollpos < from_scrollpos) {
          document.getElementById("scroll_left_btn").style.display = "block";
          document.getElementById("subtopnav").scrollLeft += scrollspeed;
        } else {
          document.getElementById("subtopnav").scrollLeft -= scrollspeed;
        }
        scrollbtn_visible();
        from_scrollpos = current_scrollpos;
      }
    }
    function endscrolling_subtopnav(event) {
      event.preventDefault();
      activate_subtopnav_scroll = 0;
      from_scrollpos = -1;
      current_scrollpos = -1;
    }
    function pellessii(event) {
      if (goto_tut == 0) {
        event.preventDefault();
        goto_tut = 1;
        return false;
      }
    }
    var scrollspeed = 1;
    var scrollinterval
    function scrollmenow(n) {
      scrollinterval = window.setInterval(function () {
        scrollspeed = scrollspeed * 1.1;
        if (scrollspeed > 10) { scrollspeed = 10; }
        if (n == 1) {
          document.getElementById("subtopnav").scrollLeft += scrollspeed;
        } else {
          document.getElementById("subtopnav").scrollLeft -= scrollspeed;

        }
        scrollbtn_visible();
      }, 10);
    }

    var p_s_l = 0;
    var x_s_l = 0;
    function scrollbtn_visible() {
      var c_s_l = document.getElementById("subtopnav").scrollLeft;
      if (c_s_l < 1) {
        document.getElementById("scroll_left_btn").style.display = "none";
      } else {
        document.getElementById("scroll_left_btn").style.display = "block";
      }
      if (c_s_l > 1 && c_s_l == p_s_l) {
        x_s_l++;
      } else {
        x_s_l = 0;
      }
      if (x_s_l > 3) {
        document.getElementById("scroll_right_btn").style.display = "none";
      } else {
        document.getElementById("scroll_right_btn").style.display = "block";
      }
      p_s_l = document.getElementById("subtopnav").scrollLeft;
    }

    function stopscrollmenow() {
      scrollspeed = 1;
      window.clearInterval(scrollinterval);
    }

    //window.addEventListener("load", subtopnav_intoview);

    function subtopnav_intoview() {
      var a, b, c, d, i = 0;
      a = document.getElementById("subtopnav");
      if (!a || !a.getElementsByClassName) { return false; }
      var x = a.getElementsByTagName("A");
      b = document.location.pathname;
      if (b.indexOf("/python/numpy/") > -1 || b.indexOf("/python/pandas/") > -1 || b.indexOf("/python/scipy/") > -1) {
        for (i = 0; i < x.length; i++) {
          c = x[i].pathname;
          if ((b.indexOf("/python/numpy/") > -1 && c == "/python/numpy/default.html") || (b.indexOf("/python/pandas/") > -1 && c == "/python/pandas/default.html") || (b.indexOf("/python/scipy/") > -1 && c == "/python/scipy/index.php")) {
            x[i].className += " active";
            break;
          }
        }
      } else {
        for (i = 0; i < x.length; i++) {
          c = x[i].pathname;
          if (c.indexOf("void(0)") == -1 && b.substr(0, b.indexOf("/", 1)) == c.substr(0, c.indexOf("/", 1))) {
            x[i].className += " active";
            break;
          }
        }
      }
      d = a.getElementsByClassName("active");
      if (d.length < 1) { return false; }
      while (!amIIntoView(a, d[0])) {
        i++
        if (i > 1000) { break; }
        a.scrollLeft += 10;
      }
      scrollbtn_visible();
    }

    function amIIntoView(x, y) {
      var a = x.scrollLeft;
      var b = a + window.innerWidth;
      var ytop = y.offsetLeft;
      var c = y.offsetWidth;
      var d = 0;
      if (document.getElementById("btn_container_subtopnav")) d = document.getElementById("btn_container_subtopnav").offsetWidth;
      var ybottom = ytop + c + d + 20;
      return ((ybottom <= b) && (ytop >= a));
    }

    subtopnav_intoview();


    function openLangTab(evtEd, codeName) {
        var indexEditor, proglanguage, progtablinks;
        proglanguage = document.getElementsByClassName("proglang");
        for (indexEditor = 0; indexEditor < proglanguage.length; indexEditor++) {
          proglanguage[indexEditor].style.display = "none";
        }
        progtablinks = document.getElementsByClassName("codeeditorbr-tablink");
        for (indexEditor = 0; indexEditor < proglanguage.length; indexEditor++) {
          progtablinks[indexEditor].className = progtablinks[indexEditor].className.replace(" ws-grey", "");
        }
        document.getElementById(codeName).style.display = "block";
        evtEd.currentTarget.className += " ws-grey";
      }


      function open_search(elmnt, sfb) {
        var a = document.getElementById("googleSearch");
        if (a.style.visibility == "hidden" && a.style.display == "") {
          a.style.visibility = "";
          a.style.display = "none";
        }
        if (sfb == false) {
          if (a.style.display == "") {
            a.style.visibility = "";
            a.style.display = "none";
            //elmnt.innerHTML = "<i class='fa'>&#xe802;</i>";    
          } else {
            a.style.display = "";
            a.style.visibility == "hidden"
            if (window.innerWidth > 700) {
              a.style.width = "40%";
            } else {
              a.style.width = "80%";
            }
            window.setTimeout(function () {
              if (document.getElementById("gsc-i-id1")) {
                document.getElementById("gsc-i-id1").focus();
              }
            }, 400);
          }
        } else {
          if (a.style.display == "") {
            a.style.visibility = "";
            a.style.display = "none";
          } else {
            a.style.display = "";
            a.style.visibility == "hidden"
          }
          a.style.visibility = "hidden";
          a.style.display = "";
        }
      }

      var searchFromBox = false;
      function click_learntocode_search_btn() {
        var x = document.getElementsByClassName("search_item");
        if (x.length == 0) {
          cc = 1;
        }
        for (i = 0; i < x.length; i++) {
          if (x[i].className.indexOf("search_active") > -1) {
            n = x[i].href;
            if (n.indexOf("search_entire_w3schools") > -1) {
              cc = 1;
            }
            break;
          }
        }
        if (cc == 1) {
          searchFromBox = true;
          submit_search_form();
        } else {
          window.location = n;
        }
      }
      function find_search_results(inp) {
        var a, val, i, l, resultIndexes = [], resultTexts = [], html = "", classAtt = "", pos1, posNext, cc, c0, c1, c2, searchArray = array_search_suggestions;
        a = document.getElementById("listofsearchresults");
        a.innerHTML = "";
        a.style.display = "none";
        document.getElementById("search2").style.borderBottomLeftRadius = "25px";
        val = inp.value.toUpperCase();
        if (val == "") return false;
        for (i = 0; i < searchArray.length; i++) {
          if (searchArray[i][0].toUpperCase().substr(0, val.length) == val || searchArray[i][2].toUpperCase().substr(0, val.length) == val) {
            if (resultTexts.indexOf(searchArray[i][2]) == -1) {
              resultIndexes.push(i);
              resultTexts.push(searchArray[i][2]);
              if (resultIndexes.length > 5) break;
            }
          }
        }
        for (i = 0; i < searchArray.length; i++) {
          if (resultIndexes.indexOf(i) == -1 && (searchArray[i][0].toUpperCase().indexOf(val) > -1 || searchArray[i][2].toUpperCase().indexOf(val) > -1)) {
            if (resultTexts.indexOf(searchArray[i][2]) == -1) {
              resultIndexes.push(i);
              resultTexts.push(searchArray[i][2]);
              if (resultIndexes.length > 5) break;
            }
          }
        }
        //if (resultIndexes.length == 0) return false;
        document.getElementById("search2").style.borderBottomLeftRadius = "0";
        a.style.display = "block";
        for (i = 0; i < resultIndexes.length; i++) {
          cc = searchArray[resultIndexes[i]][2];
          link = searchArray[resultIndexes[i]][1];
          pos1 = cc.toUpperCase().indexOf(val);
          dd = "";
          while (pos1 > -1) {
            c0 = cc.substr(0, pos1);
            c1 = "<span class='span_search'>" + cc.substr(pos1, val.length) + "</span>";
            c2 = cc.substr(pos1 + val.length);
            dd += c0 + c1;
            posNext = c2.toUpperCase().indexOf(val);
            if (posNext > -1) {
              cc = c2;
              pos1 = posNext;
            } else {
              cc = dd + c2;
              pos1 = -1;
            }
          }
          classAtt = "";
          if (html == "") classAtt = " search_active";
          // html += "<a class='search_item" + classAtt + "' href='"+ + searchArray[resultIndexes[i]][1] + "'>" + cc + "</a>";
          html +=`<a class="search_item" href="${link}"> ${cc}</a>`;
        }
        if (resultIndexes.length == 0) {
          classAtt = "";
          if (html == "") classAtt = " search_active";
          var google_url = "https://www.google.com/search?q=";
          var input_value = document.getElementById("search2").value;
          // html += "<a class='search_item" + classAtt + "' onclick='click_search_w3schools_link(event)' href='search_entire_ApnaSchool'>No matches found</a>";
          html += `<a class ="search_item" href = "${google_url}${input_value} "> Search on Google</a>`;
        };
        a.innerHTML = html;
      }
      function click_search_w3schools_link(event) {
        event.preventDefault();
        submit_search_form();
      }
      function key_pressed_in_search(event) {
        var x, n, nn, i, cc = 0;
        var keycode = event.keyCode;
        //console.log(keycode);
        if (keycode == 38 || keycode == 40) { //up || down
          x = document.getElementsByClassName("search_item");
          for (i = 0; i < x.length; i++) {
            if (x[i].className.indexOf("search_active") > -1) {
              x[i].className = "search_item";
              n = i;
              break;
            }
          }
          if (keycode == 38) {
            nn = n - 1;
            if (nn < 0) nn = 0;
          }
          if (keycode == 40) {
            nn = n + 1;
            if (nn >= x.length) nn = nn - 1;
          }
          x[nn].className = "search_item search_active";
        }
        if (keycode == 13) {  //enter
          event.preventDefault();
          x = document.getElementsByClassName("search_item");
          if (x.length == 0) {
            cc = 1;
          }
          for (i = 0; i < x.length; i++) {
            if (x[i].className.indexOf("search_active") > -1) {
              n = x[i].href;
              if (n.indexOf("search_entire_w3schools") > -1) {
                cc = 1;
              }
              break;
            }
          }
          if (cc == 1) {
            searchFromBox = true;
            submit_search_form();
          } else {
            window.location = n;
          }
        }
      }

      function submit_search_form() {
        searchFromBox = true;
        gSearch();
        var delayInMilliseconds = 100; //0.1 second
        setTimeout(execute_google_search, delayInMilliseconds);
      }

      function execute_google_search() {
        if (typeof google == 'object') {
          google.search.cse.element.getElement("standard0").execute(document.getElementById("search2").value);
        } else {
          setTimeout(execute_google_search, 100);
        }
      }

      document.body.addEventListener("click", function (event) {
        var a, x = event.srcElement;
        if (x.id == "search2" || x.id == "learntocode_searchbtn" || x.id == "learntocode_searchicon" || x.classList.contains("search_item")) {
        } else {
          a = document.getElementById("listofsearchresults");
          a.innerHTML = "";
          a.style.display = "none";
          document.getElementById("search2").style.borderBottomLeftRadius = "25px";
          if (searchFromBox == true) {
            document.getElementById("googleSearch").style.display = "none";
            document.getElementById("googleSearch").style.visibility = "block";
          }
          searchFromBox = false;
        }
      });
      document.getElementById('copyright').innerText = " Copyright © 2023-2025 websitename - All rights reserved";

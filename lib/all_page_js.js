var array_search_suggestions = [
    ["html", "/tutorials/html/default.html", "HTML Tutorial"],
    ["html", "/tutorials/html/html_intro.html.html", "HTML Introduction"],
    ["html", "/tutorials/html/html_basic.html", "HTML Basic"],
    ["html", "/tutorials/html/html_elements.html", "HTML Elements"],
    ["html", "/tutorials/html/html_attributes.html", "HTML Attributes"],
    ["html", "/tutorials/html/html_headings.html", "HTML Headings"],
    ["html", "/tutorials/html/html_paragraphs.html", "HTML Paragraph"],
    ["html", "/tutorials/html/html_styles.html", "HTML Styles"],
    // ["js", "/js/default.html", "JavaScript Tutorial"],
    // ["python", "/python/default.html", "Python Tutorial"],
    // ["sql", "/sql/default.html", "SQL Tutorial"],
    // ["php", "/php/default.html", "PHP Tutorial"],
    // ["java", "/java/default.html", "JAVA Tutorial"],
    // ["c", "/c/index.php", "C Tutorial"],
    // ["c++", "/cpp/default.html", "C++ Tutorial"],
    // ["c#", "/cs/index.php", "C# Tutorial"],
    // ["jquery", "/jquery/default.html", "jQuery Tutorial"],
    // ["w3css", "/w3css/default.html", "W3.CSS Tutorial"],
    // ["bootstrap 3", "/bootstrap/default.html", "Bootstrap3 Tutorial"],
    // ["bootstrap 4", "/bootstrap4/default.html", "Bootstrap4 Tutorial"],
    // ["bootstrap 5", "/bootstrap5/index.php", "Bootstrap5 Tutorial"],
    // ["r", "/r/default.html", "R Tutorial"],
    // ["html lists", "/html/html_lists.html", "HTML List Tutorial", "li"],
    // ["html lists", "/html/html_lists_ordered.html", "HTML Ordered Lists", ["li", "or"]],
    // ["html lists", "/html/html_lists_unordered.html", "HTML Unordered Lists", ["li", "or"]],
    // ["css lists", "/css/css_list.html", "CSS Styling Lists", "li"],
    // ["", "/python/python_lists.html", "Python Lists", "li"],
    // ["", "/js/js_arrays.html", "JavaScript Array Tutorial", "ar"],
    // ["", "/jsref/jsref_obj_array.html", "JavaScript Array Object", "ar"],
    // ["", "/js/js_array_methods.html", "JavaScript Array Methods", "ar"],
    // ["", "/python/python_arrays.html", "Python Arrays", "ar"],
    // ["", "/php/php_arrays.html", "PHP Array Tutorial", "ar"],
    // ["", "/java/java_arrays.html", "Java Array Tutorial", "ar"],
    // ["kotlin", "/kotlin/index.php", "KOTLIN Tutorial"],
    // ["mysql", "/mysql/default.html", "MySQL Tutorial"],
    // ["postgresql", "/postgresql/index.php", "PostgreSQL Tutorial"],
    // ["nodejs", "/nodejs/default.html", "Node.js Tutorial"],
    // ["react.js", "/react/default.html", "REACT Tutorial"],
    // ["vuejs", "/vue/index.php", "Vue.js Tutorial"],
    // ["json", "/js/js_json.html", "JSON Tutorial"],
    // ["angularjs", "/angular/default.html", "AngularJS Tutorial"],
    // ["w3js", "/w3js/default.html", "W3.JS Tutorial"],
    // ["xml", "/xml/default.html", "XML Tutorial"],
    // ["sass", "/sass/default.php", "SASS Tutorial"],
    // ["icons", "/icons/default.html", "Icons Tutorial"],
    // ["", "/icons/icons_reference.html", "Font Awesome Icons"],
    // ["", "/howto/howto_google_fonts.html", "Google Fonts"],
    // ["rwd", "/css/css_rwd_intro.html", "Responsive Web Design Tutorial"],
    // ["graphics", "/graphics/default.html", "Graphics Tutorial"],
    // ["graphics", "/graphics/svg_intro.html", "SVG Tutorial"],
    // ["canvas", "/graphics/canvas_intro.html", "Canvas Tutorial"],
    // ["rhtmlberry pi", "/nodejs/nodejs_rhtmlberrypi.html", "RhtmlberryPi Tutorial"],
    // ["cybersecurity", "/cybersecurity/index.php", "Cyber Security Tutorial"],
    // ["colors", "/colors/default.html", "Colors Tutorial"],
    // ["typescript", "/typescript/index.php", "TypeScript Tutorial"],
    // ["git", "/git/default.html", "Git Tutorial"],
    // ["matplotlib", "/python/matplotlib_intro.html", "Matplotlib Tutorial"],
    // ["numpy", "/python/numpy/default.html", "NumPy Tutorial"],
    // ["pandas", "/python/pandas/default.html", "Pandas Tutorial"],
    // ["scipy", "/python/scipy/index.php", "SciPy Tutorial"],
    // ["html", "/html/default.html", "html Tutorial"],
    // ["accessibility", "/accessibility/index.php", "Accessibility Tutorial"],
    // ["appml", "/appml/default.html", "AppML Tutorial"],
    // ["go", "/go/index.php", "GO Tutorial"],
    // ["DSA", "/dsa/index.php", "Data Structures and Algorithms"],
    // ["excell", "/excel/index.php", "Excel Tutorial"],
    // ["google sheets", "/googlesheets/index.php", "Google Sheets Tutorial"],
    // ["ml", "/python/python_ml_getting_started.html", "Machine Learning Tutorial"],
    // [" artificial intelligence", "/ai/default.html", "AI Tutorial"],
    // ["statistics", "/statistics/index.php", "Statistics Tutorial"],
    // ["data science", "/datascience/default.html", "Data Science Tutorial"],
    // ["code editor", "/tryit/tryit.html?filename=tryhtml_hello", "Tryit Editor"],
    // ["color picker", "/colors/colors_picker.html", "Color Picker"],
    // ["code game", "/codegame/index.html", "Code Game"],
    // ["exercises", "/exercises/index.php", "Exercises"],
    // ["quizzes", "/quiztest/default.html", "Quizzes"],
    // ["templates", "/w3css/w3css_templates.html", "W3.CSS Templates"],
    // ["courses", "https://shop.w3schools.com/collections/course-catalog", "Courses"],
    // ["certificates", "https://shop.w3schools.com/collections/certifications", "Certificates"],
    // ["spaces", "/spaces/index.php", "W3Schools Spaces"],
    // ["website", "/spaces/index.php", "Create website"],
    // ["how to", "/howto/default.html", "How-To Library"],
    // ["aws cloud", "/aws/index.php", "AWS Cloud Tutorial"],
    // ["btn", "/tags/tag_button.html", "HTML Button Tag", ["bu", "btn"]],
    // ["btn", "/css/css3_buttons.html", "CSS Buttons", ["bu", "btn"]],
    // ["btn", "/bootstrap5/bootstrap_buttons.php", "Bootstrap 5 Buttons", ["bu", "btn"]],
    // ["btn", "/bootstrap5/bootstrap_button_groups.php", "Bootstrap 5 Button Groups", ["bu", "btn"]],
    // ["btn", "/w3css/w3css_buttons.html", "W3.CSS Buttons", ["bu", "btn"]],
    // ["btn", "/howto/howto_css_round_buttons.html", "How to create round buttons", ["bu", "btn"]],
    // ["", "/html/html_links.html", "HTML Button as a link", ["bu", "btn"]],
    // ["tbl", "/html/html_tables.html", "HTML Tables"],
    // ["tbl", "/tags/tag_table.html", "HTML Table Tag", ["ta", "tb"]],
    // ["tbl", "/css/css_table.html", "CSS Styling Tables", ["ta", "tb"]],
    // ["tbl", "/sql/sql_create_table.html", "SQL CREATE TABLE", ["ta", "tb"]],
    // ["tbl", "/html/html_table_borders.html", "HTML Table Borders", ["ta", "tb"]],
    // ["tbl", "/html/html_table_headers.html", "HTML Table Headers", ["ta", "tb"]],
    // ["", "/tags/tag_div.html", "HTML div Tag"],
    // ["div", "/html/html_div.html", "HTML div Tutorial", "div"],
    // ["div", "/html/html_blocks.html", "HTML Block Elements", "div"],
    // ["", "/html/html_form_input_types.html", "HTML Input Types", "in"],
    // ["", "/tags/tag_input.html", "HTML Input Tag", "in"],
    // ["", "/html/html_form_attributes.html", "HTML Input Attributes", "in"],
    // ["", "/python/ref_func_input.html", "Python input() Function", ["in", "us"]],
    // ["", "/c/c_user_input.php", "C User Input", ["in", "us"]],
    // ["", "/cpp/cpp_user_input.html", "C++ User Input", ["in", "us"]],
    // ["", "/css/css_border.html", "CSS Borders"],
    // ["", "/cssref/pr_border.php", "CSS border Property"],
    // ["", "/html/html_table_borders.html", "HTML Table Borders", "bo"],
    // ["", "/html/html_forms.html", "HTML Forms"],
    // ["", "/howto/howto_css_login_form.html", "How to create a login form"],
    // ["", "/html/html_form_elements.html", "HTML Form Elements"],
    // ["", "/tags/tag_form.html", "HTML form Tag"],
    // ["", "/html/html_forms_attributes.html", "HTML Form Attributes"],
    // ["", "/cssref/sel_hover.php", "CSS hover Selector"],
    // ["css hover", "/css/css3_transitions.html", "CSS Transitions"],
    // ["img", "/html/html_images.html", "HTML Images"],
    // ["img", "/css/css_background_image.html", "CSS Background Images"],
    // ["img", "/cssref/pr_background-image.php", "CSS background-image Property"],
    // ["img", "/html/html_images_imagemap.html", "HTML Image Map"],
    // ["img", "/howto/howto_css_image_overlay.html", "How to create image hover effects"],
    // ["", "/css/css_background.html", "CSS Backgrounds"],
    // ["", "/cssref/css3_pr_background.php", "CSS background Property"],
    // ["", "/html/html_images_background.html", "HTML Background Images"],
    // ["", "/css/css_font.html", "CSS Fonts"],
    // ["", "/cssref/pr_font_font.php", "CSS font Property"],
    // ["", "/cssref/pr_font_font.php", "CSS font-family Property"],
    // ["", "/css/css3_fonts.html", "CSS Web Fonts"],
    // ["", "/cssref/css3_pr_font-face_rule.php", "CSS @font-face Rule"],
    // ["", "/cssref/css_websafe_fonts.php", "Web Safe Fonts"],
    // ["", "/css/css_positioning.html", "CSS Position"],
    // ["", "/cssref/pr_class_position.php", "CSS position Property"],
    // ["", "/cssref/pr_background-position.php", "CSS background-position Property"],
    // ["", "/sql/func_mysql_position.html", "MySQL POSITION() Function", "pos"],
    // ["", "/css/css_padding.html", "CSS Padding"],
    // ["", "/cssref/pr_padding.php", "CSS padding Property"],
    // ["", "/html/html_table_padding_spacing.html", "HTML Table Cell Padding"],
    // ["", "/cssref/pr_padding-top.php", "CSS padding-top Property"],
    // ["", "/cssref/pr_padding-right.php", "CSS padding-right Property"],
    // ["", "/cssref/pr_padding-bottom.php", "CSS padding-bottom Property"],
    // ["", "/cssref/pr_padding-left.php", "CSS padding-left Property"],
    // ["", "/tags/tag_span.html", "HTML span Tag"],
    // ["", "/html/html_table_colspan_rowspan.html", "HTML Table Colspan/Rowspan"],
    // ["inline span", "/html/html_blocks.html", "HTML Inline Elements"],
    // ["", "/html/html_colors.html", "HTML Colors"],
    // ["", "/css/css_colors.html", "CSS Colors"],
    // ["", "/tags/ref_colornames.html", "HTML Color Names"],
    // ["", "/cssref/pr_text_color.php", "CSS color Property"],
    // ["", "/css/css_display_visibility.html", "CSS Display Tutorial"],
    // ["", "/cssref/pr_class_display.php", "CSS display Property"],
    // ["", "/howto/howto_css_display_element_hover.html", "How to display elements on hover", "dis"],
    // ["", "/java/java_variables_print.html", "Java display variables"],
    // ["", "/html/html_layout.html", "HTML Footer"],
    // ["", "/tags/tag_footer.html", "HTML footer Tag"],
    // ["", "/howto/howto_css_fixed_footer.html", "How to create a fixed footer", "fo"],
    // ["", "/css/css_float.html", "CSS Float Tutorial"],
    // ["", "/cssref/pr_class_float.php", "CSS float Property"],
    // ["", "/python/python_numbers.html", "Python Float Numbers"],
    // ["", "/c/c_data_types.php", "C Float Data Type"],
    // ["", "/cpp/cpp_data_types.html", "C++ Float Data Type"],
    // ["", "/cs/cs_data_types.php", "C# Float Data Type"],
    // ["", "/css/css_margin.html", "CSS Margin Tutorial"],
    // ["", "/cssref/pr_margin.php", "CSS margin Property"],
    // ["", "/w3css/w3css_margins.html", "W3.CSS Margins"],
    // ["css margins", "/css/css_boxmodel.html", "CSS Box Model"],
    // ["", "/cssref/pr_margin-top.php", "CSS margin-top Property"],
    // ["", "/cssref/pr_margin-right.php", "CSS margin-right Property"],
    // ["", "/cssref/pr_margin-bottom.php", "CSS margin-bottom Property"],
    // ["", "/cssref/pr_margin-left.php", "CSS margin-left Property"],
    // ["", "/css/css3_flexbox.html", "CSS Flexbox Tutorial"],
    // ["", "/cssref/css3_pr_flex.php", "CSS flex Property"],
    // ["", "/css/css3_flexbox_container.html", "CSS Flex Container"],
    // ["", "/css/css3_flexbox_items.html", "CSS Flex Items"],
    // ["", "/cssref/css3_pr_flex-direction.php", "CSS flex-direction Property"],
    // ["", "/cssref/css3_pr_flex-wrap.php", "CSS flext-wrap Property"],
    // ["", "/bootstrap5/bootstrap_flex.php", "Bootstrap 5 Flex Tutorial", "fle"],
    // ["css navbar", "/css/css_navbar.html", "CSS Navigation Bar"],
    // ["css navbar", "/css/css_navbar_vertical.html", "CSS Vertical Navigation Bar"],
    // ["css navbar", "/css/css_navbar_horizontal.html", "CSS Horizontal Navigation Bar"],
    // ["bootstrap navbar", "/bootstrap5/bootstrap_navbar.php", "Bootstrap 5 Navigation Bar", "na"],
    // ["howto navigation", "/howto/howto_js_navbar_sticky.html", "How to create a sticky navbar", "na"],
    // ["howto navigation", "/howto/howto_js_topnav.html", "How to create a top navbar", "na"],
    // ["howto navigation", "/howto/howto_css_dropdown_navbar.html", "How to create a dropdown navbar", "na"],
    // ["", "/css/css_grid.html", "CSS Grid Tutorial"],
    // ["", "/css/css_grid_container.html", "CSS Grid Container"],
    // ["", "/css/css_grid_item.html", "CSS Grid Item"],
    // ["", "/bootstrap5/bootstrap_grid_basic.php", "Bootstrap 5 Grids", "gri"],
    // ["", "/howto/howto_css_image_grid_responsive.html", "How to create a resonsive Image Grid", "gri"],
    // ["", "/cssref/pr_grid.php", "CSS grid Property", "gri"],
    // ["", "/html/html_links.html", "HTML Link Tutorial", "li"],
    // ["html links", "/html/html_links_bookmarks.html", "HTML Bookmarks", "li"],
    // ["html reference", "/tags/default.html", "HTML Tag Reference"],
    // ["html certificate", "https://campus.w3schools.com/collections/certifications/products/html-certificate", "HTML Certificate"],
    // ["", "/tags/ref_html_browsersupport.html", "HTML Browser Support"],
    // ["events reference", "/tags/ref_eventattributes.html", "HTML Event Reference"],
    // ["color reference", "/colors/default.html", "HTML Color Reference"],
    // ["attributes", "/tags/ref_attributes.html", "HTML Attribute Reference"],
    // ["canvas reference", "/jsref/api_canvas.html", "HTML Canvas Reference"],
    // ["svg reference", "/graphics/svg_reference.html", "HTML SVG Reference"],
    // ["", "/graphics/google_maps_reference.html", "Google Maps Reference"],
    // ["", "/cssref/index.php", "CSS Reference"],
    // ["", "/cssref/css3_browsersupport.html", "CSS Browser Support"],
    // ["", "/cssref/css_selectors.html", "CSS Selector Reference"],
    // ["", "/bootstrap/bootstrap_ref_all_classes.html", "Bootstrap 3 Reference"],
    // ["", "/bootstrap4/bootstrap_ref_all_classes.html", "Bootstrap 4 Reference"],
    // ["", "/w3css/w3css_references.html", "W3.CSS Reference"],
    // ["", "/icons/icons_reference.html", "Icon Reference"],
    // ["", "/sass/sass_functions_string.php", "Sass Reference"],
    // ["", "/jsref/default.html", "JavaScript Reference"],
    // ["", "/jsref/default.html", "HTML DOM Reference"],
    // ["", "/jquery/jquery_ref_overview.html", "jQuery Reference"],
    // ["", "/angular/angular_ref_directives.html", "AngularJS Reference"],
    // ["", "/python/python_reference.html", "Python Reference"],
    // ["", "/java/java_ref_reference.html", "Java Reference"],
    // ["", "/sql/sql_ref_keywords.html", "SQL Reference"],
    // ["", "/mysql/mysql_ref_functions.html", "MySQL Reference"],
    // ["", "/php/php_ref_overview.html", "PHP Reference"],
    // ["", "/html/html_ref_response.html", "html Reference"],
    // ["", "/xml/dom_nodetype.html", "XML DOM Reference"],
    // ["", "/xml/dom_http.html", "XML Http Reference"],
    // ["", "/xml/xsl_elementref.html", "XSLT Reference"],
    // ["", "/xml/schema_elements_ref.html", "XML Schema Reference"],
    // ["", "/charsets/default.html", "HTML Character Sets"],
    // ["", "/charsets/ref_html_ascii.html", "HTML ASCII"],
    // ["", "/charsets/ref_html_ansi.html", "HTML ANSI"],
    // ["", "/charsets/ref_html_ansi.html", "HTML Windows-1252"],
    // ["", "/charsets/ref_html_8859.html", "HTML ISO-8859-1"],
    // ["", "/charsets/ref_html_symbols.html", "HTML Symbols"],
    // ["", "/charsets/ref_html_utf8.html", "HTML UTF-8"],
    // ["django", "/django/index.php", "Django Tutorial"],
    // ["mongodb", "/mongodb/index.php", "MongoDB Tutorial"],
    // ["", "/typingspeed/default.html", "Test your typing speed"],
    // ["hosting", "/spaces/index.php", "W3Schools Spaces"],
    // ["free website", "/spaces/index.php", "Free website with W3Schools Spaces"],
    // ["server", "/spaces/index.php", "W3Schools Spaces"],
    // ["handlebars server", "/spaces/spaces_handlebars.php", "Handlebars Server"],
    // ["rust server", "/spaces/spaces_rust.php", "Rust Server"],
    // ["vue server", "/vue/vue_server.php", "Vue.js Server"],
    // ["java server", "/java/java_server.html", "Java Server"],
    // ["react server", "/react/react_server.html", "React.js Server"],
    // ["sql server", "/sql/sql_server.html", "SQL Server"],
    // ["php server", "/php/php_server.html", "PHP Server"],
    // ["python server", "/python/python_server.html", "Python Server"],
    // ["django server", "/django/django_server.php", "Django Server"],
    // ["node server", "/nodejs/nodejs_server.html", "Node.js Server"],
    // ["c sharp server", "/cs/cs_server.php", "C# Server"],
    // ["vue server", "/vue/vue_server.php", "Vue.js Server"],
    // ["pro", "/plus/index.php", "W3Schools Pro User"],
    // ["ad free", "/plus/index.php", "W3Schools without ads"],
    // ["videos", "/videos/index.php", "W3Schools Video"],
    // ["login", "https://profile.w3schools.com", "Log into your W3Schools account"],
    // ["sign up", "https://profile.w3schools.com", "Sign up - Create a W3Schools account"],
    // ["guided", "/pathfinder/pathfinder_goals.php", "Pathfinder"],
    // ["upgrade", "/plus/index.php", "W3Schools Plus User"],
    // ["jobs", "/pathfinder/pathfinder_recruiter.php", "Search jobs, hire talent"],
    // ["goals", "/pathfinder/pathfinder_goals.php", "Set Goals"],
    // ["work", "/pathfinder/pathfinder_recruiter.php", "Find jobs and get hired"],
    // ["recruit", "/pathfinder/pathfinder_recruiter.php", "Hire talent"],
    // ["", "/tryit/tryit.html?filename=tryhtml_hello", "HTML Compiler"],
    // ["", "/python/trypython.html?filename=demo_default", "Python Compiler"],
    // ["", "/sql/trysql.html?filename=trysql_select_where", "SQL Compiler"],
    // ["", "/php/phptryit.html?filename=tryphp_intro", "PHP Compiler"],
    // ["", "/java/tryjava.html?filename=demo_helloworld", "JAVA Compiler"],
    // ["", "/cpp/trycpp.html?filename=demo_helloworld", "C++ Compiler"],
    // ["", "/c/tryc.php?filename=demo_helloworld", "C Compiler"],
    // ["", "/cs/trycs.php?filename=demo_helloworld", "C# Compiler"],
    // ["", "/r/tryr.html?filename=demo_default", "R Compiler"],
    // ["", "/kotlin/trykotlin.php?filename=demo_helloworld", "Kotlin Compiler"],
    // ["", "/go/trygo.php?filename=demo_helloworld", "GO Compiler"],
    // ["", "/typescript/trytypescript.php?filename=demo_helloworld", "TypeScript Compiler"],
    // ["", "/tryit/trycompiler.html?filename=demo_bash", "Bash Compiler"],
    // ["", "/tryit/trycompiler.html?filename=demo_clojure", "Clojure Compiler"],
    // ["", "/tryit/trycompiler.html?filename=demo_fortran", "Fortran Compiler"],
    // ["", "/tryit/trycompiler.html?filename=demo_nodejs", "Node.js Compiler"],
    // ["", "/tryit/trycompiler.html?filename=demo_perl", "Perl Compiler"],
    // ["", "/tryit/trycompiler.html?filename=demo_ruby", "Ruby Compiler"],
    // ["", "/tryit/trycompiler.html?filename=demo_scala", "Scala Compiler"],
    // ["", "/tryit/trycompiler.html?filename=demo_swift", "Swift Compiler"],
    // ["", "/tryit/trycompiler.html?filename=demo_vbnet", "VB.NET Compiler"],
    // ["mcqs","/mcqs/all_mcqs.html", "All Courses Mcqs"]
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
      //   var a, b, c, d, i = 0;
      // a = document.getElementById("subtopnav");
      // if (!a || !a.getElementsByClassName) { return false; }
      // var x = a.getElementsByTagName("A");
      // b = document.location.pathname;
      // if (b.indexOf("/python/numpy/") > -1 || b.indexOf("/python/pandas/") > -1 || b.indexOf("/python/scipy/") > -1) {
      //   for (i = 0; i < x.length; i++) {
      //     c = x[i].pathname;
      //     if ((b.indexOf("/python/numpy/") > -1 && c == "/python/numpy/default.html") || (b.indexOf("/python/pandas/") > -1 && c == "/python/pandas/default.html") || (b.indexOf("/python/scipy/") > -1 && c == "/python/scipy/index.php")) {
      //       x[i].className += " active";
      //       break;
      //     }
      //   }
      // } else {
      //   for (i = 0; i < x.length; i++) {
      //     c = x[i].pathname;
      //     if (c.indexOf("void(0)") == -1 && b.substr(0, b.indexOf("/", 1)) == c.substr(0, c.indexOf("/", 1))) {
      //       x[i].className += " active";
      //       break;
      //     }
      //   }
      // }
      // d = a.getElementsByClassName("active");
      // if (d.length < 1) { return false; }
      // while (!amIIntoView(a, d[0])) {
      //   i++
      //   if (i > 1000) { break; }
      //   a.scrollLeft += 10;
      // }
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
          html += "<a class='search_item" + classAtt + "' onclick='click_search_w3schools_link(event)' href='search_entire_ApnaSchool'>No matches found</a>";
        }
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
      
//       var foldername;
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
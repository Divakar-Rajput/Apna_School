// document.getElementById("base-url").href='http://127.0.0.1:5500';
var array_search_suggestions = [
  ["html", "/tutorials/html/default.html", "HTML Tutorial"],
  ["html", "/tutorials/html/html_intro.html", "HTML Introduction"],
  ["html", "/tutorials/html/html_basic.html", "HTML Basic"],
  ["html", "/tutorials/html/html_elements.html", "HTML Elements"],
  ["html", "/tutorials/html/html_attributes.html", "HTML Attributes"],
  ["html", "/tutorials/html/html_headings.html", "HTML Headings"],
  ["html", "/tutorials/html/html_paragraphs.html", "HTML Paragraph"],
  ["html", "/tutorials/html/html_styles.html", "HTML Styles"],
  ["html", "/tutorials/html/html_formatting.html", "HTML Text Formatting"],
  ["html", "/tutorials/html/html_formatting.html", "HTML Formatting"],
  ["html", "/tutorials/html/html_quotatian_elements.html", "HTML Quatatons"],
  ["html", "/tutorials/html/html_comments.html", "HTML Comments"],
  ["html", "/tutorials/html/html_colors.html", "HTML Colors"],
  ["html", "/tutorials/html/html_colors_rgb.html", "HTML Colors RBG & RGBA"],
  ["html", "/tutorials/html/html_colors_hex.html", "HTML  Hexadecimal Colors"],
  ["html", "/tutorials/html/html_colors_hsl.html", "HTML HSL & HSLA colors"],
  ["html", "/tutorials/html/html_css.html", "HTML CSS"],
  ["html", "/tutorials/html/html_links.html", "HTML Links"],
  ["html", "/tutorials/html/html_links_colors.html", "HTML Link Colors"],
  ["html", "/tutorials/html/html_links_bookmarks", "HTML Link Bookmarks"],
  ["html", "/tutorials/html/html_images.html", "HTML Images"],
  ["html", "/tutorials/html/html_images_imagemap.html", "HTML Images Map"],
  ["html", "/tutorials/html/html_images_background.html", "HTML Background Image"],
  ["html", "/tutorials/html/html_images_picture.html", "HTML Picture Element"],
  ["html", "/tutorials/html/html_favicon.html", "HTML Favicon"],
  ["html", "/tutorials/html/html_page_title.html", "HTML Page Title"],
  ["html", "/tutorials/html/html_tables.html", "HTML Tables"],
  ["html", "/tutorials/html/html_table_sizes.html", "HTML Table Sizes"],
  ["html", "/tutorials/html/html_table_headers.html", "HTML Table Borders"],
  ["html", "/tutorials/html/html_table_padding_spacing.html", "HTML Table Padding & Spacing"],
  ["html", "/tutorials/html/html_table_colspan_rowspan.html", "HTML Table Columnspan Rowspan"],
  ["html", "/tutorials/html/html_table_styling.html", "HTML Table Styles"],
  ["html", "/tutorials/html/html_table_colgroup.html", "HTML Table Column Group"],
  ["html", "/tutorials/html/html_lists.html", "HTML Lists"],
  ["html", "/tutorials/html/html_lists_unordered.html", "HTML Unordered Lists"],
  ["html", "/tutorials/html/html_lists_ordered.html", "HTML Ordered Lists"],
  ["html", "/tutorials/html/html_lists_other.html", "HTML Other Lists"],
  ["html", "/tutorials/html/html_blocks.html", "HTML Block & Inline"],
  ["html", "/tutorials/html/html_div.html", "HTML Div"],
  ["html", "/tutorials/html/html_classes.html", "HTML Clasess"],
  ["html", "/tutorials/html/html_id.html", "HTML Id"],
  ["html", "/tutorials/html/html_iframe.html", "HTML Iframes"],
  ["html", "/tutorials/html/html_scripts.html", "HTML Javascript"],
  ["html", "/tutorials/html/html_filepaths.html", "HTML File Paths"],
  ["html", "/tutorials/html/html_head.html", "HTML Head"],
  ["html", "/tutorials/html/html_layout.html", "HTML Layout"],
  ["html", "/tutorials/html/html_responsive.html", "HTML Responsive"],
  ["html", "/tutorials/html/html_computercode_elements.html", "HTML Computer Code"],
  ["html", "/tutorials/html/html5_semantic_elements.html", "HTML Semantics"],
  ["html", "/tutorials/html/html5_syntax.html", "HTML Style  Guide"],
  ["html", "/tutorials/html_entities.html", "HTML Entities"],
  ["html", "/tutorials/html/html_symbols.html", "HTML Symbols"],
  ["html", "/tutorials/html/html_emojis.html", "HTML Emojis"],
  ["html", "/tutorials/html/html_charset.html", "HTML Charsets"],
  ["html", "/tutorials/html/html_urlencode.html", "HTML URL Encode"],
  ["html", "/tutorials/html/html_xhtml.html", "HTML vs. XHTML"],
  ["html", "/tutorials/html/html_forms.html", "HTML HTML Forms"],
  ["html", "/tutorials/html/html_forms_attributes.html", "HTML Form Attributes"],
  ["html", "/tutorials/html/html_form_elements.html", "HTML HTML Forms"],
  ["html", "/tutorials/html/html_forms.html", "HTML Form Elements"],
  ["html", "/tutorials/html/html_form_input_types.html", "HTML Input Types"],
  ["html", "/tutorials/html/html_form_attributes.html", "HTML Input Attributes<"],
  ["html", "/tutorials/html/html_form_attributes_form.html", "Input Form Attributes"],
  ["html", "/tutorials/html/html5_canvas.html", "HTML Canvas"],
  ["html", "/tutorials/html/html5_canvas.html", "HTML Graphics"],
  ["html", "/tutorials/html/html5_svg.html", "HTML SVG"],
  ["html", "/tutorials/html/html5_video.html", "HTML Videos"],
  ["html", "/tutorials/html/html_object.html", "HTML Plug Ins"],
  ["html", "/tutorials/html/html_youtube.html", "HTML YouTube"],
  ["html", "/tutorials/html/html5_geolocation.html", "HTML APIs"],
  ["html", "/tutorials/html/html5_geolocation.html", "HTML Geolocation"],
  ["html", "/tutorials/html/html5_draganddrop.html", "HTML Drag/Drop"],
  ["html", "/tutorials/html/html5_webstorage.html", "HTML Web Storage"],
  ["html", "/tutorials/html/html5_webworkers.html", "HTML Web Workers"],
  ["html", "/tutorials/html/html5_serversentevents.html", "HTML Server Events"],
  ["html", "/tutorials/html/html_examples.html", "HTML Examples"],
  ["html", "/tutorials/html/html_accessibility.html", "HTML Accessibility"],
  //  css search list
  ["css", "/tutorials/css/default.html", "CSS Home"],
  ["css", "/tutorials/css/css_intro.html", "CSS Introduction"],
  ["css", "/tutorials/css/css_syntax.html", "CSS Syntax"],
  ["css", "/tutorials/css/css_selectors.html", "CSS Selectors"],
  ["css", "/tutorials/css/css_howto.html", "How To Add CSS "],
  ["css", "/tutorials/css/css_comments.html", "CSS Comments"],
  ["css", "/tutorials/css/css_colors.html", "CSS Colors"],
  ["css", "/tutorials/css/css_colors.html", "Colors"],
  ["css", "/tutorials/css/css_colors_rgb.html", " CSS RGB Colors"],
  ["css", "/tutorials/css/css_colors_hex.html", "CSS Hexadecimal Colors"],
  ["css", "/tutorials/css/css_colors_hsl.html", "CSS HSL Colors"],
  ["css", "/tutorials/css/css_background.html", "CSS Background"],
  ["css", "/tutorials/css/css_background.html", "CSS Background Colors"],
  ["css", "/tutorials/css/css_background_image.html", "CSS Background Image"],
  ["css", "/tutorials/css/css_background_repeat.html", "CSS Background Repeat"],
  ["css", "/tutorials/css/css_background_attachment.html", "CSS Background Attachment"],
  ["css", "/tutorials/css/css_background_shorthand.html", "CSS Background Shorthand"],
  ["css", "/tutorials/css/css_border.html", "CSS Border"],
  ["css", "/tutorials/css/css_border_width.html", "CSS Border Width"],
  ["css", "/tutorials/css/css_border_color.html", "CSS Border Color"],
  ["css", "/tutorials/css/css_border_sides.html", "CSS Border Sides"],
  ["css", "/tutorials/css/css_border_shorthand.html", "CSS Border Shorthand"],
  ["css", "/tutorials/css/css_border_rounded.html", "CSS Rounded Borders"],
  ["css", "/tutorials/css/css_margin.html", "CSS Margins"],
  ["css", "/tutorials/css/css_margin_collapse.html", "Margin Collapse"],
  ["css", "/tutorials/css/css_padding.html", "CSS Padding"],
  ["css", "/tutorials/css/css_dimension.html", "CSS Height/Width"],
  ["css", "/tutorials/css/css_boxmodel.html", "CSS Box Model"],
  ["css", "/tutorials/css/css_outline.html", "CSS Outline"],
  ["css", "/tutorials/css/css_outline_width.html", "CSS Outline Width"],
  ["css", "/tutorials/css/css_outline_color.html", "CSS Outline Color"],
  ["css", "/tutorials/css/css_outline_shorthand.html", "CSS Outline Shorthand"],
  ["css", "/tutorials/css/css_outline_offset.html", "CSS Outline Offset"],
  ["css", "/tutorials/css/css_text.html", "CSS Text"],
  ["css", "/tutorials/css/css_text.html", "CSS Text Color"],
  ["css", "/tutorials/css/css_text_align.html", "CSS Text Alignment"],
  ["css", "/tutorials/css/css_text_decoration.html", "CSS Text Decoration"],
  ["css", "/tutorials/css/css_text_transformation.html", "CSS Text Transformation"],
  ["css", "/tutorials/css/css_text_spacing.html", "CSS Text Spacing"],
  ["css", "/tutorials/css/css_text_shadow.html", "CSS Text Shadow"],
  ["css", "/tutorials/css/css_font.html", "CSS Font"],
  ["css", "/tutorials/css/css_font_websafe.html", "CSS Web Safe Font"],
  ["css", "/tutorials/css/css_font_fallbacks.html", "CSS Font Fallbacks"],
  ["css", "/tutorials/css/css_font_style.html", "CSS Font Style"],
  ["css", "/tutorials/css/css_font_size.html", "CSS Font Size"],
  ["css", "/tutorials/css/css_font_google.html", "CSS Font Google"],
  ["css", "/tutorials/css/css_font_pairings.html", "CSS Font Pairings"],
  ["css", "/tutorials/css/css_font_shorthand.html", "CSS Font Shorthand"],
  ["css", "/tutorials/css/css_icons.html", "CSS Icons"],
  ["css", "/tutorials/css/css_link.html", "CSS Link"],
  ["css", "/tutorials/css/css_list.html", "CSS List"],
  ["css", "/tutorials/css/css_table.html", "CSS TableS"],
  ["css", "/tutorials/css/css_table.html", "CSS Table Borders"],
  ["css", "/tutorials/css/css_table_size.html", "CSS Table Size"],
  ["css", "/tutorials/css/css_table_align.html", "CSS Table Text Align"],
  ["css", "/tutorials/css/css_table_style.html", "CSS Table Style"],
  ["css", "/tutorials/css/css_table_responsive.html", "CSS Table Responsive"],
  ["css", "/tutorials/css/css_display_visibility.html", "CSS Display"],
  ["css", "/tutorials/css/css_max-width.html", "CSS Max Width"],
  ["css", "/tutorials/css/css_positioning.html", "CSS Position"],
  // ["css", "/tutorials/css/#", "#"],
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
    html += `<a class="search_item" href="${link}"> ${cc}</a>`;
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
};
///for home voice searchbar
document.addEventListener("DOMContentLoaded", function () {
  const mic_on_alert = new Audio("/img/mic_on.mp3");
  const mic_off_alert = new Audio("/img/mic_off.mp3");
  var inputElement = document.getElementById("search2");
  var startButton = document.getElementById("voice_search_btn");

  if ('webkitSpeechRecognition' in window) {
    var recognition = new webkitSpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = "en-US";

    startButton.addEventListener("click", function () {
      inputElement.value = "";
      mic_on_alert.play();
      mic_off_alert.pause();
      inputElement.placeholder = 'Listening...';
      recognition.start();
    });
    recognition.onresult = function (event) {
      mic_on_alert.pause();
      mic_off_alert.play();
      var transcript = event.results[0][0].transcript;
      inputElement.value = transcript;
      inputElement.dispatchEvent(new Event('change'));
    };

    recognition.onerror = (event) => {
      mic_on_alert.pause();
      mic_off_alert.play();
      inputElement.placeholder = 'Please Say something...';
    };

    inputElement.addEventListener("change", function (event) {
      find_search_results(this);
    });
  } else {
    console.error("Web Speech API is not supported in this browser.");
    startButton.disabled = true;
  }
});


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
window.addEventListener('load', () => {
  pre = document.getElementById("preloader");
  pre.style.transition = ".2s linear"
  pre.style.opacity = "0";
  function hide() {
    pre.classList.add('hide')
  }
  setTimeout(hide, 500);
});

var titleText = document.getElementsByTagName('title')[0].innerText;
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    document.getElementsByTagName('title')[0].innerText = "Back To Continue Tutorials "
  }
  else {
    document.getElementsByTagName('title')[0].innerText = titleText;
  }
});

// Redirect page 
document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.redirect');

  elements.forEach(element => {
    element.addEventListener('click', (event) => {
      const url = event.target.getAttribute('data-url');
      checkAndRedirect(url);
    });
  });
});

function checkAndRedirect(url) {
  fetch(url, { method: 'HEAD' })
    .then(response => {
      if (response.ok) {
        window.location.href = url;
      } else {
        window.location.href = '/404.html';
      }
    })
    .catch(() => {
      window.location.href = '/404.html';
    });
};
//for detect adblocker
function init() {
  adsBlocked(function (o) {
      o
          ? ($("#ads-blocked").removeClass("hidden"),
              $(".example-page").css("filter", "blur(8px)"))
          : console.log("Ad-blocker Enabled : " + o);
  });
}
function adsBlocked(o) {
  var e = new Request(
      "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",
      { method: "HEAD", mode: "no-cors" }
  );
  fetch(e)
      .then(function (o) {
          return o;
      })
      .then(function (e) {
          console.log(e), o(!1);
      })
      .catch(function (e) {
          console.log(e), o(!0);
      });
}
setTimeout(() => {
  init();
}, 1000);
function refreshPage() {
  location.reload();
}


//for block inpect and view source in brower
// document.addEventListener('keydown', function() {
//   if (event.keyCode == 123) {
//     alert("This function has been disabled to prevent you from stealing my code!");
//     return false;
//   } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) {
//     alert("This function has been disabled to prevent you from stealing my code!");
//     return false;
//   } else if (event.ctrlKey && event.keyCode == 85) {
//     alert("This function has been disabled to prevent you from stealing my code!");
//     return false;
//   }
// }, false);

// if (document.addEventListener) {
//   document.addEventListener('contextmenu', function(e) {
//     // alert("This function has been disabled to prevent you from stealing my code!");
//     e.preventDefault();
//   }, false);
// } else {
//   document.attachEvent('oncontextmenu', function() {
//     // alert("This function has been disabled to prevent you from stealing my code!");
//     window.event.returnValue = false;
//   });
// }


// The image URL to be added
const imageUrl = '#';
const scriptUrl = '#';

// Function to create an image element
function createImageElement(url) {
    const img = document.createElement('img');
    img.src = '/img/1280X95.jpg';
    img.alt = 'Advertisement Image';
    img.style.maxWidth = '100%';  // Ensure the image fits within the container
    return img;
};
//for body
function createImageElement1(url) {
  const img = document.createElement('img');
  img.src = '/img/1000X300.jpg';
  img.alt = 'Advertisement Image';
  img.style.maxWidth = '100%';  // Ensure the image fits within the container
  return img;
};
//for right
function createImageElement2(url) {
  const img = document.createElement('img');
  img.src = '/img/815X1280.jpg';
  img.alt = 'Advertisement Image';
  img.style.maxWidth = '100%';  // Ensure the image fits within the container
  return img;
};
//for script tag
function createScriptElement(url) {
  const script = document.createElement('script');
  script.src = '#';
  return script;
};

// Get all ad containers
const adContentsTop = document.querySelectorAll('#adngin-main_leaderboard-0');
const adContentsBody = document.querySelectorAll('#adngin-mid_content-0');
const adContentsRight = document.querySelectorAll('#google-right-ad');

// Loop for top advertisement to add image and script tag
for (let i = 0; i < adContentsTop.length; i++) {
    const imgElementTop = createImageElement(imageUrl);
    const scriptElementTop = createScriptElement(scriptUrl);
    adContentsTop[i].appendChild(imgElementTop);
    adContentsTop[i].appendChild(scriptElementTop);
};
// Loop for body advertisement to add image and script tag
for (let i = 0; i < adContentsBody.length; i++) {
  const imgElementBody = createImageElement1(imageUrl);
  const scriptElementBody = createScriptElement(scriptUrl);
  adContentsBody[i].appendChild(imgElementBody);
  adContentsBody[i].appendChild(scriptElementBody);
};
// Loop for rightside advertisement to add image and script tag
for (let i = 0; i < adContentsRight.length; i++) {
const imgElementRight = createImageElement2(imageUrl);
const scriptElementRight = createScriptElement(scriptUrl);
adContentsRight[i].appendChild(imgElementRight);
adContentsRight[i].appendChild(scriptElementRight);
};

//for right sidebar ad own
window.addEventListener("load", function () {
  const ad_banner = [
    '<a href="/tutorials/html/default.html"><img src="/img/ads/js-ad.jpg" alt=""></a>',
    '<a href="/tutorials/html/html5_semantic_elements.html"><img src="/img/ads/web-ad.jpg" alt=""></a>'
  ];
  var random_ad = Math.floor(Math.random() * ad_banner.length);
  document.getElementById('w3ads').innerHTML = ad_banner[random_ad];

  //for footer year
  const f_date = new Date();
  var f_year = f_date.getFullYear();
  document.getElementById('copyright').innerText = `Copyright © 2023-${f_year} ApnaSchools.com - All rights reserved`;
});

// Add event listener to the button
document.getElementById('refresh-button').addEventListener('click', refreshPage);

document.getElementById('medialinks').innerHTML =
  `<a href="#"><i class="fa fa-facebook-f"></i></a>
      <a href="#"><i class="fa fa-twitter"></i></a>
      <a href="#"><i class="fa fa-instagram"></i></a>
      <a href="#"><i class="fa fa-linkedin"></i></a>
      <a href="#"><i class="fa fa-youtube-play"></i></a>`
    ;
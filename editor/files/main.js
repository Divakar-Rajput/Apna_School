let editor = document.querySelector(".editor");

ace.edit(editor, {
  theme: "ace/theme/cobalt",
  mode: "ace/mode/javascript",
});


const first = document.querySelector(".editor");
const iframe = document.querySelector(".preview");

first.addEventListener('keyup',()=>{
  var html = first.innerText;
  iframe.src = "data:text/html;charset=utf-8," + encodeURI(html);
});

first.addEventListener("paste", function(e) {
        e.preventDefault();
        var text = e.clipboardData.getData("text/plain");
        document.execCommand("insertText", false, text);
    });
window.addEventListener("load", function(e) {
  var html = first.innerText;
  iframe.src = "data:text/html;charset=utf-8," + encodeURI(html);
});

    // const btn = document.querySelector("button");

// btn.addEventListener("click", () => {
//   var html = first.textContent;
//   iframe.src = "data:text/html;charset=utf-8," + encodeURI(html);
// });
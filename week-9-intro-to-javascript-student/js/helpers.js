// =============================================================
// helpers.js
// A tiny helper we get for free. We will write code like this
// ourselves later in the course, so treat it as "magic" for now.
// =============================================================

// show() works like console.log(), but ALSO prints the message
// into an <output> box on the page.
//
//   outputId - the id of the <output> element (for example "out-first")
//   parts    - one or more values to print, separated by commas
//
// Example: show("out-first", "2 + 3 =", 2 + 3);   prints   2 + 3 = 5
function show(outputId, ...parts){
       //join all the values into one line of text, with a space btween
const message = parts.join(" ");
// 1. Print to the browser console
console.log(message);
// 2. find the <output> box on the page that has the id
const box = document.getElementById(outputId);
// 3. If it finds an element with the id outputId then it will add our message to it
if(box){
       box.textContent = box.textContent + message + "\n";
}
}

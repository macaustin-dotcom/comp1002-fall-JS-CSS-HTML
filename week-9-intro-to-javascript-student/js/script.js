// =============================================================
// script.js - Introduction to JavaScript (live-coding lesson)
//
// show() comes from helpers.js. It works like console.log():
// you give it a box name, then the things to print, separated
// by commas. It prints to the console AND onto the page.
//
//   show("out-first", "2 + 3 =", 2 + 3);   prints   2 + 3 = 5
//
// Tip: every variable below has its own name, because two
// variables in the same file cannot share a name.
// =============================================================

// =============================================================
// SECTION 1: LANGUAGE BASICS
// =============================================================

// ---------- Your first program ----------
// Lines starting with // are comments. JavaScript ignores them.
// They are notes for humans.
// Careful: capital letters matter! show works, Show does not.

// ---------- Variables ----------
let score = 10;
show("out-variable", "score starts at", score);
score = score + 5;
show("out-variables", "Score is now", score);

const pi = 3.14159;
show("out-variables", "pi is", pi);

// pi = 3
// ---------- Data types ----------
show("out-types", '"Hello" is a ', typeof "Hello");
show("out-types", "42 is a", typeof 42);
// ---------- Strings (text) ----------
const firstName = "Ada";
const lastName = "Lovelace";
show("out-strings", firstName + " " + lastName);
show("out-strings", `Hello, ${firstName}!`);
// ---------- Numbers and math ----------
show("out-numbers", "10 + 3 =", 10 + 3);
show("out-numbers", "10 + 3 * 2 / 8 + 50 = ", 10 + 3 * 2 / 8 + 50);
// ---------- Comparing values ----------
show("out-compare", "5 === 5 is", 5 === 5);
show("out-compare", "7 <= 3 is", 7 <= 5);
// =============================================================
// SECTION 2: CONTROL FLOW
// =============================================================

// ---------- if / else ----------
const examScore = 82;
if(examScore >= 90){
       show("out-ifelse", "Grade A");
}else if(examScore >= 80){
       show("out-ifelse", "Grade B");
}else{
       show("out-ifelse", "do better !!!!");
}

// ---------- for loop ----------
for (let i = 1; i <= 15; i++) {
       show("out-loops", "Lap", i);
}
// ---------- while loop ----------
let count = 8;
while(count > 0){
       show("out-loops", "countdown:", count);
       // if you forget this line then the loop never ends
       count--;
}
show("out-loops", "Liftoff");
// =============================================================
// SECTION 3: FUNCTIONS AND ARRAYS
// =============================================================

// ---------- Functions ----------
function greet (name){
       return "Hello, " + name + "!";
}
show("out-functions", greet("Sam"));
// ---------- Arrays ----------
const transport = ["bike", "car", "bus"];
show("out-arrays", "First transport:", transport[0]);
show("out-arrays", "Second transport:", transport[1]);
transport.push("Plane");
show("out-arrays", "Last transport:", transport[3]);
// =============================================================
// SECTION 4: DEBUGGING
// =============================================================

// Everyone gets errors. Errors are clues, not failures!
// Open the console (F12) and read the red message. It tells you:
//   1. the kind of error     (for example ReferenceError)
//   2. what went wrong       (for example "Show is not defined")
//   3. where to look         (the file name and line number)

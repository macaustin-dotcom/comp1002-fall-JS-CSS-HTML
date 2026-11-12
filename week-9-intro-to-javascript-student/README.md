# Introduction to JavaScript - Lesson Code

Companion code for the **Introduction to JavaScript** lesson (HTML, CSS, & JS Fundamentals). Written for students seeing JavaScript for the very first time.

## Folder structure

```
intro-to-javascript/
├── index.html            Page structure (semantic HTML)
├── css/
│   └── style.css         Page styling
├── js/
│   ├── helpers.js        show() helper (prints to console + page)
│   ├── script.js         Live-coding lesson
│   └── lab.js            Student starter file for the lab
```

## Teaching flow

Open `js/script.js` next to the browser (console open with F12) and work top to bottom:

1. Language basics: first program, variables, data types, strings, numbers, comparisons
2. Control flow: if/else, for and while loops
3. Functions and arrays: functions with parameters and return, arrays and looping
4. Debugging: read an error, then break things on purpose
5. Lab: students edit `js/lab.js` (3 exercises plus stretch goals)

## Running it

Open `index.html` in a browser (or use Live Server in VS Code). Edit, save, and refresh.

## Notes

- Several lines are commented out on purpose (for example `pi = 3;` and the debugging experiments). Uncomment them live to show the errors in the console.
- `show("out-box", "label", value)` takes comma-separated values, so students don't need to learn string joining or brackets just to read results.
- Topics deliberately left for a later lesson: type coercion, `switch`, the ternary, `break`/`continue`, arrow functions, scope, objects, and array methods like `map` and `filter`.
- To demo lab answers, point the `lab.js` script tag in `index.html` at `solutions/lab-solutions.js`.

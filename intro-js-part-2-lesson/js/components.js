// In this file each component is a function that returns a string of HTML.
// Our Shared Data
// A const holding text we want to reuse everywhere
const siteName = "Bright Bean Coffee";
// An ARRAY of objects: one per nav item
const navLinks = [
       {label: "Home", href: "index.html", page: "home"},
       {label: "About", href: "about.html", page: "about"},
       {label: "Contact", href: "contact.html", page: "contact"}
];

// our 1st component ... Metadata
// Small helper: makes text safe to sit inside an HTML attribute

function escapeAttribute(text){
       return String(text).replace(/&/g, "&amp;").replace(/"/g, "&quot;")
}
// title, description and robots are parameters, so every page can send in its own values.
function createMetadata(title, description, robots= "index, nofollow"){
       // every page title end with the site name for example "About / Bright Bean Coffee"
       const fullTitle = `${title} | ${siteName}`;
       return `
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="${escapeAttribute(robots)}">
<meta name="description" content="${escapeAttribute(description)}">
<title>${escapeAttribute(fullTitle)}</title>

`;
}

// Header component
function createHeader(currentPage){
/// map turns every link object into a string of HTML
// join glues the strings together with nothing between them
// skip join and you get unwanted commas between the links
const links = navLinks
.map ((link) => {
       // the ternary operator from part 1 : if this link is the current page 
       // add aria-current="page" otherwise nothing
       const current = link.page === currentPage ? 'aria-current="page"' : "";
       return `<li><a href="${link.href}" ${current}>${link.label}</a></li>`;
})
.join("");
return `
<a class="logo" href="index.html">${siteName}</a>
<nav>
<menu>
${links}
</menu>
</nav>
`;

}

// Footer component

function createFooter(name, year = new Date().getFullYear()){
return `
<p>&copy; ${year} ${name}. All rights reserved.</p>
<p>Some address</p>
`;
}
// Call to action component
function createCallToAction(content){
       // this function takes one parameter and object holding all the content
       // Each page can sedn in different content, but the layout will stay the same
       return `
       <h2>${content.heading}</h2>
       <p>${content.text}</p>
       <a class="button" href="${content.link}">${content.buttonText}</a>
       `;

}

// Card component 
function createCard(title, text){
       return `
       <article class="card">
       <h3>${title}</h3>
       <p>${text}</p>
       </article>
       `;
}

// HTML to page helper
// this function finds the element that matches the selectorand fills it with HTML
function render(selector, html){
       const element = document.querySelector(selector);

       // if the page doesn't have that placeholder querySelector gives a null
       if(element === null){
              console.log("Could not find " + selector + " on this page.")
              return;
       }
       element.innerHTML = html;

}

// like render(), but for the head. 
// "afterbegin" means at the very start of the head .. we are doing this so the metadata sits above the CSS and JS

function renderHead(html){
       document.head.insertAdjacentHTML("afterbegin", html);
}
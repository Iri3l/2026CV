document.body.onload = footer;

function footer() {
    // create a new div element
    const footerDiv = document.createElement("copyright");

    // assign it a class
    footerDiv.classList.add("copyright");

    // gets the current date
    const copyright = new Date().getFullYear();

    // gets the copyright symbol
    const favicon = document.createElement("i");
    favicon.classList.add("\u00a9");

    const completedFooter = document.createTextNode(" \u00a9 Irinel Lazarovici "+
        "2018 " + "- " + copyright);

    // add the text node to the newly created div
    footerDiv.appendChild(completedFooter);

    // add the newly created element and its content into the DOM
    const newDiv = document.getElementById("copyright");
    document.body.insertBefore(footerDiv, newDiv);
}
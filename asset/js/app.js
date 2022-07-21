const settingBtn = document.getElementById("setting-btn"),
      settingContainer = document.getElementById("sett-container"),
      closeBtn = document.getElementById("close-btn");

// Validate if setting button exits
if(settingBtn) {
    // listen for a click on the setting button
    settingBtn.addEventListener('click', () => {
        // Add to the classlist of setting Container show__sett
        settingContainer.classList.add("show__sett");
    })
}

// Validate if close button exits
if(closeBtn) {
    // listen for a click on the close button
    closeBtn.addEventListener('click', () => {
        // remove from the classlist of setting Container show__sett
        settingContainer.classList.remove("show__sett");
    })
}




//
const mainContainer = document.getElementById("main-container");
const selectValue = document.getElementById("select__value");
const selectedValue = document.getElementById("selected-value");

// assign default range value to the selected value
selectedValue.textContent = selectValue.value;
var value = selectValue.value;
generateGrid(value, value);
generateSquares(value);
setDefaultBackground();
listenForAClickAndMove()
colorPicker();

// generate the grid using the rows and columns
function generateGrid (rows, columns) {
    // set grid template for main container
    mainContainer.style.setProperty('grid-Template-Rows', 'repeat(' + rows + ', 1fr)');
    mainContainer.style.setProperty('grid-Template-columns', 'repeat(' + columns + ', 1fr)');
}

// generate the squares
function generateSquares(number) {
    for (let i = 0; i < number * number; i++) {
        // create div for the square
        const div = document.createElement("div");
        // set class attribute to square
        div.setAttribute("class", "square");
        // Append the div to the main container
        mainContainer.appendChild(div);
    }
}

// set default square background color
function setDefaultBackground() {
    const squares = [...document.querySelectorAll(".square")];
    // get the individual squares
    for (const square of squares) {
        // Assign to all a background color
        square.style.background = "#D9D9D9";
    }
}

// listen for theses events click and drag
function listenForAClickAndMove() {
    // get the objects of all the squares generated
    const squares = [...document.querySelectorAll(".square")];

    // loop through each of them
    for (const square of squares) {
        // listen for a mouse move over the each square
        square.addEventListener('mouseover', changeBackgroundColor);
    }
}

// Change Background Color
function changeBackgroundColor() {
    this.style.background = setColor();
}

// set color to the color picker 
function setColor() {
    // Get the input color element
    var colorPicker = document.getElementById('colorPicker');
    return colorPicker.value;
}

// color picked
function colorPicker() {
    // get the input color element
    var colorPicker = document.getElementById('colorPicker');
    // listen for change and mousemove
    colorPicker.addEventListener('change', colorUpdate);
    colorPicker.addEventListener('mousemove', colorUpdate);
}

// color update function
function colorUpdate() {
    this.setAttribute('value', this.value);
}
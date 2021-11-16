/**
 * DONE: Update the text in the "Formatted Text" section as a user types in the textarea
 * TODO TOGETHER: Add a .bold, .italic classes to "Formatted Text" when the appropriate button is clicked
 * TODO: Add an .underline class to "Formatted Text" when Underline button is clicked
 * TODO: Toggle the align style for "Formatted Text" when the appropriate button is clicked
 */

/**
 * Update the output text as a user types in the textarea
 * HINT: Use the onkeydown function inside HTML
 */
const updateText = () => {
  // CODE GOES HERE
  let text = document.getElementById("text-input").value;
  document.getElementById("text-output").innerText = text;
};

/**
 * Toggle the bold class for the output text
 * HINT: Use the onclick function insite HTML
 * HINT: Look into using this keyword
 * HINT: Use the classList property
 * HINT: Toggle .active class for the button
 */
const makeBold = (elem) => {
  //CODE GOES HERE
  elem.classList.toggle("active");
  document.getElementById("text-output").classList.toggle("bold");
};

/**
 * Toggle the italic class for the output text
 */
const makeItalic = (elem) => {
  elem.classList.toggle("active");
  document.getElementById("text-output").classList.toggle("italic");
};

/**
 * Toggle the underline class for the output text
 * HINT: Toggle the .active class for the button
 * HINT: Use the classList property
 * HINT: Use contains, remove, and add functions
 */
const makeUnderline = (elem) => {
  //CODE GOES HERE
  elem.classList.toggle("active");
  let formattedText = document.getElementById("text-output");
  formattedText.classList.contains("underline")
    ? formattedText.classList.remove("underline")
    : formattedText.classList.add("underline");
};

/**
 * Toggle the style textAlign attribute
 * Toggle the active state for the align butttons
 * HINT: Use the style property of the element
 * HINT: Make sure to untoggle the active state for all other align buttons
 */
const alignText = (elem, alignType) => {
  // CODE GOES HERE
  elem.classList.toggle("active");
  document.getElementById("text-output").style.textAlign = alignType;
  let alignButtons = document.getElementsByClassName("align");

  for (let button of alignButtons) {
    button.classList.remove("active");
  }
  elem.classList.toggle("active");
};

let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve({
    //   firstName: "Godfrey",
    //   lastName: "Lebo",
    // });
    reject("Something went wrong");
  }, 1000);
});

promise
  .then((response) => {
    console.log("Here is the response after 1s: ");
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
console.log("this is part 1");

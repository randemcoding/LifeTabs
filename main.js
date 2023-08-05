import {loadIn} from "./onload.js";
import {screens} from "./objects.js";
//localStorage.clear();


const body = document.body
body.innerHTML = screens.one


let dayBoxNumber = '';

const subHeader = document.querySelector('#sub-header');
const fitHeader = document.querySelector('#fitness-header')
const learningHeader = document.querySelector('#learning-header')
const tempFitHeader = document.querySelector('#temp-fitness-header')
const plansHeader = document.querySelector('#plans-header')

window.onload = loadIn();

const form = document.getElementById('form');

for (let i = 1; i <= 42; i++) {
  const dayBox = document.getElementById(`box-${i}`);
  dayBox.addEventListener('click', () => {
    form.style.display = 'inline-flex'; // show the form
    dayBoxNumber = i;
    // Check for existing data in local storage and append it to the form inputs
    const existingData = localStorage.getItem(`box-${dayBoxNumber}`);
   let p = document.createElement('p');
   p.innerText = existingData
   p.classList.add = 'form-paragraph';
   //form.appendChild(p);
   console.log(p)
  });

  // Right-click event listener to delete paragraph and local storage
  dayBox.addEventListener('contextmenu', (event) => {
    event.preventDefault(); // prevent default context menu
    const box = document.getElementById(`box-${i}`);
    const paragraph = box.querySelector('p');
    if (paragraph) {
      paragraph.remove(); // remove paragraph element
      localStorage.removeItem(`box-${i}`); // remove local storage item
    }
  });
}

const textInput = document.getElementById('text-input');
textInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    const box = document.getElementById(`box-${dayBoxNumber}`);
    const paragraph = document.createElement('p');
    paragraph.innerText = textInput.value;
    box.appendChild(paragraph);
    
    // Save data to local storage by appending to the existing data
    const existingData = localStorage.getItem(`box-${dayBoxNumber}`);
    const newData = existingData ? `${existingData}\n${textInput.value}_` : textInput.value +'_';
    localStorage.setItem(`box-${dayBoxNumber}`, newData);
    
    form.style.display = 'none'; // hide the form after submission
  } 
})

const exitButton = document.getElementById('exit');
exitButton.addEventListener('click', () => {
  form.style.display = 'none'; // hide the form after submission
});

// Get the sub-header element
// Add an event listener to the window object to listen for scroll events
window.addEventListener('scroll', () => {
  // Get the current vertical scroll position
  const scrollPos = window.scrollY;
  const windowWidth = window.innerWidth

  // Check if the user has scrolled past a certain point (e.g. 100 pixels)
  if (scrollPos > 300 && windowWidth < 800 || scrollPos > 600 && windowWidth > 800) {
    // If so, hide the sub-header by setting its display property to "none"
    subHeader.style.display = "none";
    //fitHeader.style.display = "inline-flex"
  } else {
    // Otherwise, show the sub-header by setting its display property to "block"
    subHeader.style.display = "block";
   // fitHeader.style.display = "none";
  };
})
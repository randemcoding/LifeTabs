let items = [];

//export 
function firstDate(a) {

    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    const currentDate = new Date();
    currentDate.setDate(a)
  
    return {
      dayName:currentDate.toLocaleString('en-US', { weekday: 'long' }),
      dayOfTheWeek: currentDate.getDate(),
      currentToday: new Date().getDate(),
      monthName: monthNames[currentDate.getMonth()],
      year: currentDate.getFullYear(),     // get the month name and year
      daysInMonth: new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate(),
      firstDayOfWeekIndex: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay(), // get the index of the first day of the month (0 for Sunday, 1 for Monday, etc.)
      lastDayIndex: new Date(currentDate.getFullYear(), currentDate.getMonth() +1, 1).getDay() 
    };
  }
  let today = firstDate(1)
  items.push(`Welcome back Today is ${today.monthName} ${today.currentToday} ${today.year}`);
  console.log(today)

  export function fillCalendar() {
    
    
    document.getElementById('current-month').innerText = `${today.monthName} ${today.year}`; // update the month header
    // loop through each box and set the day number
    for (let i = 1; i <= 42; i++) {
      const box = document.getElementById(`box-${i}`);
   
      if (!box) {
        break;
      }
      else {
  console.log()
  let dayNumber = i - today.firstDayOfWeekIndex;
        console.log(today.dayOfTheWeek)
        box.querySelector('.day-number').innerText = dayNumber;

        if (dayNumber >= 1 && dayNumber <= today.daysInMonth){
          box.querySelector('.day-number').innerText = dayNumber;
          box.classList.add('box')
        } else {
          box.style.opacity = '0';
        }
        if(dayNumber === today.currentToday){
          box.style.color = 'red';
        }
        if(dayNumber < today.currentToday && dayNumber >= 1){
          box.style.opacity = '.5';
        }
        
        
      }
    }
}

let number = '';
let workoutTracker = 0;
let lessonCount = 0;
let jogStatus = false;

export function loadIn() {
    
    fillCalendar()
  
    
   
    // Check for existing data in local storage
    for (let i = 1; i <= 42; i++) {
      const box = document.getElementById(`box-${i}`);
      const storedData = localStorage.getItem(`box-${i}`);
      const jogging = document.getElementById('jogging-container')
      const weightLifting = document.getElementById('weight-lifting-container')
      const lesson = document.getElementById('lesson-container')
      const plansContainer = document.getElementById('plans-container')
  
      if (storedData) {
        const preSplit = storedData.split('_');
        let paragraph1 = null;
        let paragraph2 = null;
        let paragraph3 = null;
        let paragraph4 = null;

        box.style.overflowY = 'scroll';
    
        if (preSplit[0]) {
          paragraph1 = document.createElement('p');
          paragraph1.innerText = preSplit[0];
          if (preSplit[0].includes("Planned")|| preSplit[0].includes("planned")){
            const dayText = document.getElementById(`box-number-${i}`)
            
            const dayLog = dayText.innerText
  
            const { monthName, year, currentToday } = firstDate(1);
            plansContainer.innerHTML += `<h2 class="fit-sub-text">${monthName}, ${dayLog}, ${year} - ${preSplit[0]}</h2>`;
            paragraph1.classList.add("plans")
          } else if (preSplit[0].includes("Completed") || preSplit[0].includes("completed")) {
            paragraph1.classList.add("learning");
            const dayText = document.getElementById(`box-number-${i}`)
            
            const dayLog = dayText.innerText
  
            const { monthName, year, currentToday } = firstDate(1);

            lessonCount++;
            lesson.innerHTML += `<h2 class="fit-sub-text">${monthName}, ${dayLog}, ${year} - ${preSplit[0]}</h2>`
          } else if (preSplit[0].includes("Jogged")|| preSplit[0].includes("jogged")){
            paragraph1.classList.add("jogging");
            const dayText = document.getElementById(`box-number-${i}`)
            const dayLog = dayText.innerText
            const { monthName, year, currentToday } = firstDate(1);
            jogStatus = true;
            jogging.innerHTML += `<h2 class="fit-sub-text">${monthName}, ${dayLog}, ${year} - ${preSplit[0]}</h2>`;
          } else if (preSplit[0].includes("Workout")|| preSplit[0].includes("workout")){
             paragraph1.classList.add("fitness")
             const dayText = document.getElementById(`box-number-${i}`)
            const dayLog = dayText.innerText
            const { monthName, year, currentToday } = firstDate(1);
            workoutTracker++;
            weightLifting.innerHTML += `<h2 class="fit-sub-text">${monthName}, ${dayLog}, ${year} - ${preSplit[0]}</h2>`;
          }  else {
            const dayText = document.getElementById(`box-number-${i}`)
            
            const dayLog = dayText.innerText
  
            const { monthName, year, currentToday } = firstDate(1);
            plansContainer.innerHTML += `<h2 class="fit-sub-text">${monthName}, ${dayLog}, ${year} - ${preSplit[0]}</h2>`;
            paragraph1.classList.add("plans")
          }
          box.appendChild(paragraph1);
        }
    
        if (preSplit.length > 1 && preSplit[1]) {
          paragraph2 = document.createElement('p');
          paragraph2.innerText = preSplit[1];
          if (preSplit[1].includes("Planned")|| preSplit[1].includes("planned")){
            const dayText = document.getElementById(`box-number-${i}`)
            const dayLog = dayText.innerText
            const { monthName, year, currentToday } = firstDate(1);
            plansContainer.innerHTML += `<h2 class="fit-sub-text">${monthName}, ${dayLog}, ${year} - ${preSplit[1]}</h2>`;
            paragraph2.classList.add("plans")
          }
          if (preSplit[1].includes("Completed") || preSplit[1].includes("completed")) {
            paragraph2.classList.add("learning");
            const dayText = document.getElementById(`box-number-${i}`)
            const dayLog = dayText.innerText
            const { monthName, year, currentToday } = firstDate(1);
            lessonCount++;
            lesson.innerHTML += `<h2 class="fit-sub-text">${monthName}, ${dayLog}, ${year} - ${preSplit[1]}</h2>`
          } else if (preSplit[1].includes("Jogged")|| preSplit[1].includes("jogged")){
            paragraph2.classList.add("jogging");
            const dayText = document.getElementById(`box-number-${i}`)
            const dayLog = dayText.innerText
            const { monthName, year, currentToday } = firstDate(1);
            jogStatus = true;
            jogging.innerHTML += `<h2 class="fit-sub-text">${monthName}, ${dayLog}, ${year} - ${preSplit[1]}</h2>`;  
          } else if (preSplit[1].includes("Workout")|| preSplit[1].includes("workout")){
             paragraph2.classList.add("fitness")
             const dayText = document.getElementById(`box-number-${i}`)
            const dayLog = dayText.innerText
            const { monthName, year, currentToday } = firstDate(1);
            workoutTracker++;
             weightLifting.innerHTML += `<h2 class="fit-sub-text">${monthName}, ${dayLog}, ${year} - ${preSplit[1]}</h2>`
          } else {
            const dayText = document.getElementById(`box-number-${i}`)
            const dayLog = dayText.innerText
            const { monthName, year, currentToday } = firstDate(1);
            plansContainer.innerHTML += `<h2 class="fit-sub-text">${monthName}, ${dayLog}, ${year} - ${preSplit[1]}</h2>`;
            paragraph2.classList.add("plans")
          }
          box.appendChild(paragraph2);
        }
    
        if (preSplit.length > 2 && preSplit[2]) {
          paragraph3 = document.createElement('p');
          paragraph3.innerText = preSplit[2];
          if (preSplit[2].includes("Planned")|| preSplit[2].includes("planned")){
            const dayText = document.getElementById(`box-number-${i}`)
            const dayLog = dayText.innerText
            const { monthName, year, currentToday } = firstDate(1);
            plansContainer.innerHTML += `<h2 class="fit-sub-text">${monthName}, ${dayLog}, ${year} - ${preSplit[2]}</h2>`;
            paragraph3.classList.add("plans")
          }
          if (preSplit[2].includes("Completed") || preSplit[2].includes("completed")) {
            paragraph3.classList.add("learning");
            const dayText = document.getElementById(`box-number-${i}`)
            const dayLog = dayText.innerText
            const { monthName, year, currentToday } = firstDate(1);
            lessonCount++;
            lesson.innerHTML += `<h2 class="fit-sub-text">${monthName}, ${dayLog}, ${year}${preSplit[2]}</h2>`
          } else if (preSplit[2].includes("Jogged")|| preSplit[2].includes("jogged")){
            paragraph3.classList.add("jogging");
            const dayText = document.getElementById(`box-number-${i}`)
            const dayLog = dayText.innerText
            const { monthName, year, currentToday } = firstDate(1);
            jogStatus = true;
            jogging.innerHTML += `<h2 class="fit-sub-text">${monthName}, ${dayLog}, ${year} - ${preSplit[2]}</h2>`;
          } else if (preSplit[2].includes("Workout")|| preSplit[2].includes("workout")){
             paragraph3.classList.add("fitness")
             const dayText = document.getElementById(`box-number-${i}`)
            const dayLog = dayText.innerText
            const { monthName, year, currentToday } = firstDate(1);
            workoutTracker++;
             weightLifting.innerHTML += `<h2 class="fit-sub-text">${monthName}, ${dayLog}, ${year} - ${preSplit[2]}</h2>`
          } else {
            const dayText = document.getElementById(`box-number-${i}`)
            const dayLog = dayText.innerText
            const { monthName, year, currentToday } = firstDate(1);
            plansContainer.innerHTML += `<h2 class="fit-sub-text">${monthName}, ${dayLog}, ${year} - ${preSplit[2]}</h2>`;
            paragraph3.classList.add("plans")
          }
          box.appendChild(paragraph3);
        }
  
        if (preSplit.length > 3 && preSplit[3]) {
          paragraph4 = document.createElement('p');
          paragraph4.innerText = preSplit[3];
          if (preSplit[3].includes("Planned")|| preSplit[3].includes("planned")){
            const dayText = document.getElementById(`box-number-${i}`)
            const dayLog = dayText.innerText
            const { monthName, year, currentToday } = firstDate(1);
            plansContainer.innerHTML += `<h2 class="fit-sub-text">${monthName}, ${dayLog}, ${year} - ${preSplit[2]}</h2>`;
            paragraph4.classList.add("plans")
          }
          if (preSplit[3].includes("Completed") || preSplit[3].includes("completed")) {
            paragraph4.classList.add("learning");
            const dayText = document.getElementById(`box-number-${i}`)
            const dayLog = dayText.innerText
            const { monthName, year, currentToday } = firstDate(1);
            lessonCount++;
            lesson.innerHTML += `<h2 class="fit-sub-text">${monthName}, ${dayLog}, ${year}${preSplit[2]}</h2>`
          } else if (preSplit[3].includes("Jogged")|| preSplit[3].includes("jogged")){
            paragraph3.classList.add("jogging");
            const dayText = document.getElementById(`box-number-${i}`)
            const dayLog = dayText.innerText
            const { monthName, year, currentToday } = firstDate(1);
            jogStatus = true;
            jogging.innerHTML += `<h2 class="fit-sub-text">${monthName}, ${dayLog}, ${year} - ${preSplit[2]}</h2>`;  
          } else if (preSplit[3].includes("Workout")|| preSplit[3].includes("workout")){
             paragraph4.classList.add("fitness")
             const dayText = document.getElementById(`box-number-${i}`)
            const dayLog = dayText.innerText
            const { monthName, year, currentToday } = firstDate(1);
            workoutTracker++;
             weightLifting.innerHTML += `<h2 class="fit-sub-text">${monthName}, ${dayLog}, ${year} - ${preSplit[2]}</h2>`
          } else {
            const dayText = document.getElementById(`box-number-${i}`)
            const dayLog = dayText.innerText
            const { monthName, year, currentToday } = firstDate(1);
            plansContainer.innerHTML += `<h2 class="fit-sub-text">${monthName}, ${dayLog}, ${year} - ${preSplit[2]}</h2>`;
            paragraph4.classList.add("plans")
          }
          box.appendChild(paragraph4);
        }
      }
    }
    const jogTotal = document.getElementById('jogging-container').innerHTML;
    if(jogTotal){
    // Use regex to match decimal numbers
    const regex = /\d+\.\d+/g;
    const matches = jogTotal.match(regex);
    
    // Calculate total miles jogged
    let totalMiles = 0;
    if(jogStatus === true){
    for (const match of matches) {
      totalMiles += parseFloat(match);
    }
    const totalMilesInput = document.getElementById('total-miles')
    const totalWorkouts = document.getElementById('total-workouts')
    if(workoutTracker >= 1){
      totalWorkouts.innerText = `Total Workouts: ${workoutTracker}`
    }
    const totalLessons = document.getElementById('total-lessons')
    if(lessonCount >= 1){
      totalLessons.innerText = `Total Lessons: ${lessonCount}`
    }
    let totalMilesFinal = Math.round(totalMiles);
    items.push(` Total Miles Jogged: ${totalMilesFinal}`, ` Total Workouts: ${workoutTracker}`, ` Learning Activities: ${lessonCount} Completed`);
    
    totalMilesInput.innerText = `Total Miles: ${totalMilesFinal}`
    
    const ticker = document.getElementById('ticker');
    function fillTicker(){
      let paragraph = document.createElement("p");
      paragraph.innerText = items;
      paragraph.classList.add('ticker-p');
      ticker.appendChild(paragraph);
    
    }
    fillTicker()
  }
  }
   
}


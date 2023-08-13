let calendarInners = '';

for (let row = 1; row <= 6; row++) {
  calendarInners += `<div id="row-${row}" class="row">`;

  for (let col = 1; col <= 7; col++) {
    const boxNumber = (row - 1) * 7 + col;
    calendarInners += `<div id="box-${boxNumber}" class="box"><h2 class="day-number" id="box-number-${boxNumber}"></h2></div>`;
  }

  calendarInners += '</div>';
}



export const screens = {
    one: `<div id="header"><p id="header-text">Life Tabs</p></div>
  <div id="nav-bar">
    <a href="#top" class="nav-bar-text" id="nav-one">Monthly</a>
    <a href="#fitness-target" class="nav-bar-text" id="nav-two">Fitness</a>
    <a href="#learn-target" class="nav-bar-text" id="nav-three">Learning</a>
    <a href="#plan-target" class="nav-bar-text" id="nav-four">Plans</a>
  </div>
  
   <br>
   <div id="sub-header">
    <div id="row-0" class="month">
      <h1 id="current-month">March</h1>
  </div>
  <div id="row-tweener">
      <p class="headline">Sunday</h3>
      <p class="headline">Monday</h3>
      <p class="headline">Tuesday</h3>
      <p class="headline">Wednesday</h3>
      <p class="headline">Thursday</h3>
      <p class="headline">Friday</h3>
      <p class="headline">Saturday</h3>
  </div>
   </div>
  <div id="calendar-container">
    ${calendarInners}    
  <div id="fitness-target"></div>
    
  </div>

  <div id="form">
    
    <button id="exit">X</button>
    
    <br>
    <input type="text" id="text-input">
    <br>
    <p class="form-paragraph">tag jogging acitvities with 'jogged'<br>
      also enter all distances with a decimal.<br>
       for example: you could enter: <br>
       'Jogged 7.0 Miles'
    </p>
    <p class="form-paragraph">
      tag workout acitvities with 'workout'<br>
      for example: you could enter: <br>
      'Full Body Workout @YMCA'
    </p>
    <p class="form-paragraph">
      tag learning acitvities with 'completed'<br>
      for example: you could enter: <br>
      'Completed HTML Lesson'
    </p>
    <p class="form-paragraph">
      tag plans with "planned"<br>
      for example: you could enter: <br>
      'Planned Workout'
    </p>
  </div>
  <div id="temp-fitness-header" class="temp-header"><h2>Fitness</h2></div>
  <div class="reg-container" id="fitness-container">
    <div id="jogging-container">
      <h2 class="fitness-text">Jogging</h2>
      <h2 class="fit-sub-text" id="total-miles"></h2>
    </div>
    <div id="weight-lifting-container">
      <h2 class="fitness-text">Weight Lifting</h2>
      <h2 class="fit-sub-text" id="total-workouts"></h2>
    </div>
    <div id="learn-target"></div>

  </div>
  <div id="temp-learning-header" class="temp-header"><h2>Learning</h2></div>
  <div class="reg-container" id="learning-container">
    <div id="lesson-container">
      <h2 class="fitness-text">Lessons</h2>
      <h2 class="fit-sub-text" id="total-lessons"></h2>

    </div>
    <div id="plan-target"></div>

  </div>
  <div id="temp-plans-header" class="temp-header"><h2>Plans</h2></div>
  <div class="reg-container" id="plans-container">
  
  </div>
  <button id="clear">clear</button>
 
  <div id="ticker">
    
  </div>
  
  </div>
  `
}
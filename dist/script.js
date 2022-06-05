let breakLength = document.getElementById("break-length");
let sessionLength = document.getElementById("session-length");


function incrementBreak() {
  if(parseFloat(breakLength.innerText) < 60){
  breakLength.innerText = parseFloat(breakLength.innerText) +1;  
  }   
}

function decrementBreak() {
  if(parseFloat(breakLength.innerText) > 0){
  breakLength.innerText = parseFloat(breakLength.innerText) -1;
  }
}
  
  
  


function incrementSession() {
  if (parseFloat(sessionLength.innerText) < 60) {
    let incrementedSessionValue = parseFloat(sessionLength.innerText) +1;
    sessionLength.innerText = incrementedSessionValue; 
    document.getElementById("minutes").innerText = incrementedSessionValue;
  }
  
}

function decrementSession() {
  if (parseFloat(sessionLength.innerText) > 0 ) {
    let decrementedSessionValue = parseFloat(sessionLength.innerText) -1;
    sessionLength.innerText = decrementedSessionValue; 
    document.getElementById("minutes").innerText = decrementedSessionValue; 
  }

}

function toggleClockOnOff() {
  
}

function resetClock() {
  
}
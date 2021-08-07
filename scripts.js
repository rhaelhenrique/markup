
let hour = 0;
let minute = 0;
let second = 0;
let millisecond = 0;

let auxMark = 0;

let cron;

//Clean field
  document.getElementById("text").value = "";

document.form_main.start.onclick = () => start();
document.form_main.pause.onclick = () => pause();
document.form_main.reset.onclick = () => reset();
document.form_main.markup.onclick = () => markup();
document.form_main.save.onclick = () => save();

function start() {
  pause();
  cron = setInterval(() => { timer(); }, 10);
}

function pause() {
  clearInterval(cron);
}

function reset() {
  var result = confirm("Confirma o Reset?");
  if (result == true){
    hour = 0;
    minute = 0;
    second = 0;
    millisecond = 0;
    document.getElementById('hour').innerText = '00';
    document.getElementById('minute').innerText = '00';
    document.getElementById('second').innerText = '00';
    document.getElementById('millisecond').innerText = '000';
  } else {
      exit;
  }
  
}

function timer() {
  if ((millisecond += 10) == 1000) {
    millisecond = 0;
    second++;
  }
  if (second == 60) {
    second = 0;
    minute++;
  }
  if (minute == 60) {
    minute = 0;
    hour++;
  }
  document.getElementById('hour').innerText = returnData(hour);
  document.getElementById('minute').innerText = returnData(minute);
  document.getElementById('second').innerText = returnData(second);
  document.getElementById('millisecond').innerText = returnData(millisecond);
}

function returnData(input) {
  return input > 10 ? input : `0${input}`
}

function markup() {
  document.getElementById('hour2').innerText = returnData(hour);
  document.getElementById('minute2').innerText = returnData(minute);
  document.getElementById('second2').innerText = returnData(second);
  document.getElementById('millisecond2').innerText = returnData(millisecond);
  auxMark = hour+":"+minute+":"+second+":"+millisecond;
  console.log(auxMark);
}

function save() {
  
  var text = "";
  text = document.getElementById("text").value;
  const aux = auxMark+" ::: "+text;
  console.log(aux);
  
  var auxh3 = document.createElement("H3");
  auxh3.innerHTML = aux;
  document.body.appendChild(auxh3);
  
  //Clean field
  document.getElementById("text").value = "";
}
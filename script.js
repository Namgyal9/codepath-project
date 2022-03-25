const clue_hold_time = 1000;
const clue_pause_time = 333;
var M;
var S;
const next_clue_wait_time = 1000;
var pattern;
var progress = 0;
var game_playing = false;
var guess_counter = 0;
var tonePlaying = false;
var volume = 0.5;
var x;

// basic functions
function times() {
  var m = 1;
  var s = 60;
  M = m;
  S = s;
  x = setInterval(function () {
    document.getElementById("timer").innerHTML = m + "m" + "  :  " + s + "s";
    s = s - 1;
    if (s == 0) {
      m = m - 1;
      s = 60;
      if (m == -1) {
        setTimeout(function () {
          lose_game();
          clearInterval(x);
          document.getElementById("timer").innerHTML =
            M + "m" + "  :  " + S + "s";
        }, 1000);
      }
    }
  }, 1000);
}

function start_game() {
  times();
  pattern = [];
  for (let i = 0; i < 8; i++) {
    pattern[i] = Math.floor(Math.random() * 4) + 1;
  }
  progress = 0;
  game_playing = true;
  document.getElementById("start_btn").classList.add("hidden");
  document.getElementById("stop_btn").classList.remove("hidden");
  play_clue_sequence();
}

function stop_game() {
  game_playing = false;
  document.getElementById("start_btn").classList.remove("hidden");
  document.getElementById("stop_btn").classList.add("hidden");
  clearInterval(x);
  document.getElementById("timer").innerHTML = M + "m" + "  :  " + S + "s";
}

// code below for playing the pattern

function light_button(btn) {
  document.getElementById("button" + btn).classList.add("lit");
}

function clear_button(btn) {
  document.getElementById("button" + btn).classList.remove("lit");
}

function play_single_clue(btn) {
  if (game_playing) {
    light_button(btn);
    playTone(btn, clue_hold_time);
    setTimeout(clear_button, clue_hold_time, btn); // built in function
  }
}

function play_clue_sequence() {
  guess_counter = 0;
  context.resume();
  let delay = next_clue_wait_time; //set delay to initial wait time
  for (let i = 0; i <= progress; i++) {
    // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(play_single_clue, delay, pattern[i]); // set a timeout to play that clue
    delay += clue_hold_time;
    delay += clue_pause_time;
  }
}

// checking user's response

function guess(btn) {
  console.log("user guessed:" + btn);
  if (!game_playing) {
    return;
  }
  if (pattern[guess_counter] == btn) {
    if (guess_counter == progress) {
      if (progress == pattern.length - 1) {
        win_game();
      } else {
        progress++;
        play_clue_sequence();
      }
    } else {
      guess_counter++;
    }
  } else {
    lose_game();
  }
}

function lose_game() {
  stop_game();
  document.getElementById("gunshot1").play();
  setTimeout(function () {
    document.getElementById("gunshot2").play();
  }, 1000);
  setTimeout(function () {
    alert("Game Over. You got shot dead");
  }, 2000);
}
function win_game() {
  stop_game();
  document.getElementById("kaching").play();
  setTimeout(function () {
    alert("Game Over. You won the money!");
  }, 1500);
}

// code below for tones

// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2,
};
function playTone(btn, len) {
  o.frequency.value = freqMap[btn];
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
  context.resume();
  tonePlaying = true;
  setTimeout(function () {
    stopTone();
  }, len);
}
function startTone(btn) {
  if (!tonePlaying) {
    context.resume();
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
    context.resume();
    tonePlaying = true;
  }
}
function stopTone() {
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025);
  tonePlaying = false;
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext;
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);

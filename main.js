function copyProgram(program, button) {
  console.log("copied");
  var copyText = document.getElementById(program);
  copyText.select(); 
  navigator.clipboard.writeText(copyText.value);

  var copiedElement = document.getElementById(button);
  copiedElement.innerHTML = "Copied!";

  setTimeout(function() {
    if (copiedElement.innerHTML === "Copied!") {
      copiedElement.innerHTML = "";
    }
  }, 5000); 
}

function switchProgram(current_pgm) {
  var containers = document.getElementsByClassName('textarea_container');
  for (var i = 0; i < containers.length; i++) {
      var container = containers[i];

          container.style.display = "none";
          document.getElementById(current_pgm).style.display="flex";

  }
}

function closeProgram() {
  var containers = document.getElementsByClassName('textarea_container');
  for (var i = 0; i < containers.length; i++) {
      var container = containers[i];

          container.style.display = "none";

  }
}


function openNav(){
  document.getElementById('pgmList').style.width="60vw"
}

function closeNav(){
  document.getElementById('pgmList').style.width="0"
}
// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // Variables 
  const hornSelect = document.getElementById('horn-select');
  const img = document.querySelector('img');
  const aud = document.querySelector('audio');
  const vol = document.getElementById('volume');
  const volimg = document.getElementById('volume-controls').querySelector('img');
  const computerVol = document.querySelector('audio'); 
  const but = document.querySelector('button'); 
  const jsConfetti = new JSConfetti(); 
  // Set image and audio based on dropdown selection
  hornSelect.addEventListener('change',() =>  { 
    const hornSelected = hornSelect.value;
    if (hornSelected=="air-horn") { 
      img.src = "assets/images/air-horn.svg";
      aud.src = "assets/audio/air-horn.mp3";
    } else if (hornSelected=='car-horn') { 
      img.src = "assets/images/car-horn.svg";
      aud.src = "assets/audio/car-horn.mp3";
    } else if (hornSelected=='party-horn') { 
      img.src = "assets/images/party-horn.svg";
      aud.src = "assets/audio/party-horn.mp3";
    }
  });
  // Set volume icon based on input 
  vol.addEventListener('change',() => { 
    const volSelected = vol.value; 
    if ((volSelected==0)) { 
      volimg.src = "assets/icons/volume-level-0.svg";
    } else if ((volSelected >= 1)&(volSelected < 33)) { 
      volimg.src = "assets/icons/volume-level-1.svg";
    } else if ((volSelected >= 33)&(volSelected < 67)) { 
      volimg.src = "assets/icons/volume-level-2.svg";
    } else if ((volSelected >= 67)) { 
      volimg.src = "assets/icons/volume-level-3.svg";
    }
    computerVol.volume = volSelected/100;
  });
  // Play audio upon button click 
  but.addEventListener('click', () => { 
    aud.play(); 
    const hs = hornSelect.value; 
    if (hs=='party-horn') { 
      jsConfetti.addConfetti(); 
    }
  }); 

}
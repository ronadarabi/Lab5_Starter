// explore.js
window.addEventListener('DOMContentLoaded', init);
function init()
{
  const voiceSelect= document.getElementById('voice-select');
  const talkButton= document.querySelector('button');
  const speakInput= document.getElementById('text-to-speak');
  const faceImage = document.querySelector('img');
  let allVoices =[];
  function populateVoices()
  {
  allVoices = speechSynthesis.getVoices();
  voiceSelect.innerHTML = '<option value= "select" disabled> Select Voice:</option>';
  allVoices.forEach(voice => {
    const option = document.createElement('option');
    option.textContent = voice.name;
    option.setAttribute('data-lang', voice.lang);
    option.setAttribute('data-name', voice.name);
    voiceSelect.appendChild(option);
  });
}
 if(speechSynthesis.onvoiceschanged !== undefined)
   {
       speechSynthesis.onvoiceschanged = populateVoices;
   }
  function speaking() {
    const selected= voiceSelect.selectedOptions[0].getAttribute('data-name');
    const voiceSelected = voiceSelect.value;
        const utterance = new SpeechSynthesisUtterance(speakInput.value);
        utterance.voice = allVoices.find(voice => voice.name === selected);
        utterance.onstart = () => {
      faceImage.src = './assets/images/smiling-open.png';
    };
    utterance.onend = () => {
      faceImage.src = './assets/images/smiling.png';
    };
    window.speechSynthesis.speak(utterance);
  }
   talkButton.addEventListener('click', speaking)
}
// Scripts.js
let isBulbOn = false;

function turnOn() {
  document.getElementById('bulb-img').src = 'on_bulb.png';
}

function turnOff() {
  document.getElementById('bulb-img').src = 'off_bulb.png';
}

function toggleBulb() {
  isBulbOn = !isBulbOn;
  const bulbImg = document.getElementById('bulb-img');
  bulbImg.src = isBulbOn ? 'on_bulb.png' : 'off_bulb.png';
  
window.watsonAssistantChatOptions = {
  integrationID: "447d694e-d915-4804-a0b7-442dafed7e27", // The ID of this integration.
  region: "eu-gb", // The region your integration is hosted in.
  serviceInstanceID: "bd74a283-2299-4090-8081-9fa96b9fd719", // The ID of your service instance.
  onLoad: async (instance) => { await instance.render(); }
};
setTimeout(function(){
  const t=document.createElement('script');
  t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
  document.head.appendChild(t);
});


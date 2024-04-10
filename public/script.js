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
}
window.watsonAssistantChatOptions = {
  integrationID: "4d3f4cb6-1b7f-4273-97bb-c4cd616b278c", // The ID of this integration.
  region: "eu-gb", // The region your integration is hosted in.
  serviceInstanceID: "bd74a283-2299-4090-8081-9fa96b9fd719", // The ID of your service instance.
  onLoad: async (instance) => { await instance.render(); }
};
setTimeout(function(){
  const t=document.createElement('script');
  t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
  document.head.appendChild(t);
});

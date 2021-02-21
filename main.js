//querySelectors
var affirmationSelected = document.querySelector('input[value="affirmation"]');
var mantraSelected = document.querySelector('input[value="mantra"]');
var receiveMessageButton = document.querySelector('.receive-message');
var placeholderImage = document.querySelector('.default-placeholder-image');
var message = document.querySelector('.message');

//arrays
var affirmation = [
  "I forgive myself and set myself free",
  "I believe I can be all that I want to be.",
  "I am in the process of becoming the best version of myself.",
  "I have the freedom & power to create the life I desire.",
  "I choose to be kind to myself and love myself unconditionally.",
  "My possibilities are endless.",
  "I am worthy of my dreams.",
  "I am enough.",
  "I deserve to be healthy and feel good.",
  "I am full of energy and vitality and my mind is calm and peaceful.",
  "Every day I am getting healthier and stronger.",
  "I honor my body by trusting the signals that it sends me.",
  "I manifest perfect health by making smart choices."
];
var mantra = [
  "Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.",
  "Don’t let yesterday take up too much of today.",
  "Every day is a second chance.",
  "Tell the truth and love everyone.",
  "I am free from sadness.",
  "I am enough.",
  "In the beginning it is you, in the middle it is you and in the end it is you.",
  "I love myself.",
  "I am present now.",
  "Inhale the future, exhale the past.",
  "This too shall pass.",
  "Yesterday is not today.",
  "The only constant is change.",
  "Onward and upward.",
  "I am the sky, the rest is weather."
];

//eventListeners
receiveMessageButton.addEventListener('click', loadMessage);

//functions and event handlerss
function loadMessage(event) {
  event.preventDefault();
    //alert("Hey");
   //hide the default placeholder image
   placeholderImage.classList.add('hidden');
   //unhide the message box
   message.classList.remove('hidden');
   console.log(affirmationSelected.checked);
   console.log(mantraSelected.checked);
  //if typeSelected is equal to the mantras array,
   if (mantraSelected.checked) {
   message.innerText = mantra[Math.floor(Math.random() * mantra.length)];
 } else if (affirmationSelected.checked) {
    message.innerText = affirmation[Math.floor(Math.random() * affirmation.length)];
  }
  //and show a random mantras index from the mantras array
}

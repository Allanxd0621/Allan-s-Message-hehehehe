const msgContainer = document.querySelector('.msgContainer');
const nextBtn = document.getElementById('nextBtn');

nextBtn.addEventListener('click' , function(){

const msgContainer1 = document.querySelector('.msgContainer1');


msgContainer.classList.add('msgContainer1');
msgContainer1.style.display = "block"



});

const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const msgContainer1 = document.querySelector('.msgContainer1');

yesBtn.addEventListener('click' , function(){

const msgContainer2 = document.querySelector('.msgContainer2');
const yesMp3 = document.getElementById('yesMp3');

yesMp3.play();
yesMp3.loop = true;
msgContainer1.classList.add('msgContainer2');
msgContainer1.style.display = "none";
msgContainer2.style.display = "block";


});

noBtn.addEventListener('click' , function(){

const msgContainer3 = document.querySelector('.msgContainer3');
const sadMp3 = document.getElementById('sadMp3');

sadMp3.play();
sadMp3.loop = true;
msgContainer1.classList.add('msgContainer3');
msgContainer1.style.display = "none";
msgContainer3.style.display = "block";


});

const retryBtn = document.getElementById('retry');
const retryBtn1 = document.getElementById('retry1');

retryBtn.addEventListener('click' , function(){

location.reload();

});

retryBtn1.addEventListener('click' , function(){

location.reload();

});


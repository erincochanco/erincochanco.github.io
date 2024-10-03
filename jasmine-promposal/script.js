const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const popup = document.getElementById('popup');

yesBtn.addEventListener('click', function() {
    popup.classList.remove('hidden');
    popup.classList.add('visible');
});

noBtn.addEventListener('mouseover', function() {
    const randomX = Math.floor(Math.random() * 300) - 150; // randomize X within -150px to 150px
    const randomY = Math.floor(Math.random() * 300) - 150; // randomize Y within -150px to 150px
    noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
});

const header = document.querySelector('header');
header.style.header = window.innerHeight + 'px';
header.style.width = window.innerWidth + 'px';

const particles = [];

const reactionButton = document.querySelector('.reaction-btn');
const reactionList = document.querySelector('.reaction-list')

reactionButton.addEventListener('click', ()=>{
    reactionList.classList.toggle('hidden');
})
function addReaction(number) {
    const item = document.createElement('img');
    item.className = 'particle';
    item.style.width = '50px';
    item.style.height = '50px';
    switch (number) {
        case 1:
            item.src = 'assets/emoji1.png';
            particles.push({
                x: 10,
                y: 10,
                item
            });
            break;
        case 2:
            item.src = 'assets/emoji2.png';
            particles.push({
                x: 10,
                y: 10,
                item
            });
            break;
        case 3:
            item.src = 'assets/emoji3.png';
            particles.push({
                x: 10,
                y: 10,
                item
            });
            break;
        case 4:
            item.src = 'assets/emoji4.png';
            particles.push({
                x: 10,
                y: 10,
                item
            });
            break;
    }
    reactionList.classList.add('hidden')
    reactionButton.classList.add('hidden')
    header.appendChild(particles[particles.length - 1].item);
}

let xSpeed = 3;
let ySpeed = 3;

function update() {
    particles.map(item=>{
        item.item.style.left = item.x + 'px';
        item.item.style.top = item.y + 'px';
    })
}

setInterval(() => {
    particles.map(item=>{
        console.log(item.item.clientWidth, window.innerWidth)
        if (item.x + item.item.clientWidth >= window.innerWidth || item.x <= 0) {
            xSpeed = -xSpeed;
        }
        console.log(item.item.clientHeight, window.innerHeight)
        if (item.y + item.item.clientHeight >= window.innerHeight || item.y <= 0) {
            ySpeed = -ySpeed;
        }

        item.x = item.x + xSpeed;
        item.y = item.y + ySpeed;
    })

    update();
}, 10)

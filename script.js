const planets = [
    {id: 'mercury', radius: 50, orbit: 200, speed: 0.001},
    {id: 'venus', radius: 75, orbit: 300, speed: 0.0004},
    {id: 'earth', radius: 100, orbit: 400, speed: 0.0006},
    {id: 'mars', radius: 120, orbit: 500, speed: 0.0005},
    {id: 'jupiter', radius: 180, orbit: 600, speed: 0.0002},
    {id: 'saturn', radius: 200, orbit: 700, speed: 0.00015},
    {id: 'uranus', radius: 160, orbit: 800, speed: 0.0001},
    {id: 'neptune', radius: 150, orbit: 900, speed: 0.00009},
];
const moon = {id: 'moon', radius: 10, orbit: 80, speed: 0.005};

function randomNumber(min, max) {
    return Math.random() * (max - min + 1) + min;
}

const start = 1000;
let result = "";

for (let i = 0; i < start; i++) {
    result += `${randomNumber(-100, 100)}vw ${randomNumber(-100, 100)}vh ${randomNumber(0, 0.5)}px ${randomNumber(0, 0.5)}px #fff, `;
}

const space = document.querySelector('#space');
const centerX = window.innerWidth / 2;
const centerY = window.innerHeight / 2;
space.style.boxShadow = result.slice(0, -2);


function movePlantes() {
    const time = Date.now();

    planets.forEach(planet => {
        const elem = document.querySelector(`#${planet.id}`);
        const angle = time * planet.speed;

        const x = Math.cos(angle) * planet.orbit;
        const y = Math.sin(angle) * planet.orbit;

        let left = centerX + x - planet.radius + 'px';
        let top = centerY + y - planet.radius + 'px';
        elem.style.left = left;
        elem.style.top = top;
        elem.style.transform = `translate(${left}, ${top})`;
    });

    const moonElem = document.querySelector(`#moon`);
    const moonAngle = time * moon.speed;

    const moonX = Math.cos(moonAngle) * moon.orbit;
    const moonY = Math.sin(moonAngle) * moon.orbit;

    const earth = document.querySelector('#earth');
    const earthX = Number(earth.style.left.slice(0, -2)) + earth.clientWidth / 2;
    const earthY = Number(earth.style.top.slice(0, -2)) + earth.clientHeight / 2;

    let left = earthX + moonX - moon.radius + 'px';
    let top = earthY + moonY - moon.radius + 'px';
    moonElem.style.left = left;
    moonElem.style.top = top;
    moonElem.style.transform = `translate(${left}, ${top})`;

}

function animate() {
    movePlantes();
    requestAnimationFrame(animate);
}

animate();

// https://youtu.be/_QVOWzqdn3A?si=b2u0vqQa62uHosYN&t=881
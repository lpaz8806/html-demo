let score = 0;
const scoreViewer = document.getElementById('score-viewer');
const scenario = document.getElementsByTagName('main')[0];
const player = createPlayer();

const monsters = new Set([
    createMonster({ x: 10, y: 10, points: 50 }),
    createMonster({ x: 60, y: 10, points: 80 }),
    createMonster({ x: 110, y: 10, points: 40 }),
    createMonster({ x: 160, y: 10, points: 40 })
]);

scoreViewer.innerHTML = `Score: ${score}`;
scenario.appendChild(player);

for (const monster of monsters) {
    scenario.appendChild(monster);
}

document.addEventListener('keydown', e => {
    const dx = 10;
    const currentLeft = player.offsetLeft;

    if (e.key === 'ArrowRight') {
        const newLeft = Math.min(window.innerWidth - player.offsetWidth, currentLeft + dx);
        player.style.left = `${newLeft}px`;
    }
    else if (e.key === 'ArrowLeft') {
        const newLeft = Math.max(0, currentLeft - dx);
        player.style.left = `${newLeft}px`;
    }
    
    if (e.key === 'Control') {
        const bullet = createBullet(
            currentLeft + player.offsetWidth / 2,
            player.offsetTop - 5
        );
        scenario.appendChild(bullet);
    }

    // console.log('key down', e);
});

function increaseScore(points) {
    score += points;
    scoreViewer.innerHTML = `Score: ${score}`;
}

setInterval(()=> {
    const bullets = document.getElementsByClassName('bullet');
    
    for (const bullet of bullets) {
        const bulletNewTop = bullet.offsetTop - 5;
        bullet.style.top = `${bulletNewTop}px`;

        const hitMonster = findCollision(monsters, bullet);

        if (hitMonster !== null) {
            monsters.delete(hitMonster);
            scenario.removeChild(hitMonster);
            scenario.removeChild(bullet);
            
            const points = parseInt(hitMonster.getAttribute('data-points'));
            increaseScore(points);
            continue;
        }

        if (bulletNewTop< 0) {
            scenario.removeChild(bullet);
        }
    }

}, 50);

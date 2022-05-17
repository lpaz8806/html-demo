const scenario = document.getElementsByTagName('main')[0];
const player = createPlayer();
const monsters = new Set([
    createMonster(10, 10),
    createMonster(60, 10),
    createMonster(110, 10),
    createMonster(160, 10)
]);

scenario.appendChild(player);

for (const monster of monsters) {
    scenario.appendChild(monster);
}

// console.log(scenario.getBoundingClientRect());

document.addEventListener('keydown', e => {
    const dx = 10;
    const currentLeft = player.offsetLeft;

    if (e.key === 'ArrowRight') {
        const newLeft = currentLeft + dx;
        player.style.left = `${newLeft}px`;
    }
    else if (e.key === 'ArrowLeft') {
        const newLeft = currentLeft - dx;
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


setInterval(()=> {
    const bullets = document.getElementsByClassName('bullet');
    
    for (const bullet of bullets) {
        const bulletNewTop = bullet.offsetTop - 2;
        bullet.style.top = `${bulletNewTop}px`;

        const hitMonster = findCollision(monsters, bullet);

        if (hitMonster !== null) {
            monsters.delete(hitMonster);
            scenario.removeChild(hitMonster);
            scenario.removeChild(bullet);
            continue;
        }

        if (bulletNewTop< 0) {
            scenario.removeChild(bullet);
        }
    }

}, 50);

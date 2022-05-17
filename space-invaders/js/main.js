const scenario = document.getElementsByTagName('main')[0];
const player = createPlayer();
const monsters = [
    createMonster(10, 10),
    createMonster(60, 10),
    createMonster(110, 10),
    createMonster(160, 10)
];

scenario.appendChild(player);
monsters.forEach(monster => {
    console.log(monster);
    scenario.appendChild(monster);
});

document.addEventListener('keydown', e => {
    const dx = 10;
    console.log('bound', player.getBoundingClientRect());

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
            player.offsetTop - 50
        );
        scenario.appendChild(bullet);
    }

    // console.log('key down', e);
});

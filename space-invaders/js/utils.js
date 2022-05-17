function createPlayer() {
    const player = document.createElement('div');
    player.classList.add('player');
    return player;
}

function createMonster(x, y) {
    const monster = document.createElement('div');
    monster.classList.add('monster');
    monster.style.left = `${x}px`;
    monster.style.top = `${y}px`;
    return monster;
}

function createBullet(x, y) {
    const bullet = document.createElement('div');
    bullet.classList.add('bullet');
    bullet.style.left = `${x}px`;
    bullet.style.top = `${y}px`;
    return bullet;
}
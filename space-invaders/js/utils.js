function createPlayer() {
    const player = document.createElement('div');
    player.classList.add('player');
    return player;
}

function createMonster(args) {
    const monster = document.createElement('div');
    monster.classList.add('monster');
    monster.style.left = `${args.x}px`;
    monster.style.top = `${args.y}px`;
    monster.setAttribute('data-points', args.points);
    return monster;
}

function createBullet(x, y) {
    const bullet = document.createElement('div');
    bullet.classList.add('bullet');
    bullet.style.left = `${x}px`;
    bullet.style.top = `${y}px`;
    return bullet;
}

function findCollision(monstersSet, bullet) {
    const bulletRect = bullet.getBoundingClientRect();

    for (const monster of monstersSet) {
        if (collisionDetected(bulletRect, monster.getBoundingClientRect())) {
            return monster;
        }
    }

    return null;
}

function collisionDetected(bulletRect, monsterRect) {
    const bulletX = bulletRect.left;
    const xMin = monsterRect.left - bulletRect.width + 1;
    const xMax = monsterRect.right + bulletRect.width - 1;
    
    if (bulletX < xMin || bulletX > xMax) {
        return false;
    }
    // console.log('horizontal position ok');

    const yMax = monsterRect.top + monsterRect.height;
    const bulletY = bulletRect.top;

    if (bulletY > yMax) {
        return false;
    }
    // console.log('vertical position ok');

    return true;
}

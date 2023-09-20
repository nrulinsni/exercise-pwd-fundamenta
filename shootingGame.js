//exercise day 8
class Player {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.power = 10;
    }

    hit(power) {
        this.health -= power;
    }

    useItem(item) {
        this.health += item.health;
        this.power += item.power;
    }

    showStatus() {
        console.log(`${this.name} (Health => ${this.health}, Power => ${this.power})`);
    }
}

class ShootingGame {
    constructor(player1, player2) {
        this.players = [player1, player2];
    }

    getRandomItem() {
        return { health: Math.random() < 0.5 ? 0 : 10, power: Math.random() < 0.5 ? 0 : 10 };
    }

    start() {
        let currentPlayerIndex = 0;

        while (this.players[0].health > 0 && this.players[1].health > 0) {
            const currentPlayer = this.players[currentPlayerIndex];
            const otherPlayer = this.players[1 - currentPlayerIndex];

            console.log("Player Status Before Shooting:");
            this.players.forEach((player) => player.showStatus());

            const item = this.getRandomItem();
            currentPlayer.useItem(item);

            console.log(`${currentPlayer.name} got an item:`, item);

            console.log(`${currentPlayer.name} is shooting ${otherPlayer.name}`);
            otherPlayer.hit(currentPlayer.power);

            console.log("Player Status After Shooting:");
            this.players.forEach((player) => player.showStatus());

            if (otherPlayer.health <= 0) {
                console.log(`${currentPlayer.name} wins!`);
                return;
            }

            currentPlayerIndex = 1 - currentPlayerIndex;
        }
    }
}

const playerA = new Player("Dhea");
const playerB = new Player("Jujul");
const game = new ShootingGame(playerA, playerB);
game.start();

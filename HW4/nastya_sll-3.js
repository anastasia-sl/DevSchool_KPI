class Warrior {
    constructor() {
        this.level = 1;
        this.experience = 100;
        this.rank = "Pushover";
        this.achievements = [];
    }

    getLevel() {
        return this.level;
    }

    getExperience() {
        return this.experience;
    }

    getRank() {
        return this.rank;
    }

    getAchievements() {
        return this.achievements;
    }

    training(trainingData) {
        const [description, experience, minLevel] = trainingData;
        if (this.level >= minLevel) {
            this.experience += experience;
            this.achievements.push(description);
            return description;
        } else {
            return "Not strong enough";
        }
    }

    battle(enemyLevel) {
        if (enemyLevel < 1 || enemyLevel > 100) {
            return "Invalid level";
        }

        const levelDifference = enemyLevel - this.level;
        if (levelDifference >= 5 && this.rank !== "Greatest") {
            return "You've been defeated";
        }

        let earnedExperience = 0;
        if (levelDifference === 0) {
            earnedExperience = 10;
        } else if (levelDifference === -1) {
            earnedExperience = 5;
        } else if (levelDifference >= 1) {
            earnedExperience = 20 * levelDifference * levelDifference;
        }

        this.experience += earnedExperience;

        if (this.experience > 10000) {
            this.experience = 10000;
        }

        while (this.experience >= (this.level + 1) * 100) {
            this.level++;
            if (this.level % 10 === 0) {
                this.rank = this.getRankName(this.level);
            }
        }

        if (levelDifference >= 2) {
            return "Easy fight";
        } else if (levelDifference === 1 || levelDifference === 0) {
            return "A good fight";
        } else {
            return "An intense fight";
        }
    }

    getRankName(level) {
        const rankTiers = [
            "Pushover",
            "Novice",
            "Fighter",
            "Warrior",
            "Veteran",
            "Sage",
            "Elite",
            "Conqueror",
            "Champion",
            "Master",
            "Greatest",
        ];
        return rankTiers[Math.floor((level - 1) / 10)];
    }
}

var bruce_lee = new Warrior();
console.log(bruce_lee.getLevel());
console.log(bruce_lee.getExperience());
console.log(bruce_lee.getRank());
console.log(bruce_lee.getAchievements());

console.log(bruce_lee.training(["Defeated Chuck Norris", 9000, 1]));
console.log(bruce_lee.getExperience());
console.log(bruce_lee.getLevel());
console.log(bruce_lee.getRank());



function compareFn(a, b) {
    if (a < b) {
        return -1;
    } else if (a > b) {
        return 1;
    }

    return 0;
}

const imone = {
    algos: [
        {
            "vardas": "Jonas",
            "alga": 1200
        },
        {
            "vardas": "Lukas",
            "alga": 1800
        },
        {
            "vardas": "Algis",
            "alga": 2000
        }
    ],
    vardai: function() {
        return this.algos
            .filter((obj) => obj.alga > 200)
            .map((obj) => obj.vardas)
            .sort(compareFn);
    },
    algosf: function() {
        return this.algos.reduce((a, b) => a + b.alga, 0);
    }
};

console.log(imone.vardai());
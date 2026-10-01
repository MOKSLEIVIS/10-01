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
    ]
};

// 1
const filtered_names = imone["algos"]
    .filter((obj) => obj["alga"] > 200)
    .map((obj) => obj["vardas"])
    .sort()

console.log(filtered_names);

// 2
console.log(imone["algos"].reduce((a, b) => a + b["alga"], 0));
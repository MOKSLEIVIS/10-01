const arr = [
    {
        "name": "Apelsinas",
        "kaina": 0.39,
        "kiekis": 5
    },
    {
        "name": "Batonas",
        "kaina": 0.99,
        "kiekis": 2
    },
    {
        "name": "Vanduo",
        "kaina": 0.49,
        "kiekis": 1
    },
    {
        "name": "Plytos",
        "kaina": 9.99,
        "kiekis": 30
    }
];

// 1
console.log(`Visos prekes:`);
for (const preke of arr) {
    console.log(`${preke["name"]}   ${preke["kaina"]}$ x ${preke["kiekis"]}`);
}
console.log(`Bendra suma: ${arr.reduce((a, b) => a + b["kaina"] * b["kiekis"], 0)}$`);

// 2
console.log(`\nPrekes kurios virsija 20$:`);
const filtered_prekes = arr.filter((obj) => obj["kaina"] * obj["kiekis"] > 20);
for (const preke of filtered_prekes) {
    console.log(`${preke["name"]}   ${preke["kaina"]}$ x ${preke["kiekis"]}`);
}
console.log(`Bendra suma: ${filtered_prekes.reduce((a, b) => a + b["kaina"] * b["kiekis"], 0)}$`);
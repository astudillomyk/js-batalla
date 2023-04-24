let heroe = {
    name: "hero",
    totalhealth: 100,
    damage: 110,
    actualhealth: 100

};

let limo = {
    name: "slime",
    totalhealth: 300,
    damage: 20,
    actualhealth: 300

};


while (heroe.actualhealth > 0 && limo.actualhealth > 0) {

    limo.actualhealth -= heroe.damage;
    

    console.log(`nombre: ${heroe.name}`);
    console.log(`vida: ${heroe.actualhealth} / ${heroe.totalhealth} ` )

    console.log(`nombre: ${limo.name}`);
    console.log(`vida: ${limo.actualhealth} / ${limo.totalhealth} `)


    console.log(`${heroe.name} ataca a ${limo.name} y le hace ${heroe.damage} puntos de daño.`);

  
    if (limo.actualhealth <= 0) {
        console.log(`${limo.name} ha sido derrotado. ¡${heroe.name} es el ganador!`);
        break;
    }


    heroe.actualhealth -= limo.damage;

    console.log(`nombre: ${heroe.name}`);
    console.log(`vida: ${heroe.actualhealth} / ${heroe.totalhealth} ` )

    console.log(`nombre: ${limo.name}`);
    console.log(`vida: ${limo.actualhealth} / ${limo.totalhealth} `)


    console.log(`${limo.name} ataca a ${heroe.name} y le hace ${limo.damage} puntos de daño.`);

    
    if (heroe.actualhealth <= 0) {
        console.log(`${heroe.name} ha sido derrotado. ¡${limo.name} es el ganador!`);
        break;
    }
}
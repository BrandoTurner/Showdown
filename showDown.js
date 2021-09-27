function fight(){
    
    let hero = prompt("What's your name, hero?");
    let monster = prompt("What's the name of this beast?");
    let villainHealth = 50;
    let heroHealth = 50;

    while(villainHealth > 0  && heroHealth > 0){
        let heroDice = Math.floor(Math.random() * 20);
        
        
        if (heroDice == 1 || heroDice == 2){
                heroHealth -= 5;
                alert( `${hero} Dice fell on ${heroDice}`)
                alert(`${hero} stabbed themselves for 5 damage. ${hero}'s health is now ${heroHealth}`);
        }
        else if( heroDice >= 3 &&  heroDice <= 10){
            alert( `${hero} Dice fell on ${heroDice}`)
                alert(`${hero} missed and did 0 damage, ${monster} still has ${villainHealth} health`);
        }
        else if( heroDice >= 11 && heroDice <= 18){
            alert( `${hero} Dice fell on ${heroDice}`)
            villainHealth -= 10;
            alert(`Successful hit, ${hero} . You hit for 10 damage. ${monster}'s health is now ${villainHealth}'`);
        }

        else if( heroDice >= 19 && heroDice <= 20){
            alert(`${hero}Dice fell on ${heroDice}`)
            villainHealth -= 20;
            alert(`Critical Hit! from ${hero}! 20 damage! ${monster}'s health is at ${villainHealth}'`);
        }
        let vilDice =  Math.floor(Math.random() * 20);

    if (vilDice == 1 || vilDice == 2){
        alert( `${monster} Dice fell on ${vilDice}`)
            villainHealth -= 5;
            alert(`${monster} stabbed themselves for 5 damage. ${monster}'s health is now ${villainHealth}`);
    }
    else if( vilDice >= 3  &&  vilDice <= 10){
        alert( `${monster} Dice fell on ${vilDice}`)
            alert(`${monster} missed and did 0 damage. ${hero} has ${heroHealth} still.`);
    }
    else if( vilDice >= 11 && vilDice <= 18){
        alert(`${monster} Dice fell on ${vilDice}`)
        heroHealth -= 10;
        alert(`${monster} made a hit. They hit for 10 damage. ${hero}'s health is now ${heroHealth}'`);
    }

    else if( vilDice >= 19 && vilDice <= 20){
        alert( `${monster} Dice fell on ${vilDice}`)
        heroHealth -= 20;
        alert(`Woah ${monster} scored a Critical Hit! 20 damage! ${hero}'s health is at ${heroHealth}'`);
        
    }
}
    if (villainHealth <= 0 && villainHealth < heroHealth) {
        alert(`${hero} defeated ${monster}, ${hero} is the winner!!`);
      }
      else if (heroHealth <= 0 && heroHealth < villainHealth) {
        alert(`${monster} defeated ${hero}, ${monster} has won`);
      }
      
      else if (heroHealth && villainHealth == 0) {
        alert(`${hero} and ${monster} have defeated each other! We have a Draw.`);
  
      }
}

fight();
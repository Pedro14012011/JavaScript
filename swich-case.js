const classe = "Mago";

switch (classe) {

case "Guerreiro": 
    console.log("Classe: Guerreiro"); 
    console.log("0 querreiro é un combatente corpo a corpo, especializado en força e resistência.");
    console.log("Habilidades: Ataque poderoso, Defesa sólida, Fúria de batalha");
    break;
case "Mago":
    console.log("maga é un conjurador de feitiços, especializado en magia ofensiva e suporte."); 
    console.log("nabilidades: Magia de fogo, Magla de gelo, Magia de cura");
    console.log("Classe: Mago");
    break;
case "Arqueiro":
    console.log("Classe: Arqueiro");
    console.log("0 arqueiro iro é um atirador de langa distância, especializado en precisão e agilidade.");
    console.log("Habilidades: Precisão, Agilidade, Tiro con precisão");
    break;
case "Ladino":
    console.log(" Ladino é un especialista en furtividade e trapes, utilizado para sabotagen e espionagem.");
    console.log("Classe: Ladino");
    console.log("Habilidades: Furtividade, Trapas, Assassinio");
    break;
default:
console.log("Classe desconhecida. Por favor, cocolhe entre guerreiro, mago, arqueiro ou ladine.");
}
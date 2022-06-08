//generator chara

//setup canvas and graphics conxext
let cnv = document.getElementById("mycanvas");


//elements
let genEl = document.getElementById("gen");
let charaEl = document.getElementById("chara");
let raceEl = document.getElementById("race");
let subclaEl = document.getElementById("subcla");
let gendEl = document.getElementById("gend");
let apperEl = document.getElementById("apper");
let wizhatEl = document.getElementById("wizhat");

//listen
genEl.addEventListener("click", genr);





function genr(){

    

    let randclass = Math.floor(Math.random() * 13)+1;
    let randrace =Math.floor(Math.random()* 20)+1;
    let randsubcla = Math.floor(Math.random()*10)+1;
    //let randgend = Math.floor(Math.random()*2)+1;

 if (randclass === 13) {
    charaEl.innerHTML = "Wizard";
    wizhatEl.src = "wizhat.png";
    

   if (randsubcla === 1){
      subclaEl.innerHTML = "Necromancy";
   } else if (randsubcla === 2){
      subclaEl.innerHTML = "Transmutation";
   } else if (randsubcla === 3){
      subclaEl.innerHTML = "Abjuration";
   } else if (randsubcla === 4){
      subclaEl.innerHTML = "Conjuration";
   } else if (randsubcla === 5){
      subclaEl.innerHTML = "Divination";
   } else if (randsubcla === 6){
      subclaEl.innerHTML = "Enchantment";
   } else if (randsubcla === 7){
      subclaEl.innerHTML = "Evocation";
   } else if (randsubcla === 8){
      subclaEl.innerHTML = "Illusion";
   } else if (randsubcla === 9){
      subclaEl.innerHTML = "Bladesinger";
   } else {
      subclaEl.innerHTML = "Order of Scribes";
   } 
 } else if (randclass === 12) {
    charaEl.innerHTML = "Warlock";
    wizhatEl.src = "waram.png";


    if (randsubcla <= 2){
      subclaEl.innerHTML = "Archfey";
   } else if (randsubcla <= 4){
      subclaEl.innerHTML = "Feind";
   } else if (randsubcla <= 6){
      subclaEl.innerHTML = "Great Old One";
   } else if (randsubcla <= 8){
      subclaEl.innerHTML = "Genie";
   } else {
      subclaEl.innerHTML = "Fathomless";
   } 
 } else if (randclass === 11) {
    charaEl.innerHTML = "Sorcerer";
    wizhatEl.src = "sorsun.png";


    if (randsubcla <= 2){
      subclaEl.innerHTML = "Draconic Bloodline";
   } else if (randsubcla <= 4){
      subclaEl.innerHTML = "Wild Magic";
   } else if (randsubcla <= 6){
      subclaEl.innerHTML = "Abberant Mind";
   } else if (randsubcla <= 8){
      subclaEl.innerHTML = "Clockwork Soul";
   } else {
      subclaEl.innerHTML = "Storm Sorcery";
   } 
 } else if (randclass === 10) {
    charaEl.innerHTML = "Rouge";
    wizhatEl.src = "rohat.png";


    if (randsubcla <= 2){
      subclaEl.innerHTML = "Theif";
   } else if (randsubcla <= 4){
      subclaEl.innerHTML = "Assasin";
   } else if (randsubcla <= 6){
      subclaEl.innerHTML = "Arcane Trickster";
   } else if (randsubcla <= 8){
      subclaEl.innerHTML = "Phantom";
   } else {
      subclaEl.innerHTML = "Soulknife";
   } 
 } else if (randclass === 9) {
    charaEl.innerHTML = "Ranger";
    wizhatEl.src = "rabow.png";


    if (randsubcla <= 2){
      subclaEl.innerHTML = "Hunter";
   } else if (randsubcla <= 4){
      subclaEl.innerHTML = "Beast Master";
   } else if (randsubcla <= 6){
      subclaEl.innerHTML = "Fey Wanderer";
   } else if (randsubcla <= 8){
      subclaEl.innerHTML = "Swarmkeeper";
   } else {
      subclaEl.innerHTML = "Gloom Stalker";
   } 
 } else if (randclass === 8) {
    charaEl.innerHTML = "Paladin";
    wizhatEl.src = "paswo.png";


    if (randsubcla <= 2){
      subclaEl.innerHTML = "Oath of the Ancients";
   } else if (randsubcla <= 4){
      subclaEl.innerHTML = "Oath of Devotion";
   } else if (randsubcla <= 6){
      subclaEl.innerHTML = "Oath of Vengeance";
   } else if (randsubcla <= 8){
      subclaEl.innerHTML = "Oath of Glory";
   } else {
      subclaEl.innerHTML = "Oath of the Watchers";
   } 
 } else if (randclass === 7) {
    charaEl.innerHTML = "Monk";
    wizhatEl.src = "monkhat.png";


    if (randsubcla <= 2){
      subclaEl.innerHTML = "Way of the Open Hand";
   } else if (randsubcla <= 4){
      subclaEl.innerHTML = "Way of Shadow";
   } else if (randsubcla <= 6){
      subclaEl.innerHTML = "Way of the Four Elements";
   } else if (randsubcla <= 8){
      subclaEl.innerHTML = "Way of Mercy";
   } else {
      subclaEl.innerHTML = "Way of the Astral Self";
   } 
 } else if (randclass === 6) {
    charaEl.innerHTML = "Fighter";
    wizhatEl.src = "fiswo.png";


    if (randsubcla <= 2){
      subclaEl.innerHTML = "Psi Warrior";
   } else if (randsubcla <= 4){
      subclaEl.innerHTML = "Rune Knight";
   } else if (randsubcla <= 6){
      subclaEl.innerHTML = "Battle Master";
   } else if (randsubcla <= 8){
      subclaEl.innerHTML = "Eldrich Knight";
   } else {
      subclaEl.innerHTML = "Champion";
   } 
 } else if (randclass === 5) {
    charaEl.innerHTML = "Druid";
    wizhatEl.src = "druidhat.png";
   

    if (randsubcla <= 2){
      subclaEl.innerHTML = "Circle of the Moon";
   } else if (randsubcla <= 4){
      subclaEl.innerHTML = "Circle of the Land";
   } else if (randsubcla <= 6){
      subclaEl.innerHTML = "Circle of Spores";
   } else if (randsubcla <= 8){
      subclaEl.innerHTML = "Circle of Twilight";
   } else {
      subclaEl.innerHTML = "Circle of Wildfire";
   } 
 } else if (randclass === 4) {
    charaEl.innerHTML = "Cleric";
    wizhatEl.src = "clerhat.png";


    if (randsubcla === 1){
      subclaEl.innerHTML = "Knowledge Domain";
   } else if (randsubcla === 2){
      subclaEl.innerHTML = "life Domain";
   } else if (randsubcla === 3){
      subclaEl.innerHTML = "Light Domain";
   } else if (randsubcla === 4){
      subclaEl.innerHTML = "Nature Domain";
   } else if (randsubcla === 5){
      subclaEl.innerHTML = "Tempest Domain";
   } else if (randsubcla === 6){
      subclaEl.innerHTML = "Trickery Domain";
   } else if (randsubcla === 7){
      subclaEl.innerHTML = "War Domain";
   } else if (randsubcla === 8){
      subclaEl.innerHTML = "Death Domain";
   } else if (randsubcla === 9){
      subclaEl.innerHTML = "Order Domain";
   } else {
      subclaEl.innerHTML = "Peace Domain";
   } 
 } else if (randclass === 3) {
    charaEl.innerHTML = "Bard";
    wizhatEl.src = "bardhat.png";

    if (randsubcla <= 2){
      subclaEl.innerHTML = "College of Valor";
   } else if (randsubcla <= 4){
      subclaEl.innerHTML = "College of Lore";
   } else if (randsubcla <= 6){
      subclaEl.innerHTML = "College of Creation";
   } else if (randsubcla <= 8){
      subclaEl.innerHTML = "College of Eloquence";
   } else {
      subclaEl.innerHTML = "College of Glamour";
   } 
 } else if (randclass === 2){
     charaEl.innerHTML = "Barbarian";
    wizhatEl.src = "barbhat.png";

     if (randsubcla <= 2){
      subclaEl.innerHTML = "Path of the Beast";
   } else if (randsubcla <= 4){
      subclaEl.innerHTML = "Path of Wild Mage";
   } else if (randsubcla <= 6){
      subclaEl.innerHTML = "Path of the Totem Warrior";
   } else if (randsubcla <= 8){
      subclaEl.innerHTML = "Path of the Berserker";
   } else {
      subclaEl.innerHTML = "Path of Ancestral Guardian";
   } 
     
 } else {
     charaEl.innerHTML = "Artificer";
     wizhatEl.src = "arthat.png";


     if (randsubcla <= 10/4){
      subclaEl.innerHTML = "Alchemist";
   } else if (randsubcla <= 5){
      subclaEl.innerHTML = "Artillerist";
   } else if (randsubcla <= 30/4){
      subclaEl.innerHTML = "BattleSmith";
   } else {
      subclaEl.innerHTML = "Armorer";
   } 
   
 }
 console.log(randrace);
 if (randrace === 14) {
   raceEl.innerHTML = "Gnome";
   apperEl.src = "apper.webp";
   

} else if (randrace === 13) {
   raceEl.innerHTML = "Goliath";
   apperEl.src = "apper.webp";
   

} else if (randrace === 12) {
   raceEl.innerHTML = "Elf";
   apperEl.src = "apperelf.webp";
   

} else if (randrace === 11) {
   raceEl.innerHTML = "Dwarf";
   apperEl.src = "apper.webp";
   

} else if (randrace === 10) {
   raceEl.innerHTML = "Half-Elf";
   apperEl.src = "apperelf.webp";
   

} else if (randrace === 9) {
   raceEl.innerHTML = "Halfling";
   apperEl.src = "apper.webp";
   

} else if (randrace === 8) {
   raceEl.innerHTML = "Teifling";
   apperEl.src = "appertief.png";
   

} else if (randrace === 7) {
   raceEl.innerHTML = "Dragonborn";
   apperEl.src = "apperdrag.png";

} else if (randrace === 6) {
   raceEl.innerHTML = "Goblin";
   apperEl.src = "appergre.png";
   

} else if (randrace === 5) {
   raceEl.innerHTML = "Kobold";
   apperEl.src = "apperdrag.png";
   

} else if (randrace === 4) {
   raceEl.innerHTML = "Warforged";
   apperEl.src = "apperwar.png";
   

} else if (randrace === 3) {
   raceEl.innerHTML = "Half-Orc";
   apperEl.src = "appergre.png";
   

} else if (randrace === 2){
    raceEl.innerHTML = "Lizardfolk";
   apperEl.src = "apperliz.png";
    

} else {
    raceEl.innerHTML = "Human";
   apperEl.src = "apper.webp";
    
}
if (randsubcla <= 5){
gendEl.innerHTML = "Male";
} else {
gendEl.innerHTML = "Female";
}



}
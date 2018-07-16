var species = [
  "Fairy", 
  "Earth Rabbit", 
  "Lunar Rabbit", 
  "Lunarian", 
  "Human", 
  "Hermit/Celestial", 
  "Ghost/Phantom", 
  "Vengeful spirit", 
  "Jiang-shi", 
  "Earth Spider", 
  "Tsukumogami", 
  "Makai Demon", 
  "Kitsune", 
  "Nekomata", 
  "Satori", 
  "Tengu", 
  "Oni", 
  "Dragon", 
  "Yama", 
  "Half-Human"
];

var halfHumanType = [
  "Fairy",
  "Lunarian",
  "Rabbit (Earth or Moon)",
  "Kitsune",
  "Nekomata",
  "Ghost/Phantom",
  "Makai Demon",
  "Satori",
  "Oni",
  "Dragon"
];

var basicPersonality = [
  "Masochistic",
  "Happy-go-Lucky/Optimistic",
  "Arrogant",
  "Stoic",
  "Pessimistic/Reclusive",
  "Humble",
  "Cowardly",
  "Brave",
  "Hot-headed",
  "Tsundere",
  "Reckless",
  "Energetic",
  "Snarky",
  "Selfless",
  "Yandere",
  "Pacifist",
  "Sadistic",
  "Perfectionist",
  "Emotionless/Rei Ayanami Expy",
  "Kuudere"
];

var mHModifier = [
  0,
  2,
  0,
  0,
  -1,
  0,
  0,
  0,
  0,
  0,
  -1,
  0,
  0,
  0,
  -3,
  -1,
  -2,
  0,
  0,
  0
];

var intellect = [
  "Abyssmal",
  "Cirno-level",
  "Below Average",
  "Below Average",
  "Below Average",
  "Below Average",
  "Average",
  "Average",
  "Average",
  "Average",
  "Average",
  "Average",
  "Average",
  "Above Average",
  "Above Average",
  "Above Average",
  "Above Average",
  "Above Average",
  "Above Average",
  "Einstein"
];

var origin = [
  "the Outside World",
  "the Human Village",
  "Makai",
  "Eientei/the Bamboo Forest of the Lost",
  "the Forest of Magic",
  "Jigoku/Hell",
  "the Underground",
  "the Lunar Capital",
  "the Future",
  "Another Dimension/Parallel Universe"
];

var pHealth = [
  "Terminal Illness",
  "Cripple/Amputee",
  "Epilepsy",
  "Asthma/Anemia",
  "At least one severe allergy (As in, anaphylactic shock inducing)",
  "Minor scars",
  "Minor scars",
  "Healthy",
  "Healthy",
  "Healthy",
  "Healthy",
  "Healthy",
  "Healthy",
  "Healthy",
  "Healthy",
  "Healthy",
  "Healthy",
  "Healthy",
  "Superior immune system", // (Does not apply to things that are logically immune to disease.)
  "Uber healing factor/Pseudo-immortality"
];

var mHealth = [
  "Completely and utterly insane",
  "Psychosis",
  "Multiple Personality Disorder",
  "Bipolar Disorder",
  "Depression",
  "At least one phobia",
  "PTSD",
  "Healthy",
  "Healthy",
  "Healthy",
  "Healthy",
  "Healthy",
  "Healthy",
  "Healthy",
  "Healthy",
  "Healthy",
  "Healthy",
  "Healthy",
  "Healthy and resistant to changes in mental health",
  "Healthy and resistant to changes in mental health"
];

var phobia = [
  "Acrophobia (fear of heights)",
  "Arachnophobia (fear of spiders)",
  "Automatonophobia (fear of something that falsely represents a sentient being[like dolls])",
  "Claustrophobia (fear of confinement/tight spaces)",
  "Emitophobia (fear of vomiting)",
  "Trypanophobia (fear of injections)",
  "Mysophobia (fear of germs and dirt)",
  "Doomiphobica (fear that the world is going to end)",
  "Necrophobia (fear of death/dead things)",
  "Ophidiophobia (fear of snakes)",
  "Ego-Death (fear of humiliation)",
  "Cynophobia (fear of dogs)",
  "Monophobia (fear of being alone)",
  "Aphenphosmphobia (fear of intimacy/rejection/close contact)",
  "Xenophobia (fear of strangers)",
  "Scotophobia (fear of darkness)",
  "Aichmophobia (fear of knives and other sharp objects)",
  "Glossophobia (fear of public speaking)",
  "Atychiphobia (fear of failure)",
  "Gamophobia (fear of commitment)"
];

var age = [
  "5-12",
  "13-20",
  "21",
  "22",
  "23",
  "24",
  "25",
  "26",
  "27",
  "28",
  "29",
  "30-49",
  "50-99",
  "100-199",
  "200-299",
  "300-399",
  "400-499",
  "500-999",
  "1000-2000",
  "Age Unknown/Very, VERY old"
];

var abilStr = [
  "Harmful to user/Very bad.",
  "Powerless/No ability.",
  "Mundane/Nearly useless both in and out of combat.",
  "Mundane/Nearly useless both in and out of combat.",
  "Mundane/Nearly useless both in and out of combat.",
  "Awesome, but impractical/Can be useful in some circumstancs, but has drawbacks.",
  "Awesome, but impractical/Can be useful in some circumstancs, but has drawbacks.",
  "Awesome, but impractical/Can be useful in some circumstancs, but has drawbacks.",
  "Awesome, but impractical/Can be useful in some circumstancs, but has drawbacks.",
  "Awesome, but impractical/Can be useful in some circumstancs, but has drawbacks.",
  "Practical/Useful.",
  "Practical/Useful.",
  "Practical/Useful.",
  "Practical/Useful.",
  "Practical/Useful.",
  "Powerful.",
  "Powerful.",
  "Powerful.",
  "Powerful.",
  "Very powerful, but has a constraint on the user to prevent it from becoming OP."
];

var abilGim = [
  "Consumption - The ability, while it might be useful, gradually consumes the character in some way after repeated use.",
  "The Hunger - The ability actively compels the character to want to use it, or is addicting to use. May or may not have withdrawal effects.",
  "How do I shot web? - Character knows they have the ability, but has no idea how to use their ability well, if at all.",
  "How do I shot web? - Character knows they have the ability, but has no idea how to use their ability well, if at all.",
  "Emotional - Ability only works in times of stress, strong emotion, or desperation.",
  "Emotional - Ability only works in times of stress, strong emotion, or desperation.",
  "Emotional - Ability only works in times of stress, strong emotion, or desperation.",
  "Irony - Ability must be ironic when compared to at least one other trait. (i.e. Manipulation of snakes if the character has a snake phobia)",
  "Irony - Ability must be ironic when compared to at least one other trait. (i.e. Manipulation of snakes if the character has a snake phobia)",
  "Irony - Ability must be ironic when compared to at least one other trait. (i.e. Manipulation of snakes if the character has a snake phobia)",
  "Nature motif - Ability must be related to an aspect of nature in some way.",
  "Nature motif - Ability must be related to an aspect of nature in some way.",
  "Nature motif - Ability must be related to an aspect of nature in some way.",
  "Situational - Ability is affected by some kind of natural cycle or repeating occurrence. (Day/night, comets, eclipses, tides, lunar phases, seasons, etc...)",
  "Situational - Ability is affected by some kind of natural cycle or repeating occurrence. (Day/night, comets, eclipses, tides, lunar phases, seasons, etc...)",
  "Situational - Ability is affected by some kind of natural cycle or repeating occurrence. (Day/night, comets, eclipses, tides, lunar phases, seasons, etc...)",
  "Outsourced - Ability is affected by, or linked to, an external source or object.",
  "Outsourced - Ability is affected by, or linked to, an external source or object.",
  "Sentience - The Ability has a \"will\", can choose how well it wishes to perform. May abandon its user if it feels the user is unworthy to use it. And may show its true power if enough \"trust\" is built.",
  "Lucky - Ability either must have a luck-based mechanic, or has an uncanny ability to work regardless of skill level"
];

var strSta = [
  "Easily exhausted.",
  "Weak.",
  "Weak.",
  "Weak.",
  "Average.",
  "Average.",
  "Average.",
  "Average.",
  "Average.",
  "Average.",
  "Average.",
  "Average.",
  "Average.",
  "Average.",
  "Average.",
  "Above average.",
  "Above average.",
  "Very strong.",
  "Very strong.",
  "Godlike."
];

var spd = [
  "Snail with a walker.",
  "Slow.",
  "Slow.",
  "Slow.",
  "Average.",
  "Average.",
  "Average.",
  "Average.",
  "Average.",
  "Average.",
  "Average.",
  "Average.",
  "Average.",
  "Average.",
  "Average.",
  "Fast.",
  "Fast.",
  "Fast.",
  "Fast.",
  "Aya-level or greater."
];

var initRep = [
  "Loathed/Feared",
  "Unlikeable",
  "Unlikeable",
  "Unlikeable",
  "Average",
  "Average",
  "Average",
  "Average",
  "Average",
  "Average",
  "Average",
  "Average",
  "Average",
  "Average",
  "Average",
  "Likeable",
  "Likeable",
  "Likeable",
  "Likeable",
  "Very charismatic"
];

var choiceWep = [
  "Fists/Martial arts.",
  "Impractical vanilla swords.",
  "Firearms/Bows/Javelins/Slingshots.",
  "Magical swords/Weapons that effect or can be used with danmaku in some way.",
  "No preference/Equally likely to use anything.",
  "No preference/Equally likely to use anything.",
  "No preference/Equally likely to use anything.",
  "No preference/Equally likely to use anything.",
  "No preference/Equally likely to use anything.",
  "No preference/Equally likely to use anything.",
  "No preference/Equally likely to use anything.",
  "No preference/Equally likely to use anything.",
  "No preference/Equally likely to use anything.",
  "No preference/Equally likely to use anything.",
  "No preference/Equally likely to use anything.",
  "Magic/Danmaku/Ability abuse.",
  "Magic/Danmaku/Ability abuse.",
  "Magic/Danmaku/Ability abuse.",
  "Magic/Danmaku/Ability abuse.",
  "Other people."
];

var initAlign = [
  "Chaotic evil.",
  "Neutral evil.",
  "Neutral evil.",
  "Neutral evil.",
  "Lawful evil.",
  "Chaotic neutral.",
  "Pure neutral.",
  "Pure neutral.",
  "Pure neutral.",
  "Pure neutral.",
  "Pure neutral.",
  "Pure neutral.",
  "Pure neutral.",
  "Pure neutral.",
  "Lawful neutral.",
  "Chaotic good.",
  "Neutral good.",
  "Neutral good.",
  "Neutral good.",
  "Lawful good."
];

var hair = [
  "Albino",
  "Light Blonde",
  "Light Blonde",
  "Blonde",
  "Blonde",
  "Dark Blonde",
  "Dark Blonde",
  "Light Brown",
  "Light Brown",
  "Brunette",
  "Brunette",
  "Auburn",
  "Auburn",
  "Red",
  "Red",
  "Blue",
  "Blue",
  "Black",
  "Black",
  "Black"
];

var eyes = [
  "Heterochromia",
  "Red",
  "Red",
  "Yellow",
  "Yellow",
  "Green",
  "Green",
  "Light Blue",
  "Light Blue",
  "Hazel",
  "Hazel",
  "Black",
  "Black",
  "Purple",
  "Purple",
  "Dark Blue",
  "Dark Blue",
  "Brown",
  "Brown",
  "Grey/White"
];

var size = [
  "Dwarfism.",
  "Short.",
  "Short.",
  "Short.",
  "Short.",
  "Average.",
  "Average.",
  "Average.",
  "Average.",
  "Average.",
  "Average.",
  "Average.",
  "Average.",
  "Average.",
  "Average.",
  "Tall.",
  "Tall.",
  "Tall.",
  "Tall.",
  "Gigantism."
];

var coreDrive = [ // this is where i thank the js gods that js can use single quotes as well
  'Atonement: "I\'ve made a terrible choice earlier in life. It would be inconcievable not to try to make it right."',
  'Understanding: "I wish I could understand X."',
  'Superiority: "X is the bane of existence. We would be better off without X."',
  'Calm: "I like living life at my pace and really don\'t appreciate being rushed."',
  'Advocation: "X is important to me. I could never forgive myself if I let something bad happen to X."',
  'Devotion: "I am an adherent to X and consider it an extremely important part of how I live my life."',
  'Purpose: "I wish I had a purpose in life. I need to find a purpose."',
  'Vigilance: "Nobody deserves to go through X. I\'ll do whatever I can to make sure that doesn\'t happen."',
  'Singularity: "I wish I was as special as X. I wish I wasn\'t so ordinary."',
  'Knowledge: "Why doesn\'t the world make sense? I must find out."',
  'Merriment: "Why is everyone so serious? Having fun is what life\'s all about!"',
  'Abstinance: "Engaging in X is wrong. I will not engage in X."',
  'Dependence: "I find myself with a deep need for X. If I have X, I will feel content."',
  'Development: "I need to do better at X. I would feel much better about myself if I did."',
  'Independance: "I need to be able to stand on my own. Asking for help will only hurt me in the long run."',
  'Logic: "I can\'t let my emotions choose my path for me."',
  'Community: "People are very important to me. I will do X to strengthen the bonds with those close to me."',
  'Altruism: "I feel that it is important for others to have X, and I work hard to provide it or make it available."',
  'Authority: "My life\'s calling is to lead X." (make a very good reason as to why)',
  'Ardor: "I can\'t ignore my feelings. To do so would just feel wrong."'
];

var job = [
  "Pet, slave, no occupation, or unemployed.",
  "Farmer.",
  "Blacksmith.",
  "Tailor.",
  "Brewer/Barkeep.",
  "Youkai Hunter.",
  "Cook.",
  "Merchant.",
  "Bodyguard.",
  "Seer/Medium.",
  "Mercenary.",
  "Thief.",
  "Cultist/Priest/Monk.",
  "Maid/Butler.",
  "Contractor/Carpenter.",
  "Engineer/Technician.",
  "Teacher.",
  "Doctor/Nurse/Medic/Pharmacist.",
  "Writer/Author/Journalist/Painter.",
  "Leadership Position. (Town Elder, Group Leader, High priest, Cult Leader, Chairman etc.)"
];

function d20() {
  return Math.floor(Math.random() * 20);
}

function writeText(text, strong) {
  var results = document.getElementById("results");
  var temp = document.createElement("PARAGRAPH");
  temp.id = text;
  temp.innerHTML = text;
  if(strong) {
    temp.classList.add("strong");
  }
  results.appendChild(temp);
  results.appendChild(document.createElement("BR"));
}

function generateOC() {
  var results = document.getElementById("results");
  while(results.firstChild !== null) {
    results.removeChild(results.firstChild);
  }
  
  
  
  var specNum = d20(); // species
  var speciesText = species[specNum];
  if(specNum === 19) { // determine the other half of half-human
    speciesText = species[specNum] + " Half-" + halfHumanType[Math.ceil((d20() + 1) / 2) - 1];
  }
  var perNum = d20(); // basic personality
  if(specNum !== 10) { // if not tsukumogami
    var genNum = d20(); // gender
    if(genNum === 0 || genNum === 19) {
      var genderText = "Bigender/Agender/Ambiguous";
    } else if((genNum + 1) % 2 === 0) {
      var genderText = "Female";
    } else {
      var genderText = "Male";
    }
  } else {
    var genderText = "Your choice!"; // tsukumogami can identify as whatever
  }
  writeText("Your character is a " + genderText + " " + basicPersonality[perNum] + " " + speciesText + " born in " + origin[Math.ceil((d20() + 1) / 2) - 1]);
  
  writeText("Intelligence:", true);
  writeText(intellect[d20()]);
  

  writeText("Gender:", true);
  writeText(genderText);
  
  writeText("Basic/Initial Physical Health:", true);
  writeText(pHealth[d20()]);
  
  var initMHealth = d20() + mHModifier[perNum]; // initial mental health plus personality modifiers
  if(initMHealth < 0) {
    initMHealth = 0;
  } else if(initMHealth > 19) {
    initMHealth = 19;
  }
  if(initMHealth === 5) {
    var mentalHealthText = mHealth[initMHealth] + " (" + phobia[d20()] + ")";
  } else {
    var mentalHealthText = mHealth[initMHealth];
  }
  writeText("Basic/Initial Mental Health:", true);
  writeText(mentalHealthText);
  
  writeText("Age:", true);
  writeText(age[d20()]);
  
  writeText("Ability Strength:", true);
  writeText(abilStr[d20()]);
  
  writeText("Ability Constraint:", true);
  writeText(abilGim[d20()]);
  
  writeText("Strength:", true);
  writeText(strSta[d20()]);
  
  writeText("Stamina:", true);
  writeText(strSta[d20()]);
  
  writeText("Speed:", true);
  writeText(spd[d20()]);
  
  writeText("Initial Reputation:", true);
  writeText(initRep[d20()]);
  
  if(perNum !== 15) {
    writeText("Weapon of Choice:", true);
    writeText(choiceWep[d20()]);
  }
  
  writeText("Initial Alignment:", true);
  writeText(initAlign[d20()]);
  
  var hairNum = d20(); // hair color
  writeText("Hair Color:", true);
  writeText(hair[hairNum]);
  
  if(hairNum !== 0) {
    var eyeNum = d20(); // if not albino, eye color
  } else {
    var eyeNum = 1; // albinos have red eyes
  }
  if(eyeNum === 0) {
    var eyeColor1 = eyes[d20()];
    var eyeColor2 = eyes[d20()];
    while(eyeColor1 === "Heterochromia") {
      eyeColor1 = eyes[d20()];
    }
    while(eyeColor2 === eyeColor1 || eyeColor2 === "Heterochromia") {
      eyeColor2 = eyes[d20()];
    }
    var eyeText = "Heterochromia: " + eyeColor1 + ", " + eyeColor2;
  } else {
    var eyeText = eyes[eyeNum];
  }
  writeText("Eye Color:", true);
  writeText(eyeText);
  
  writeText("Height/Stature:", true);
  writeText(size[d20()]);
  
  var coreDrive1 = d20(); // core drive one
  var coreDrive2 = d20(); // core drive two
  while(coreDrive2 === coreDrive1) {
    coreDrive2 = d20(); // if they're the same, reroll
  }
  writeText("Core Drives:", true);
  writeText(coreDrive[coreDrive1] + ', ' + coreDrive[coreDrive2]);
  
  writeText("Job:", true);
  writeText(job[d20()]);
}

var species = [
  "Fairy", 
  "Earth Rabbit", 
  "Lunar Rabbit", 
  "Lunarian", 
  "Human", 
  "Hermit/Celestial", 
  "Ghost/Phantom", 
  "Vengeful Spirit", 
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
  "extremely dumb",
  "Cirno levels of intelligent",
  "below average thinkers",
  "below average thinkers",
  "below average thinkers",
  "below average thinkers",
  "of average intelligence",
  "of average intelligence",
  "of average intelligence",
  "of average intelligence",
  "of average intelligence",
  "of average intelligence",
  "of average intelligence",
  "a genius",
  "a genius",
  "a genius",
  "a genius",
  "a genius",
  "a genius",
  "Einstein levels of intelligent"
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
  "have a terminal illness",
  "are a cripple or amputee",
  "have epilepsy",
  "have asthma or anemia",
  "have at least one severe allergy (As in, anaphylactic shock inducing)",
  "have minor scars",
  "have minor scars",
  "are healthy",
  "are healthy",
  "are healthy",
  "are healthy",
  "are healthy",
  "are healthy",
  "are healthy",
  "are healthy",
  "are healthy",
  "are healthy",
  "are healthy",
  "have a superior immune system (assuming disease applies)", // (Does not apply to things that are logically immune to disease.)
  "have an uber healing factor and are pseudo-immortal"
];

var mHealth = [
  "are completely and utterly insane",
  "have psychosis",
  "have multiple personality disorder",
  "have bipolar disorder",
  "have depression",
  "have",
  "have PTSD",
  "are healthy",
  "are healthy",
  "are healthy",
  "are healthy",
  "are healthy",
  "are healthy",
  "are healthy",
  "are healthy",
  "are healthy",
  "are healthy",
  "are healthy",
  "are healthy and resistant to changes in mental health",
  "are healthy and resistant to changes in mental health"
];

var phobia = [
  "acrophobia (fear of heights)",
  "arachnophobia (fear of spiders)",
  "automatonophobia (fear of something that falsely represents a sentient being[like dolls])",
  "claustrophobia (fear of confinement/tight spaces)",
  "emitophobia (fear of vomiting)",
  "trypanophobia (fear of injections)",
  "mysophobia (fear of germs and dirt)",
  "doomiphobica (fear that the world is going to end)",
  "necrophobia (fear of death/dead things)",
  "ophidiophobia (fear of snakes)",
  "ego-death (fear of humiliation)",
  "cynophobia (fear of dogs)",
  "monophobia (fear of being alone)",
  "aphenphosmphobia (fear of intimacy/rejection/close contact)",
  "xenophobia (fear of strangers)",
  "scotophobia (fear of darkness)",
  "aichmophobia (fear of knives and other sharp objects)",
  "glossophobia (fear of public speaking)",
  "atychiphobia (fear of failure)",
  "gamophobia (fear of commitment)"
];

var age = [
  "5-12 years old",
  "13-20 years old",
  "21 years old",
  "22 years old",
  "23 years old",
  "24 years old",
  "25 years old",
  "26 years old",
  "27 years old",
  "28 years old",
  "29 years old",
  "30-49 years old",
  "50-99 years old",
  "100-199 years old",
  "200-299 years old",
  "300-399 years old",
  "400-499 years old",
  "500-999 years old",
  "1000-2000 years old",
  "very very old"
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

var str = [
  "barely able to lift anything",
  "weak",
  "weak",
  "weak",
  "average in terms of strength",
  "average in terms of strength",
  "average in terms of strength",
  "average in terms of strength",
  "average in terms of strength",
  "average in terms of strength",
  "average in terms of strength",
  "average in terms of strength",
  "average in terms of strength",
  "average in terms of strength",
  "average in terms of strength",
  "strong",
  "strong",
  "very strong",
  "very strong",
  "godlike in terms of strength"
];

var sta = [
  "easily exhausted",
  "weak in terms of stamina",
  "weak in terms of stamina",
  "weak in terms of stamina",
  "average in terms of stamina",
  "average in terms of stamina",
  "average in terms of stamina",
  "average in terms of stamina",
  "average in terms of stamina",
  "average in terms of stamina",
  "average in terms of stamina",
  "average in terms of stamina",
  "average in terms of stamina",
  "average in terms of stamina",
  "average in terms of stamina",
  "above average in terms of stamina",
  "above average in terms of stamina",
  "very strong",
  "very strong",
  "able to do things for a ridiculous amount of time"
];

var spd = [
  "a snail with a walker",
  "slow",
  "slow",
  "slow",
  "of average speed",
  "of average speed",
  "of average speed",
  "of average speed",
  "of average speed",
  "of average speed",
  "of average speed",
  "of average speed",
  "of average speed",
  "of average speed",
  "of average speed",
  "fast",
  "fast",
  "fast",
  "fast",
  "Aya-level or greater speed"
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
      var genderText = "a Bigender/Agender/Ambiguous";
    } else if((genNum + 1) % 2 === 0) {
      var genderText = "a Female";
    } else {
      var genderText = "a Male";
    }
  } else {
    var genderText = "an any gendered"; // tsukumogami can identify as whatever
  }
  writeText("Your character is ");
  writeText(genderText + " " + basicPersonality[perNum] + " " + speciesText, true);
  writeText(" born in ");
  writeText(origin[Math.ceil((d20() + 1) / 2) - 1], true);
  writeText(". They are ");
  writeText(age[d20()], true);
  writeText(".");
  results.appendChild(document.createElement("BR"));
  writeText("They are:");
  var temp = document.createElement("UL");
  var temp2 = document.createElement("LI");
  temp2.classList.add("strong");
  temp2.innerHTML = intellect[d20()];
  temp.appendChild(temp2);
  var temp2 = document.createElement("LI");
  temp2.classList.add("strong");
  temp2.innerHTML = str[d20()];
  temp.appendChild(temp2);
  var temp2 = document.createElement("LI");
  temp2.classList.add("strong");
  temp2.innerHTML = sta[d20()];
  temp.appendChild(temp2);
  var temp2 = document.createElement("LI");
  temp2.classList.add("strong");
  temp2.innerHTML = spd[d20()];
  temp.appendChild(temp2);
  results.appendChild(temp);
  
  var initMHealth = d20() + mHModifier[perNum]; // initial mental health plus personality modifiers
  if(initMHealth < 0) {
    initMHealth = 0;
  } else if(initMHealth > 19) {
    initMHealth = 19;
  }
  if(initMHealth === 5) {
    var mentalHealthText = mHealth[initMHealth] + " " + phobia[d20()];
  } else {
    var mentalHealthText = mHealth[initMHealth];
  }
  writeText("In terms of physical health, they ");
  writeText(pHealth[d20()], true);
  writeText(".");
  results.appendChild(document.createElement("BR"));
  writeText("In terms of mental health, they ");
  writeText(mentalHealthText, true);
  writeText(".");
  results.appendChild(document.createElement("BR"));
  
  writeText("Ability Strength:", true);
  writeText(abilStr[d20()]);
  
  writeText("Ability Constraint:", true);
  writeText(abilGim[d20()]);
  
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

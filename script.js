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
  "a below average thinker",
  "a below average thinker",
  "a below average thinker",
  "a below average thinker",
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
  "is harmful or otherwise has large drawbacks",
  "does not exist",
  "is mundane or nearly useless both in and out of combat",
  "is mundane or nearly useless both in and out of combat",
  "is mundane or nearly useless both in and out of combat",
  "can be useful in some circumstancs, but has drawbacks",
  "can be useful in some circumstancs, but has drawbacks",
  "can be useful in some circumstancs, but has drawbacks",
  "can be useful in some circumstancs, but has drawbacks",
  "can be useful in some circumstancs, but has drawbacks",
  "is useful",
  "is useful",
  "is useful",
  "is useful",
  "is useful",
  "is powerful",
  "is powerful",
  "is powerful",
  "is powerful",
  "is very powerful, but has a second constraint chosen by you"
];

var abilGim = [
  "consumes the character in some way after repeated use",
  "actively compels the character to want to use it, or is addicting to use, and may or may not have withdrawal effects",
  "does not function properly because the character does not know how to use it",
  "does not function properly because the character does not know how to use it",
  "only works in times of stress, strong emotion, or desperation",
  "only works in times of stress, strong emotion, or desperation",
  "only works in times of stress, strong emotion, or desperation",
  "is ironic when compared to at least one other trait (i.e. Manipulation of snakes if the character has a snake phobia)",
  "is ironic when compared to at least one other trait (i.e. Manipulation of snakes if the character has a snake phobia)",
  "is ironic when compared to at least one other trait (i.e. Manipulation of snakes if the character has a snake phobia)",
  "has a nature motif",
  "has a nature motif",
  "has a nature motif",
  "is affected by some kind of natural cycle or repeating occurrence (Day/night, comets, eclipses, tides, lunar phases, seasons, etc...)",
  "is affected by some kind of natural cycle or repeating occurrence (Day/night, comets, eclipses, tides, lunar phases, seasons, etc...)",
  "is affected by some kind of natural cycle or repeating occurrence (Day/night, comets, eclipses, tides, lunar phases, seasons, etc...)",
  "is affected by, or linked to, an external source or object",
  "is affected by, or linked to, an external source or object",
  "has a \"will\" and can choose how well it wishes to perform; it may either abandon its user if it feels the user is unworthy to use it, or show its true power if enough \"trust\" is built",
  "must either have a luck-based mechanic, or an uncanny ability to work regardless of skill level"
];

var str = [
  "barely able to lift anything",
  "weak",
  "weak",
  "weak",
  "of average strength",
  "of average strength",
  "of average strength",
  "of average strength",
  "of average strength",
  "of average strength",
  "of average strength",
  "of average strength",
  "of average strength",
  "of average strength",
  "of average strength",
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
  "of average stamina",
  "of average stamina",
  "of average stamina",
  "of average stamina",
  "of average stamina",
  "of average stamina",
  "of average stamina",
  "of average stamina",
  "of average stamina",
  "of average stamina",
  "of average stamina",
  "above average in terms of stamina",
  "above average in terms of stamina",
  "not easily exhausted",
  "not easily exhausted",
  "able to do things for a ridiculous amount of time"
];

var spd = [
  "really really slow",
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
  "Aya-level fast or faster"
];

var initRep = [
  "loath or fear them",
  "do not like them",
  "do not like them",
  "do not like them",
  "are indifferent about them",
  "are indifferent about them",
  "are indifferent about them",
  "are indifferent about them",
  "are indifferent about them",
  "are indifferent about them",
  "are indifferent about them",
  "are indifferent about them",
  "are indifferent about them",
  "are indifferent about them",
  "are indifferent about them",
  "like them",
  "like them",
  "like them",
  "like them",
  "love them"
];

var choiceWep = [
  "Their preferred weapon is their fists or martial arts",
  "Their preferred weapon is any normal sword",
  "Their preferred weapon is a firearm, bow, javelin, or slingshot",
  "Their preferred weapon is a magical sword or other weapon that affect or can be used with danmaku in some way",
  "They have no preferred weapon",
  "They have no preferred weapon",
  "They have no preferred weapon",
  "They have no preferred weapon",
  "They have no preferred weapon",
  "They have no preferred weapon",
  "They have no preferred weapon",
  "They have no preferred weapon",
  "They have no preferred weapon",
  "They have no preferred weapon",
  "They have no preferred weapon",
  "Their preferred weapon is magic, danmaku, or ability abuse",
  "Their preferred weapon is magic, danmaku, or ability abuse",
  "Their preferred weapon is magic, danmaku, or ability abuse",
  "Their preferred weapon is magic, danmaku, or ability abuse",
  "Their preferred weapon is other people"
];

var initAlign = [
  "chaotic evil",
  "neutral evil",
  "neutral evil",
  "neutral evil",
  "lawful evil",
  "chaotic neutral",
  "pure neutral",
  "pure neutral",
  "pure neutral",
  "pure neutral",
  "pure neutral",
  "pure neutral",
  "pure neutral",
  "pure neutral",
  "lawful neutral",
  "chaotic good",
  "neutral good",
  "neutral good",
  "neutral good",
  "lawful good"
];

var hair = [
  "are albino",
  "have light blonde hair",
  "have light blonde hair",
  "have blonde hair",
  "have blonde hair",
  "have dark blonde hair",
  "have dark blonde hair",
  "have light brown hair",
  "have light brown hair",
  "have brunette hair",
  "have brunette hair",
  "have auburn hair",
  "have auburn hair",
  "have red hair",
  "have red hair",
  "have blue hair",
  "have blue hair",
  "have black hair",
  "have black hair",
  "have black hair"
];

var eyes = [
  "have heterochromia",
  "red eyes",
  "red eyes",
  "yellow eyes",
  "yellow eyes",
  "green eyes",
  "green eyes",
  "light blue eyes",
  "light blue eyes",
  "hazel eyes",
  "hazel eyes",
  "black eyes",
  "black eyes",
  "purple eyes",
  "purple eyes",
  "dark blue eyes",
  "dark blue eyes",
  "brown eyes",
  "brown eyes",
  "grey or white eyes"
];

var colorEyes = [
  "have heterochromia",
  "red",
  "red",
  "yellow",
  "yellow",
  "green",
  "green",
  "light blue",
  "light blue",
  "hazel",
  "hazel",
  "black",
  "black",
  "purple",
  "purple",
  "dark blue",
  "dark blue",
  "brown",
  "brown",
  "grey or white"
];

var size = [
  "suffer from dwarfism",
  "are short",
  "are short",
  "are short",
  "are short",
  "are of average height",
  "are of average height",
  "are of average height",
  "are of average height",
  "are of average height",
  "are of average height",
  "are of average height",
  "are of average height",
  "are of average height",
  "are of average height",
  "are tall",
  "are tall",
  "are tall",
  "are tall",
  "suffer from gigantism"
];

var coreDrive = [ // this is where i thank the js gods that js can use single quotes as well
  'atonement: "I\'ve made a terrible choice earlier in life. It would be inconcievable not to try to make it right."',
  'specific knowledge: "I wish I could understand X."',
  'superiority: "X is the bane of existence. We would be better off without X."',
  'calmness: "I like living life at my pace and really don\'t appreciate being rushed."',
  'advocation: "X is important to me. I could never forgive myself if I let something bad happen to X."',
  'devotion: "I am an adherent to X and consider it an extremely important part of how I live my life."',
  'purpose: "I wish I had a purpose in life. I need to find a purpose."',
  'vigilance: "Nobody deserves to go through X. I\'ll do whatever I can to make sure that doesn\'t happen."',
  'uniqueness: "I wish I was as special as X. I wish I wasn\'t so ordinary."',
  'knowledge: "Why doesn\'t the world make sense? I must find out."',
  'merriment: "Why is everyone so serious? Having fun is what life\'s all about!"',
  'abstinence: "Engaging in X is wrong. I will not engage in X."',
  'dependence: "I find myself with a deep need for X. If I have X, I will feel content."',
  'development: "I need to do better at X. I would feel much better about myself if I did."',
  'independence: "I need to be able to stand on my own. Asking for help will only hurt me in the long run."',
  'logic: "I can\'t let my emotions choose my path for me."',
  'community: "People are very important to me. I will do X to strengthen the bonds with those close to me."',
  'altruism: "I feel that it is important for others to have X, and I work hard to provide it or make it available."',
  'authority: "My life\'s calling is to lead X." (make a very good reason as to why)',
  'ardor: "I can\'t ignore my feelings. To do so would just feel wrong."'
];

var job = [
  "being a pet, slave, or having no occupation",
  "farming",
  "smithing",
  "being a tailor",
  "barkeeping",
  "hunting youkai",
  "cooking",
  "trading",
  "guarding",
  "being a seer or medium",
  "being a mercenary",
  "stealing",
  "being a cultist, priest, or monk",
  "serving as a maid or butler",
  "carpenting",
  "engineering",
  "teaching",
  "healing (ie doctor, nurse, medic, pharmacist, etc)",
  "being artistic (ie writer, artist, journalist, painter, etc)",
  "leading (ie Town Elder, Group Leader, High priest, Cult Leader, Chairman, etc)"
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
  
  
  var hairNum = d20(); // hair color
  
  if(hairNum !== 0) {
    var eyeNum = d20(); // if not albino, eye color
  } else {
    var eyeNum = 1; // albinos have red eyes
  }
  if(eyeNum === 0) {
    var eyeColor1 = colorEyes[d20()];
    var eyeColor2 = colorEyes[d20()];
    while(eyeColor1 === "have heterochromia") {
      eyeColor1 = colorEyes[d20()];
    }
    while(eyeColor2 === eyeColor1 || eyeColor2 === "have heterochromia") {
      eyeColor2 = colorEyes[d20()];
    }
    var eyeText = "have heterochromia; their eyes are " + eyeColor1 + " and " + eyeColor2;
  } else {
    var eyeText = eyes[eyeNum];
  }
  writeText("Your character is ");
  writeText(genderText + " " + basicPersonality[perNum] + " " + speciesText, true);
  writeText(" born in ");
  writeText(origin[Math.ceil((d20() + 1) / 2) - 1], true);
  writeText(". They are ");
  writeText(age[d20()], true);
  writeText(". They ");
  writeText(hair[hairNum], true);
  writeText(" and ");
  writeText(eyeText, true);
  writeText(". In terms of size, they ");
  writeText(size[d20()], true);
  writeText(". Their current job is ");
  writeText(job[d20()], true);
  writeText(".");
  results.appendChild(document.createElement("BR"));
  
  var coreDrive1 = d20(); // core drive one
  var coreDrive2 = d20(); // core drive two
  while(coreDrive2 === coreDrive1 || (coreDrive1 === 15 && coreDrive2 === 19) || (coreDrive1 === 19 && coreDrive2 === 15)) { 
    coreDrive2 = d20(); // if they're the same or you get logic and ardor, reroll
  }
  writeText("They have two core traits that drive them. The first is ");
  writeText(coreDrive[coreDrive1], true);
  writeText(".");
  results.appendChild(document.createElement("BR"));
  
  writeText("The second trait is ");
  writeText(coreDrive[coreDrive2], true);
  writeText(".");
  results.appendChild(document.createElement("BR"));
  
  
  if(perNum !== 15) {
    writeText(choiceWep[d20()], true);
    writeText(".");
    results.appendChild(document.createElement("BR"));
  } else {
    writeText("Being a pacifist, they have no need for a weapon", true);
    writeText(".");
    results.appendChild(document.createElement("BR"));
  }
  
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
  
  var abilStrNum = d20();
  writeText("Their ability ");
  writeText(abilStr[abilStrNum], true);
  writeText(".");
  results.appendChild(document.createElement("BR"));
  
  if(abilStrNum !== 1) {
    writeText("Additionally, their ability ");
    writeText(abilGim[d20()], true);
    writeText(".");
    results.appendChild(document.createElement("BR"));
  }
  
  writeText("Most people ");
  writeText(initRep[d20()], true);
  writeText(".");
  results.appendChild(document.createElement("BR"));
  
  writeText("On the alignment chart, they are ");
  writeText(initAlign[d20()], true);
  writeText(".");
  results.appendChild(document.createElement("BR"));
}

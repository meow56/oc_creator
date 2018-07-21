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

var ocGenShown = true;
var rNTShown = false;

var touhous = [
	"Reimu (PC-98)\n~Shrine Maiden Who Protects Dreams and Tradition~\nplayer character",
	"SinGyoku\n~Gate Keeper~\nTH 1, stage 5 boss",
	"YuugenMagan\n~Evil Eyes~\nTH 1, Makai Route, stage 10 boss",
	"Elis\n~Innocent Devil~\nTH 1, Makai Route, stage 15 boss",
	"Sariel\n~Angel of Death~\nTH 1, Makai Route, final boss",
	"Mima\n~Evil Spirit~\nTH 1, Hell Route, stage 10 boss; TH 2, final boss; TH 3; TH 5, playable",
	"Kikuri\n~Hellish Moon~\nTH 1, Hell Route, stage 15 boss",
	"Konngara\n~Astral Knight~\nTH 1, Hell Route, final boss",
	"Genjii\n~Turtle~\nTH 2, Reimu's pet turtle",
	"Rika\n~Engineer~\nTH 2, stage 1 boss/extra stage boss",
	"Noroiko\nTH 2, stage 2 midboss",
	"Meira\n~Samurai~\nTH 2, stage 2 boss",
	"\"Two Red Dots\"\nTH 2, stage 3 midboss",
	"\"Five Magic Stones\"\nTH 2, stage 3 boss",
	"Matenshi\nTH 2, stage 4 midboss",
	"Marisa (PC-98)\n~A Being Made of Magic and Red Dreams~\nTH 2, stage 4 boss; TH 3; TH 4, playable/stage 4 boss; TH 5, playable",
	"Ellen\n~Hardworking Witch Who Dreams of Love~\nTH 3",
	"Sokrates\nTH 3",
	"Kotohime\n~Princess Dreaming of Beauty in Danmaku~\nTH 3",
	"Kana Anaberal\n~Maiden Poltergeist Who's Lost Her Dreams~\nTH 3",
	"Rikako Asakura\n~Scientist Searching for Dreams~\nTH 3",
	"Chiyuri Kitashirakawa\n~Resident of Fantasy That Runs Through Time~\nTH 3",
	"Yumemi Okazaki\n~Fantasy Legend~\nTH 3",
	"Ruukoto\nTH 3",
	"Mimi-chan\nTH 3",
	"\"Bewitching Lotus Flower\"\nTH 4, stage 1 midboss",
	"Orange\n~Youkai~\nTH 4, stage 1 boss",
	"Kurumi\n~Vampire Girl~\nTH 4, stage 2 midboss/boss",
	"\"Dark Mirror\"\nTH 4, stage 3 midboss",
  "Elly\n~Gatekeeper of the Mansion~\nTH 4, stage 3 boss",
  "Rengeteki\nTH 4, stage 4 midboss; TH 5, stage 3 midboss (?)",
  "Yuuka Kazami (PC-98)\n~Youkai~\nTH 4, stage 5 boss/final boss; TH 5, PC",
  "\"Mysterious Orb\"\nTH 4, extra stage midboss",
  "Mugetsu\n~Maid~\nTH 4, extra stage boss 1",
  "Gengetsu\n~Demon~\nTH 4, extra stage boss 2",
  "\"Wheel Demon\"\nTH 5, stage 1 midboss",
	"Sara\n~Gate Keeper of Makai~\nTH 5, stage 1 boss",
  "\"Spirit Mirror\"\nTH 5, stage 2 midboss",
  "Louise\n~Makai Person~\nTH 5, stage 2 Boss/stage 4 midboss",
  "Alice (PC-98)\n~Girl of Death~\nTH 5, stage 3 boss/extra stage  boss",
  "Yuki\n~Witch~\nTH 5, stage 4 boss 1",
  "Mai\n~Witch~\nTH 5, stage 4 boss 2",
  "Ayana\nTH 5, stage 5 midboss",
  "Yumeko\n~Makai Maid~\nTH 5, stage 5 boss",
  "Shinki\n~The God of Makai~\nTH 5, final boss",
  "\"Trump King\"\nTH 5, extra stage midboss",
  "\"Cat on Mystic Square's Cover\"\nTH 5",
  "\"Unnamed Fairyesque Makai Resident\"\nTH 5",
  "\"Unnamed Devilesque Makai Resident\"\nTH 5",
  
  "Reimu\n~Shrine Maiden of Paradise~\nplayer character",
	"Marisa\n~Ordinary Magician\nplayer character",
	"Rumia\n~Youkai of the Dusk~\nTH 6, stage 1 midboss/boss; TH 9.5",
	"Daiyousei\nTH 6, stage 2 midboss; TH 12.8, Misty Lake midboss/extra midboss",
	"Cirno\n~Fairy of the Ice~\nTH 6, stage 2 boss; TH 7, stage 1 midboss; TH 9; TH 9.5; TH 12.3; TH 12.8, PC; TH 14, stage 1 midboss; TH 14.3; TH 16, PC",
	"Hong Meiling\n~Chinese Girl~\nTH 6, stage 3 midboss/boss; TH 7.5; TH 9.5; TH 12.3",
	"Koakuma\nTH 6, stage 4 midboss",
	"Patchouli Knowledge\n~The Unmoving Great Library~\nTH 6, stage 4 boss/extra midboss; TH 7.5; TH 9.5; TH 10.5; TH 11, PC; TH 12.3",
	"Sakuya Izayoi\n~Maid of the Scarlet Devil Mansion~\nTH 6, stage 5 midboss/boss/stage 6 midboss; TH 7, PC; TH 7.5; TH 9; TH 9.5; TH 10.5; TH 12.3; TH 14; TH 14.3",
	"Remilia Scarlet\n~The Scarlet Devil~\nTH 6, final boss; TH 7.5; TH 8; TH 9.5; TH 10.5; TH 12.3; TH 14.3",
	"Flandre Scarlet\n~Sister of the Devil~\nTH 6, extra stage boss; TH 9.5",
	"Rin Satsuki\nTH 6, removed PC",
	"Letty Whiterock\n~What Winter Left Behind~\nTH 7, stage 1 boss; TH 9.5",
	"Chen\n~Black Cat of Bad Omens~\nTH 7, stage 2 midboss/boss/extra midboss; TH 9.5",
	"Alice Margatroid\n~Seven-Colored Puppeteer~\nTH 7, stage 3 midboss/boss; TH 7.5; TH 8, PC; TH 9.5; TH 11, PC; TH 12.3",
  "Shanghai Doll\nTH 7; TH 7.5; TH 8; TH 10.5",
  "Hourai\nTH 7; TH 7.5",
	"Lily White\n~Fairy Herald of Spring~\nTH 7, stage 4 midboss; TH 12.8; TH 16, stage 3 midboss",
	"Lyrica Prismriver\n~Poltergeist Keyboardist~\nTH 7, stage 4 boss; TH 9",
	"Lunasa Prismriver\n~Poltergeist Violinist~\nTH 7, stage 4 boss; TH 9",
	"Merlin Prismriver\n~Poltergeist Trumpeter~\nTH 7, stage 4 boss; TH 9",
  "Layla Prismriver\nTH 7",
	"Youmu Konpaku\n~Half-Human Half-Phantom Gardener~\nTH 7, stage 5 midboss/boss/stage 6 midboss; TH 7.5; TH 8, PC; TH 9; TH 9.5; TH 10.5; TH 12.3; TH 13, PC; TH 14.3",
  "Youki Konpaku\nTH 7",
	"Yuyuko Saigyouji\n~Dreaming Ghost~\nTH 7, final boss; TH 7.5; TH 8, PC; TH 9.5; TH 10.5; TH 12.3; TH 13, stage 1 boss; TH 14.3",
  "Saigyou Ayakashi (the tree)\nTH 7",
	"Ran Yakumo\n~Shikigami of the Gap Youkai~\nTH 7, extra boss/phantasm midboss; TH 9.5",
	"Yukari Yakumo\n~Youkai of Boundaries~\nTH 7, phantasm boss; TH 7.5; TH 8, PC; TH 9.5; TH 10.5; TH 11, PC; TH 12.3; TH 14.3; TH 15.5",
	"Suika Ibuki\n~Tiny Night Parade of One Hundred Demons~\nTH 7.5; TH 9.5; TH 10.5; TH 11, PC; TH 12.3; TH 12.5; TH 14.3",
	"Wriggle Nightbug\n~A Bug of Light Wriggling in the Dark~\nTH 8, stage 1 midboss/boss; TH 9.5",
	"Mystia Lorelei\n~Night Sparrow Apparition~\nTH 8, stage 2 midboss/boss; TH 9",
	"Keine Kamishirasawa\n~History-Eating Half Beast~\nTH 8, stage 3 midboss/boss/extra stage midboss; TH 9.5; TH 14.3",
	"Tewi Inaba\n~White Rabbit of Good Fortune~\nTH 8, stage 5 midboss; TH 9; TH 9.5",
	"Reisen Udongein Inaba\n~Lunatic Moon Rabbit~\nTH 8, stage 5 boss; TH 9; TH 9.5; TH 10.5; TH 12.3; TH 14.5 (PS4); TH 15; TH 15.5",
	"Eirin Yagokoro\n~Brain of the Moon~\nTH 8, finalA midboss/boss/finalB midboss; TH 9.5",
	"Kaguya Houraisan\n~Eternal Princess~\nTH 8, finalB boss; TH 9.5",
	"Fujiwara no Mokou\n~Self-Abandoning and Immortal Human~\nTH 8, extra stage boss; TH 9.5; TH 14.3; TH 14.5; TH 15.5",
	"Aya Shameimaru\n~Traditional Reporter of Fantasy~\nTH 9; TH 9.5, PC; TH 10, stage 4 boss; TH 10.5; TH 11, PC; TH 12.3; TH 12.5; TH 14.3; TH 16",
	"Medicine Melancholy\n~Little Sweet Poison~\nTH 9; TH 9.5",
	"Yuuka Kazami\n~Flower Master of the Four Seasons~\nTH 9",
	"Komachi Onozuka\n~Guide of the Sanzu River~\nTH 9; TH 9.5; TH 10.5; TH 12.3",
	"Eiki Shiki, Yamaxanadu\n~Supreme Judge of Paradise~\nTH 9; TH 9.5",
	"Shizuha Aki\n~Symbol of Loneliness and Demise~\nTH 10, stage 1 midboss; TH 12.5",
	"Minoriko Aki\n~Symbol of Abundance and Plenty~\nTH 10, stage 1 boss; TH 12.5",
	"Hina Kagiyama\n~Nagashi-bina of the Hidden God~\nTH 10, stage 2 midboss/boss; TH 12.5",
	"Nitori Kawashiro\n~Business-Minded and Miserly Kappa~\nTH 10, stage 3 midboss/boss; TH 11, PC; TH 12.5; TH 13.5; TH 14.3; TH 14.5; TH 15.5",
	"Momiji Inubashiri\n~The Petty Patrol Tengu~\nTH 10, stage 4 midboss; TH 12.5; TH 14.3",
	"Sanae Kochiya\n~Newbie Goddess of the Mountain~\nTH 10, stage 5 midboss/boss; TH 11, extra stage midboss; TH 12, PC; TH 12.3; TH 12.5; TH 13, PC; TH 14.3; TH 15",
	"Kanoko Yasaka\n~The Avatar of Mountains and Lakes~\nTH 10, final boss/extra stage midboss; TH 12.5; TH 14.3",
	"Suwako Moriya\n~The Highest of Native Gods~\nTH 10, extra stage boss; TH 12.3; TH 12.5; TH 14.3",
  "Tenma\nTH 10",
  "Mishaguji\nTH 10 (Suwako SC); TH 12.3 (Suwako SC); TH 12.5 (Suwako SC)",
	"Iku Nagae\n~Beautiful Scarlet Cloth~\nTH 10.5; TH 12.3; TH 12.5",
	"Tenshi Hinanawi\n~Superficially Scarlet and Otherworldly Celestial~\nTH 10.5; TH 12.5; TH 14.3; TH 15.5",
	"Kisume\n~The Fearsome Well Spirit~\nTH 11, stage 1 midboss; TH 12.5",
	"Yamame Kurodani\n~The Bright Net in the Dark Cave~\nTH 11, stage 1 boss; TH 12.5",
	"Parsee Mizuhashi\n~The Jealousy Beneath the Earth's Crust~\nTH 11, stage 2 midboss/boss; TH 12.5",
	"Yuugi Hoshiguma\n~The So-Called Unexplainable Phenomenon~\nTH 11, stage 3 midboss/boss; TH 12.5",
	"Satori Komeiji\n~The Girl Even the Vengeful Spirits Fear~\nTH 11, stage 4 boss; TH 12.5",
	"Rin Kaenbyou\n~Hell's Traffic Accident~\nTH 11, stage 4 midboss/stage 5 midboss/boss/stage 6 midboss; TH 12.5",
	"Utsuho Reiuji\n~Scorching, Troublesome Divine Flame~\nTH 11, final boss; TH 12.3; TH 12.5",
	"Koishi Komeiji\n~Unintentionally Closed-Hearted Satori~\nTH 11, extra stage boss; TH 12.5; TH 13.5; TH 14.5; TH 15.5",
	"Nazrin\n~The Little Dowser General~\nTH 12, stage 1 midboss/boss/stage 5 midboss; TH 12.5",
	"Kogasa Tatara\n~The Cheery Forgotten Umbrella~\nTH 12, stage 2 midboss/boss/extra stage midboss; TH 12.5; TH 13, stage 3 midboss",
	"Ichirin Kumoi\n~Stubborn and Massively Herculean Nyuudou Handler~\nTH 12, stage 3 supporting midboss/supporting boss; TH 12.5; TH 13.5; TH 14.5; TH 15.5",
  "Unzan\n~The Big Wheel, Having Guarded and Been Guarded~\nTH 12, stage 3 midboss/boss; TH 12.5; TH 13.5; TH 14.5; TH 15.5",
	"Minamitsu Murasa\n~The Ghost Left From the Shipwreck Accident~\nTH 12, stage 4 boss; TH 12.5",
	"Shou Toramaru\n~Disciple of Vaiśravaṇa~TH 12, stage 5 boss; TH 12.5",
	"Byakuren Hijiri\n~Superhuman and Enlightened Mahācārya~\nTH 12, final boss; TH 12.5; TH 13.5; TH 14.3; TH 14.5; TH 15.5",
	"Nue Houjuu\n~The Unidentified Fantastic Flying Girl~\nTH 12, stage 4 midboss/final midboss/extra stage midboss; TH 12.5; TH 13, extra stage midboss",
  "Bishamonten\nTH 12",
  "Myouren Hijiri\nTH 12",
  "Goliath Doll\nTH 12.3",
  "Master Big Catfish\nTH 12.3",
  "Hisoutensoku\nTH 12.3",
  "Taisui Xingjun\nTH 12.3",
	"Hatate Himekaidou\n~Modern-Day Spirit Photography Reporter~\nTH 12.5; TH 14.3",
	"Kyouko Kasodani\n~Sutra Chanting Yamabiko~\nTH 13, stage 2 midboss/boss; TH 14.3",
	"Yoshika Miyako\n~Loyal Undead~\nTH 13, stage 3 boss/stage 4 supporting boss; TH 14.3",
	"Seiga Kaku\n~The Wicked Hermit Who Passes Through Walls~\nTH 13, stage 4 midboss/boss; TH 14.3",
	"Soga no Tojiko\n~Ghost of the Descendant of the Gods~\nTH 13, stage 5 midboss/final supporting boss",
	"Mononobe no Futo\n~Fengshui-Adept and Plate-Breaking Shikaisen~\nTH 13, stage 5 boss/final supporting boss; TH 13.5; TH 14.3; TH 14.5; TH 15.5",
	"Toyosatomimi no Miko\n~Almighty and Humanitarian Taoist~\nTH 13, final boss; TH 13.5; TH 14.3; TH 14.5; TH 15.5",
	"Mamizou Futatsuiwa\n~Phantasmagoric and Shrewd Bake-Danuki~\nTH 13, extra stage boss; TH 13.5; TH 14.3; TH 14.5; TH 15.5",
	"Hata no Kokoro\n~Expressionless and Emotional Menreiki~\nTH 13.5; TH 14.5; TH 15.5",
	"Wakasagahime\n~Mermaid Living in Fresh Water~\nTH 14, stage 1 boss; TH 14.3",
	"Sekibanki\n~The Rokurokubi Horror~\nTH 14, stage 2 midboss/boss; TH 14.3",
	"Kagerou Imaizumi\n~The Bamboo Forest's Loup-Garou~\nTH 14, stage 3 midboss/boss; TH 14.3",
	"Benben Tsukumo\n~Tsukumogami of an Aging Biwa~\nTH 14, stage 4 midboss or boss/extra stage midboss; TH 14.3",
	"Yatsuhashi Tsukumo\n~Tsukumogami of an Aging Koto~\nTH 14, stage 4 midboss or boss/extra stage midboss; TH 14.3",
	"Seija Kijin\n~Counterattacking Amanojaku~\nTH 14, stage 5 midboss/boss/final midboss; TH 14.3, PC",
	"Shinmyoumaru Sukuna\n~Fairytale-esque and Bowl-Riding Inchling~\nTH 14, final boss; TH 14.3; TH 14.5; TH 15.5",
	"Raiko Horikawa\n~Phantasmal Percussionist~\nTH 14, extra stage boss; TH 14.3",
	"Sumireko Usami\n~Expose the Esoteric! The Secret Sealing Club's First President~\nTH 14.5; TH 15.5; TH 16.5, PC",
	"Seiran\n~The Pale Blue Eagle Ravi~\nTH 15, stage 1 midboss/boss",
	"Ringo\n~The Orange Eagle Ravi~\nTH 15, stage 2 midboss/boss",
	"Doremy Sweet\n~Dream-Bestowing Youkai~\nTH 15, stage 3 boss/extra stage midboss; TH 15.5",
	"Sagume Kishin\n~Goddess Who Invites Unfortunate Slips of the Tongue~\nTH 15, stage 4 midboss/boss",
	"Clownpiece\n~Fairy of Hell~\nTH 15, stage 5 boss",
	"Junko\nTH 15, final boss/extra stage supporting boss",
	"Hecatia Lapislazuli\n~Goddess of Hell~\nTH 15, extra stage boss",
	"Joon Yorigami\n~The Most Despicable and Disastrous Younger Twin Sister~\nTH 15.5",
	"Shion Yorigami\n~The Most Despicable and Disastrous Elder Twin Sister~\nTH 15.5",
	"Eternity Larva\n~The Butterfly Fairy who Approaches God~\nTH 16, stage 1 boss",
	"Nemuno Sakata\n~The Yamanba who Surpasses This Floating World's Barriers~\nTH 16, stage 2 midboss/boss",
	"Aunn Komano\n~The Guardian Beast Devoted to Shintoism and Buddhism~\nTH 16, stage 3 boss",
	"Narumi Yatadera\n~The Magical Jizō who Manifested in the Forest~\nTH 16, stage 4 boss",
	"Satono Nishida\n~The All-Too-Dangerous Backup Dancers~\nTH 16, stage 5 midboss/boss/extra stage midboss",
	"Mai Teireida\n~The All-Too-Dangerous Backup Dancers~\nTH 16, stage 4 midboss/stage 5 boss/extra stage midboss",
	"Okina Matara\n~The Ultimate, Absolute Secret God~\nTH 16, final boss/extra stage boss",
  "Rinnosuke Morichika\n~The Unmoving Used Goods Seller~\nCuriosities of Lotus Asia",
  "Tokiko\nCuriosities of Lotus Asia",
  "Marisa's Father\nCuriosities of Lotus Asia",
  "Luna Child\n~Silent Moonlight~\nTH 12.8, boss; Sangetsusei",
  "Star Sapphire\n~Pouring Starlight~\nTH 12.8, boss; Sangetsusei",
  "Sunny Milk\n~Shining Sunlight~\nTH 12.8, boss; Sangetsusei",
  "Tsuchinoko\nSangetsusei (SaBND ch. 9, 10)",
  "Sake Bug\nSangetsusei (SaBND ch. 17, 18)",
  "\"Unnamed bake-danuki\"\nSangetsusei (OSP ch. 11)",
  "\"Unnamed Okuri-inu\"\nSangetsusei (OSP ch. 16)",
  "Reisen II\nBougetsushou",
  "\"Gateguards of the Lunar Capital\"\nBougetsushou (SSiB ch. 7)",
  "Watatsuki no Toyohime\n~The Moon Princess Connecting Sea and Mountain~\nBougetsushou",
  "Watatsuki no Yorihime\n~The Moon Princess Possessed by Divine Spirits~\nBougetsushou",
  "Chang'e\nBougetsushou (SSiB ch. 2; CiLR ch. 6)",
  "Lord Tsukuyomi\nBougetsushou (CiLR ch. 3)",
  "Mizue no Uranoshimako (Dead)\nBougetsushou (CiLR ch. 3)",
  "Iwakasa (Dead)\nBougetsushou (CiLR, ch. 4)",
  "Konohana-Sakuyahime\nBougetsushou (CiLR, ch. 4)",
  "Iwanagahime\nBougetsushou (CiLR, ch. 4)",
  "Kasen Ibaraki\n~Taoist-Minded and Animal-Loving Hermit~\nTH 14.5; TH15.5; Ibarakasen",
  "Koutei\nIbarakasen (WaHH ch. 5)",
  "Mukou\nIbarakasen (WaHH ch. 6)",
  "Shirou Sendai\nIbarakasen (WaHH ch. 7)",
  "\"Unnamed kuda-gitsune\"\nIbarakasen (WaHH ch. 8)",
  "Kume\nIbarakasen (WaHH ch. 5, 6, 9, 13)",
  "Kanda\nIbarakasen (WaHH ch. 10, 13)",
  "Unshou\nIbarakasen (WaHH ch. 11)",
  "Kosuzu Motoori\n~Bibliophile with a Deciphering Eye~\nSuzunaan",
  "Kosuzu's Grandfather\nSuzunaan (FS ch. 2)",
  "Tupai\nSuzunaan (FS ch. 7)",
  "Evil Dragon\nSuzunaan (FS ch. 9)",
  "Giant Toad\nBohemian Archive in Japanese Red (Cirno)",
  "Dragon God\nPerfect Memento in Strict Sense (Dragon)",
  "\"Unnamed Girl on DiPP Jacket\"\nDolls in Pseudo Paradise",
  "Maribel Hearn\nVarious Music CDs",
  "Renko Usami\nVarious Music CDs",
  "Hieda no Akyuu\nVarious (MG; PMiSS; SoPM; FS; Akyu's Untouched Scores)"
];

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function d20() {
  return randomNumber(0, 19);
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

function showOCGen() {
  if(!ocGenShown) {
    document.getElementById("oc_generator").classList.remove("hidden");
    document.getElementById("RNTouhou").classList.add("hidden");
    ocGenShown = true;
    rNTShown = false;
  }
}

function showRNT() {
  if(!rNTShown) {
    document.getElementById("RNTouhou").classList.remove("hidden");
    document.getElementById("oc_generator").classList.add("hidden");
    rNTShown = true;
    ocGenShown = false;
  }
}

function generateRNT() {
  var results = document.getElementById("results_RNT");
  while(results.firstChild !== null) {
    results.removeChild(results.firstChild);
  }
  var result = touhous[randomNumber(0, touhous.length - 1)];
  var temp = document.createElement("PARAGRAPH");
  temp.innerHTML = result;
  results.appendChild(temp);
}

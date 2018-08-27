var ocGenShown = true;
var rNTShown = false;

var touhous = [
	"Reimu Hakurei (PC-98)<br>~Shrine Maiden Who Protects Dreams and Tradition~<br>player character",
	"SinGyoku<br>~Gate Keeper~<br>TH 1, stage 5 boss",
	"YuugenMagan<br>~Evil Eyes~<br>TH 1, Makai Route, stage 10 boss",
	"Elis<br>~Innocent Devil~<br>TH 1, Makai Route, stage 15 boss",
	"Sariel<br>~Angel of Death~<br>TH 1, Makai Route, final boss",
	"Mima<br>~Evil Spirit~<br>TH 1, Hell Route, stage 10 boss; TH 2, final boss; TH 3; TH 5, playable",
	"Kikuri<br>~Hellish Moon~<br>TH 1, Hell Route, stage 15 boss",
	"Konngara<br>~Astral Knight~<br>TH 1, Hell Route, final boss",
	"Genjii<br>~Turtle~<br>TH 2, Reimu's pet turtle",
	"Rika<br>~Engineer~<br>TH 2, stage 1 boss/extra stage boss",
	"Noroiko<br>TH 2, stage 2 midboss",
	"Meira<br>~Samurai~<br>TH 2, stage 2 boss",
	"\"Two Red Dots\"<br>TH 2, stage 3 midboss",
	"\"Five Magic Stones\"<br>TH 2, stage 3 boss",
	"Matenshi<br>TH 2, stage 4 midboss",
	"Marisa Kirisame (PC-98)<br>~A Being Made of Magic and Red Dreams~<br>TH 2, stage 4 boss; TH 3; TH 4, playable/stage 4 boss; TH 5, playable",
	"Ellen<br>~Hardworking Witch Who Dreams of Love~<br>TH 3",
	"Sokrates<br>TH 3",
	"Kotohime<br>~Princess Dreaming of Beauty in Danmaku~<br>TH 3",
	"Kana Anaberal<br>~Maiden Poltergeist Who's Lost Her Dreams~<br>TH 3",
	"Rikako Asakura<br>~Scientist Searching for Dreams~<br>TH 3",
	"Chiyuri Kitashirakawa<br>~Resident of Fantasy That Runs Through Time~<br>TH 3",
	"Yumemi Okazaki<br>~Fantasy Legend~<br>TH 3",
	"Ruukoto<br>TH 3",
	"Mimi-chan<br>TH 3",
	"\"Bewitching Lotus Flower\"<br>TH 4, stage 1 midboss",
	"Orange<br>~Youkai~<br>TH 4, stage 1 boss",
	"Kurumi<br>~Vampire Girl~<br>TH 4, stage 2 midboss/boss",
	"\"Dark Mirror\"<br>TH 4, stage 3 midboss",
    "Elly<br>~Gatekeeper of the Mansion~<br>TH 4, stage 3 boss",
    "Rengeteki<br>TH 4, stage 4 midboss; TH 5, stage 3 midboss (?)",
    "Yuuka Kazami (PC-98)<br>~Youkai~<br>TH 4, stage 5 boss/final boss; TH 5, PC",
    "\"Mysterious Orb\"<br>TH 4, extra stage midboss",
    "Mugetsu<br>~Maid~<br>TH 4, extra stage boss 1",
    "Gengetsu<br>~Demon~<br>TH 4, extra stage boss 2",
    "\"Wheel Demon\"<br>TH 5, stage 1 midboss",
	"Sara<br>~Gate Keeper of Makai~<br>TH 5, stage 1 boss",
    "\"Spirit Mirror\"<br>TH 5, stage 2 midboss",
    "Louise<br>~Makai Person~<br>TH 5, stage 2 Boss/stage 4 midboss",
    "Alice (PC-98)<br>~Girl of Death~<br>TH 5, stage 3 boss/extra stage  boss",
    "Yuki<br>~Witch~<br>TH 5, stage 4 boss 1",
    "Mai<br>~Witch~<br>TH 5, stage 4 boss 2",
    "Ayana<br>TH 5, stage 5 midboss",
    "Yumeko<br>~Makai Maid~<br>TH 5, stage 5 boss",
    "Shinki<br>~The God of Makai~<br>TH 5, final boss",
    "\"Trump King\"<br>TH 5, extra stage midboss",
    "\"Cat on Mystic Square's Cover\"<br>TH 5",
    "\"Unnamed Fairyesque Makai Resident\"<br>TH 5",
    "\"Unnamed Devilesque Makai Resident\"<br>TH 5",
    
    "Reimu Hakurei<br>~Shrine Maiden of Paradise~<br>player character",
	"Marisa Kirisame<br>~Ordinary Magician<br>player character",
	"Rumia<br>~Youkai of the Dusk~<br>TH 6, stage 1 midboss/boss; TH 9.5",
	"Daiyousei<br>TH 6, stage 2 midboss; TH 12.8, Misty Lake midboss/extra midboss",
	"Cirno<br>~Fairy of the Ice~<br>TH 6, stage 2 boss; TH 7, stage 1 midboss; TH 9; TH 9.5; TH 12.3; TH 12.8, PC; TH 14, stage 1 midboss; TH 14.3; TH 16, PC",
	"Hong Meiling<br>~Chinese Girl~<br>TH 6, stage 3 midboss/boss; TH 7.5; TH 9.5; TH 12.3",
	"Koakuma<br>TH 6, stage 4 midboss",
	"Patchouli Knowledge<br>~The Unmoving Great Library~<br>TH 6, stage 4 boss/extra midboss; TH 7.5; TH 9.5; TH 10.5; TH 11, PC; TH 12.3",
	"Sakuya Izayoi<br>~Maid of the Scarlet Devil Mansion~<br>TH 6, stage 5 midboss/boss/stage 6 midboss; TH 7, PC; TH 7.5; TH 9; TH 9.5; TH 10.5; TH 12.3; TH 14; TH 14.3",
	"Remilia Scarlet<br>~The Scarlet Devil~<br>TH 6, final boss; TH 7.5; TH 8; TH 9.5; TH 10.5; TH 12.3; TH 14.3",
	"Flandre Scarlet<br>~Sister of the Devil~<br>TH 6, extra stage boss; TH 9.5",
	"Rin Satsuki<br>TH 6, removed PC",
	"Letty Whiterock<br>~What Winter Left Behind~<br>TH 7, stage 1 boss; TH 9.5",
	"Chen<br>~Black Cat of Bad Omens~<br>TH 7, stage 2 midboss/boss/extra midboss; TH 9.5",
	"Alice Margatroid<br>~Seven-Colored Puppeteer~<br>TH 7, stage 3 midboss/boss; TH 7.5; TH 8, PC; TH 9.5; TH 11, PC; TH 12.3",
    "Shanghai Doll<br>TH 7; TH 7.5; TH 8; TH 10.5",
    "Hourai<br>TH 7; TH 7.5",
	"Lily White<br>~Fairy Herald of Spring~<br>TH 7, stage 4 midboss; TH 12.8; TH 16, stage 3 midboss",
	"Lyrica Prismriver<br>~Poltergeist Keyboardist~<br>TH 7, stage 4 boss; TH 9",
	"Lunasa Prismriver<br>~Poltergeist Violinist~<br>TH 7, stage 4 boss; TH 9",
	"Merlin Prismriver<br>~Poltergeist Trumpeter~<br>TH 7, stage 4 boss; TH 9",
    "Layla Prismriver<br>TH 7",
	"Youmu Konpaku<br>~Half-Human Half-Phantom Gardener~<br>TH 7, stage 5 midboss/boss/stage 6 midboss; TH 7.5; TH 8, PC; TH 9; TH 9.5; TH 10.5; TH 12.3; TH 13, PC; TH 14.3",
    "Youki Konpaku<br>TH 7",
	"Yuyuko Saigyouji<br>~Dreaming Ghost~<br>TH 7, final boss; TH 7.5; TH 8, PC; TH 9.5; TH 10.5; TH 12.3; TH 13, stage 1 boss; TH 14.3",
    "Saigyou Ayakashi (the tree)<br>TH 7",
	"Ran Yakumo<br>~Shikigami of the Gap Youkai~<br>TH 7, extra boss/phantasm midboss; TH 9.5",
	"Yukari Yakumo<br>~Youkai of Boundaries~<br>TH 7, phantasm boss; TH 7.5; TH 8, PC; TH 9.5; TH 10.5; TH 11, PC; TH 12.3; TH 14.3; TH 15.5",
	"Suika Ibuki<br>~Tiny Night Parade of One Hundred Demons~<br>TH 7.5; TH 9.5; TH 10.5; TH 11, PC; TH 12.3; TH 12.5; TH 14.3",
	"Wriggle Nightbug<br>~A Bug of Light Wriggling in the Dark~<br>TH 8, stage 1 midboss/boss; TH 9.5",
	"Mystia Lorelei<br>~Night Sparrow Apparition~<br>TH 8, stage 2 midboss/boss; TH 9",
	"Keine Kamishirasawa<br>~History-Eating Half Beast~<br>TH 8, stage 3 midboss/boss/extra stage midboss; TH 9.5; TH 14.3",
	"Tewi Inaba<br>~White Rabbit of Good Fortune~<br>TH 8, stage 5 midboss; TH 9; TH 9.5",
	"Reisen Udongein Inaba<br>~Lunatic Moon Rabbit~<br>TH 8, stage 5 boss; TH 9; TH 9.5; TH 10.5; TH 12.3; TH 14.5 (PS4); TH 15; TH 15.5",
	"Eirin Yagokoro<br>~Brain of the Moon~<br>TH 8, finalA midboss/boss/finalB midboss; TH 9.5",
	"Kaguya Houraisan<br>~Eternal Princess~<br>TH 8, finalB boss; TH 9.5",
	"Fujiwara no Mokou<br>~Self-Abandoning and Immortal Human~<br>TH 8, extra stage boss; TH 9.5; TH 14.3; TH 14.5; TH 15.5",
	"Aya Shameimaru<br>~Traditional Reporter of Fantasy~<br>TH 9; TH 9.5, PC; TH 10, stage 4 boss; TH 10.5; TH 11, PC; TH 12.3; TH 12.5; TH 14.3; TH 16",
	"Medicine Melancholy<br>~Little Sweet Poison~<br>TH 9; TH 9.5",
	"Yuuka Kazami<br>~Flower Master of the Four Seasons~<br>TH 9",
	"Komachi Onozuka<br>~Guide of the Sanzu River~<br>TH 9; TH 9.5; TH 10.5; TH 12.3",
	"Eiki Shiki, Yamaxanadu<br>~Supreme Judge of Paradise~<br>TH 9; TH 9.5",
	"Shizuha Aki<br>~Symbol of Loneliness and Demise~<br>TH 10, stage 1 midboss; TH 12.5",
	"Minoriko Aki<br>~Symbol of Abundance and Plenty~<br>TH 10, stage 1 boss; TH 12.5",
	"Hina Kagiyama<br>~Nagashi-bina of the Hidden God~<br>TH 10, stage 2 midboss/boss; TH 12.5",
	"Nitori Kawashiro<br>~Business-Minded and Miserly Kappa~<br>TH 10, stage 3 midboss/boss; TH 11, PC; TH 12.5; TH 13.5; TH 14.3; TH 14.5; TH 15.5",
	"Momiji Inubashiri<br>~The Petty Patrol Tengu~<br>TH 10, stage 4 midboss; TH 12.5; TH 14.3",
	"Sanae Kochiya<br>~Newbie Goddess of the Mountain~<br>TH 10, stage 5 midboss/boss; TH 11, extra stage midboss; TH 12, PC; TH 12.3; TH 12.5; TH 13, PC; TH 14.3; TH 15",
	"Kanoko Yasaka<br>~The Avatar of Mountains and Lakes~<br>TH 10, final boss/extra stage midboss; TH 12.5; TH 14.3",
	"Suwako Moriya<br>~The Highest of Native Gods~<br>TH 10, extra stage boss; TH 12.3; TH 12.5; TH 14.3",
    "Tenma<br>TH 10",
    "Mishaguji<br>TH 10 (Suwako SC); TH 12.3 (Suwako SC); TH 12.5 (Suwako SC)",
	"Iku Nagae<br>~Beautiful Scarlet Cloth~<br>TH 10.5; TH 12.3; TH 12.5",
	"Tenshi Hinanawi<br>~Superficially Scarlet and Otherworldly Celestial~<br>TH 10.5; TH 12.5; TH 14.3; TH 15.5",
	"Kisume<br>~The Fearsome Well Spirit~<br>TH 11, stage 1 midboss; TH 12.5",
	"Yamame Kurodani<br>~The Bright Net in the Dark Cave~<br>TH 11, stage 1 boss; TH 12.5",
	"Parsee Mizuhashi<br>~The Jealousy Beneath the Earth's Crust~<br>TH 11, stage 2 midboss/boss; TH 12.5",
	"Yuugi Hoshiguma<br>~The So-Called Unexplainable Phenomenon~<br>TH 11, stage 3 midboss/boss; TH 12.5",
	"Satori Komeiji<br>~The Girl Even the Vengeful Spirits Fear~<br>TH 11, stage 4 boss; TH 12.5",
	"Rin Kaenbyou<br>~Hell's Traffic Accident~<br>TH 11, stage 4 midboss/stage 5 midboss/boss/stage 6 midboss; TH 12.5",
	"Utsuho Reiuji<br>~Scorching, Troublesome Divine Flame~<br>TH 11, final boss; TH 12.3; TH 12.5",
	"Koishi Komeiji<br>~Unintentionally Closed-Hearted Satori~<br>TH 11, extra stage boss; TH 12.5; TH 13.5; TH 14.5; TH 15.5",
	"Nazrin<br>~The Little Dowser General~<br>TH 12, stage 1 midboss/boss/stage 5 midboss; TH 12.5",
	"Kogasa Tatara<br>~The Cheery Forgotten Umbrella~<br>TH 12, stage 2 midboss/boss/extra stage midboss; TH 12.5; TH 13, stage 3 midboss",
	"Ichirin Kumoi<br>~Stubborn and Massively Herculean Nyuudou Handler~<br>TH 12, stage 3 supporting midboss/supporting boss; TH 12.5; TH 13.5; TH 14.5; TH 15.5",
    "Unzan<br>~The Big Wheel, Having Guarded and Been Guarded~<br>TH 12, stage 3 midboss/boss; TH 12.5; TH 13.5; TH 14.5; TH 15.5",
	"Minamitsu Murasa<br>~The Ghost Left From the Shipwreck Accident~<br>TH 12, stage 4 boss; TH 12.5",
	"Shou Toramaru<br>~Disciple of Vaiśravaṇa~TH 12, stage 5 boss; TH 12.5",
	"Byakuren Hijiri<br>~Superhuman and Enlightened Mahācārya~<br>TH 12, final boss; TH 12.5; TH 13.5; TH 14.3; TH 14.5; TH 15.5",
	"Nue Houjuu<br>~The Unidentified Fantastic Flying Girl~<br>TH 12, stage 4 midboss/final midboss/extra stage midboss; TH 12.5; TH 13, extra stage midboss",
    "Bishamonten<br>TH 12",
    "Myouren Hijiri<br>TH 12",
    "Goliath Doll<br>TH 12.3",
    "Master Big Catfish<br>TH 12.3",
    "Hisoutensoku<br>TH 12.3",
    "Taisui Xingjun<br>TH 12.3",
	"Hatate Himekaidou<br>~Modern-Day Spirit Photography Reporter~<br>TH 12.5; TH 14.3",
	"Kyouko Kasodani<br>~Sutra Chanting Yamabiko~<br>TH 13, stage 2 midboss/boss; TH 14.3",
	"Yoshika Miyako<br>~Loyal Undead~<br>TH 13, stage 3 boss/stage 4 supporting boss; TH 14.3",
	"Seiga Kaku<br>~The Wicked Hermit Who Passes Through Walls~<br>TH 13, stage 4 midboss/boss; TH 14.3",
	"Soga no Tojiko<br>~Ghost of the Descendant of the Gods~<br>TH 13, stage 5 midboss/final supporting boss",
	"Mononobe no Futo<br>~Fengshui-Adept and Plate-Breaking Shikaisen~<br>TH 13, stage 5 boss/final supporting boss; TH 13.5; TH 14.3; TH 14.5; TH 15.5",
	"Toyosatomimi no Miko<br>~Almighty and Humanitarian Taoist~<br>TH 13, final boss; TH 13.5; TH 14.3; TH 14.5; TH 15.5",
	"Mamizou Futatsuiwa<br>~Phantasmagoric and Shrewd Bake-Danuki~<br>TH 13, extra stage boss; TH 13.5; TH 14.3; TH 14.5; TH 15.5",
	"Hata no Kokoro<br>~Expressionless and Emotional Menreiki~<br>TH 13.5; TH 14.5; TH 15.5",
	"Wakasagahime<br>~Mermaid Living in Fresh Water~<br>TH 14, stage 1 boss; TH 14.3",
	"Sekibanki<br>~The Rokurokubi Horror~<br>TH 14, stage 2 midboss/boss; TH 14.3",
	"Kagerou Imaizumi<br>~The Bamboo Forest's Loup-Garou~<br>TH 14, stage 3 midboss/boss; TH 14.3",
	"Benben Tsukumo<br>~Tsukumogami of an Aging Biwa~<br>TH 14, stage 4 midboss or boss/extra stage midboss; TH 14.3",
	"Yatsuhashi Tsukumo<br>~Tsukumogami of an Aging Koto~<br>TH 14, stage 4 midboss or boss/extra stage midboss; TH 14.3",
	"Seija Kijin<br>~Counterattacking Amanojaku~<br>TH 14, stage 5 midboss/boss/final midboss; TH 14.3, PC",
	"Shinmyoumaru Sukuna<br>~Fairytale-esque and Bowl-Riding Inchling~<br>TH 14, final boss; TH 14.3; TH 14.5; TH 15.5",
	"Raiko Horikawa<br>~Phantasmal Percussionist~<br>TH 14, extra stage boss; TH 14.3",
	"Sumireko Usami<br>~Expose the Esoteric! The Secret Sealing Club's First President~<br>TH 14.5; TH 15.5; TH 16.5, PC",
	"Seiran<br>~The Pale Blue Eagle Ravi~<br>TH 15, stage 1 midboss/boss",
	"Ringo<br>~The Orange Eagle Ravi~<br>TH 15, stage 2 midboss/boss",
	"Doremy Sweet<br>~Dream-Bestowing Youkai~<br>TH 15, stage 3 boss/extra stage midboss; TH 15.5",
	"Sagume Kishin<br>~Goddess Who Invites Unfortunate Slips of the Tongue~<br>TH 15, stage 4 midboss/boss",
	"Clownpiece<br>~Fairy of Hell~<br>TH 15, stage 5 boss",
	"Junko<br>TH 15, final boss/extra stage supporting boss",
	"Hecatia Lapislazuli<br>~Goddess of Hell~<br>TH 15, extra stage boss",
	"Joon Yorigami<br>~The Most Despicable and Disastrous Younger Twin Sister~<br>TH 15.5",
	"Shion Yorigami<br>~The Most Despicable and Disastrous Elder Twin Sister~<br>TH 15.5",
	"Eternity Larva<br>~The Butterfly Fairy who Approaches God~<br>TH 16, stage 1 boss",
	"Nemuno Sakata<br>~The Yamanba who Surpasses This Floating World's Barriers~<br>TH 16, stage 2 midboss/boss",
	"Aunn Komano<br>~The Guardian Beast Devoted to Shintoism and Buddhism~<br>TH 16, stage 3 boss",
	"Narumi Yatadera<br>~The Magical Jizō who Manifested in the Forest~<br>TH 16, stage 4 boss",
	"Satono Nishida<br>~The All-Too-Dangerous Backup Dancers~<br>TH 16, stage 5 midboss/boss/extra stage midboss",
	"Mai Teireida<br>~The All-Too-Dangerous Backup Dancers~<br>TH 16, stage 4 midboss/stage 5 boss/extra stage midboss",
	"Okina Matara<br>~The Ultimate, Absolute Secret God~<br>TH 16, final boss/extra stage boss",
    "Rinnosuke Morichika<br>~The Unmoving Used Goods Seller~<br>Curiosities of Lotus Asia",
    "Tokiko<br>Curiosities of Lotus Asia",
    "Marisa's Father<br>Curiosities of Lotus Asia",
    "Luna Child<br>~Silent Moonlight~<br>TH 12.8, boss; Sangetsusei",
    "Star Sapphire<br>~Pouring Starlight~<br>TH 12.8, boss; Sangetsusei",
    "Sunny Milk<br>~Shining Sunlight~<br>TH 12.8, boss; Sangetsusei",
    "Tsuchinoko<br>Sangetsusei (SaBND ch. 9, 10)",
    "Sake Bug<br>Sangetsusei (SaBND ch. 17, 18)",
    "\"Unnamed bake-danuki\"<br>Sangetsusei (OSP ch. 11)",
    "\"Unnamed Okuri-inu\"<br>Sangetsusei (OSP ch. 16)",
    "Reisen II<br>Bougetsushou",
    "\"Gateguards of the Lunar Capital\"<br>Bougetsushou (SSiB ch. 7)",
    "Watatsuki no Toyohime<br>~The Moon Princess Connecting Sea and Mountain~<br>Bougetsushou",
    "Watatsuki no Yorihime<br>~The Moon Princess Possessed by Divine Spirits~<br>Bougetsushou",
    "Chang'e<br>Bougetsushou (SSiB ch. 2; CiLR ch. 6)",
    "Lord Tsukuyomi<br>Bougetsushou (CiLR ch. 3)",
    "Mizue no Uranoshimako (Dead)<br>Bougetsushou (CiLR ch. 3)",
    "Iwakasa (Dead)<br>Bougetsushou (CiLR, ch. 4)",
    "Konohana-Sakuyahime<br>Bougetsushou (CiLR, ch. 4)",
    "Iwanagahime<br>Bougetsushou (CiLR, ch. 4)",
    "Kasen Ibaraki<br>~Taoist-Minded and Animal-Loving Hermit~<br>TH 14.5; TH15.5; Ibarakasen",
    "Koutei<br>Ibarakasen (WaHH ch. 5)",
    "Mukou<br>Ibarakasen (WaHH ch. 6)",
    "Shirou Sendai<br>Ibarakasen (WaHH ch. 7)",
    "\"Unnamed kuda-gitsune\"<br>Ibarakasen (WaHH ch. 8)",
    "Kume<br>Ibarakasen (WaHH ch. 5, 6, 9, 13)",
    "Kanda<br>Ibarakasen (WaHH ch. 10, 13)",
    "Unshou<br>Ibarakasen (WaHH ch. 11)",
    "Kosuzu Motoori<br>~Bibliophile with a Deciphering Eye~<br>Suzunaan",
    "Kosuzu's Grandfather<br>Suzunaan (FS ch. 2)",
    "Tupai<br>Suzunaan (FS ch. 7)",
    "Evil Dragon<br>Suzunaan (FS ch. 9)",
    "Giant Toad<br>Bohemian Archive in Japanese Red (Cirno)",
    "Dragon God<br>Perfect Memento in Strict Sense (Dragon)",
    "\"Unnamed Girl on DiPP Jacket\"<br>Dolls in Pseudo Paradise",
    "Maribel Hearn<br>Various Music CDs",
    "Renko Usami<br>Various Music CDs",
    "Hieda no Akyuu<br>Various (MG; PMiSS; SoPM; FS; Akyu's Untouched Scores)"
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

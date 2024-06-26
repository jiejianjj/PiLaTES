// let data =
//   "The world around us is made of subatomic particles that regularly undergo unpredictable jumps, teleportation, bilocation, superposition, and other strange quantum behaviors. Why don’t everyday solid objects do likewise? Because the random quantum jittering of their subatomic particles collectively average out to zero. Think of a large crowd of people; seen from the air, the crowd as a whole is stationary, even though individuals within the crowd move in seemingly random directions. It’s because their movements are random and uncoordinated that they average to zero net movement on the whole.";

// function write(input) {
//   document.body.innerHTML = input;
// }
// let words = RiTa.tokenize(data);
// console.log(words);
// let analyzed = RiTa.analyze(words);
// console.log(analyzed);
// let randomWord = RiTa.randomWord({numSyllables:5});
// write(randomWord);

// let allit = RiTa.alliterations("ham");
// write(allit);

// let rhymes = RiTa.rhymes("car");
// write(rhymes);

let englishtext = "To Zhenghang, who says there is no youth? Love each other, and spring is always here. Old trees bear new words. The rebirth of the year is not strangled. There are daybreaks and nightfalls. Pause laughing at loungers with bare branches. April rains and breezes with flowers from the soul. Thousands of miles Jiangling flows eternally. Yuzhou is under the cloudless and blue waves. Dipping into the colorful river, sipping and writing late autumn with grandchildren. I don't see the clouds of Sichuan in the southern sky. The drunk invites the golden moon and bamboo flute. Homesickness is impenetrable! Who is the dreamer tonight? The moon swings on the corner of the sea, and the waves are flat. Green fireflies swiftly escape and blow the evening wind. Sit on the pole and wait for the bell to ring. I am fishing leisurely with the fisherman. The sunrise at the shore is passionate. Virtuous children accompany me. I am walking with stride, and spring is never forgotten. Thousands of drinks with family. Birds are chirping outside the window. Spring is speechless beyond the door. Give flowers to birthday star. Zhenghang giggles out loud. The jade rabbit lifts into the sky, drinks to worship the moon, kisses the flute, and feels nostalgic. The fragrance of books is everywhere. Learn from ancient to modern East, West, South, North, and Middle Five states unite the World. Gold wood water, fire, and earth. A match made in heaven. The luna dangles a round of universe in mind. Heart to spirit, no matter where we are.";
let genText1;
let genText2;
let genText3;
let genText4;
let sentence1;
let sentence2;
let sentence3;
let sentence4;
let punctuations = ["，", "，", "，", "。", "。", "！", "？"];
let markov;
var chinesepoems = document.getElementById("chinesepoems");
// response => {
//     return response.text();
//   }
// data => {
//     englishtext = data;
//     generate();
//   };

// fetch("englishtext.txt")
//   .then(response => {
//     return response.text();
//   })
//   .then(data => {
//     englishtext = data;
//     generate();
//   });
enggenerate();
function enggenerate() {
  markov = RiTa.markov(2);

  markov.addText(englishtext);

  genText1 = markov.generate();
  genText2 = markov.generate();
  genText3 = markov.generate();
  genText4 = markov.generate();
  console.log (genText1);

  // genText1.join(" ");
  // genText2.join(" ");
  // genText3.join(" ");
  // genText4.join(" ");

  document.getElementById("englishpoems").innerHTML =
    genText1 +
    "<br>" +
    genText2 +
    "<br>" +
    genText3 +
    "<br>" +
    genText4 +
    "<br>";
}

let chinese =
  "七十春秋傅道解感华夏名师成就三千才俊九旬岁月婿贤女孝神州寿星乐享四世同堂华彩人生书香飘四海学贯古今东西南北中键声动五州网联天地金木水火土天作之合胸怀一輪乾坤月身居八方心连心横空南湖十三星风流血染征衣驱倭灭顽岁廿八反转乾坤小平巨手一挥华夏国泰民殷神州筑梦千秋业石破天惊中秋鄉思南天不見西川云醉邀明月竹笛横声声难解乡思苦谁是今宵入梦人玉兔升空小酌赏月吻笛声声乡思悠悠窗外鸟呜欢门内春无言鲜花献寿星正航乐开怀日出沙头暖洋洋婿贤女孝届杖朝健步耄耋春不老期颐与親醉千觞月悬海角浪亦平绿萤隠忽晚风盈守杆安坐待铃响悠悠怡然夜钓人南天不見西川云醉邀明月竹笛横声声难解鄉思苦谁是今宵入梦人";
let chinesetext = chinese.split("");
genchinese();
function genchinese() {
  console.log(chinesetext);
  for (let i = 0; i < 7; i++) {
    let n = getRandomIntInclusive(0, 284);
    console.log(n);
    let sentence1 = document.createElement("span");
    sentence1.innerHTML = chinesetext[n];
    chinesepoems.appendChild(sentence1);
  }
  let punctuation1 = document.createElement("span");

  punctuation1.innerHTML =
    punctuations[Math.floor(Math.random() * punctuations.length)] + "<br>";
  chinesepoems.appendChild(punctuation1);

  for (let i = 0; i < 7; i++) {
    let n = getRandomIntInclusive(0, 284);
    console.log(n);
    let sentence2 = document.createElement("span");
    sentence2.innerHTML = chinesetext[n];
    chinesepoems.appendChild(sentence2);
  }

  let punctuation2 = document.createElement("span");
  punctuation2.innerHTML =
    punctuations[Math.floor(Math.random() * punctuations.length)] + "<br>";
  chinesepoems.appendChild(punctuation2);

  for (let i = 0; i < 7; i++) {
    let n = getRandomIntInclusive(0, 284);
    console.log(n);
    let sentence3 = document.createElement("span");
    sentence3.innerHTML = chinesetext[n];
    chinesepoems.appendChild(sentence3);
  }

  let punctuation3 = document.createElement("span");
  punctuation3.innerHTML =
    punctuations[Math.floor(Math.random() * punctuations.length)] + "<br>";
  chinesepoems.appendChild(punctuation3);

  for (let i = 0; i < 7; i++) {
    let n = getRandomIntInclusive(0, 284);
    console.log(n);
    let sentence4 = document.createElement("span");
    sentence4.innerHTML = chinesetext[n];
    chinesepoems.appendChild(sentence4);
  }

  let punctuation4 = document.createElement("span");
  punctuation4.innerHTML = punctuations[getRandomIntInclusive(3, 6)] + "<br>";
  chinesepoems.appendChild(punctuation4);
}
function remove() {
  var div = document.getElementById("chinesepoems");
  while (div.firstChild) div.removeChild(div.firstChild);
}
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

// script.js
console.log('🔥 script.js loaded');
// ====== UTILITY ======
const $ = id => document.getElementById(id);
let budgetLimit = 101000;   // start = no limit (101 k)
let currentArea  = null;   // ← track the user’s picks
let currentLevel = null;


// ====== PHASE 1: Restaurant Data ======
const restaurantData = {
  "Coex": [
    { name: "KFC Coex Mall",           category: "fastFood",    avgCost: 25000, weight: 2, url: "https://naver.me/GKUf5aQz", img: "images/kfc-coex.jpg",           open: "10:30", close: "22:00" },
    { name: "Shake Shack Coex",        category: "fastFood",    avgCost: 30000, weight: 2, url: "https://naver.me/GHvbZ6hz", img: "images/shakeshack-coex.jpg",    open: "10:30", close: "22:00" },
    { name: "Hoho Tonkatsu",           category: "noodles",     avgCost: 32000, weight: 2, url: "https://naver.me/GipMHN8f", img: "images/hoho-coex.jpg",           open: "11:00", close: "21:50" },
    { name: "Saboten Coex Branch",     category: "noodles",     avgCost: 32000, weight: 2, url: "https://naver.me/FdCvESgg", img: "images/saboten-coex.jpg",        open: "11:00", close: "22:00" },
    { name: "McDonald's Coex Branch",  category: "fastFood",    avgCost: 22000, weight: 2, url: "https://naver.me/GtUQbudg", img: "images/mcdonalds-coex.jpg",      open: "07:00", close: "22:00" },
    { name: "The Malatang Place",       category: "fastFood",    avgCost: 25000, weight: 2, url: "",                            img: "images/malaton-coex.jpg",        open: "–",      close: "20:00" },
    { name: "Tantan Noodles Kitchen",  category: "noodles",     avgCost: 30000, weight: 2, url: "https://naver.me/xmxTi46O", img: "images/tantan-coex.jpg",         open: "10:30", close: "22:00" },
    { name: "Paulie's ParnaMall",      category: "fastFood",    avgCost: 55000, weight: 2, url: "https://naver.me/x9BsLqUs", img: "images/paulies-coex.jpg",        open: "11:00", close: "22:00" },
    { name: "Papaya Leaf Coex",        category: "fastFood",    avgCost: 25000, weight: 2, url: "https://naver.me/5gFc3fRa", img: "images/papaya-coex.jpg",         open: "10:30", close: "22:00" },
    { name: "Papa Valley Starfield",   category: "fastFood",    avgCost: 30000, weight: 2, url: "https://naver.me/57V0Xbgp", img: "images/papavalley-coex.jpg",      open: "10:30", close: "22:00" },
    { name: "GS25 Convenience",        category: "convenience", avgCost: 15000, weight: 2, url: "",                            img: "images/gs25-coex.jpg",           open: "–",      close: "–"      },
    { name: "VATOS ParnasMall",        category: "mexican",     avgCost: 40000, weight: 2, url: "https://naver.me/xUwgER5m", img: "images/vatos-coex.jpg",          open: "10:30", close: "22:00" },
    { name: "On The Border Coex",      category: "mexican",     avgCost: 55000, weight: 1, url: "https://naver.me/FRLFrjsS", img: "images/border-coex.jpg",         open: "10:30", close: "22:00" },
    { name: "Crispyfresh",             category: "fastFood",    avgCost: 30000, weight: 2, url: "https://naver.me/5z5NJiLZ", img: "images/crispyfresh-coex.jpg",     open: "10:30", close: "22:00" },
    { name: "Street Asian Food",       category: "noodles",     avgCost: 25000, weight: 2, url: "https://naver.me/5Bc81qO1", img: "images/streetasian-coex.jpg",     open: "10:30", close: "22:00" },
    { name: "Slideshow COEX",          category: "street",      avgCost: 26000, weight: 2, url: "https://naver.me/xKEfQ6a1", img: "images/slideshow-coex.jpg",       open: "11:00", close: "22:00" }
  ],
  "Jamsil": [
    { name: "On The Border",               category: "mexican",  avgCost: 55000, weight: 1, url: "https://naver.me/FRLFrjsS", img: "images/border-jamsil.jpg",    open: "10:30", close: "22:00" },
    { name: "Brooklyn The Burger Joint",   category: "fastFood", avgCost: 25000, weight: 2, url: "https://naver.me/5tJuhyqx", img: "images/brooklyn-jamsil.jpg",  open: "10:30", close: "21:00" },
    { name: "Oreno Ramen Lotte World Mall",category: "noodles",  avgCost: 30000, weight: 2, url: "https://naver.me/FRLFr9WT", img: "images/oreno-jamsil.jpg",     open: "10:30", close: "22:00" },
    { name: "Hankookjib Bibimbap",          category: "korean",   avgCost: 30000, weight: 2, url: "",                            img: "images/hankookjib-jamsil.jpg",open: "–",      close: "–"      },
    { name: "Dimdimseom",                  category: "chinese",  avgCost: 25000, weight: 1, url: "https://naver.me/FjbpxnN8", img: "images/dimdimseom-jamsil.jpg",open: "10:30", close: "22:00" },
    { name: "Cheese Room X Tasting Room",   category: "fastFood", avgCost: 55000, weight: 1, url: "https://naver.me/5HkgUHAO", img: "images/cheeseroom-jamsil.jpg",open: "10:30", close: "22:00" }
  ],
  "DDP": [
    { name: "Chinese Restaurant DDP",    category: "chinese",    avgCost: 35000, weight: 2, url: "",                            img: "images/chinese-ddp.jpg",      open: "–",      close: "–"      },
    { name: "Mom’s Touch LAB DDP",       category: "fastFood",   avgCost: 25000, weight: 2, url: "https://naver.me/G2EaHsY7", img: "images/momstouch-ddp.jpg",     open: "11:00", close: "20:30" },
    { name: "Ashley Buffet",             category: "buffet",     avgCost: 55000, weight: 1, url: "https://naver.me/F74dxrPc", img: "images/ashley-ddp.jpg",        open: "11:00", close: "21:00" },
    { name: "Momoya Dongdaemun",         category: "noodles",    avgCost: 30000, weight: 2, url: "https://naver.me/5UEpdyY4", img: "images/momoya-ddp.jpg",        open: "11:00", close: "20:00" },
    { name: "Ashley’s Takeout",          category: "fastFood",   avgCost: 18000, weight: 2, url: "",                            img: "images/ashelys-ddp.jpg",      open: "–",      close: "–"      }
  ],
  "Sangwangsimni": [
    { name: "Hukuchyo Ramen",           category: "noodles",    avgCost: 25000, weight: 2, url: "https://naver.me/FMcIVDaJ", img: "images/hukuchyo-sang.jpg",     open: "11:00", close: "21:00" },
    { name: "Burger King",              category: "fastFood",   avgCost: 20000, weight: 2, url: "https://naver.me/GsjFdVkt", img: "images/bk-sang.jpg",           open: "–",      close: "–"      },
    { name: "Shenghuo Malatang",        category: "street",     avgCost: 20000, weight: 2, url: "https://naver.me/5mItTbzT", img: "images/malatang-sang.jpg",     open: "–",      close: "–"      },
    { name: "Ssadagimbab",              category: "fastFood",   avgCost: 20000, weight: 1, url: "https://naver.me/GV2qZhwB", img: "images/ssadagimbab-sang.jpg",  open: "–",      close: "–"      },
    { name: "Starbucks Yogurt Dinner",  category: "cafe",       avgCost: 10000, weight: 1, url: "https://naver.me/FK5VcDbY", img: "images/starbucks-sang.jpg",    open: "–",      close: "–"      },
    { name: "CU Near Your House",       category: "convenience",avgCost: 15000, weight: 1, url: "",                            img: "images/cu-sang.jpg",          open: "–",      close: "–"      }
  ],
  "Wangsimni": [
    { name: "KFC Wangsimni Yeoksa",     category: "fastFood",   avgCost: 25000, weight: 2, url: "https://naver.me/xxY3P2ym", img: "images/kfc-wang.jpg",          open: "–",      close: "–"      },
    { name: "Namastte Wangsimni",       category: "fastFood",   avgCost: 25000, weight: 2, url: "https://naver.me/FfegM3yR", img: "images/namastte-wang.jpg",     open: "11:00", close: "21:30" },
    { name: "ELLUI PIZZA",              category: "fastFood",   avgCost: 37000, weight: 2, url: "https://naver.me/GQ1D47cu", img: "images/ellui-wang.jpg",        open: "16:30", close: "01:00" },
    { name: "Chinese Restaurant Wang",  category: "chinese",    avgCost: 30000, weight: 2, url: "",                            img: "images/chinese-wang.jpg",     open: "–",      close: "–"      },
    
    { name: "Slowcali Poke & Grill",    category: "fastFood",   avgCost: 25000, weight: 2, url: "https://naver.me/FmfDg5Ta", img: "images/slowcali-wang.jpg",     open: "–",      close: "20:00" },
    { name: "Preppers Diet Food",       category: "fastFood",   avgCost: 25000, weight: 2, url: "https://naver.me/xX71r0sK", img: "images/preppers-wang.jpg",    open: "–",      close: "22:50" }
  ],
  "Hongdae": [
    { name: "Outdark",                  category: "fastFood",   avgCost: 25000, weight: 2, url: "https://naver.me/FLy4Dw8Q", img: "images/outdark-hong.jpg",      open: "16:00", close: "00:00" }
  ],
  "Itaewon": [
    { name: "Alpedo Kebab",             category: "street",     avgCost: 35000, weight: 2, url: "https://naver.me/Gmby953H", img: "images/alpedo-itae.jpg",       open: "00:00", close: "24:00" },
    { name: "Ankara Picnic",            category: "street",     avgCost: 25000, weight: 2, url: "https://naver.me/xiqd2J2S", img: "images/ankara-itae.jpg",       open: "11:00", close: "22:00" },
    { name: "Subway Itaewon Station",   category: "fastFood",   avgCost: 25000, weight: 1, url: "https://naver.me/53lCXp4Z", img: "images/subway-itae.jpg",       open: "00:00", close: "24:00" }
  ]
};

// ====== INITIALIZATION ======
window.addEventListener('DOMContentLoaded', () => {
  renderAreas();
initBudgetSlider(); 
refreshAreaAvailability();
initMethodChooser();
  $('reset-btn').addEventListener('click', resetAll);
});
/***** BUDGET SLIDER *****/
function initBudgetSlider(){
  const slider  = $('budget-slider');
  const disp    = $('budget-display');
  const msgBox  = $('budget-message');

  const exact = {
    41:"What are you doing?",42:"Ok Ellie, stop.",43:"😒😒",44:"This isn’t really cheap, you know.",
    45:"Wow. Just wow.",46:"Okay, so you don’t care about my budget, huh?",
    47:"I’m trying so hard to be okay with this...",48:"Okay, keep going. I don’t care anymore.",
    49:"😭😭😭😭",50:"Split?",51:"So you hate me, huh?",52:"This is madness.",
    53:"Not funny anymore. Stop, please.",54:"Why? Just... why?",55:"Ellie, what are you doing?",
    56:"You’ve definitely gone crazy.",57:"Ellie, I love you, please stop.",
    58:"Dang, you really don’t care anymore.",59:"big spender energy, huh?",
    60:"Oh cool, Ellie just casually bankrupting me again.",61:"You are evil.",62:"Hallo?",63:"Get out of my yard!",
    64:"Ellie, this better come with free dessert or great compliments.",65:"I hate you.",66:"Okay... are you that hungry?",
    67:"At this point, I'm just a walking bank app, aren't I?",68:"Lets pray your eyeliner survives this guilt.",
    69:"Hehehehe.",70:"Please stop. I love you, Ellie.",71:"Monster.",72:"🖕🏻",
    73:"🖕🏻🖕🏻🖕🏻 (Triple middle finger)",74:"Is this love?",
    75:"For this price, the food better come with emotional healing.",
    76:"There must be no options available at this price. What are you even doing?",
    77:"Totally a normal price, Ellie. Totally not panicking.",78:"Nothing to see here. Just my savings dissolving.",79:"Ellieeeeeeeeeeee",80:"Stoooooop.",
    81:"Pleaseeeeee.",82:"!!!!!!!!!!",83:"83k? 83k? Really?",84:"Psychopath.",
    85:"I hope Lili behaves horribly in class tomorrow.",86:"Don’t you feel bad?",
    87:"Do you think I’m rich?",88:"Do you despise me this much?",89:"Are you doing this for fun?",
    90:"Would you stop if I gave you a parrot kiss?",91:"You’re a horrible person right now.",
    92:"Nah, you’re not. I love you so much, Ellie.",93:"I’m offended.",
    94:"So...",95:".....",96:"...I...",97:"...hate...",98:"...YOU...",99:"....😢....",
    100:"⚠️ Error: Ellie is crazy!",101:"I won’t let you go further."
  };
 
 /* ─── helper: hide areas that are over budget ───────────────────────── */
function refreshAreaAvailability(){
  document.querySelectorAll('#areas .card').forEach(card=>{
    const area = card.dataset.area;
    if(area === 'RANDOM' || area === 'ANY'){ card.style.display=''; return; }
    const hasCheap = (restaurantData[area]||[])
                     .some(r => r.avgCost <= budgetLimit);
    card.style.display = hasCheap ? '' : 'none';
  });
}

/* ─── RESULT‑CARD builder ───────────────────────────────────────────── */
function makeResultCard(r){
  const div = document.createElement('div');
  div.className = 'result-card';
  div.innerHTML = `
    <img src="${r.img}" alt="${r.name}">
    <h3>${r.name}</h3>
    <p>Price: ₩${r.avgCost.toLocaleString()}</p>
    <p>Time: ${r.open || '—'} – ${r.close || '—'}</p>
    <p><a href="${r.url}" target="_blank">View on Naver</a></p>
  `;
  return div;
}

/* ─── RANDOM & LIST pickers ─────────────────────────────────────────── */
function showRandom(area, level){
  const list = getFilteredList(area, level);
  if(!list.length){ pickerEmpty(); return; }

  const r = list[Math.floor(Math.random()*list.length)];
  $('picker-title').textContent = 'Winner 🎉';
  const out = $('picker-content');
  out.innerHTML = '';
  out.appendChild(makeResultCard(r));
}

function showList(area, level){
  const list = getFilteredList(area, level);
  if(!list.length){ pickerEmpty(); return; }

  $('picker-title').textContent = 'All Options:';
  const out = $('picker-content');
  out.innerHTML = '';
  list.forEach(r => out.appendChild(makeResultCard(r)));
}

function pickerEmpty(){
  $('picker-title').textContent = 'No restaurants match that budget 😢';
  $('picker-content').innerHTML = '';
}

/* ─── placeholders until we build Wheel / Cards ─────────────────────── */
function showWheel(){
  $('picker-title').textContent = '(Wheel coming soon!)';
  $('picker-content').innerHTML = '';
}
function showCards(){
  $('picker-title').textContent = '(Cards coming soon!)';
  $('picker-content').innerHTML = '';
}

/* ─── METHOD‑CHOOSER wiring ─────────────────────────────────────────── */
function initMethodChooser(){
  $('method-buttons').addEventListener('click', e=>{
    const btn = e.target.closest('button');
    if(!btn) return;
    const m = btn.dataset.method;

    $('method-section').hidden = true;   // hide chooser
    $('picker-section').hidden = false;  // show mechanic output

    if(m === 'wheel')       showWheel(currentArea, currentLevel);
    else if(m === 'random') showRandom(currentArea, currentLevel);
    else if(m === 'cards')  showCards(currentArea, currentLevel);
    else if(m === 'list')   showList(currentArea, currentLevel);
  });
}

/* ─── back button inside picker section ─────────────────────────────── */
$('back-btn').onclick = () => {
  $('picker-section').hidden = true;
  $('method-section').hidden = false;
};
/*****  RESULT‑CARD HELPER  ***************************************************/
function makeResultCard(r){
  const div = document.createElement('div');
  div.className = 'result-card';
  div.innerHTML = `
    <img src="${r.img}" alt="${r.name}">
    <h3>${r.name}</h3>
    <p>Price: ₩${r.avgCost.toLocaleString()}</p>
    <p>Time: ${r.open || '—'} – ${r.close || '—'}</p>
    <p><a href="${r.url}" target="_blank">View on Naver</a></p>
  `;
  return div;
}

/*****  RANDOM & LIST PICKERS  ************************************************/
function showRandom(area, level){ … }   // (same body you already wrote)
function showList(area, level){ … }     // (same body)
/*****  PLACEHOLDERS UNTIL WE BUILD WHEEL / CARDS  ****************************/
function showWheel(){ $('picker-title').textContent='(Wheel coming soon!)'; $('picker-content').innerHTML=''; }
function showCards(){ $('picker-title').textContent='(Cards coming soon!)'; $('picker-content').innerHTML=''; }

/*****  METHOD‑CHOOSER CLICK WIRING  ******************************************/
function initMethodChooser(){ … }       // (same body)


// ==== ONE-TIME HEART BUBBLES ON PAGE LOAD ====
function launchHeartBubbles() {
  const hearts = ["💖", "💘", "💝", "❤️‍🔥"];
  const total   = 25;            // how many hearts
  const delayMs = 120;           // gap between hearts

  for (let i = 0; i < total; i++) {
    setTimeout(() => {
      const h = document.createElement("span");
      h.className  = "heart-bubble";
      h.textContent = hearts[Math.floor(Math.random() * hearts.length)];
      // random horizontal start
      h.style.left = Math.random() * 100 + "vw";
      document.body.appendChild(h);
      // clean up after animation
      setTimeout(() => h.remove(), 4000);
    }, i * delayMs);
  }
}

// fire once when everything is ready
window.addEventListener("load", launchHeartBubbles);


// ====== PHASE 1: Render Area Cards ======
function renderAreas() {
  console.log('1️⃣ renderAreas()');
  const container = $('areas');
  container.innerHTML = '';

  Object.keys(restaurantData).forEach(area => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="images/${area.toLowerCase()}.jpg" alt="${area}" />
      <p>${area}</p>
    `;
    card.onclick = () => chooseHealth(area);
    container.appendChild(card);
  card.dataset.area = area;     // 💡 so we can hide/show later

  });
/* ─── “? Random” card ─────────────────────────── */
const rand = document.createElement('div');
rand.className = 'card';
rand.innerHTML = `<p style="font-size:3rem">❓</p><p>Random</p>`;
rand.dataset.area = 'RANDOM';
rand.onclick = () => {
  const keys = Object.keys(restaurantData);
  const randomArea = keys[Math.floor(Math.random()*keys.length)];
  chooseHealth(randomArea);
};
container.appendChild(rand);

/* ─── “🌀 Any” card (merge all areas) ─────────── */
const any = document.createElement('div');
any.className = 'card';
any.innerHTML = `<p style="font-size:2.5rem">🌀</p><p>Any</p>`;
any.dataset.area = 'ANY';
any.onclick  = () => chooseHealth('ANY');
container.appendChild(any);
  
}


// ====== PHASE 2: Choose Healthy/Less/All ======
function chooseHealth(area) {
  console.log('2️⃣ chooseHealth()', area);
  // hide area grid, show health grid
  $('area-section').hidden     = true;
  $('category-section').hidden = false;

  const container = $('health-options');
  container.innerHTML = '';

  ['Healthy', 'Less Healthy', 'All'].forEach(level => {
    const card = document.createElement('div');
    card.className = 'card';
    card.textContent = level;
    card.onclick = () => startPicker(area, level);
    container.appendChild(card);
  });
}
// ====== PHASE 3: show the Method Chooser ======
function startPicker(area, level) {
  currentArea  = area;
  currentLevel = level;

  $('category-section').hidden = true;   // hide Healthy/Less/All
  $('method-section').hidden   = false;  // show Wheel / Random / Cards / All
}




// ====== DISPATCH ======
function launchMechanic(mech, area, level) {
  $('picker-title').textContent = {
    wheel:   'Spin the Wheel!',
    scratch: 'Scratch & Win!',
    cards:   'Pick a Card!',
    list:    'All Options:'
  }[mech];

  const container = $('picker-container');
  container.innerHTML = '';

  if      (mech === 'list')    showList(area, level);
  else if (mech === 'wheel')   showWheel(area, level);
  else if (mech === 'scratch') showScratch(area, level);
  else if (mech === 'cards')   showCards(area, level);
}

// ====== HELPER: shuffle ======
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}


// ====== SPINNING WHEEL ======
function showWheel(area, level) {
  // clear old UI, show the canvas
  $('picker-container').innerHTML = '';
  const canvas = $('wheelcanvas');
  canvas.style.display = 'block';

  // build wheel segments
 let list = area === 'ANY'
  ? Object.values(restaurantData).flat()
  : (restaurantData[area] || []).slice();
list = list.filter(r => r.avgCost <= budgetLimit);          // ← NEW
if (level === 'Healthy')      list = list.filter(r => r.avgCost <= 30000);
else if (level === 'Less Healthy') list = list.filter(r => r.avgCost > 30000);

  const segments = list.map((r,i) => ({
    text:          r.name,
    fillStyle:     colors[i % colors.length],
    textFillStyle: '#333'
  }));
  // pad to at least 6 slices
  while (segments.length < 6) {
    segments.push({ text: 'Bonus!', fillStyle: '#eee', textFillStyle: '#666' });
  }

  // stop any previous wheel
  if (window.wheel) window.wheel.stopAnimation(false);

  // instantiate a new Winwheel
  window.wheel = new Winwheel({
    canvasId:     'wheelcanvas',
    outerRadius:  180,
    textFontSize: 14,
    segments,
    animation: {
      type:       'spinToStop',
      duration:    5,
      spins:       8,
      callbackFinished: (w) => {
        const idx   = w.getIndicatedSegmentNumber() - 1;
        const seg   = segments[idx];
        const found = list.find(r => r.name === seg.text);
        if (found)    showDetails(found);
        else          alert('🎉 Bonus round – pick again!');
      }
    }
  });

  // add a Spin button
  const btn = document.createElement('button');
  btn.textContent = '🎡 Spin the Wheel';
  btn.className   = 'action-btn';
  $('picker-container').appendChild(btn);
  btn.onclick = () => window.wheel.startAnimation();
}

// ====== SCRATCH & WIN ======
function showScratch(area, level) {
  // hide wheel
  $('wheelcanvas').style.display = 'none';

  // clear container
  const container = $('picker-container');
  container.innerHTML = '';

  // pick 3 restaurants + 3 love-notes
  const list   = shuffle(getFilteredList(area, level)).slice(0, 3);
  const prizes = shuffle([
    'You won a parrot kiss from Eddie',
    'You won a hug from Eddie',
    'Kiss Eddie on the cheek now',
    'You are awesome Ellie',
    'I love you Ellie',
    'Marry me?',
    'Ok choose again',
    '사랑해 Ellie',
    '귀여워'
  ]).slice(0, 3);

  // shuffle them into slots
  const slots = shuffle([
    ...list.map(r => ({ type: 'rest',  data: r })),
    ...prizes.map(p => ({ type: 'prize', data: p }))
  ]);

  // render scratch-boxes
  slots.forEach((slot, i) => {
    const box     = document.createElement('div');
    box.className = 'scratch-box';

    // underneath image (restaurant or blank)
    const img = document.createElement('img');
    img.src = slot.type === 'rest'
      ? slot.data.img
      : 'images/blank-scratch.jpg';
    box.appendChild(img);

    // overlay layer that will be scratched off
    const overlay = document.createElement('div');
    overlay.id    = `scratch-${i}`;
    box.appendChild(overlay);

    container.appendChild(box);

    // initialize wScratchPad on the overlay
    $(`#scratch-${i}`).wScratchPad({
      size:       40,
      bg:         '#ccc',
      fg:         '#ccc',
      cursor:     'pointer',
      scratchMove: (_, percent) => {
        if (percent > 60) {
          if (slot.type === 'rest') showDetails(slot.data);
          else                       alert(slot.data);
          $(`#scratch-${i}`).wScratchPad('clear');
        }
      }
    });
  });
}


// ====== FLIPPING CARDS ======
function showCards(area, level) {
  $('wheelcanvas').style.display = 'none';
  const container = $('picker-container');
  container.innerHTML = '';

  const list   = shuffle(getFilteredList(area, level)).slice(0, 4);
  const prizes = shuffle([
    'You are my favorite person ever Ellie',
    'You are cute',
    'Ellie Rodriguez',
    '내 사랑 뿜뿜',
    'Hello?'
  ]).slice(0, 2);

  const cards = shuffle([
    ...list.map(r => ({ type: 'rest',  data: r })),
    ...prizes.map(p => ({ type: 'prize', data: p }))
  ]);

  cards.forEach((c, i) => {
    const card = document.createElement('div');
    card.className = 'card-flip';
    const front = document.createElement('div');
    front.className = 'front';
    front.textContent = '🂠';
    const back  = document.createElement('div');
    back.className = 'back';
    if (c.type === 'rest') {
      back.innerHTML = `<img src="${c.data.img}" /><p>${c.data.name}</p>`;
    } else {
      back.innerHTML = `<p>${c.data}</p>`;
    }
    card.append(front, back);
    container.appendChild(card);
    card.onclick = () => {
      card.classList.add('flipped');
      setTimeout(() => {
        document
          .querySelectorAll('.card-flip:not(.flipped)')
          .forEach(o => o.classList.add('flipped'));
      }, 30000);
    };
  });
}

// ====== RICH DETAILS PANEL ======
function showDetails(r) {
  const container = $('picker-container');
  container.innerHTML = `
    <div class="details">
      <img src="${r.img}" alt="${r.name}" />
      <h3>${r.name}</h3>
      <p>Price: ₩${r.avgCost}</p>
      <p>Time: ${r.open} — ${r.close}</p>
      ${r.url
         ? `<p><a href="${r.url}" target="_blank">View on Naver</a></p>`
         : ''}
    </div>
  `;
}

// ====== HELPER: getFilteredList ======
function getFilteredList(area, level) {
  let list = (restaurantData[area] || []).slice();
 list = list.filter(r => r.avgCost <= budgetLimit); 
  if      (level === 'Healthy')      list = list.filter(r => r.avgCost <= 30000);
  else if (level === 'Less Healthy') list = list.filter(r => r.avgCost > 30000);
  return list;
}

// ====== Existing LIST fallback ======
function showList(area, level) {
  $('picker-title').textContent = 'All Options:';
  const container = $('picker-container');
  container.innerHTML = '';
  let list = area === 'ANY'
? Object.values(restaurantData).flat()
: (restaurantData[area] || []).slice();
list = list.filter(r => r.avgCost <= budgetLimit);
  if (level === 'Healthy') list = list.filter(r => r.avgCost <= 30000);
  else if (level === 'Less Healthy') list = list.filter(r => r.avgCost > 30000);
  list.forEach(r => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="${r.img}" alt="${r.name}" />
      <p>${r.name}</p>
    `;
    card.onclick = () => showDetails(r);
    container.appendChild(card);
  });
}

// ====== RESET ======
function resetAll() {
  $('picker-section').hidden   = true;
  $('category-section').hidden = true;
  $('area-section').hidden     = false;
$('method-section').hidden = true;

}

$('back-btn').onclick = () => {
  $('picker-section').hidden = true;
  $('method-section').hidden  = false;
};


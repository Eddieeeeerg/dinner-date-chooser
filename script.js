// script.js
console.log('🔥 script.js loaded');
// ====== UTILITY ======
const $ = id => document.getElementById(id);

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
  $('reset-btn').addEventListener('click', resetAll);
});

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
  });
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

// ====== PHASE 4: Pick a Mechanic ======
function startPicker(area, level) {
  $('category-section').hidden = true;
  $('picker-section').hidden   = false;

  // decide which mechanic to run
  const roll = Math.random() * 100;
  let mech;
  if      (roll < 10)  mech = 'wheel';
  else if (roll < 50)  mech = 'scratch';
  else if (roll < 90)  mech = 'cards';
  else                 mech = 'list';

  launchMechanic(mech, area, level);
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
  $('picker-container').innerHTML = '';
  const canvas = $('wheelcanvas');
  canvas.style.display = 'block';

  const list     = getFilteredList(area, level);
  const segments = list.map(r => ({ text: r.name }));
  while (segments.length < 6) segments.push({ text: 'Bonus!' });

  if (window.wheel) window.wheel.stopAnimation(false);

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
        if (found) showDetails(found);
        else       alert('🎉 Bonus round – pick again!');
      }
    }
  });

  const btn = document.createElement('button');
  btn.textContent = '🎡 Spin the Wheel';
  btn.className   = 'action-btn';
  $('picker-container').appendChild(btn);
  btn.onclick = () => window.wheel.startAnimation();
}

// ====== SCRATCH & WIN ======
function showScratch(area, level) {
  $('wheelcanvas').style.display = 'none';
  const container = $('picker-container');
  container.innerHTML = '';

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

  const slots = shuffle([
    ...list.map(r => ({ type: 'rest',  data: r })),
    ...prizes.map(p => ({ type: 'prize', data: p }))
  ]);

  slots.forEach((slot, i) => {
    const box = document.createElement('div');
    box.className = 'scratch-box';
    const img = document.createElement('img');
    img.src = slot.type === 'rest' ? slot.data.img : 'images/blank-scratch.jpg';
    box.appendChild(img);
    const overlay = document.createElement('div');
    overlay.id    = `scratch-${i}`;
    box.appendChild(overlay);
    container.appendChild(box);

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
  if      (level === 'Healthy')      list = list.filter(r => r.avgCost <= 30000);
  else if (level === 'Less Healthy') list = list.filter(r => r.avgCost > 30000);
  return list;
}

// ====== Existing LIST fallback ======
function showList(area, level) {
  $('picker-title').textContent = 'All Options:';
  const container = $('picker-container');
  container.innerHTML = '';
  let list = (restaurantData[area] || []).slice();
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
}

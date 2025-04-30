// script.js

// ====== PHASE 1: Restaurant data ======
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

// ====== DEBUGGING ======
console.log('RestaurantData loaded:', restaurantData);

// ====== UTILITY ======
function $(id) { return document.getElementById(id); }

// ====== PHASE 1: Area selection ======
window.addEventListener('DOMContentLoaded', () => renderAreas());
function renderAreas() {
  const div = $('areas'); div.innerHTML = '';
  Object.keys(restaurantData).forEach(area => {
    const card = document.createElement('div'); card.className = 'card';
    card.innerHTML = `<img src="images/${area.toLowerCase()}.jpg" alt="${area}"/><p>${area}</p>`;
    card.onclick = () => chooseHealth(area);
    div.appendChild(card);
  });
}

// ====== PHASE 2: Health-level selection ======
function chooseHealth(area) {
  $('area-section').hidden = true;
  $('category-section').hidden = false;
  const opts = ['Healthy','Less Healthy','All'];
  const div = $('health-options'); div.innerHTML = '';
  opts.forEach(level => {
    const card = document.createElement('div'); card.className='card';
    card.textContent = level;
    card.onclick = () => startPicker(area, level);
    div.appendChild(card);
  });
}

// ====== PHASE 4: Random Picker ======
function startPicker(area, level) {
  $('category-section').hidden = true;
  $('picker-section').hidden = false;
  // For now, always show the full list mechanic
  const mech = 'list';
  launchMechanic(mech, area, level);
}
}

function launchMechanic(type, area, level) {
  // Set picker title
  $('picker-title').textContent = {
    wheel: 'Spin the Wheel!',
    scratch: 'Scratch & Win!',
    cards: 'Pick a Card!',
    list: 'All Options:'
  }[type];

  const container = $('picker-container');
  container.innerHTML = '';

  // Filter restaurants by health level
  let list = restaurantData[area] || [];
  if (level !== 'All') {
    list = list.filter(r => level === 'Healthy' ? r.avgCost <= 30000 : r.avgCost > 30000);
  }

  if (type === 'list') {
    // Show all options as cards
    list.forEach(r => {
      const card = document.createElement('div'); card.className = 'card';
      card.innerHTML = `
        <img src="${r.img}" alt="${r.name}" />
        <p>${r.name}</p>
      `;
      card.onclick = () => showDetails(r);
      container.appendChild(card);
    });
  } else {
    // Placeholder for other mechanics
    const msg = document.createElement('p');
    msg.textContent = `"${type}" mechanic coming soon!`;
    container.appendChild(msg);
  }
}

function showDetails(r) {
  // Simple detail popup
  const details = `Name: ${r.name}
Price: ${r.avgCost}
Open: ${r.open} - ${r.close}${r.url ? `
Link: ${r.url}` : ''}`;
  alert(details);
}

// ====== RESET ======
$('reset-btn').onclick = () => {
  $('picker-section').hidden = true;
  $('area-section').hidden = false;
};
$('reset-btn').onclick = () => {
  $('picker-section').hidden = true;
  $('area-section').hidden = false;
};

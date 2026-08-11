const commons = (filename, width = 1200) =>
  `https://commons.wikimedia.org/wiki/Special:Redirect/file/${encodeURIComponent(filename)}?width=${width}`;

const photo = (filename, alt) => ({ src: commons(filename), alt });

const images = {
  perth: photo('Perth skyline 2024.jpg', '珀斯天际线与城市水岸'),
  pinnacles: photo('Pinnacles Desert, Nambung National Park, Western Australia 08.jpg', '西澳南邦国家公园尖峰石阵'),
  wave: photo('Wave-Rock-Hyden-WA.jpg', '海登 Wave Rock 波浪岩'),
  lucky: photo('White beach Lucky Bay in Esperance.jpg', 'Esperance Lucky Bay 白沙海岸'),
  albany: photo('Port of Albany.jpg', 'Albany 港口与南海岸'),
  giants: photo('Valley of the Giants Tree Top Walk (2009).jpg', 'Valley of the Giants 树顶步道'),
  leeuwin: photo('Cape Leeuwin Lighthouse WA (3406973349).jpg', 'Cape Leeuwin 灯塔'),
  quokka: photo('RottnestQuokka.jpg', '罗特尼斯岛的 Quokka'),
  hutt: photo('Hutt Lagoon, Western Australia.jpg', '西澳 Hutt Lagoon 粉红湖'),
  hobart: photo('Viewing Platform Mount Wellington Hobart Tasmania.jpg', '惠灵顿山观景台俯瞰霍巴特'),
  cradle: photo('Cradle Mountain and Dove Lake, Tas.jpg', '摇篮山与 Dove Lake'),
  stanley: photo('Stanley and the Nut.jpg', 'Stanley 小镇与 The Nut'),
  fires: photo('Bay of Fires Tasmania.jpg', '塔州 Bay of Fires 海岸'),
  wineglass: photo('Wineglass Bay from Lookout.jpg', 'Freycinet 国家公园 Wineglass Bay'),
  bruny: photo('The Neck Bruny Island.jpg', '布鲁尼岛 The Neck 地峡'),
  portArthur: photo('Tasmania port arthur.jpg', '塔州 Port Arthur 历史遗址')
};

const itinerary = {
  south: [
    {
      day: 1, date: '09.23 · 周三', title: '杭州 → 珀斯', stay: 'Perth Airport / Ascot', pace: '抵达日',
      summary: '抵达后只做取车、补给和入住。住宿选机场东侧，第二天可直接驶上 Great Eastern Highway。',
      stops: ['杭州出发', '珀斯机场', '取车', '附近补给'], pictures: [images.perth]
    },
    {
      day: 2, date: '09.24 · 周四', title: '珀斯 → Esperance', stay: 'Esperance · Town Centre', pace: '高强度长途',
      summary: '早出发，经 York 快速停留，在 Hyden 看 Wave Rock 后继续赶往 Esperance。景点控制节奏，每两小时轮换休息。',
      stops: ['York', 'Wave Rock', 'Hyden 午餐', 'Esperance'], pictures: [images.wave, images.lucky]
    },
    {
      day: 3, date: '09.25 · 周五', title: 'Esperance 海岸环线', stay: 'Esperance · 原住宿续住', pace: '轻松',
      summary: '用一整天走 Great Ocean Drive，把 West Beach、Blue Haven、Twilight Beach 和观景点串起来，傍晚回镇上。',
      stops: ['West Beach', 'Blue Haven', 'Twilight Beach', 'Pink Lake Lookout'], pictures: [images.lucky, images.wave]
    },
    {
      day: 4, date: '09.26 · 周六', title: 'Cape Le Grand & Lucky Bay', stay: 'Esperance · 原住宿续住', pace: '海岸日',
      summary: '早上直达 Cape Le Grand。以 Lucky Bay 白沙滩为核心，不安排高强度徒步；天气好再补 Hellfire Bay。',
      stops: ['Cape Le Grand', 'Lucky Bay', 'Hellfire Bay', 'Thistle Cove'], pictures: [images.lucky, images.albany]
    },
    {
      day: 5, date: '09.27 · 周日', title: 'Esperance → Albany', stay: 'Albany · Middleton Beach', pace: '转场日',
      summary: '沿 South Coast Highway 西行。途中以加油、午餐和短暂停车为主，下午抵达 Albany 后看海港或 Middleton Beach。',
      stops: ['Ravensthorpe', 'Jerramungup', 'Albany', 'Middleton Beach'], pictures: [images.albany, images.lucky]
    },
    {
      day: 6, date: '09.28 · 周一', title: 'Albany → Pemberton', stay: 'Pemberton · Forest Chalet', pace: '景观公路',
      summary: '先到 Denmark 的 Greens Pool 与 Elephant Rocks，再进入巨树森林。务必在 Tree Top Walk 最晚入场前抵达。',
      stops: ['Denmark', 'Greens Pool', 'Elephant Rocks', 'Valley of the Giants'], pictures: [images.giants, images.albany]
    },
    {
      day: 7, date: '09.29 · 周二', title: 'Pemberton → Yallingup', stay: 'Dunsborough / Yallingup', pace: '内容丰富',
      summary: '从森林到海角，串联 Cape Leeuwin、Hamelin Bay、Boranup 和 Margaret River。日落前赶到 Sugarloaf Rock。',
      stops: ['Cape Leeuwin', 'Hamelin Bay', 'Boranup Forest', 'Margaret River', 'Sugarloaf Rock'], pictures: [images.leeuwin, images.giants]
    },
    {
      day: 8, date: '09.30 · 周三', title: 'Yallingup → 珀斯', stay: 'Perth Airport / Fremantle', pace: '弹性返程',
      summary: '上午经 Busselton Jetty，之后一路北返。Rockingham 只作天气好时的可选停留，优先保证还车与休息。',
      stops: ['Busselton Jetty', 'Rockingham 可选', '珀斯补给', '还车 / 换车'], pictures: [images.leeuwin, images.perth]
    }
  ],
  north: [
    {
      day: 9, date: '10.01 · 周四', title: '珀斯 → Geraldton', stay: 'Geraldton · Foreshore', pace: '北上日',
      summary: '沿印度洋公路北上，在 Lancelin 沙丘短停，把下午重点留给 Pinnacles；经 Jurien Bay 后抵达 Geraldton。',
      stops: ['Lancelin', 'Pinnacles', 'Jurien Bay', 'Geraldton'], pictures: [images.pinnacles, images.hutt]
    },
    {
      day: 10, date: '10.02 · 周五', title: '粉红湖 → Fremantle', stay: 'Fremantle · 港口周边', pace: '长途折返',
      summary: '上午从 Geraldton 前往 Hutt Lagoon，完成北线最北点后立即折返。下午一路南下，晚上住 Fremantle。',
      stops: ['Hutt Lagoon', 'Port Gregory', '海岸公路', 'Fremantle'], pictures: [images.hutt, images.pinnacles]
    },
    {
      day: 11, date: '10.03 · 周六', title: '罗特尼斯岛一日', stay: 'Perth Airport 周边', pace: '离岛日',
      summary: '从 Fremantle 乘早班船上岛，选择自行车或环岛巴士看海湾和 Quokka。傍晚返航后转往机场住宿。',
      stops: ['Fremantle Ferry', 'The Basin', 'Wadjemup Lighthouse', 'Quokka'], pictures: [images.quokka, images.pinnacles]
    }
  ],
  tas: [
    {
      day: 12, date: '10.04 · 周日', title: '珀斯 → 霍巴特', stay: 'Hobart · CBD / Battery Point', pace: '飞行日',
      summary: '抵达霍巴特后取车。若天色、云量和道路条件合适，当天上 kunanyi / Mount Wellington；否则留到回城后机动补上。',
      stops: ['PER → HBA', '霍巴特取车', 'Battery Point', 'Mount Wellington 可选'], pictures: [images.hobart]
    },
    {
      day: 13, date: '10.05 · 周一', title: '霍巴特 → 摇篮山 → Stanley', stay: 'Stanley · The Nut 附近', pace: '全程最紧张',
      summary: '清晨出发，经 Queenstown 进入西部荒野。摇篮山只坐接驳车到 Dove Lake 观景，不徒步，随后继续赶往 Stanley。',
      stops: ['Queenstown', 'Cradle Mountain', 'Dove Lake', 'Stanley'], pictures: [images.cradle, images.stanley]
    },
    {
      day: 14, date: '10.06 · 周二', title: 'Stanley → St Helens', stay: 'St Helens · 镇中心', pace: '北海岸长途',
      summary: '上午逛 Stanley 与 The Nut，午后沿北海岸东行，经 Devonport、Launceston 后到 Bay of Fires，晚住 St Helens。',
      stops: ['Stanley', 'Devonport', 'Launceston', 'Bay of Fires', 'St Helens'], pictures: [images.stanley, images.fires]
    },
    {
      day: 15, date: '10.07 · 周三', title: '东海岸 → 霍巴特', stay: 'Hobart · 原住宿区域', pace: '海岸环线',
      summary: '从 St Helens 南下，经 Bicheno 到 Freycinet。以 Cape Tourville 等车行观景点为主；如愿意短走，再临时增加 Wineglass Bay Lookout，之后经 Ross 回霍巴特。',
      stops: ['Bicheno', 'Cape Tourville', 'Honeymoon Bay', 'Ross', 'Hobart'], pictures: [images.wineglass, images.fires]
    },
    {
      day: 16, date: '10.08 · 周四', title: '布鲁尼岛一日', stay: 'Hobart · 原住宿续住', pace: '离岛日',
      summary: '自驾前往 Kettering 轮渡，岛上以 The Neck、海岸线和本地食物为主。早点过海，返程时给排队留余量。',
      stops: ['Kettering Ferry', 'The Neck', 'Adventure Bay', 'Cape Bruny 可选'], pictures: [images.bruny, images.wineglass]
    },
    {
      day: 17, date: '10.09 · 周五', title: '塔斯曼巡游 & 亚瑟港', stay: 'Hobart · 原住宿续住', pace: '提前预订',
      summary: '早上前往 Tasman Peninsula 参加海上巡游，下午游览 Port Arthur Historic Site，傍晚返回霍巴特。',
      stops: ['Tasman Island Cruise', 'Eaglehawk Neck', 'Port Arthur', 'Hobart'], pictures: [images.portArthur, images.bruny]
    },
    {
      day: 18, date: '10.10 · 周六', title: '霍巴特 → 珀斯', stay: 'Perth Airport / 航班衔接区', pace: '返程航段',
      summary: '按航班时间还车并飞回珀斯。若起飞较晚，可上午短逛 Salamanca Market；不强行给珀斯市区留完整一天。',
      stops: ['Salamanca 可选', 'Hobart 还车', 'HBA → PER', '珀斯机场'], pictures: [images.hobart, images.perth]
    },
    {
      day: 19, date: '10.11 · 周日', title: '珀斯 → 杭州', stay: '旅程结束', pace: '回家',
      summary: '从机场住宿直接衔接国际航班。预留足够的退税、行李托运和出境时间，结束西澳与塔州的完整旅程。',
      stops: ['退房', '珀斯机场', '国际航班', '杭州'], pictures: [images.perth]
    }
  ]
};

const stays = [
  ['09.23', 'Perth Airport / Ascot', '机场东侧；晚到后尽快休息，停车方便'],
  ['09.24—09.26', 'Esperance', 'Town Centre / West Beach；连续住3晚'],
  ['09.27', 'Albany', 'Middleton Beach；海边、停车方便'],
  ['09.28', 'Pemberton', '森林 chalet / cottage；体验感优先'],
  ['09.29', 'Dunsborough / Yallingup', '靠近 Sugarloaf Rock，方便第二天北返'],
  ['09.30', 'Perth / Fremantle', '按次日取车点选择；避免市中心绕行'],
  ['10.01', 'Geraldton', 'Foreshore / CBD；晚餐与第二天加油方便'],
  ['10.02', 'Fremantle', '靠近轮渡码头；确认停车政策'],
  ['10.03', 'Perth Airport', '罗特尼斯岛返航后转机场区域'],
  ['10.04', 'Hobart', 'CBD / Battery Point；取车后入住'],
  ['10.05', 'Stanley', 'The Nut / 镇中心；尽量支持晚入住'],
  ['10.06', 'St Helens', '镇中心；餐饮和补给最方便'],
  ['10.07—10.09', 'Hobart', '连续住3晚，减少搬运行李'],
  ['10.10', 'Perth Airport', '按国际航班时间决定是否需要']
];

function renderDayCard(day) {
  const galleryClass = day.pictures.length === 1 ? 'day-gallery single' : 'day-gallery';
  const pictures = day.pictures.slice(0, 2).map(picture =>
    `<img src="${picture.src}" alt="${picture.alt}" loading="lazy">`
  ).join('');

  return `
    <article class="day-card">
      <figure class="${galleryClass}">${pictures}</figure>
      <div class="day-body">
        <div class="day-topline">
          <div><p class="day-date">${day.date}</p><h2>${day.title}</h2></div>
          <span class="day-number">${String(day.day).padStart(2, '0')}</span>
        </div>
        <p class="day-summary">${day.summary}</p>
        <ul class="stop-list">${day.stops.map(stop => `<li>${stop}</li>`).join('')}</ul>
        <div class="stay-line"><span>住宿 <strong>${day.stay}</strong></span><span class="intensity">${day.pace}</span></div>
      </div>
    </article>`;
}

document.getElementById('southDays').innerHTML = itinerary.south.map(renderDayCard).join('');
document.getElementById('northDays').innerHTML = itinerary.north.map(renderDayCard).join('');
document.getElementById('tasDays').innerHTML = itinerary.tas.map(renderDayCard).join('');
document.getElementById('stayRows').innerHTML = stays.map(row =>
  `<tr><td>${row[0]}</td><td>${row[1]}</td><td>${row[2]}</td></tr>`
).join('');

const tabs = [...document.querySelectorAll('[role="tab"]')];
const panels = [...document.querySelectorAll('[role="tabpanel"]')];
const validTabs = new Set(tabs.map(tab => tab.dataset.tab));
let routeMap;

function activateTab(name, updateHash = true) {
  const target = validTabs.has(name) ? name : 'home';
  tabs.forEach(tab => {
    const active = tab.dataset.tab === target;
    tab.classList.toggle('active', active);
    tab.setAttribute('aria-selected', String(active));
    tab.tabIndex = active ? 0 : -1;
  });
  panels.forEach(panel => {
    const active = panel.dataset.panel === target;
    panel.hidden = !active;
    panel.classList.toggle('active', active);
  });
  if (updateHash && location.hash !== `#${target}`) history.pushState(null, '', `#${target}`);
  const activeTab = tabs.find(tab => tab.dataset.tab === target);
  activeTab?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  window.scrollTo({ top: 0, behavior: 'smooth' });
  if (target === 'home' && routeMap) requestAnimationFrame(() => routeMap.invalidateSize());
}

tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => activateTab(tab.dataset.tab));
  tab.addEventListener('keydown', event => {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    let next = index;
    if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
    if (event.key === 'ArrowLeft') next = (index - 1 + tabs.length) % tabs.length;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = tabs.length - 1;
    tabs[next].focus();
    activateTab(tabs[next].dataset.tab);
  });
});

document.querySelectorAll('[data-tab-link]').forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    activateTab(link.dataset.tabLink);
  });
});

window.addEventListener('popstate', () => activateTab(location.hash.slice(1), false));
document.getElementById('printButton')?.addEventListener('click', () => window.print());

document.querySelectorAll('.checklist input').forEach((box, index) => {
  const key = `aus-road-trip-check-${index}`;
  box.checked = localStorage.getItem(key) === 'true';
  box.addEventListener('change', () => localStorage.setItem(key, box.checked));
});

function initRouteMap() {
  if (!window.L || !document.getElementById('routeMap')) return;

  routeMap = L.map('routeMap', { scrollWheelZoom: false, zoomControl: true });
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(routeMap);

  const perth = [-31.9523, 115.8613];
  const hobart = [-42.8821, 147.3272];
  const waRoute = [
    perth, [-31.8896, 116.7680], [-32.443, 118.897], [-33.8608, 121.8896],
    [-33.991, 122.232], [-35.0275, 117.884], [-34.9607, 117.353], [-34.974, 116.897],
    [-34.444, 116.034], [-34.3749, 115.1365], [-33.9535, 115.073], [-33.646, 115.033],
    [-32.2768, 115.729], perth, [-31.022, 115.333], [-30.604, 115.159], [-30.305, 115.038],
    [-28.7774, 114.614], [-28.158, 114.242], [-32.0569, 115.7439], [-32.006, 115.512], perth
  ];
  const tasRoute = [
    hobart, [-42.895, 147.236], [-42.0805, 145.556], [-41.684, 145.951], [-40.760, 145.295],
    [-41.178, 146.351], [-41.434, 147.144], [-41.251, 148.307], [-41.321, 148.249],
    [-42.124, 148.289], [-42.030, 147.492], hobart, [-43.273, 147.349], hobart,
    [-43.148, 147.850], hobart
  ];

  L.polyline(waRoute, { color: '#d47745', weight: 4, opacity: .9 }).addTo(routeMap);
  L.polyline(tasRoute, { color: '#247a78', weight: 4, opacity: .9 }).addTo(routeMap);
  L.polyline([perth, hobart], { color: '#496c93', weight: 2, opacity: .7, dashArray: '8 10' }).addTo(routeMap);

  const keyStops = [
    ['珀斯', perth, 'WA'], ['Esperance', [-33.8608, 121.8896], 'WA'], ['Albany', [-35.0275, 117.884], 'WA'],
    ['Pemberton', [-34.444, 116.034], 'WA'], ['Hutt Lagoon', [-28.158, 114.242], 'WA'],
    ['罗特尼斯岛', [-32.006, 115.512], 'WA'], ['霍巴特', hobart, 'TAS'],
    ['摇篮山', [-41.684, 145.951], 'TAS'], ['Stanley', [-40.760, 145.295], 'TAS'],
    ['火焰湾', [-41.251, 148.307], 'TAS'], ['酒杯湾', [-42.124, 148.289], 'TAS'],
    ['布鲁尼岛', [-43.273, 147.349], 'TAS'], ['亚瑟港', [-43.148, 147.850], 'TAS']
  ];
  keyStops.forEach(([label, coords, region], index) => {
    const icon = L.divIcon({ className: 'route-pin', html: String(index + 1), iconSize: [25, 25] });
    L.marker(coords, { icon }).addTo(routeMap).bindTooltip(`${label} · ${region}`, { direction: 'top', offset: [0, -8] });
  });

  routeMap.fitBounds(L.latLngBounds([...waRoute, ...tasRoute]), { padding: [32, 32] });
}

const initialTab = location.hash.slice(1);
activateTab(validTabs.has(initialTab) ? initialTab : 'home', false);
if (initialTab && !validTabs.has(initialTab)) history.replaceState(null, '', '#home');
initRouteMap();

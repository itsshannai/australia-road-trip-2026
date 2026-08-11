const commons = (filename, width = 1600) =>
  `https://commons.wikimedia.org/wiki/Special:Redirect/file/${encodeURIComponent(filename)}?width=${width}`;

const photo = (filename, alt) => ({
  src: commons(filename),
  thumb: commons(filename, 420),
  alt,
  source: `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(filename).replace(/%20/g, '_')}`
});

const scene = (label, picture) => ({ label, picture });
const maps = query => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
const eat = (meal, name, note, query = name) => ({ meal, name, note, url: maps(query) });

const images = {
  perthArrival: photo('Perth skyline 2024.jpg', '抵达珀斯：城市天际线'),
  elizabethQuay: photo('Perth (AU), Elizabeth Quay -- 2019 -- 0331-3.jpg', 'Elizabeth Quay 滨水区'),
  york: photo('York Town Hall, Western Australia.jpg', 'York 历史小镇与市政厅'),
  pinnacles: photo('Pinnacles Desert, Nambung National Park, Western Australia 08.jpg', '西澳南邦国家公园尖峰石阵'),
  wave: photo('Wave-Rock-Hyden-WA.jpg', '海登 Wave Rock 波浪岩'),
  westBeach: photo('West Beach, Esperance, Western Australia, January 2024 02.jpg', 'Esperance West Beach'),
  blueHaven: photo('Blue Haven beach, Esperance.jpg', 'Esperance Blue Haven 蓝色海湾'),
  twilight: photo('Twilight Beach, bay and rocks, Esperance, January 2024 01.jpg', 'Esperance Twilight Beach 海湾与礁石'),
  pinkLakeEsperance: photo('Sunset over Pink Lake, Esperance, January 2024 09.jpg', 'Esperance Pink Lake Lookout 日落'),
  capeLeGrand: photo('Cape Le Grand National Park, Western Australia 34.jpg', 'Cape Le Grand 国家公园海岸'),
  lucky: photo('White beach Lucky Bay in Esperance.jpg', 'Esperance Lucky Bay 白沙海岸'),
  hellfire: photo('Hellfire Bay, Cape Le Grand National Park, January 2025 01.jpg', 'Hellfire Bay 湛蓝海湾'),
  thistle: photo('Thistle Cove, Cape Le Grand National Park, January 2025 15.jpg', 'Thistle Cove 花岗岩海岸'),
  albany: photo('Port of Albany.jpg', 'Albany 港口与南海岸'),
  middleton: photo('Middleton Beach seen from Apex Lookout, April 2022 02.jpg', 'Albany Middleton Beach 与 King George Sound'),
  greensPool: photo('Greens pool - William Bay NP - WA.jpg', 'Denmark Greens Pool 天然泳池'),
  elephantRocks: photo('Elephant Rocks, Denmark, Western Australia - panoramio (2).jpg', 'Denmark Elephant Rocks'),
  giants: photo('Valley of the Giants Tree Top Walk (2009).jpg', 'Valley of the Giants 树顶步道'),
  pemberton: photo('Pemberton Forest, Pemberton,Western Australia.JPG', 'Pemberton 卡里树森林'),
  leeuwin: photo('Cape Leeuwin Lighthouse WA (3406973349).jpg', 'Cape Leeuwin 灯塔'),
  hamelin: photo('Hamelin Bay sunset 01.jpg', 'Hamelin Bay 日落'),
  boranup: photo('Karri trees - Boranup Forest 01.jpg', 'Boranup Karri Forest 卡里树林'),
  margaretVineyard: photo('10 20161018 CLAIRAULT STREICKER - Clairault Vineyard.jpg', 'Margaret River 葡萄园'),
  sugarloaf: photo('Sugarloaf Rock at sunset, Western Australia, October 2023 05.jpg', 'Sugarloaf Rock 日落'),
  busselton: photo('Busselton Jetty.jpg', 'Busselton Jetty 栈桥'),
  rockingham: photo('Beach west of Palm Beach Jetty, Rockingham, January 2024.jpg', 'Rockingham 海滨'),
  fremantleHarbour: photo('Victoria Quay and Fremantle Harbour.jpg', 'Fremantle Harbour 与 Victoria Quay'),
  lancelin: photo('Dunes at Lancelin.jpg', 'Lancelin 白色沙丘'),
  jurien: photo('Beach at Jurien Bay jetty, September 2023 01.jpg', 'Jurien Bay 码头海滩'),
  geraldton: photo('Geraldton Foreshore October 2023 01.jpg', 'Geraldton Foreshore 滨海步道'),
  fremantleSunset: photo('Australia fremantle sunset.jpg', 'Fremantle 印度洋日落'),
  quokka: photo('RottnestQuokka.jpg', '罗特尼斯岛的 Quokka'),
  basin: photo('Golden Hour at the Basin - Rottnest Island.jpg', 'The Basin 金色时刻'),
  wadjemup: photo('Wadjemup Lighthouse, April 2026 03.jpg', 'Wadjemup Lighthouse'),
  hutt: photo('Hutt Lagoon, Western Australia.jpg', '西澳 Hutt Lagoon 粉红湖'),
  hobart: photo('Viewing Platform Mount Wellington Hobart Tasmania.jpg', '惠灵顿山观景台俯瞰霍巴特'),
  hobartWaterfront: photo('Hobart waterfront.jpg', 'Hobart Waterfront 港湾'),
  batteryPoint: photo('Battery Point 2015.jpg', 'Hobart Battery Point 历史街区'),
  queenstown: photo('Landscape near Queenstown, Tasmania.jpg', 'Queenstown 西部荒野'),
  cradle: photo('Cradle Mountain and Dove Lake, Tas.jpg', '摇篮山与 Dove Lake'),
  stanleyArrival: photo('Stanley and The Nut (6280265492).jpg', 'Stanley 田野与 The Nut'),
  stanley: photo('Highfield, Stanley, Tasmania (31351168474).jpg', 'Stanley Highfield 与 The Nut'),
  devonport: photo('Devonport, TAS.JPG', 'Devonport 港口航拍'),
  cataract: photo('Cataract Gorge, Launceston in spring.jpg', 'Launceston Cataract Gorge 春日峡谷'),
  bayOfFires: photo('Bay of Fires-07.jpg', 'Bay of Fires 橙红巨石海岸'),
  bicheno: photo('Bicheno coastline, Tasmania (46113230991).jpg', 'Bicheno 东海岸'),
  capeTourville: photo('Cape Tourville Lighthouse.jpg', 'Cape Tourville 灯塔海岸'),
  wineglass: photo('Wineglass Bay from Lookout.jpg', 'Freycinet 国家公园 Wineglass Bay'),
  honeymoon: photo('Honeymoon Bay Sunset.jpg', 'Freycinet Honeymoon Bay 日落'),
  ross: photo('Ross Bridge.jpg', 'Ross 小镇石桥'),
  bruny: photo('The Neck Bruny Island.jpg', '布鲁尼岛 The Neck 地峡'),
  adventureBay: photo('Adventure Bay, Bruny Island, Tasmania.jpg', 'Bruny Island Adventure Bay'),
  capeBruny: photo('Cape Bruny Lighthouse (22796056806).jpg', 'Cape Bruny Lighthouse'),
  tasmanIsland: photo('Tasman Island, Tasmania, Australia.jpg', 'Tasman Island 与南大洋海崖'),
  eaglehawk: photo('A panorama on a cliff at Eaglehawk Neck.jpg', 'Eaglehawk Neck 海崖'),
  tasmanArch: photo('Tasman Arch (34436340434).jpg', 'Tasman Arch 海蚀拱门'),
  portArthur: photo('Tasmania port arthur.jpg', '塔州 Port Arthur 历史遗址'),
  salamanca: photo('Salamanca Market, Hobart, Tasmania.jpg', '霍巴特 Salamanca Market'),
  salamancaPlace: photo('Hobart Tasmania Salamanca Place.jpg', 'Salamanca Place 与惠灵顿山'),
  perthDeparture: photo('Perth Airport Terminal 1 exterior, Western Australia, October 2022 04.jpg', '珀斯机场国际航站楼')
};

const itinerary = {
  south: [
    {
      day: 1, date: '09.23 · 周三', title: '杭州 → 珀斯', stay: 'Perth Airport / Ascot', pace: '抵达日',
      summary: '抵达后只做取车、补给和入住。住宿选机场东侧，第二天可直接驶上 Great Eastern Highway。',
      stops: ['杭州出发', '珀斯机场', '取车', '附近补给'], picture: images.perthArrival,
      gallery: [scene('珀斯天际线', images.perthArrival), scene('Elizabeth Quay', images.elizabethQuay)]
    },
    {
      day: 2, date: '09.24 · 周四', title: '珀斯 → Esperance', stay: 'Esperance · Town Centre', pace: '高强度长途',
      summary: '早出发，经 York 快速停留，在 Hyden 看 Wave Rock 后继续赶往 Esperance。景点控制节奏，每两小时轮换休息。',
      stops: ['York', 'Wave Rock', 'Hyden 午餐', 'Esperance'], picture: images.wave,
      gallery: [scene('York', images.york), scene('Wave Rock', images.wave)]
    },
    {
      day: 3, date: '09.25 · 周五', title: 'Esperance 海岸环线', stay: 'Esperance · 原住宿续住', pace: '轻松',
      summary: '用一整天走 Great Ocean Drive，把 West Beach、Blue Haven、Twilight Beach 和观景点串起来，傍晚回镇上。',
      stops: ['West Beach', 'Blue Haven', 'Twilight Beach', 'Pink Lake Lookout'], picture: images.twilight,
      gallery: [scene('West Beach', images.westBeach), scene('Blue Haven', images.blueHaven), scene('Twilight Beach', images.twilight), scene('Pink Lake Lookout', images.pinkLakeEsperance)]
    },
    {
      day: 4, date: '09.26 · 周六', title: 'Cape Le Grand & Lucky Bay', stay: 'Esperance · 原住宿续住', pace: '海岸日',
      summary: '早上直达 Cape Le Grand。以 Lucky Bay 白沙滩为核心，不安排高强度徒步；天气好再补 Hellfire Bay。',
      stops: ['Cape Le Grand', 'Lucky Bay', 'Hellfire Bay', 'Thistle Cove'], picture: images.lucky,
      gallery: [scene('Cape Le Grand', images.capeLeGrand), scene('Lucky Bay', images.lucky), scene('Hellfire Bay', images.hellfire), scene('Thistle Cove', images.thistle)]
    },
    {
      day: 5, date: '09.27 · 周日', title: 'Esperance → Albany', stay: 'Albany · Middleton Beach', pace: '转场日',
      summary: '沿 South Coast Highway 西行。途中以加油、午餐和短暂停车为主，下午抵达 Albany 后看海港或 Middleton Beach。',
      stops: ['Ravensthorpe', 'Jerramungup', 'Albany', 'Middleton Beach'], picture: images.albany,
      gallery: [scene('Albany', images.albany), scene('Middleton Beach', images.middleton)]
    },
    {
      day: 6, date: '09.28 · 周一', title: 'Albany → Pemberton', stay: 'Pemberton · Forest Chalet', pace: '景观公路',
      summary: '先到 Denmark 的 Greens Pool 与 Elephant Rocks，再进入巨树森林。务必在 Tree Top Walk 最晚入场前抵达。',
      stops: ['Denmark', 'Greens Pool', 'Elephant Rocks', 'Valley of the Giants'], picture: images.giants,
      gallery: [scene('Greens Pool', images.greensPool), scene('Elephant Rocks', images.elephantRocks), scene('Valley of the Giants', images.giants), scene('Pemberton Forest', images.pemberton)]
    },
    {
      day: 7, date: '09.29 · 周二', title: 'Pemberton → Yallingup', stay: 'Dunsborough / Yallingup', pace: '内容丰富',
      summary: '从森林到海角，串联 Cape Leeuwin、Hamelin Bay、Boranup 和 Margaret River。日落前赶到 Sugarloaf Rock。',
      stops: ['Cape Leeuwin', 'Hamelin Bay', 'Boranup Forest', 'Margaret River', 'Sugarloaf Rock'], picture: images.leeuwin,
      gallery: [scene('Cape Leeuwin', images.leeuwin), scene('Hamelin Bay', images.hamelin), scene('Boranup Forest', images.boranup), scene('Margaret River', images.margaretVineyard), scene('Sugarloaf Rock', images.sugarloaf)]
    },
    {
      day: 8, date: '09.30 · 周三', title: 'Yallingup → 珀斯', stay: 'Perth Airport / Fremantle', pace: '弹性返程',
      summary: '上午经 Busselton Jetty，之后一路北返。Rockingham 只作天气好时的可选停留，优先保证还车与休息。',
      stops: ['Busselton Jetty', 'Rockingham 可选', '珀斯补给', '还车 / 换车'], picture: images.busselton,
      gallery: [scene('Busselton Jetty', images.busselton), scene('Rockingham', images.rockingham), scene('Fremantle Harbour', images.fremantleHarbour)]
    }
  ],
  north: [
    {
      day: 9, date: '10.01 · 周四', title: '珀斯 → Geraldton', stay: 'Geraldton · Foreshore', pace: '北上日',
      summary: '沿印度洋公路北上，在 Lancelin 沙丘短停，把下午重点留给 Pinnacles；经 Jurien Bay 后抵达 Geraldton。',
      stops: ['Lancelin', 'Pinnacles', 'Jurien Bay', 'Geraldton'], picture: images.pinnacles,
      gallery: [scene('Lancelin', images.lancelin), scene('Pinnacles', images.pinnacles), scene('Jurien Bay', images.jurien), scene('Geraldton', images.geraldton)]
    },
    {
      day: 10, date: '10.02 · 周五', title: '粉红湖 → Fremantle', stay: 'Fremantle · 港口周边', pace: '长途折返',
      summary: '上午从 Geraldton 前往 Hutt Lagoon，完成北线最北点后立即折返。下午一路南下，晚上住 Fremantle。',
      stops: ['Hutt Lagoon', 'Port Gregory', '海岸公路', 'Fremantle'], picture: images.hutt,
      gallery: [scene('Hutt Lagoon', images.hutt), scene('Fremantle 日落', images.fremantleSunset)]
    },
    {
      day: 11, date: '10.03 · 周六', title: '罗特尼斯岛一日', stay: 'Perth Airport 周边', pace: '离岛日',
      summary: '从 Fremantle 乘早班船上岛，选择自行车或环岛巴士看海湾和 Quokka。傍晚返航后转往机场住宿。',
      stops: ['Fremantle Ferry', 'The Basin', 'Wadjemup Lighthouse', 'Quokka'], picture: images.quokka,
      gallery: [scene('The Basin', images.basin), scene('Wadjemup Lighthouse', images.wadjemup), scene('Quokka', images.quokka)]
    }
  ],
  tas: [
    {
      day: 12, date: '10.04 · 周日', title: '珀斯 → 霍巴特', stay: 'Hobart · CBD / Battery Point', pace: '飞行日',
      summary: '抵达霍巴特后取车。若天色、云量和道路条件合适，当天上 kunanyi / Mount Wellington；否则留到回城后机动补上。',
      stops: ['PER → HBA', '霍巴特取车', 'Battery Point', 'Mount Wellington 可选'], picture: images.hobart,
      gallery: [scene('Hobart Waterfront', images.hobartWaterfront), scene('Battery Point', images.batteryPoint), scene('Mount Wellington', images.hobart)]
    },
    {
      day: 13, date: '10.05 · 周一', title: '霍巴特 → 摇篮山 → Stanley', stay: 'Stanley · The Nut 附近', pace: '全程最紧张',
      summary: '清晨出发，经 Queenstown 进入西部荒野。摇篮山只坐接驳车到 Dove Lake 观景，不徒步，随后继续赶往 Stanley。',
      stops: ['Queenstown', 'Cradle Mountain', 'Dove Lake', 'Stanley'], picture: images.cradle,
      gallery: [scene('Queenstown', images.queenstown), scene('Cradle Mountain & Dove Lake', images.cradle), scene('Stanley', images.stanleyArrival)]
    },
    {
      day: 14, date: '10.06 · 周二', title: 'Stanley → St Helens', stay: 'St Helens · 镇中心', pace: '北海岸长途',
      summary: '上午逛 Stanley 与 The Nut，午后沿北海岸东行，经 Devonport、Launceston 后到 Bay of Fires，晚住 St Helens。',
      stops: ['Stanley', 'Devonport', 'Launceston', 'Bay of Fires', 'St Helens'], picture: images.stanley,
      gallery: [scene('Stanley', images.stanley), scene('Devonport', images.devonport), scene('Launceston', images.cataract), scene('Bay of Fires', images.bayOfFires)]
    },
    {
      day: 15, date: '10.07 · 周三', title: '东海岸 → 霍巴特', stay: 'Hobart · 原住宿区域', pace: '海岸环线',
      summary: '从 St Helens 南下，经 Bicheno 到 Freycinet。以 Cape Tourville 等车行观景点为主；如愿意短走，再临时增加 Wineglass Bay Lookout，之后经 Ross 回霍巴特。',
      stops: ['Bicheno', 'Cape Tourville', 'Honeymoon Bay', 'Ross', 'Hobart'], picture: images.wineglass,
      gallery: [scene('Bicheno', images.bicheno), scene('Cape Tourville', images.capeTourville), scene('Wineglass Bay', images.wineglass), scene('Honeymoon Bay', images.honeymoon), scene('Ross', images.ross)]
    },
    {
      day: 16, date: '10.08 · 周四', title: '布鲁尼岛一日', stay: 'Hobart · 原住宿续住', pace: '离岛日',
      summary: '自驾前往 Kettering 轮渡，岛上以 The Neck、海岸线和本地食物为主。早点过海，返程时给排队留余量。',
      stops: ['Kettering Ferry', 'The Neck', 'Adventure Bay', 'Cape Bruny 可选'], picture: images.bruny,
      gallery: [scene('The Neck', images.bruny), scene('Adventure Bay', images.adventureBay), scene('Cape Bruny Lighthouse', images.capeBruny)]
    },
    {
      day: 17, date: '10.09 · 周五', title: '塔斯曼巡游 & 亚瑟港', stay: 'Hobart · 原住宿续住', pace: '提前预订',
      summary: '早上前往 Tasman Peninsula 参加海上巡游，下午游览 Port Arthur Historic Site，傍晚返回霍巴特。',
      stops: ['Tasman Island Cruise', 'Eaglehawk Neck', 'Port Arthur', 'Hobart'], picture: images.portArthur,
      gallery: [scene('Tasman Island', images.tasmanIsland), scene('Eaglehawk Neck', images.eaglehawk), scene('Tasman Arch', images.tasmanArch), scene('Port Arthur', images.portArthur)]
    },
    {
      day: 18, date: '10.10 · 周六', title: '霍巴特 → 珀斯', stay: 'Perth Airport / 航班衔接区', pace: '返程航段',
      summary: '按航班时间还车并飞回珀斯。若起飞较晚，可上午短逛 Salamanca Market；不强行给珀斯市区留完整一天。',
      stops: ['Salamanca 可选', 'Hobart 还车', 'HBA → PER', '珀斯机场'], picture: images.salamanca,
      gallery: [scene('Salamanca Market', images.salamanca), scene('Salamanca Place', images.salamancaPlace)]
    },
    {
      day: 19, date: '10.11 · 周日', title: '珀斯 → 杭州', stay: '旅程结束', pace: '回家',
      summary: '从机场住宿直接衔接国际航班。预留足够的退税、行李托运和出境时间，结束西澳与塔州的完整旅程。',
      stops: ['退房', '珀斯机场', '国际航班', '杭州'], picture: images.perthDeparture,
      gallery: [scene('珀斯机场', images.perthDeparture)]
    }
  ]
};

const droneSources = {
  wa: [
    ['CASA 飞行规则', 'https://www.casa.gov.au/knowyourdrone/drone-rules'],
    ['CASA 安全地图', 'https://www.casa.gov.au/knowyourdrone/drone-safety-apps'],
    ['WA 公园规则', 'https://exploreparks.dbca.wa.gov.au/drones-parks']
  ],
  rottnest: [
    ['CASA 安全地图', 'https://www.casa.gov.au/knowyourdrone/drone-safety-apps'],
    ['Rottnest 官方规定', 'https://www.rottnestisland.com/visit/guides-tips/practical-tips']
  ],
  tas: [
    ['CASA 安全地图', 'https://www.casa.gov.au/knowyourdrone/drone-safety-apps'],
    ['塔州保护区规定', 'https://parks.tas.gov.au/explore-our-parks/know-before-you-go/drones-in-parks']
  ]
};

const dailyGuides = {
  1: {
    food: [eat('晚餐 · 机场东侧', 'The Cray · Belmont', '海鲜与烤物，离 Ascot / Belmont 住宿区近；晚到先确认厨房截单时间。', 'The Cray Seafood & Grill Restaurant Belmont WA')],
    drone: { level: 'avoid', label: '不建议起飞', place: '珀斯机场与市区', shot: '机场受控空域、城市道路和滨水区人流叠加；抵达日直接收机。', scope: 'wa' }
  },
  2: {
    food: [
      eat('早餐 · York', 'Jules Shoppe', '小镇咖啡与轻食，适合快速停留。', 'Jules Shoppe York WA'),
      eat('午餐 · Hyden', 'Bush Bakehouse Cafe', 'Wave Rock 前后补给，长途日优先效率。', 'Bush Bakehouse Cafe Hyden WA'),
      eat('晚餐 · Esperance', 'Fish Face', '本地海鱼与每日海鲜，抵达较晚可考虑外带。', 'Fish Face Esperance WA')
    ],
    drone: { level: 'conditional', label: '效果强 · 先查空域', place: 'Wave Rock / York 郊外', shot: 'Wave Rock 斜向拉升能呈现完整弧线；Hyden 附近有机场，必须现场查 CASA 安全地图并征得场地方同意。', scope: 'wa' }
  },
  3: {
    food: [
      eat('早午餐 · 海湾边', 'Taylor St Quarters', '海景、咖啡与季节菜单，适合慢一点的海岸日。', 'Taylor St Quarters Esperance WA'),
      eat('晚餐 · 镇中心', 'Fish Face', '以当日渔获为主，座位不多，建议提前订。', 'Fish Face Esperance WA')
    ],
    drone: { level: 'best', label: '重点航拍', place: 'West Beach / Blue Haven', shot: '浅滩、礁石和蓝色渐层非常适合俯拍；选清晨或傍晚的空旷海滩，绝不越过游客、道路和车辆。', scope: 'wa' }
  },
  4: {
    food: [
      eat('午餐 · 自带', 'Lucky Bay 野餐', '国家公园内选择少，前一晚准备水、三明治和热饮。', 'Lucky Bay Cape Le Grand National Park'),
      eat('晚餐 · Esperance', 'Lucky Bay Brewing', '本地谷物精酿与柴火披萨，结束海岸日很合适。', 'Lucky Bay Brewing Esperance WA')
    ],
    drone: { level: 'conditional', label: '绝佳画面 · 谨慎飞', place: 'Lucky Bay / Hellfire Bay', shot: '白沙与蓝绿色海水的顶视效果最强。西澳公园休闲飞行通常无需预批，但应事先联系 DBCA 当地区域、避开游客和野生动物。', scope: 'wa' }
  },
  5: {
    food: [
      eat('午餐 · Ravensthorpe', 'Palace Hotel', '长途转场中的热食与休息点，出发前复核周日厨房时间。', 'Palace Hotel Ravensthorpe WA'),
      eat('晚餐 · Albany', 'Garrison Restaurant', '位于 National Anzac Centre 一带，景观与本地食材兼顾；周日也较适合作为正式晚餐。', 'Garrison Restaurant Albany WA')
    ],
    drone: { level: 'conditional', label: '只在空旷时考虑', place: 'Middleton Beach 外缘', shot: 'King George Sound 的海岸弧线适合低角度横移；海滩有人或风大就放弃，港口与城区不要飞。', scope: 'wa' }
  },
  6: {
    food: [
      eat('早午餐 · Denmark', 'Mrs Jones Cafe', '7:00 起供应早餐，周一可用，适合 Greens Pool 前补给。', 'Mrs Jones Cafe Denmark WA'),
      eat('晚餐 · Pemberton', 'Forest Lodge Resort Restaurant', '周一晚餐选择有限，这家通常每日营业；务必提前订位。', 'Forest Lodge Resort Restaurant Pemberton WA')
    ],
    drone: { level: 'conditional', label: '构图漂亮 · 人少才飞', place: 'Greens Pool / Elephant Rocks', shot: '花岗岩与天然泳池的俯视构图很出片；属于 WA 保护地体系，先联系 DBCA，树顶步道与巨树森林不建议飞。', scope: 'wa' }
  },
  7: {
    food: [
      eat('午餐 · Augusta', 'The Colourpatch', '海角附近的河口景观餐厅，适合灯塔之后休息。', 'The Colourpatch Augusta WA'),
      eat('晚餐 · Margaret River', "Miki's Open Kitchen", '日式技法结合西澳食材，周二营业但席位少，需要预订。', "Miki's Open Kitchen Margaret River WA"),
      eat('备选 · Yallingup', 'Lagoon Yallingup', '靠近当晚住宿，海鲜与日落景观兼得。', 'Lagoon Yallingup WA')
    ],
    drone: { level: 'conditional', label: '日落航拍候选', place: 'Sugarloaf Rock / 酒庄', shot: 'Sugarloaf Rock 适合侧逆光揭示海岸线；酒庄航拍需业主许可。Hamelin Bay 禁止追拍或靠近魟鱼等野生动物。', scope: 'wa' }
  },
  8: {
    food: [
      eat('午餐 · Busselton', 'Shelter Brewing Co.', '就在栈桥一带，精酿、披萨和海景，停车后步行可达。', 'Shelter Brewing Co Busselton WA'),
      eat('晚餐 · Fremantle', 'Bread in Common', '仓库空间与炭火分享菜，适合作为南线收尾餐。', 'Bread in Common Fremantle WA')
    ],
    drone: { level: 'avoid', label: '不建议起飞', place: 'Busselton / Rockingham / Fremantle', shot: '栈桥、港口、热门海滩与城区人员密集，附近亦有机场及直升机活动；这天以地面拍摄为主。', scope: 'wa' }
  },
  9: {
    food: [
      eat('午餐 · Cervantes', 'Lobster Shack', '西澳龙虾与海边简餐，安排在 Pinnacles 前后。', 'Lobster Shack Cervantes WA'),
      eat('晚餐 · Geraldton', 'Salt Dish', '小体量本地餐厅，适合作为北上日正式晚餐，建议预订。', 'Salt Dish Geraldton WA')
    ],
    drone: { level: 'best', label: '重点航拍', place: 'Lancelin Dunes / Pinnacles', shot: '沙丘适合低侧光下的纹理与跟车远景；Pinnacles 适合长阴影俯拍。避开车辆游客，并提前联系 DBCA 确认公园作业。', scope: 'wa' }
  },
  10: {
    food: [
      eat('早餐 · Geraldton', 'Quiet Life Specialty Coffee', '出发前咖啡与早餐，适合长途折返日。', 'Quiet Life Specialty Coffee Geraldton WA'),
      eat('晚餐 · Fremantle', 'Gage Roads Freo', '港边大空间、精酿与轻松餐食，抵达时间弹性较大。', 'Gage Roads Freo Fremantle WA')
    ],
    drone: { level: 'best', label: '全程最佳航拍点', place: 'Hutt Lagoon', shot: '粉色盐湖的色块、盐田线条与海岸对比最适合垂直俯拍。只从合法公共位置起降，不进私有地；起飞前查风速、空域和临时限制。', scope: 'wa' }
  },
  11: {
    food: [
      eat('午餐 · Thomson Bay', 'Isola Bar e Cibo', '海湾边意式海鲜，适合坐下来吃一顿，建议预订。', 'Isola Bar e Cibo Rottnest Island'),
      eat('备选 · Samphire', 'Lontara', '东南亚风味与岛上食材，靠近主要码头区。', 'Lontara Rottnest Island')
    ],
    drone: { level: 'avoid', label: '明确禁飞', place: 'Wadjemup / Rottnest Island', shot: '岛上目前不允许游客进行休闲无人机飞行。不要携机起飞，改用自行车沿线和观景台拍摄。', scope: 'rottnest' }
  },
  12: {
    food: [
      eat('晚餐 · Hobart CBD', 'Bar Wa Izakaya', '日式居酒屋与塔州食材，全天供餐到较晚，适合航班抵达日。', 'Bar Wa Izakaya Hobart'),
      eat('升级选项 · 码头', 'Mures Upper Deck', '维多利亚码头景观与塔州海鲜，10月周日晚餐营业，建议预订。', 'Mures Upper Deck Hobart')
    ],
    drone: { level: 'avoid', label: '不建议／公园禁飞', place: 'Hobart / kunanyi', shot: '霍巴特靠近受控机场且城区人口密集；Wellington Park 无许可禁止任何尺寸无人机起降。', scope: 'tas' }
  },
  13: {
    food: [
      eat('午餐 · Queenstown', 'Empire Hotel', '每天供应午餐，历史建筑本身也值得短停。', 'Empire Hotel Queenstown Tasmania'),
      eat('补给 · Cradle Mountain', 'Cradle Mountain Cafe', '以咖啡、热食和补给为主，不占用太多观景时间。', 'Cradle Mountain Cafe Tasmania'),
      eat('晚餐 · Stanley', 'Hursey Seafoods', '自家船队海鲜与龙虾，抵达 Stanley 后最有地方特色的一餐。', 'Hursey Seafoods Stanley Tasmania')
    ],
    drone: { level: 'avoid', label: '保护区禁飞', place: 'Cradle Mountain / The Nut', shot: '两处航拍潜力都很强，但属于塔州公园或保留地体系，游客休闲飞行不允许；Queenstown 也需先核对具体土地边界。', scope: 'tas' }
  },
  14: {
    food: [
      eat('早午餐 · Devonport', 'Harbourmaster Cafe', '周二营业，位于 Mersey 河畔；与 Launceston 咖啡站二选一，避免拖慢长途日。', 'Harbourmaster Cafe Devonport Tasmania'),
      eat('咖啡外带 · Launceston', 'Bread + Butter', '酥点、酸种与咖啡，周二营业至下午；若已在 Devonport 正式吃饭则只快速打包。', 'Bread and Butter Launceston Tasmania'),
      eat('晚餐 · St Helens', 'Bay Bar & Bistro', '周二有晚餐，是长途抵达后相对稳妥的选择。', 'Bay Bar and Bistro St Helens Tasmania')
    ],
    drone: { level: 'avoid', label: '保护区禁飞', place: 'Stanley / Bay of Fires', shot: '海岸纹理确实适合航拍，但 The Nut 与 Bay of Fires 多处为 PWS 管理的保留地；游客无人机不允许使用。', scope: 'tas' }
  },
  15: {
    food: [
      eat('备选 · Bicheno', 'Lobster Shack', '海港边龙虾卷与本地海鲜，11:00 后营业；与 Marine Farm 二选一。', 'Lobster Shack Tasmania Bicheno'),
      eat('午餐 · Coles Bay', 'Freycinet Marine Farm', '生蚝、青口、扇贝和龙虾，顺路且不用预订，作为当天主午餐更省时间。', 'Freycinet Marine Farm Coles Bay Tasmania'),
      eat('茶歇 · Ross', 'Ross Village Bakery', '经典乡村烘焙；若抵达太晚则不要为它赶路。', 'Ross Village Bakery Tasmania')
    ],
    drone: { level: 'avoid', label: '国家公园禁飞', place: 'Freycinet / Wineglass Bay', shot: 'Wineglass Bay 是理想航拍构图，但 Freycinet National Park 明确禁止游客使用无人机；用 Cape Tourville 和观景台替代。', scope: 'tas' }
  },
  16: {
    food: [
      eat('第一站 · Great Bay', 'Get Shucked', '现开生蚝，适合下船后先吃一轮。', 'Get Shucked Bruny Island'),
      eat('午餐 · Great Bay', 'Bruny Island Cheese & Beer Co.', '奶酪、柴火面包与本地啤酒，可与生蚝连成一条美食线。', 'Bruny Island Cheese and Beer Co'),
      eat('晚午餐 · Alonnah', 'Hotel Bruny', '海鲜与酒馆菜，南岛返程前的完整正餐。', 'Hotel Bruny Tasmania')
    ],
    drone: { level: 'avoid', label: '不建议携机', place: 'The Neck / Cape Bruny', shot: '主要景点位于国家公园或保留地，塔州游客无人机禁飞；岛上私有地即使获业主许可，也必须再核对空域和保护区边界。', scope: 'tas' }
  },
  17: {
    food: [
      eat('午餐 · Port Arthur', '1830 Restaurant & Bar', '遗址景观与塔州食材，当前午餐时段为主，最好提前订位。', '1830 Restaurant and Bar Port Arthur Tasmania'),
      eat('茶歇 · Long Bay', 'Port Arthur Lavender Cafe', '海景、简餐与薰衣草甜点，巡游前后都容易衔接。', 'Port Arthur Lavender Cafe Tasmania')
    ],
    drone: { level: 'avoid', label: '国家公园与遗址禁飞', place: 'Tasman Island / Port Arthur', shot: '海崖画面应交给持证巡游运营方；Tasman National Park 禁止游客飞行，Port Arthur 也有人群与遗产保护限制。', scope: 'tas' }
  },
  18: {
    food: [
      eat('早餐 · Salamanca', 'Salamanca Market 摊位', '周六上午最顺路，适合边逛边吃本地烘焙与农产品。', 'Salamanca Market Hobart'),
      eat('咖啡 · Hobart CBD', 'Daci & Daci Bakers', '欧式烘焙与早午餐，赶航班时也便于打包。', 'Daci and Daci Bakers Hobart')
    ],
    drone: { level: 'avoid', label: '城市与机场区域', place: 'Salamanca / Hobart Airport', shot: '市集人群密集，随后又进入机场周边；整天都不安排无人机起飞。', scope: 'tas' }
  },
  19: {
    food: [eat('出发前 · PER T1', '珀斯机场航站楼餐饮', '过安检后按登机口选择，优先留足退税、托运和出境时间。', 'Perth Airport Terminal 1 restaurants')],
    drone: { level: 'avoid', label: '禁止起飞', place: '珀斯机场', shot: '受控机场范围内不要操作无人机；锂电池按航空公司要求放入随身行李并保护触点。', scope: 'wa' }
  }
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

function renderJourney(containerId, days) {
  const container = document.getElementById(containerId);
  container.innerHTML = `
    <nav class="day-rail" aria-label="选择日期">
      ${days.map((day, index) => `
        <button class="day-selector${index === 0 ? ' active' : ''}" type="button" data-day-index="${index}" aria-current="${index === 0 ? 'step' : 'false'}">
          <span>${String(day.day).padStart(2, '0')}</span>
          <span><small>${day.date.split(' · ')[0]}</small><strong>${day.title}</strong></span>
        </button>`).join('')}
    </nav>
    <div class="journey-story" aria-live="polite"></div>`;

  const story = container.querySelector('.journey-story');
  const selectors = [...container.querySelectorAll('.day-selector')];

  function showDay(index) {
    const day = days[index];
    const guide = dailyGuides[day.day];
    const droneLinks = droneSources[guide.drone.scope];
    const dayScenes = day.gallery?.length ? day.gallery : [scene(day.picture.alt, day.picture)];
    const leadScene = dayScenes[0];
    selectors.forEach((button, buttonIndex) => {
      const active = buttonIndex === index;
      button.classList.toggle('active', active);
      button.setAttribute('aria-current', active ? 'step' : 'false');
    });

    story.innerHTML = `
      <article class="journey-stage">
        <figure class="journey-visual">
          <div class="journey-photo-frame">
            <img class="journey-main-image" src="${leadScene.picture.src}" alt="${leadScene.picture.alt}" decoding="async">
            <a class="photo-caption" href="${leadScene.picture.source}" target="_blank" rel="noopener"><strong>${leadScene.picture.alt}</strong><span>Wikimedia Commons ↗</span></a>
          </div>
          <div class="scene-strip" role="group" aria-label="${day.title} 沿途景点照片">
            ${dayScenes.map((item, sceneIndex) => `
              <button class="scene-button${sceneIndex === 0 ? ' active' : ''}" type="button" data-scene-index="${sceneIndex}" aria-pressed="${sceneIndex === 0}">
                <img src="${item.picture.thumb}" alt="" loading="lazy" decoding="async">
                <span>${item.label}</span>
              </button>`).join('')}
          </div>
        </figure>
        <div class="journey-copy">
          <div class="journey-kicker"><span>DAY ${String(day.day).padStart(2, '0')} · ${day.date}</span><span>${day.pace}</span></div>
          <h2>${day.title}</h2>
          <div class="day-mode-tabs" role="tablist" aria-label="DAY ${day.day} 查看内容">
            <button class="active" id="day-${day.day}-route-tab" type="button" role="tab" aria-selected="true" aria-controls="day-${day.day}-route" data-day-mode="route">路线</button>
            <button id="day-${day.day}-food-tab" type="button" role="tab" aria-selected="false" aria-controls="day-${day.day}-food" tabindex="-1" data-day-mode="food">沿路餐厅 <span>${guide.food.length}</span></button>
            <button id="day-${day.day}-drone-tab" type="button" role="tab" aria-selected="false" aria-controls="day-${day.day}-drone" tabindex="-1" data-day-mode="drone">无人机</button>
          </div>
          <section class="day-mode-panel active" id="day-${day.day}-route" role="tabpanel" aria-labelledby="day-${day.day}-route-tab" data-day-panel="route">
            <p class="journey-summary">${day.summary}</p>
            <ol class="stop-route">${day.stops.map(stop => `<li>${stop}</li>`).join('')}</ol>
            <div class="journey-stay"><span><small>TONIGHT</small><strong>${day.stay}</strong></span><em>${day.pace}</em></div>
          </section>
          <section class="day-mode-panel" id="day-${day.day}-food" role="tabpanel" aria-labelledby="day-${day.day}-food-tab" data-day-panel="food" hidden>
            <p class="mode-intro">按当天行驶顺序排列；点名称可直接打开地图。出发前再次确认营业时间并预订热门餐厅。</p>
            <ul class="food-list">${guide.food.map(item => `
              <li><span>${item.meal}</span><a href="${item.url}" target="_blank" rel="noopener">${item.name} ↗</a><p>${item.note}</p></li>`).join('')}
            </ul>
          </section>
          <section class="day-mode-panel" id="day-${day.day}-drone" role="tabpanel" aria-labelledby="day-${day.day}-drone-tab" data-day-panel="drone" hidden>
            <div class="drone-verdict ${guide.drone.level}"><span>${guide.drone.label}</span><strong>${guide.drone.place}</strong><p>${guide.drone.shot}</p></div>
            <div class="drone-source-links">${droneLinks.map(source => `<a href="${source[1]}" target="_blank" rel="noopener">${source[0]} ↗</a>`).join('')}</div>
            <p class="drone-baseline">每次起飞前都重新检查：限高 120m、距他人至少 30m、不飞越人群、保持目视、仅白天飞行，并遵守现场标牌与临时禁飞。</p>
          </section>
          <div class="story-controls">
            <button type="button" data-story-prev ${index === 0 ? 'disabled' : ''}>← 上一天</button>
            <button type="button" data-story-next ${index === days.length - 1 ? 'disabled' : ''}>下一天 →</button>
          </div>
        </div>
      </article>`;

    const mainImage = story.querySelector('.journey-main-image');
    const caption = story.querySelector('.photo-caption');
    const sceneButtons = [...story.querySelectorAll('.scene-button')];
    const modeButtons = [...story.querySelectorAll('[data-day-mode]')];
    const modePanels = [...story.querySelectorAll('[data-day-panel]')];
    sceneButtons.forEach((button, sceneIndex) => button.addEventListener('click', () => {
      const selected = dayScenes[sceneIndex];
      mainImage.src = selected.picture.src;
      mainImage.alt = selected.picture.alt;
      caption.href = selected.picture.source;
      caption.querySelector('strong').textContent = selected.picture.alt;
      sceneButtons.forEach((item, itemIndex) => {
        const active = itemIndex === sceneIndex;
        item.classList.toggle('active', active);
        item.setAttribute('aria-pressed', String(active));
      });
    }));

    modeButtons.forEach(button => button.addEventListener('click', () => {
      const selectedMode = button.dataset.dayMode;
      modeButtons.forEach(item => {
        const active = item.dataset.dayMode === selectedMode;
        item.classList.toggle('active', active);
        item.setAttribute('aria-selected', String(active));
        item.tabIndex = active ? 0 : -1;
      });
      modePanels.forEach(panel => {
        const active = panel.dataset.dayPanel === selectedMode;
        panel.hidden = !active;
        panel.classList.toggle('active', active);
      });
    }));
    modeButtons.forEach((button, buttonIndex) => button.addEventListener('keydown', event => {
      if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
      event.preventDefault();
      let next = buttonIndex;
      if (event.key === 'ArrowRight') next = (buttonIndex + 1) % modeButtons.length;
      if (event.key === 'ArrowLeft') next = (buttonIndex - 1 + modeButtons.length) % modeButtons.length;
      if (event.key === 'Home') next = 0;
      if (event.key === 'End') next = modeButtons.length - 1;
      modeButtons[next].focus();
      modeButtons[next].click();
    }));

    selectors[index]?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    story.querySelector('[data-story-prev]')?.addEventListener('click', () => showDay(index - 1));
    story.querySelector('[data-story-next]')?.addEventListener('click', () => showDay(index + 1));
  }

  selectors.forEach((button, index) => {
    button.addEventListener('click', () => showDay(index));
    button.addEventListener('keydown', event => {
      if (!['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(event.key)) return;
      event.preventDefault();
      const forward = event.key === 'ArrowDown' || event.key === 'ArrowRight';
      const next = (index + (forward ? 1 : -1) + days.length) % days.length;
      selectors[next].focus();
      showDay(next);
    });
  });

  showDay(0);
}

renderJourney('southJourney', itinerary.south);
renderJourney('northJourney', itinerary.north);
renderJourney('tasJourney', itinerary.tas);
const allDays = [...itinerary.south, ...itinerary.north, ...itinerary.tas];
document.getElementById('printItinerary').innerHTML = `
  <header><p>AUSTRALIA ROAD TRIP · 2026.09.23—10.11</p><h1>向西，再向南</h1><span>完整19天行程</span></header>
  ${allDays.map(day => `
    <article class="print-day">
      <div><strong>DAY ${String(day.day).padStart(2, '0')}</strong><span>${day.date}</span></div>
      <section><h2>${day.title}</h2><p>${day.summary}</p><small>${day.stops.join(' → ')}</small><span class="print-guide"><small>餐饮：${dailyGuides[day.day].food.map(item => item.name).join(' / ')}</small><small>无人机：${dailyGuides[day.day].drone.label} · ${dailyGuides[day.day].drone.place}</small></span></section>
      <aside><span>住宿</span><strong>${day.stay}</strong></aside>
    </article>`).join('')}`;
document.getElementById('stayRows').innerHTML = stays.map(row =>
  `<tr><td>${row[0]}</td><td>${row[1]}</td><td>${row[2]}</td></tr>`
).join('');

const tabs = [...document.querySelectorAll('[role="tab"]')];
const panels = [...document.querySelectorAll('[role="tabpanel"]')];
const validTabs = new Set(tabs.map(tab => tab.dataset.tab));
let routeMaps = [];
let routeMapObservers = [];

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
  if (target === 'home') requestAnimationFrame(() => {
    if (!routeMaps.length) initRouteMaps();
    else routeMaps.forEach(map => map.invalidateSize({ animate: false, pan: true }));
  });
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

function initRouteMaps() {
  if (!window.L || !document.getElementById('waRouteMap') || !document.getElementById('tasRouteMap')) return;

  const createMap = id => {
    const container = document.getElementById(id);
    const map = L.map(container, { scrollWheelZoom: false, zoomControl: true });
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    if ('ResizeObserver' in window) {
      const observer = new ResizeObserver(entries => {
        const { width, height } = entries[0].contentRect;
        if (!width || !height) return;
        requestAnimationFrame(() => map.invalidateSize({ animate: false, pan: true }));
      });
      observer.observe(container);
      routeMapObservers.push(observer);
    }
    routeMaps.push(map);
    return map;
  };
  const addPlaces = (map, places) => places.forEach(([label, coords, direction = 'top']) => {
    const icon = L.divIcon({ className: 'route-pin', html: '', iconSize: [13, 13] });
    const offsets = { top: [0, -8], bottom: [0, 8], left: [-8, 0], right: [8, 0] };
    L.marker(coords, { icon }).addTo(map).bindTooltip(label, {
      permanent: true,
      direction,
      offset: offsets[direction],
      className: 'map-place-label'
    });
  });

  const perth = [-31.9523, 115.8613];
  const fremantle = [-32.0569, 115.7439];
  const waSouthRoute = [
    perth, [-31.8896, 116.7680], [-32.443, 118.897], [-33.8608, 121.8896],
    [-33.991, 122.232], [-35.0275, 117.884], [-34.9607, 117.353], [-34.974, 116.897],
    [-34.444, 116.034], [-34.3749, 115.1365], [-33.9535, 115.073], [-33.646, 115.033],
    [-33.644, 115.344], [-32.2768, 115.729], perth
  ];
  const waNorthRoute = [
    perth, [-31.022, 115.333], [-30.604, 115.159], [-30.305, 115.038],
    [-28.7774, 114.614], [-28.158, 114.242], [-28.7774, 114.614], [-30.305, 115.038],
    perth, fremantle
  ];
  const waIslandRoute = [fremantle, [-32.006, 115.512], fremantle, perth];
  const waMap = createMap('waRouteMap');
  L.polyline(waSouthRoute, { color: '#d47745', weight: 4, opacity: .92 }).addTo(waMap);
  L.polyline(waNorthRoute, { color: '#b58a32', weight: 4, opacity: .9 }).addTo(waMap);
  L.polyline(waIslandRoute, { color: '#496c93', weight: 3, opacity: .9, dashArray: '6 7' }).addTo(waMap);
  addPlaces(waMap, [
    ['珀斯', perth, 'right'], ['粉红湖', [-28.158, 114.242], 'right'],
    ['Esperance', [-33.8608, 121.8896], 'left'], ['Albany', [-35.0275, 117.884], 'bottom'],
    ['Pemberton', [-34.444, 116.034], 'left'], ['罗特尼斯岛', [-32.006, 115.512], 'left']
  ]);
  waMap.fitBounds(L.latLngBounds([...waSouthRoute, ...waNorthRoute, ...waIslandRoute]), { padding: [30, 30] });

  const hobart = [-42.8821, 147.3272];
  const tasRoute = [
    hobart, [-42.895, 147.236], [-42.0805, 145.556], [-41.684, 145.951], [-40.760, 145.295],
    [-41.178, 146.351], [-41.434, 147.144], [-41.251, 148.307], [-41.321, 148.249],
    [-42.124, 148.289], [-42.030, 147.492], hobart, [-43.273, 147.349], hobart,
    [-43.148, 147.850], hobart
  ];
  const tasMap = createMap('tasRouteMap');
  L.polyline(tasRoute, { color: '#247a78', weight: 4, opacity: .92 }).addTo(tasMap);
  addPlaces(tasMap, [
    ['霍巴特', hobart, 'left'], ['摇篮山', [-41.684, 145.951], 'right'],
    ['Stanley', [-40.760, 145.295], 'right'], ['St Helens', [-41.321, 148.249], 'left'],
    ['Freycinet', [-42.124, 148.289], 'left'], ['布鲁尼岛', [-43.273, 147.349], 'left'],
    ['亚瑟港', [-43.148, 147.850], 'right']
  ]);
  tasMap.fitBounds(L.latLngBounds(tasRoute), { padding: [30, 30] });
}

const initialTab = location.hash.slice(1);
activateTab(validTabs.has(initialTab) ? initialTab : 'home', false);
if (initialTab && !validTabs.has(initialTab)) history.replaceState(null, '', '#home');

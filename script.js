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
  elevenMile: photo('Eleven Mile Lagoon, Esperance, January 2024 03.jpg', 'Esperance Eleven Mile Lagoon 十一英里泻湖'),
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
  deloraine: photo('Meander River at Deloraine - panoramio.jpg', 'Deloraine 的 Meander River 河畔'),
  sheffield: photo('Murals in Sheffield - 2013.04 - panoramio.jpg', 'Sheffield 壁画小镇'),
  cradle: photo('Cradle Mountain and Dove Lake, Tas.jpg', '摇篮山与 Dove Lake'),
  stanleyArrival: photo('Stanley and The Nut (6280265492).jpg', 'Stanley 田野与 The Nut'),
  stanley: photo('Highfield, Stanley, Tasmania (31351168474).jpg', 'Stanley Highfield 与 The Nut'),
  burnie: photo('Boardwalk-Burnie-20120808-004.jpg', 'Burnie 海滨木栈道'),
  devonport: photo('Devonport, TAS.JPG', 'Devonport 港口航拍'),
  cataract: photo('Cataract Gorge, Launceston in spring.jpg', 'Launceston Cataract Gorge 春日峡谷'),
  ansonsBay: photo('Ansons Bay Aerial.jpg', 'Ansons Bay 海湾与湿地'),
  bayOfFires: photo('Bay of Fires-07.jpg', 'Bay of Fires 橙红巨石海岸'),
  bayOfFiresMorning: photo('Bay of Fires TAS.jpg', 'Bay of Fires 清晨海岸'),
  bicheno: photo('Bicheno coastline, Tasmania (46113230991).jpg', 'Bicheno 东海岸'),
  capeTourville: photo('Cape Tourville Lighthouse.jpg', 'Cape Tourville 灯塔海岸'),
  wineglass: photo('Wineglass Bay from Lookout.jpg', 'Freycinet 国家公园 Wineglass Bay'),
  honeymoon: photo('Honeymoon Bay Sunset.jpg', 'Freycinet Honeymoon Bay 日落'),
  swansea: photo('Swansea Beach, Tasmania - panoramio.jpg', 'Swansea 海滩'),
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
      day: 4, date: '09.26 · 周六', title: 'Cape Le Grand → Ravensthorpe', stay: 'Ravensthorpe · 镇中心', pace: '海岸 + 转场',
      summary: '清晨去 Cape Le Grand 与 Lucky Bay，不安排长徒步；午后折返 Esperance，经 Eleven Mile Lagoon 停留后继续向西约两小时，住 Ravensthorpe。不要为日落拖到夜间赶路。',
      stops: ['Cape Le Grand', 'Lucky Bay', 'Hellfire Bay 可选', 'Eleven Mile Lagoon', 'Ravensthorpe'], picture: images.lucky,
      gallery: [scene('Cape Le Grand', images.capeLeGrand), scene('Lucky Bay', images.lucky), scene('Hellfire Bay', images.hellfire), scene('Eleven Mile Lagoon', images.elevenMile)]
    },
    {
      day: 5, date: '09.27 · 周日', title: 'Ravensthorpe → Albany / Denmark 东侧', stay: 'Albany / Denmark 东侧', pace: '转场日',
      summary: '从 Ravensthorpe 沿 South Coast Highway 西行，经 Jerramungup 抵达 Albany。若住宿订在 Denmark 东侧，再向西推进约 40—50 分钟；若住 Albany，则傍晚看 Middleton Beach。',
      stops: ['Ravensthorpe', 'Jerramungup', 'Albany', 'Middleton Beach / Denmark 东侧'], picture: images.albany,
      gallery: [scene('Albany', images.albany), scene('Middleton Beach', images.middleton)]
    },
    {
      day: 6, date: '09.28 · 周一', title: 'Albany / Denmark → Augusta', stay: 'Augusta · 镇中心 / 河口', pace: '高强度景观日',
      summary: '早出发，经 Denmark、Greens Pool 与 Elephant Rocks 进入巨树森林，赶在 Tree Top Walk 最晚入场前完成游览，再经 Pemberton 一带继续到 Augusta。当天景点多，需严格控制停留时间。',
      stops: ['Denmark', 'Greens Pool', 'Elephant Rocks', 'Valley of the Giants', 'Pemberton 途经', 'Augusta'], picture: images.giants,
      gallery: [scene('Greens Pool', images.greensPool), scene('Elephant Rocks', images.elephantRocks), scene('Valley of the Giants', images.giants), scene('Pemberton Forest', images.pemberton)]
    },
    {
      day: 7, date: '09.29 · 周二', title: 'Augusta → Busselton', stay: 'Busselton · Jetty 附近', pace: '海角与酒乡',
      summary: '从 Cape Leeuwin 开始，依次串联 Hamelin Bay、Boranup Forest 与 Margaret River；时间充足再去 Sugarloaf Rock，晚上住 Busselton Jetty 周边。',
      stops: ['Cape Leeuwin', 'Hamelin Bay', 'Boranup Forest', 'Margaret River', 'Sugarloaf Rock 可选', 'Busselton'], picture: images.leeuwin,
      gallery: [scene('Cape Leeuwin', images.leeuwin), scene('Hamelin Bay', images.hamelin), scene('Boranup Forest', images.boranup), scene('Margaret River', images.margaretVineyard), scene('Sugarloaf Rock', images.sugarloaf)]
    },
    {
      day: 8, date: '09.30 · 周三', title: 'Busselton → Fremantle', stay: 'Fremantle · 港口 / 轮渡码头', pace: '轻松北返',
      summary: '上午慢逛 Busselton Jetty，之后北返；Rockingham 只作天气好时的可选停留。抵达 Fremantle 后归还南线租车、确认次日船班与报到位置，建议同一酒店连住两晚。',
      stops: ['Busselton Jetty', 'Rockingham 可选', 'Fremantle', '归还南线租车', '轮渡码头踩点'], picture: images.busselton,
      gallery: [scene('Busselton Jetty', images.busselton), scene('Rockingham', images.rockingham), scene('Fremantle Harbour', images.fremantleHarbour)]
    }
  ],
  north: [
    {
      day: 9, date: '10.01 · 周四', title: '罗特尼斯岛一日', stay: 'Fremantle · 原住宿续住', pace: '离岛日',
      summary: '从 Fremantle 乘早班船上岛，选择自行车或环岛巴士看海湾和 Quokka。傍晚返航后回原酒店，不搬行李，次日再开车北上。',
      stops: ['Fremantle Ferry', 'The Basin', 'Wadjemup Lighthouse', 'Quokka'], picture: images.quokka,
      gallery: [scene('The Basin', images.basin), scene('Wadjemup Lighthouse', images.wadjemup), scene('Quokka', images.quokka)]
    },
    {
      day: 10, date: '10.02 · 周五', title: 'Fremantle → Geraldton', stay: 'Geraldton · Foreshore', pace: '北上日',
      summary: '清晨领取北线租车后沿印度洋公路北上，在 Lancelin 沙丘短停，把下午重点留给 Pinnacles；经 Jurien Bay 后抵达 Geraldton。',
      stops: ['领取北线租车', 'Lancelin', 'Pinnacles', 'Jurien Bay', 'Geraldton'], picture: images.pinnacles,
      gallery: [scene('Lancelin', images.lancelin), scene('Pinnacles', images.pinnacles), scene('Jurien Bay', images.jurien), scene('Geraldton', images.geraldton)]
    },
    {
      day: 11, date: '10.03 · 周六', title: 'Hutt Lagoon → Perth Airport', stay: 'Perth Airport 周边', pace: '长途折返',
      summary: '清晨从 Geraldton 北上 Hutt Lagoon，完成北线最北点后立即折返。当天车程长，每两小时停车休息，抵达机场后归还北线租车并住机场周边。',
      stops: ['Hutt Lagoon', 'Port Gregory', 'Geraldton 补给', 'Perth Airport', '归还北线租车'], picture: images.hutt,
      gallery: [scene('Hutt Lagoon', images.hutt)]
    }
  ],
  tas: [
    {
      day: 12, date: '10.04 · 周日', title: '珀斯 → 霍巴特', stay: 'Hobart · CBD / Battery Point', pace: '飞行日',
      summary: 'VA594 约 17:00 抵达霍巴特，取车入住后只安排 Battery Point 与 Salamanca Place 晚餐，不再塞入惠灵顿山。',
      stops: ['PER → HBA', '17:00 抵达', '霍巴特取车', 'Battery Point', 'Salamanca 晚餐'], picture: images.hobartWaterfront,
      gallery: [scene('Hobart Waterfront', images.hobartWaterfront), scene('Battery Point', images.batteryPoint), scene('Salamanca Place', images.salamancaPlace)]
    },
    {
      day: 13, date: '10.05 · 周一', title: '霍巴特 → 摇篮山 → Stanley', stay: 'Stanley · The Nut 附近', pace: '高强度长途',
      summary: '清晨沿北线经 Deloraine、Sheffield 前往摇篮山；只坐接驳车到 Dove Lake 观景，不安排徒步。下午继续赶往 Stanley，在 The Nut 与海湾一带看日落。',
      stops: ['Deloraine', 'Sheffield', 'Cradle Mountain', 'Dove Lake', 'Stanley / The Nut 日落'], picture: images.cradle,
      gallery: [scene('Deloraine', images.deloraine), scene('Sheffield 壁画小镇', images.sheffield), scene('Cradle Mountain & Dove Lake', images.cradle), scene('Stanley & The Nut', images.stanleyArrival)]
    },
    {
      day: 14, date: '10.06 · 周二', title: 'Stanley → St Helens', stay: 'St Helens · 镇中心', pace: '北海岸长途',
      summary: '上午逛 Stanley，随后沿北海岸经过 Burnie、Devonport，在 Launceston 的 Cataract Gorge 短停，再向东北绕至 Ansons Bay，晚上回到 St Helens。当天距离很长，各城只作短停。',
      stops: ['Stanley', 'Burnie', 'Devonport', 'Cataract Gorge', 'Ansons Bay', 'St Helens'], picture: images.stanley,
      gallery: [scene('Stanley', images.stanley), scene('Burnie', images.burnie), scene('Devonport', images.devonport), scene('Cataract Gorge', images.cataract), scene('Ansons Bay', images.ansonsBay)]
    },
    {
      day: 15, date: '10.07 · 周三', title: '火焰湾 → 霍巴特', stay: 'Hobart · Sandy Bay / Battery Point', pace: '东海岸长途',
      summary: '从 St Helens 先看火焰湾晨景，再经 Bicheno 前往 Freycinet，步行至 Wineglass Bay Lookout。之后沿东海岸经过 Swansea，并在 Ross 小镇短停，傍晚回到霍巴特。',
      stops: ['Bay of Fires 晨景', 'Bicheno', 'Wineglass Bay Lookout', 'Swansea', 'Ross', 'Hobart'], picture: images.wineglass,
      gallery: [scene('Bay of Fires 晨景', images.bayOfFiresMorning), scene('Bicheno', images.bicheno), scene('Wineglass Bay Lookout', images.wineglass), scene('Swansea', images.swansea), scene('Ross', images.ross)]
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
      summary: '上午逛周六 Salamanca Market，随后回酒店取行李、还车并前往机场，搭乘 15:15 航班经墨尔本返回珀斯。',
      stops: ['Salamanca Market', 'Hobart 还车', '15:15 HBA → MEL → PER', '珀斯机场'], picture: images.salamanca,
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
      eat('晚餐 · Ravensthorpe', 'Palace Hotel', '抵达后吃热食；周六通常也有午晚餐，出发前仍要确认厨房截单时间。', 'Palace Hotel Ravensthorpe WA')
    ],
    drone: { level: 'conditional', label: '绝佳画面 · 谨慎飞', place: 'Lucky Bay / Eleven Mile Lagoon', shot: '白沙、泻湖和蓝绿色海水的顶视效果很强。西澳公园休闲飞行通常无需预批，但应事先联系 DBCA 当地区域、避开游客和野生动物；下午还要赶路，不为航拍压缩安全余量。', scope: 'wa' }
  },
  5: {
    food: [
      eat('午餐 · Jerramungup', 'Jerramungup Roadhouse', '加油、简餐和短休一次完成，减少转场日停留。', 'Jerramungup Roadhouse WA'),
      eat('晚餐 · Albany', 'Garrison Restaurant', '位于 National Anzac Centre 一带，景观与本地食材兼顾；周日也较适合作为正式晚餐。', 'Garrison Restaurant Albany WA')
    ],
    drone: { level: 'conditional', label: '只在空旷时考虑', place: 'Middleton Beach 外缘', shot: 'King George Sound 的海岸弧线适合低角度横移；海滩有人或风大就放弃，港口与城区不要飞。', scope: 'wa' }
  },
  6: {
    food: [
      eat('早午餐 · Denmark', 'Mrs Jones Cafe', '7:00 起供应早餐，周一可用，适合 Greens Pool 前补给。', 'Mrs Jones Cafe Denmark WA'),
      eat('午餐 · 自带', '巨树谷野餐', '当天路长，建议在 Denmark 先买好午餐，游览巨树谷后直接赶往 Augusta。', 'Valley of the Giants Tree Top Walk WA'),
      eat('晚餐 · Augusta', 'Augusta Hotel', '河口边的稳妥晚餐点，周一也供应晚餐；抵达偏晚时先电话确认厨房时间。', 'Augusta Hotel WA')
    ],
    drone: { level: 'conditional', label: '构图漂亮 · 人少才飞', place: 'Greens Pool / Elephant Rocks', shot: '花岗岩与天然泳池的俯视构图很出片；属于 WA 保护地体系，先联系 DBCA，树顶步道与巨树森林不建议飞。', scope: 'wa' }
  },
  7: {
    food: [
      eat('晚午餐 · Margaret River', 'Riversmith', '每日供应早午餐至下午，厨房通常 15:30 截单；适合完成 Hamelin Bay 与 Boranup 后休息，若延误则直接跳过。', 'Riversmith Margaret River WA'),
      eat('晚餐 · Busselton', 'Shelter Brewing Co.', '就在栈桥一带，抵达后步行可达，适合精酿、披萨和轻松收尾。', 'Shelter Brewing Co Busselton WA')
    ],
    drone: { level: 'conditional', label: '日落航拍候选', place: 'Sugarloaf Rock / 酒庄', shot: 'Sugarloaf Rock 适合侧逆光揭示海岸线；酒庄航拍需业主许可。Hamelin Bay 禁止追拍或靠近魟鱼等野生动物。', scope: 'wa' }
  },
  8: {
    food: [
      eat('早午餐 · Busselton', 'The Goose Beach Bar & Kitchen', '就在栈桥海滨，适合慢一点的早餐或早午餐。', 'The Goose Beach Bar and Kitchen Busselton WA'),
      eat('晚餐 · Fremantle', 'Bread in Common', '仓库空间与炭火分享菜，适合作为南线收尾餐。', 'Bread in Common Fremantle WA')
    ],
    drone: { level: 'avoid', label: '不建议起飞', place: 'Busselton / Rockingham / Fremantle', shot: '栈桥、港口、热门海滩与城区人员密集，附近亦有机场及直升机活动；这天以地面拍摄为主。', scope: 'wa' }
  },
  9: {
    food: [
      eat('午餐 · Thomson Bay', 'Isola Bar e Cibo', '海湾边意式海鲜，适合坐下来吃一顿，建议预订。', 'Isola Bar e Cibo Rottnest Island'),
      eat('备选 · Samphire', 'Lontara', '东南亚风味与岛上食材，靠近主要码头区。', 'Lontara Rottnest Island')
    ],
    drone: { level: 'avoid', label: '明确禁飞', place: 'Wadjemup / Rottnest Island', shot: '岛上目前不允许游客进行休闲无人机飞行。不要携机起飞，改用自行车沿线和观景台拍摄。', scope: 'rottnest' }
  },
  10: {
    food: [
      eat('午餐 · Cervantes', 'Lobster Shack', '西澳龙虾与海边简餐，安排在 Pinnacles 前后。', 'Lobster Shack Cervantes WA'),
      eat('晚餐 · Geraldton', 'Salt Dish', '小体量本地餐厅，适合作为北上日正式晚餐，建议预订。', 'Salt Dish Geraldton WA')
    ],
    drone: { level: 'best', label: '重点航拍', place: 'Lancelin Dunes / Pinnacles', shot: '沙丘适合低侧光下的纹理与跟车远景；Pinnacles 适合长阴影俯拍。避开车辆游客，并提前联系 DBCA 确认公园作业。', scope: 'wa' }
  },
  11: {
    food: [
      eat('早餐 · Geraldton', 'Quiet Life Specialty Coffee', '出发前咖啡与早餐，适合粉红湖折返日。', 'Quiet Life Specialty Coffee Geraldton WA'),
      eat('午餐 · 自带', 'Hutt Lagoon 公路野餐', '粉红湖周边餐饮有限，提前准备水和便携午餐，不在私人土地停留。', 'Hutt Lagoon Western Australia'),
      eat('晚餐 · 机场东侧', 'The Cray · Belmont', '抵达机场住宿区后再吃晚餐；周六通常营业，仍建议确认厨房截单时间。', 'The Cray Seafood & Grill Restaurant Belmont WA')
    ],
    drone: { level: 'best', label: '全程最佳航拍点', place: 'Hutt Lagoon', shot: '粉色盐湖的色块、盐田线条与海岸对比最适合垂直俯拍。只从合法公共位置起降，不进私有地；起飞前查风速、空域和临时限制。', scope: 'wa' }
  },
  12: {
    food: [
      eat('晚餐 · Hobart CBD', 'Bar Wa Izakaya', '日式居酒屋与塔州食材，全天供餐到较晚，适合航班抵达日。', 'Bar Wa Izakaya Hobart'),
      eat('升级选项 · 码头', 'Mures Upper Deck', '维多利亚码头景观与塔州海鲜，10月周日晚餐营业，建议预订。', 'Mures Upper Deck Hobart')
    ],
    drone: { level: 'avoid', label: '不建议起飞', place: 'Hobart / Salamanca', shot: '霍巴特靠近受控机场，Battery Point 与 Salamanca 又是人口密集城区；抵达日不安排无人机。', scope: 'tas' }
  },
  13: {
    food: [
      eat('早午餐 · Sheffield', 'The Epicurean Cafe', '周一营业，位于壁画小镇主街；以咖啡、烘焙和轻食快速补给。', 'The Epicurean Cafe Sheffield Tasmania'),
      eat('补给 · Cradle Mountain', 'Cradle Mountain Cafe', '以咖啡、热食和补给为主，不占用太多观景时间。', 'Cradle Mountain Cafe Tasmania'),
      eat('晚餐 · Stanley', 'Hursey Seafoods', '自家船队海鲜与龙虾，抵达 Stanley 后最有地方特色的一餐。', 'Hursey Seafoods Stanley Tasmania')
    ],
    drone: { level: 'avoid', label: '保护区禁飞', place: 'Cradle Mountain / The Nut', shot: '两处航拍潜力都很强，但属于塔州公园或保留地体系，游客休闲飞行不允许；用 Dove Lake 湖畔与 Stanley 海湾地面机位替代。', scope: 'tas' }
  },
  14: {
    food: [
      eat('早午餐 · Devonport', 'Harbourmaster Cafe', '周二营业，位于 Mersey 河畔；与 Launceston 咖啡站二选一，避免拖慢长途日。', 'Harbourmaster Cafe Devonport Tasmania'),
      eat('咖啡外带 · Launceston', 'Bread + Butter', '酥点、酸种与咖啡，周二营业至下午；若已在 Devonport 正式吃饭则只快速打包。', 'Bread and Butter Launceston Tasmania'),
      eat('晚餐 · St Helens', 'Bay Bar & Bistro', '周二有晚餐，是长途抵达后相对稳妥的选择。', 'Bay Bar and Bistro St Helens Tasmania')
    ],
    drone: { level: 'avoid', label: '保护区禁飞', place: 'Stanley / Ansons Bay', shot: '海岸纹理确实适合航拍，但 The Nut 与东北海岸多处为 PWS 管理的保留地；游客无人机不允许使用。', scope: 'tas' }
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

const routePlans = {
  1: {
    distance: '约 15 km', drive: '约 20—30 分钟', depart: '17:10 抵达后', booking: '机场酒店 · 晚到入住',
    timeline: [
      ['17:10', '航班抵达珀斯，办理入境、取行李与生物安全检查'],
      ['18:30', '机场取车；拍摄车况、核对油量和道路救援电话'],
      ['19:15', 'Belmont / Ascot 简单晚餐与超市补给'],
      ['20:30', '入住，设好次日 05:15 闹钟并提前装车']
    ],
    guard: '若入境耗时较长，取消超市停留，直接入住；长途日所需水和早餐可在机场便利店补。'
  },
  2: {
    distance: '约 760 km', drive: '约 8.5—9 小时纯驾驶', depart: '05:45 前', booking: 'Wave Rock 门票 / Esperance 晚入住',
    timeline: [
      ['05:30', '退房装车，确认满油、水和当天离线导航'],
      ['07:10', 'York 早餐与 Town Hall 快速停留，08:00 前离开'],
      ['11:15', '抵达 Hyden；Wave Rock + 午餐控制在 90 分钟内'],
      ['12:45', '离开 Hyden，每约 2 小时停车轮换驾驶'],
      ['17:15—18:00', '抵达 Esperance，先入住再晚餐']
    ],
    guard: '当天最重要的是在天黑前抵达。若 08:00 仍未离开 York，取消 York 游览；若 12:00 后才到 Hyden，Wave Rock 只停 45—60 分钟。'
  },
  3: {
    distance: '约 45—60 km', drive: '约 1.5 小时', depart: '08:30', booking: '热门晚餐建议订位',
    timeline: [
      ['08:30', '镇上早餐后沿 Great Ocean Drive 顺时针出发'],
      ['09:00', 'West Beach，先看风浪再决定下到沙滩'],
      ['10:30', 'Blue Haven 与 Salmon Beach 观景'],
      ['12:30', '回镇上或海边午餐，下午保留弹性'],
      ['14:30', 'Twilight Beach；天气好再补 Eleven Mile 一带'],
      ['17:15', 'Pink Lake Lookout / Rotary Lookout 后返回镇上']
    ],
    guard: '这是南线唯一的缓冲日。若前一天到得晚，上午先补觉；大风或下雨时删去下海和无人机，只走观景台。'
  },
  4: {
    distance: '约 350—390 km', drive: '约 4.5—5 小时', depart: '06:45', booking: 'Cape Le Grand 通票 / Ravensthorpe 晚入住',
    timeline: [
      ['06:45', '满油出发前往 Cape Le Grand，车上准备早餐'],
      ['07:45', 'Lucky Bay 晨景；不安排长徒步'],
      ['09:30', 'Thistle Cove / Hellfire Bay 二选一'],
      ['11:30', '离开国家公园，经 Esperance 快速补油和午餐'],
      ['14:15', 'Eleven Mile Lagoon，控制 45—60 分钟'],
      ['15:15', '向西出发，约 17:30 抵达 Ravensthorpe']
    ],
    guard: '15:30 仍未离开 Eleven Mile Lagoon 就直接上路；不为日落停留，以避免在野生动物活跃时段夜驾。'
  },
  5: {
    distance: '约 300—355 km', drive: '约 3.5—4.5 小时', depart: '08:00', booking: 'Albany / Denmark 东侧住宿',
    timeline: [
      ['08:00', 'Ravensthorpe 加满油后出发'],
      ['10:00', 'Jerramungup 加油、咖啡和短休一次完成'],
      ['12:45', '抵达 Albany 午餐'],
      ['14:15', 'Middleton Beach / Mount Clarence 二选一'],
      ['16:30', '入住 Albany；若住 Denmark 东侧则继续向西']
    ],
    guard: '当天主要用于恢复体力。若住 Denmark 东侧，Albany 只保留午餐和一个观景点，确保日落前抵达住宿。'
  },
  6: {
    distance: '约 410—450 km', drive: '约 5.5—6 小时', depart: '06:45', booking: 'Tree Top Walk · Augusta 晚入住',
    timeline: [
      ['06:45', '退房向 Denmark 出发，镇上快速早餐'],
      ['08:15', 'Greens Pool + Elephant Rocks，共约 90 分钟'],
      ['10:00', '向 Valley of the Giants 出发'],
      ['11:30', 'Tree Top Walk 与 Ancient Empire，约 90 分钟'],
      ['13:15', '车上 / Walpole 简单午餐，继续向 Pemberton'],
      ['15:30', 'Pemberton 仅作加油和短休，随后直达 Augusta'],
      ['18:00—18:45', '抵达 Augusta，使用提前确认的晚到入住']
    ],
    guard: '这天不要把 Pemberton 当正式景点。若 12:30 后才离开巨树谷，取消沿途森林停留并直接去 Augusta；Tree Top Walk 最后入场时间出发前再核对。'
  },
  7: {
    distance: '约 260—300 km', drive: '约 4—4.5 小时', depart: '08:00', booking: '酒庄午餐如需用餐须预约',
    timeline: [
      ['08:00', 'Cape Leeuwin Lighthouse，先看开放与风况'],
      ['10:00', 'Hamelin Bay；不追逐、不触碰魟鱼'],
      ['11:30', 'Boranup Forest 短停 30—45 分钟'],
      ['13:00', 'Margaret River 午餐 / 酒庄二选一'],
      ['15:30', '若时间和天气允许，再去 Sugarloaf Rock'],
      ['18:00', 'Busselton Jetty 附近入住并步行晚餐']
    ],
    guard: 'Sugarloaf Rock 是可删项；15:30 后仍在 Margaret River 就直接去 Busselton，避免绕行后再赶路。'
  },
  8: {
    distance: '约 220—270 km', drive: '约 3—3.5 小时', depart: '09:00', booking: '南线还车 · 次日船票',
    timeline: [
      ['08:30', '退房后步行游览 Busselton Jetty'],
      ['10:30', '开始北返'],
      ['12:30', 'Rockingham 午餐；天气一般则不停'],
      ['15:00', '抵达 Fremantle，先入住并卸下行李'],
      ['15:45', '按订单在 Fremantle / Perth 还南线租车，再回酒店'],
      ['17:00', '踩点次日轮渡码头，确认报到入口'],
      ['18:00', 'Fremantle 散步与晚餐']
    ],
    guard: '次日船班优先级高于 Rockingham。船票确认页、停车场和登船二维码今晚全部离线保存。'
  },
  9: {
    distance: '岛上约 20—30 km', drive: '0 小时（无自驾）', depart: '开船前 30—45 分钟报到', booking: '船票 + 自行车 / 巴士',
    timeline: [
      ['07:15', '从酒店步行 / 驾车到 Fremantle 码头报到'],
      ['08:00 前后', '乘早班船，实际班次以订单为准'],
      ['09:00', 'Thomson Bay 取车或换乘环岛巴士'],
      ['10:00', 'The Basin 与西侧海湾'],
      ['12:30', '岛上午餐，午后 Wadjemup Lighthouse'],
      ['16:00 前后', '回到 Thomson Bay，预留还车和排队时间'],
      ['傍晚', '返航 Fremantle，回原酒店']
    ],
    guard: 'Fremantle 出发航程约 25 分钟，船班受天气影响。岛上不飞无人机；骑行遇强风时立即改乘环岛巴士。'
  },
  10: {
    distance: '约 470—500 km', drive: '约 5.5—6 小时', depart: '07:00', booking: '北线取车 · Pinnacles 通票',
    timeline: [
      ['06:15', '退房并按订单在 Fremantle / Perth 取北线租车'],
      ['07:00', '验车、装车后满油出发，避开珀斯通勤高峰'],
      ['09:15', 'Lancelin Dunes，停留约 45 分钟'],
      ['11:15', 'Cervantes 午餐 / 龙虾工厂'],
      ['12:45', 'Pinnacles Desert，环线与步行约 90 分钟'],
      ['14:30', 'Jurien Bay 仅作咖啡和海边短停'],
      ['17:30—18:00', '抵达 Geraldton Foreshore 入住']
    ],
    guard: '若 13:00 后才进入 Pinnacles，取消 Jurien Bay；若强风影响沙丘，Lancelin 只停观景点。'
  },
  11: {
    distance: '约 620—660 km', drive: '约 7—7.5 小时', depart: '06:30', booking: '北线机场还车 · 酒店晚入住',
    timeline: [
      ['06:30', 'Geraldton 满油出发，车上早餐'],
      ['07:45', 'Hutt Lagoon / Port Gregory，从合法公共位置观景'],
      ['09:30', '开始向南折返，不再继续北上'],
      ['11:00', 'Geraldton 补油、咖啡和午餐打包'],
      ['14:00', 'Jurien / Cervantes 一带第二次补油和换司机'],
      ['17:30—18:30', '机场附近加满油并归还北线租车'],
      ['19:00', '入住 Perth Airport 酒店，整理次日飞行行李']
    ],
    guard: '这是全程疲劳风险最高的驾驶日之一。09:30 必须南返；若出现强风、疲劳或车辆警示，立即删航拍并增加休息。'
  },
  12: {
    distance: '霍巴特市内约 20 km', drive: '约 30—45 分钟', depart: 'VA594 09:50', booking: '国内航班 + 塔州租车',
    timeline: [
      ['07:30', '机场酒店退房，搭酒店接驳 / 步行前往航站楼'],
      ['08:00', 'PER 国内航站楼办理值机与托运'],
      ['09:50', 'VA594 珀斯起飞'],
      ['17:00', '抵达 Hobart，取车并拍摄车况'],
      ['18:30', 'Hobart 入住；Battery Point 与 Salamanca 晚餐']
    ],
    guard: '珀斯与霍巴特有时差，手机开启自动时区。抵达后不安排惠灵顿山，给取车和超市补给留余量。'
  },
  13: {
    distance: '约 480—510 km', drive: '约 6—6.5 小时', depart: '05:45', booking: '塔州公园通票 + 摇篮山接驳',
    timeline: [
      ['05:45', 'Hobart 满油出发，车上早餐'],
      ['08:10', 'Deloraine 河畔短停 30 分钟'],
      ['09:20', 'Sheffield 壁画小镇，停留约 45 分钟'],
      ['11:15', 'Cradle Mountain Visitor Centre 停车、验票'],
      ['11:45—14:00', '乘接驳到 Dove Lake，仅湖边观景、不徒步'],
      ['14:15', '离开摇篮山前往 Stanley'],
      ['17:00—17:45', '抵达 Stanley；天气好在 The Nut 一带看日落']
    ],
    guard: '接驳时刻会随季节和天气调整，出发前复核。14:30 必须离开摇篮山；若晚到，删除 Deloraine 或 Sheffield 停留。'
  },
  14: {
    distance: '约 470—520 km', drive: '约 6—7 小时', depart: '07:30 游览 / 09:15 上路', booking: '确认租车允许计划道路',
    timeline: [
      ['07:30', 'Stanley 镇与海湾晨景；不安排 The Nut 长线'],
      ['09:15', '离开 Stanley'],
      ['10:20', 'Burnie 海滨短停 20—30 分钟'],
      ['11:30', 'Devonport 早午餐 / 加油'],
      ['13:15', 'Launceston Cataract Gorge，控制 60 分钟'],
      ['14:30', '向东北出发；导航前确认 Ansons Bay 道路与天气'],
      ['17:15', 'Ansons Bay 快速观景'],
      ['18:30—19:00', 'St Helens 入住和晚餐']
    ],
    guard: '当天路程非常满。14:45 仍未离开 Launceston 就跳过 Ansons Bay，直接去 St Helens；任何未铺装路必须符合租车合同。'
  },
  15: {
    distance: '约 390—430 km', drive: '约 5.5—6 小时', depart: '06:45', booking: 'Freycinet 公园通票',
    timeline: [
      ['06:45', 'St Helens 出发，先到 Binalong Bay / Bay of Fires'],
      ['08:30', '离开火焰湾南下'],
      ['09:45', 'Bicheno 海岸短停与咖啡'],
      ['11:15', '抵达 Freycinet；午餐后前往 Wineglass Bay Lookout'],
      ['12:15—14:00', '完成观景台往返，留意台阶与风雨'],
      ['15:00', 'Swansea 短停'],
      ['16:30', 'Ross 石桥与小镇，最晚 17:15 离开'],
      ['18:30—19:00', '回到 Hobart，连续入住三晚']
    ],
    guard: '若 Wineglass Bay 停车紧张或天气恶劣，改走 Cape Tourville 短步道；Ross 是最后可删项。'
  },
  16: {
    distance: '约 220—270 km', drive: '约 4—5 小时 + 车渡', depart: '06:45', booking: '车渡预购票 · 不锁定班次',
    timeline: [
      ['06:45', 'Hobart 出发，约 35 分钟到 Kettering'],
      ['07:20', '进入车辆队列；搭乘下一班可用渡轮'],
      ['08:15', 'Great Bay 生蚝与奶酪路线'],
      ['10:30', 'The Neck 观景台'],
      ['12:00', 'Adventure Bay 午餐与海岸'],
      ['14:00', '时间充足再前往 Cape Bruny Lighthouse'],
      ['16:30 前', '回到 Roberts Point 排队返航'],
      ['18:30', '回 Hobart']
    ],
    guard: 'Bruny 采用排队制，预购票不代表固定班次。返程排队可能较久；若上午上岛延误，删 Cape Bruny，不压缩返程余量。'
  },
  17: {
    distance: '约 210—230 km', drive: '约 3 小时', depart: '07:00', booking: 'Tasman Island Cruise + Port Arthur',
    timeline: [
      ['07:00', 'Hobart 出发，按订单集合点导航'],
      ['08:45 前', '抵达巡游集合点并办理报到'],
      ['上午', 'Tasman Island Cruise；穿防风防水外层'],
      ['13:30', '午餐后进入 Port Arthur Historic Site'],
      ['16:45', '最晚离开 Port Arthur'],
      ['18:15', '返回 Hobart；途中视时间短停 Eaglehawk Neck']
    ],
    guard: '巡游可能因海况调整或取消，前晚与清晨都查通知；订单时间优先于本页示意，Eaglehawk Neck 是可删项。'
  },
  18: {
    distance: '市内 + 机场约 25 km', drive: '约 35—45 分钟', depart: '12:00 前离开市区', booking: 'VA1327 / VA699',
    timeline: [
      ['08:30', '退房寄存行李，步行逛 Salamanca Market'],
      ['10:45', '回酒店取行李并最后加油'],
      ['11:45', '离开 Hobart 市区前往机场'],
      ['12:30', '还车、车况复核与国内值机'],
      ['15:15', 'VA1327 飞往 Melbourne'],
      ['18:45', '转乘 VA699，20:10 抵达 Perth']
    ],
    guard: '不要为了市集拖延还车。两段航班经 Melbourne 衔接，行李是否直挂应在 Hobart 值机柜台再次确认。'
  },
  19: {
    distance: '机场接驳', drive: '0 小时（无自驾）', depart: '航班前约 3 小时', booking: 'TR29 / TR188',
    timeline: [
      ['02:30', '起床退房，确认护照与全部随身电池'],
      ['03:00 前', '抵达 PER T1 办理国际值机'],
      ['05:35', 'TR29 珀斯飞新加坡'],
      ['10:55', '抵达新加坡，按转机指引前往下一登机口'],
      ['16:30', 'TR188 飞杭州，21:45 抵达']
    ],
    guard: '前一晚把托运行李封箱、液体分装和退税材料一次整理好；早班机不安排任何市区活动。'
  }
};

const stays = [
  ['09.23', 'Perth Airport / Ascot', '机场东侧；晚到后尽快休息，停车方便'],
  ['09.24—09.25', 'Esperance', 'Town Centre；连续住2晚'],
  ['09.26', 'Ravensthorpe', 'Eleven Mile Lagoon 继续向西约2小时；住镇中心'],
  ['09.27', 'Albany / Denmark 东侧', 'Albany 选择更多；若住 Denmark 东侧可缩短次日路程'],
  ['09.28', 'Augusta', '镇中心 / 河口；确认支持较晚入住'],
  ['09.29', 'Busselton', 'Jetty 附近；步行吃饭与看栈桥'],
  ['09.30—10.01', 'Fremantle', '港口 / 轮渡码头；同一酒店连住2晚，确认停车政策'],
  ['10.02', 'Geraldton', 'Foreshore / CBD；晚餐与第二天加油方便'],
  ['10.03', 'Perth Airport', '粉红湖折返后直接住机场区域'],
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
    const plan = routePlans[day.day];
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
            <button class="active" id="day-${day.day}-route-tab" type="button" role="tab" aria-selected="true" aria-controls="day-${day.day}-route" data-day-mode="route">路线 &amp; 时间</button>
            <button id="day-${day.day}-food-tab" type="button" role="tab" aria-selected="false" aria-controls="day-${day.day}-food" tabindex="-1" data-day-mode="food">沿路餐厅 <span>${guide.food.length}</span></button>
            <button id="day-${day.day}-drone-tab" type="button" role="tab" aria-selected="false" aria-controls="day-${day.day}-drone" tabindex="-1" data-day-mode="drone">无人机</button>
          </div>
          <section class="day-mode-panel active" id="day-${day.day}-route" role="tabpanel" aria-labelledby="day-${day.day}-route-tab" data-day-panel="route">
            <p class="journey-summary">${day.summary}</p>
            <dl class="route-facts">
              <div><dt>里程</dt><dd>${plan.distance}</dd></div>
              <div><dt>纯驾驶</dt><dd>${plan.drive}</dd></div>
              <div><dt>建议出发</dt><dd>${plan.depart}</dd></div>
              <div><dt>提前确认</dt><dd>${plan.booking}</dd></div>
            </dl>
            <div class="route-timeline" aria-label="DAY ${day.day} 建议时间轴">
              ${plan.timeline.map(item => `<div><time>${item[0]}</time><p>${item[1]}</p></div>`).join('')}
            </div>
            <div class="route-guard"><strong>延误预案</strong><p>${plan.guard}</p></div>
            <details class="route-stop-details">
              <summary>查看完整途经点 <span>${day.stops.length}</span></summary>
              <ol class="stop-route">${day.stops.map(stop => `<li>${stop}</li>`).join('')}</ol>
            </details>
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
      <section><h2>${day.title}</h2><p>${day.summary}</p><small>${day.stops.join(' → ')}</small><span class="print-guide"><small>路线：${routePlans[day.day].distance} · ${routePlans[day.day].drive} · 建议出发 ${routePlans[day.day].depart}</small><small>餐饮：${dailyGuides[day.day].food.map(item => item.name).join(' / ')}</small><small>无人机：${dailyGuides[day.day].drone.label} · ${dailyGuides[day.day].drone.place}</small></span></section>
      <aside><span>住宿</span><strong>${day.stay}</strong></aside>
    </article>`).join('')}`;
document.getElementById('stayRows').innerHTML = stays.map(row =>
  `<tr><td>${row[0]}</td><td>${row[1]}</td><td>${row[2]}</td></tr>`
).join('');

const tabs = [...document.querySelectorAll('.tab-bar [data-tab]')];
const panels = [...document.querySelectorAll('.app-main > .tab-panel[data-panel]')];
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

const checklistBoxes = [...document.querySelectorAll('.checklist input')];
const checklistProgress = document.getElementById('checklistProgress');

function updateChecklistProgress() {
  const completed = checklistBoxes.filter(box => box.checked).length;
  if (checklistProgress) checklistProgress.textContent = `${completed} / ${checklistBoxes.length}`;
}

checklistBoxes.forEach((box, index) => {
  const id = box.dataset.checkId || String(index);
  const key = `aus-road-trip-check-v2-${id}`;
  const saved = localStorage.getItem(key);
  box.checked = saved === 'true';
  box.addEventListener('change', () => {
    localStorage.setItem(key, box.checked);
    updateChecklistProgress();
  });
});
updateChecklistProgress();

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
  const perthAirport = [-31.9403, 115.9672];
  const fremantle = [-32.0569, 115.7439];
  const rottnest = [-32.006, 115.512];
  const ravensthorpe = [-33.583, 120.046];
  const augusta = [-34.315, 115.159];
  const busselton = [-33.646, 115.344];
  const waSouthRoute = [
    perthAirport, [-31.8896, 116.7680], [-32.443, 118.897], [-33.8608, 121.8896],
    [-33.991, 122.232], [-33.873, 121.759], ravensthorpe, [-35.0275, 117.884],
    [-34.9607, 117.353], [-34.974, 116.897], [-34.444, 116.034], augusta,
    [-34.3749, 115.1365], [-33.9535, 115.073], [-33.539, 115.005], busselton,
    [-32.2768, 115.729], fremantle
  ];
  const waNorthRoute = [
    fremantle, perth, [-31.022, 115.333], [-30.604, 115.159], [-30.305, 115.038],
    [-28.7774, 114.614], [-28.158, 114.242], [-28.7774, 114.614], [-30.305, 115.038],
    perthAirport
  ];
  const waIslandRoute = [fremantle, rottnest, fremantle];
  const waMap = createMap('waRouteMap');
  L.polyline(waSouthRoute, { color: '#d47745', weight: 4, opacity: .92 }).addTo(waMap);
  L.polyline(waNorthRoute, { color: '#b58a32', weight: 4, opacity: .9 }).addTo(waMap);
  L.polyline(waIslandRoute, { color: '#496c93', weight: 3, opacity: .9, dashArray: '6 7' }).addTo(waMap);
  addPlaces(waMap, [
    ['珀斯机场', perthAirport, 'right'], ['Fremantle', fremantle, 'left'],
    ['Geraldton', [-28.7774, 114.614], 'right'], ['粉红湖', [-28.158, 114.242], 'right'],
    ['Esperance', [-33.8608, 121.8896], 'left'], ['Albany', [-35.0275, 117.884], 'bottom'],
    ['Ravensthorpe', ravensthorpe, 'top'], ['Augusta', augusta, 'left'],
    ['Busselton', busselton, 'bottom'], ['罗特尼斯岛', rottnest, 'left']
  ]);
  waMap.fitBounds(L.latLngBounds([...waSouthRoute, ...waNorthRoute, ...waIslandRoute]), { padding: [30, 30] });

  const hobart = [-42.8821, 147.3272];
  const deloraine = [-41.5245, 146.6570];
  const sheffield = [-41.3830, 146.3250];
  const cradleMountain = [-41.6840, 145.9510];
  const stanley = [-40.7600, 145.2950];
  const burnie = [-41.0520, 145.9060];
  const devonport = [-41.1780, 146.3510];
  const cataractGorge = [-41.4440, 147.1290];
  const ansonsBay = [-41.0373, 148.2691];
  const stHelens = [-41.3210, 148.2490];
  const bicheno = [-41.8750, 148.3030];
  const freycinet = [-42.1240, 148.2890];
  const swansea = [-42.1233, 148.0776];
  const ross = [-42.0300, 147.4920];
  const tasRoute = [
    hobart, deloraine, sheffield, cradleMountain, stanley,
    burnie, devonport, cataractGorge, ansonsBay, stHelens,
    [-41.251, 148.307], bicheno, freycinet, swansea, ross, hobart, [-43.273, 147.349], hobart,
    [-43.148, 147.850], hobart
  ];
  const tasMap = createMap('tasRouteMap');
  L.polyline(tasRoute, { color: '#247a78', weight: 4, opacity: .92 }).addTo(tasMap);
  addPlaces(tasMap, [
    ['霍巴特', hobart, 'left'], ['Deloraine', deloraine, 'right'],
    ['Sheffield', sheffield, 'left'], ['摇篮山', cradleMountain, 'right'],
    ['Stanley', stanley, 'right'], ['Ansons Bay', ansonsBay, 'top'],
    ['St Helens', stHelens, 'left'], ['Freycinet', freycinet, 'left'],
    ['布鲁尼岛', [-43.273, 147.349], 'left'],
    ['亚瑟港', [-43.148, 147.850], 'right']
  ]);
  tasMap.fitBounds(L.latLngBounds(tasRoute), { padding: [30, 30] });
}

const initialTab = location.hash.slice(1);
activateTab(validTabs.has(initialTab) ? initialTab : 'home', false);
if (initialTab && !validTabs.has(initialTab)) history.replaceState(null, '', '#home');

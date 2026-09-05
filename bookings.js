// Public itinerary details transcribed from the supplied confirmations.
// Original vouchers, guest identities and booking credentials stay outside this repository.
const confirmedStays = [
  {
    days: [1], start: '2026-09-23', end: '2026-09-24', name: 'Ingot Hotel Perth',
    address: '285 Great Eastern Highway, Belmont WA 6104', platform: 'Agoda',
    room: 'Superior King Room', beds: 'King 大床；TwinBeds 为特殊要求，尚未确认双床。', bedReview: true,
    checkin: '单据未列具体时间', checkout: '单据未列具体时间',
    included: '免费 Wi-Fi；单据未列早餐',
    cancellation: '单据写明 9/22 前可免费取消；临近入住取消收首晚房费，未入住收全额。具体截止时刻以平台订单为准。',
    note: '落地后前往酒店休息。酒店不在航站楼内，机场往返交通需提前安排。'
  },
  {
    days: [2, 3], start: '2026-09-24', end: '2026-09-26', name: 'Hospitality Esperance, SureStay by Best Western',
    address: '44–46 The Esplanade, Esperance WA 6450', platform: 'Agoda',
    room: '标准房（大床 + 单人床）', beds: '一张大床 + 一张单人床，可分床睡；不是两张单人床。', bedReview: false,
    checkin: '单据未列具体时间', checkout: '单据未列具体时间', included: '含早餐',
    cancellation: '单据写明 9/23 前可免费取消；入住前 1 天内取消收总额 71%，入住当天取消或未入住收全额。具体截止时刻以平台订单为准。',
    note: '连续住两晚。9/24 长途抵达前确认晚到入住；9/26 清晨出发，提前询问早餐能否打包。'
  },
  {
    days: [8], start: '2026-09-30', end: '2026-10-01', name: 'The Lodge Wadjemup',
    address: 'Boreham Way, Rottnest Island WA 6161', platform: 'Agoda',
    room: 'Courtyard King Room', beds: 'King 大床；TwinBeds 为特殊要求，尚未确认双床。', bedReview: true,
    checkin: '单据未列具体时间', checkout: '单据未列具体时间', included: '含早餐、咖啡和茶、饮用水、免费 Wi-Fi',
    cancellation: '不可退款，不可修改。',
    note: '9/30 乘 16:15 船上岛后入住；告知预计抵达时间，并确认 10/1 退房后的行李寄存。'
  },
  {
    days: [10], start: '2026-10-02', end: '2026-10-03', name: '卡罗文公园比莱尔酒店',
    address: '463 Marine Terrace, Geraldton WA 6530', platform: 'Booking.com',
    room: 'Family Holiday Unit', beds: '单据未列床位组合，需向住宿确认。', bedReview: true,
    checkin: '14:00–18:00', checkout: '10:00 前', included: '厨房、私人浴室、免费停车；不含餐点',
    cancellation: '9/28 23:59 前免费取消；9/29 00:00 起取消或未入住收全额（住宿当地时间）。',
    amount: 'AUD 232.20（单据折合约 CNY 1,119）',
    note: '北线当天计划约 17:30 抵达，先入住再游海滨；预计超过 18:00 须提前联系安排钥匙。'
  },
  {
    days: [11], start: '2026-10-03', end: '2026-10-04', name: 'Ingot Hotel Perth',
    address: '285 Great Eastern Highway, Belmont WA 6104', platform: '飞猪',
    room: 'Superior Queen Room with Disability Access', beds: '一张 Queen 大床（无障碍房）；单据未确认双床。', bedReview: true,
    checkin: '14:00 后', checkout: '10:00 前', included: '不含早餐',
    cancellation: '英文单据未列退改条款，需查看飞猪中文订单详情。', amount: 'CNY 868.90（预付）',
    note: '粉红湖折返后入住。提前落实次晨前往 PER 国内航站楼的交通，不能按步行到机场安排。'
  },
  {
    days: [12], start: '2026-10-04', end: '2026-10-05', name: 'The Rivulet',
    address: '391 Sandy Bay Road, Hobart TAS 7005', platform: 'Booking.com 合作伙伴',
    room: '套房', beds: '确认单未列床型，需向住宿确认。', bedReview: true,
    checkin: '14:00–23:30', checkout: '10:00', included: '含早餐',
    cancellation: '10/2 23:59（含）前免费取消；10/3 00:00 起取消费约 CNY 1,038。按订单显示的住宿当地时区执行。',
    amount: 'CNY 1,038.39（已支付）',
    note: '位于 Sandy Bay；17:00 航班抵达后先取车入住，再前往 Battery Point / Salamanca。次日 05:45 出发，提前询问早餐打包。'
  },
  {
    days: [13], start: '2026-10-05', end: '2026-10-06', name: 'Mariner Rose B&B',
    address: '14 Marine Esplanade, Stanley TAS 7331', platform: 'Airbnb',
    room: 'King Ensuite w/breakfast', beds: 'King 大床房，独立卫浴；未确认双床。', bedReview: true,
    checkin: '14:00 后', checkout: '10:00 前', included: '含早餐；预订为民宿房间',
    cancellation: '9/30 13:00 前可免费取消，之后不可退款（房源当地时间）。', amount: 'CNY 1,151.81（已支付，含平台抵用额）',
    note: '摇篮山长途日，提前告知晚到时间并确认取钥匙方式。'
  },
  {
    days: [14], start: '2026-10-06', end: '2026-10-07', name: 'Panorama St Helens',
    address: '1 Quail Street, St Helens TAS 7216', platform: 'Agoda',
    room: '水景特大号床间', beds: 'King 大床；TwinBeds 为特殊要求，尚未确认双床。', bedReview: true,
    checkin: '单据未列具体时间', checkout: '单据未列具体时间', included: '停车、免费 Wi-Fi；单据未列早餐',
    cancellation: '单据写明 10/2 前可免费取消；入住前 4 天内取消或未入住收全额。具体截止时刻以平台订单为准。',
    note: '北海岸长途抵达后直接入住。先确认前台关闭时间，延误时删去 Ansons Bay 绕行。'
  },
  {
    days: [15, 16], start: '2026-10-07', end: '2026-10-09', name: 'Wrest Point',
    address: '410 Sandy Bay Road, Hobart TAS 7005', platform: 'Agoda',
    room: 'Water Edge Twin', beds: '订单房型明确为 Twin 双床。', bedReview: false,
    checkin: '单据未列具体时间', checkout: '单据未列具体时间', included: '停车、健身中心、咖啡和茶、免费 Wi-Fi；单据未列早餐',
    cancellation: '不可退款，不可修改。',
    note: '只覆盖 10/7、10/8 两晚，10/9 退房；10/9 当晚住宿尚未收到确认单，不能按原房续住。'
  },
  {
    days: [18], start: '2026-10-10', end: '2026-10-11', name: 'Ingot Hotel Perth',
    address: '285 Great Eastern Highway, Belmont WA 6104', platform: '飞猪',
    room: 'Superior Queen Room', beds: '一张 Queen 大床；单据未确认双床。', bedReview: true,
    checkin: '14:00 后', checkout: '10:00 前', included: '不含早餐',
    cancellation: '英文单据未列退改条款，需查看飞猪中文订单详情。', amount: 'CNY 1,082.45（预付）',
    note: '20:10 抵达珀斯后短暂休息；提前安排 10/11 凌晨退房与机场交通，03:00 前到 PER T1。'
  }
];

const confirmedFerries = [
  { day: 8, date: '2026-09-30', depart: '16:15', ready: '15:45', closes: '16:10', from: 'B Shed, Fremantle', to: 'Rottnest Island', direction: '上岛' },
  { day: 9, date: '2026-10-01', depart: '17:30', ready: '17:00', closes: '17:25', from: 'Rottnest Island', to: 'B Shed, Fremantle', direction: '返程' }
];

export interface TestRoute {
  id: string;
  centerName: string;
  location: string;
  address: string;
  passRate: string;
  description: string;
  routes: {
    name: string;
    points: string[];
    tips: string;
  }[];
}

export const testRoutes: TestRoute[] = [
  {
    id: "tallaght",
    centerName: "Tallaght",
    location: "Dublin 24",
    address: "Premier Business Park, 52 Broomhill Road, Tallaght, Dublin 24, D24 VE8E",
    passRate: "50.0%",
    description: "Tallaght 是都柏林最热门也是最繁忙的考点之一。路况复杂，包含多个大型环岛和繁忙的商业区。",
    routes: [
      {
        name: "Route A - 贝尔加德路方向",
        points: [
          "RSA Test Center",
          "Belgard Road (注意限速变化)",
          "Cookstown Industrial Estate",
          "Tallaght Hospital Roundabout",
          "返回考场"
        ],
        tips: "工业区内有很多停放的卡车，注意视线遮挡。Belgard Road 车速较快，变道要果断。"
      },
      {
        name: "Route B - 老城区方向",
        points: [
          "RSA Test Center",
          "Tallaght Village",
          "Greenhills Road",
          "Tymon Park (通过住宅区)",
          "返回考场"
        ],
        tips: "住宅区内有很多减速带 (Speed Bumps)，一定要减速。注意路边玩耍的儿童。"
      }
    ]
  },
  {
    id: "dun-laoghaire",
    centerName: "Dun Laoghaire",
    location: "South Dublin",
    address: "Pottery Road, Dun Laoghaire, Co. Dublin (Lidl 对面)",
    passRate: "60.3%",
    description: "位于南都柏林，路况相对规整，但有很多坡道和狭窄的住宅区街道。",
    routes: [
      {
        name: "Route A - 沿海方向",
        points: [
          "Test Center (Pottery Road)",
          "Rochestown Avenue",
          "Glenageary Roundabout",
          "Sallynoggin (繁忙商业街)",
          "返回考场"
        ],
        tips: "Sallynoggin 区域行人很多，注意观察。从主路进入小路时注意让行。"
      },
      {
        name: "Route B - N11 方向",
        points: [
          "Test Center",
          "Clonkeen Road",
          "Cabinteely Village",
          "N11 (不一定会上主路，但在附近)",
          "返回考场"
        ],
        tips: "注意 N11 附近的公交专用道 (Bus Lane)，考试期间（通常是全天）禁止驶入。"
      }
    ]
  },
  {
    id: "finglas",
    centerName: "Finglas",
    location: "North Dublin",
    address: "Jamestown Business Park, Jamestown Road, Finglas, Dublin 11",
    passRate: "46.3%",
    description: "北区主要考点，以大环岛多著称，包括著名的 Jamestown Roundabout。",
    routes: [
      {
        name: "Route A - Jamestown 环岛",
        points: [
          "Test Center (Jamestown Road)",
          "Jamestown Roundabout (多车道环岛)",
          "Finglas Village",
          "McKee Avenue",
          "返回考场"
        ],
        tips: "Jamestown 环岛是挂科重灾区，进出环岛的车道选择至关重要，一定要提前选好道。"
      }
    ]
  },
  {
    id: "raheny",
    centerName: "Raheny",
    location: "Dublin 5",
    address: "4 All Saints Park, Raheny, Dublin 5",
    passRate: "47.5%",
    description: "Raheny 考区以成熟的住宅区为主，道路较窄，路况相对平稳。主要考察对行人、自行车和减速带的处理。",
    routes: [
      {
        name: "Route A - 住宅区巡航",
        points: [
          "Test Center (All Saints Park)",
          "Howth Road",
          "Sybil Hill Road",
          "St. Anne's Park 周边",
          "返回考场"
        ],
        tips: "住宅区内视线盲区较多，经过路口时一定要 exaggerated observation（夸张观察）。"
      }
    ]
  },
  {
    id: "mulhuddart",
    centerName: "Mulhuddart",
    location: "Dublin 15",
    address: "Maple House, Old Navan Road, Damastown, Mulhuddart, Dublin 15 (主要考场)",
    passRate: "43.7%",
    description: "考点位于工业区附近，路线包含繁忙的 N3 公路和 Blanchardstown 购物中心周边的多车道大环岛。",
    routes: [
      {
        name: "Route A - 工业区与 N3",
        points: [
          "Test Center (Maple House)",
          "Damastown Industrial Estate",
          "N3 Dual Carriageway (注意汇入汇出)",
          "Blanchardstown Centre Roundabout",
          "返回考场"
        ],
        tips: "N3 上车速较快，汇入时要果断加速。购物中心附近的环岛车流量极大，选道和让行是关键。"
      }
    ]
  }
];

export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number; // Index of the correct option (0-3)
  explanation: string;
  category: string;
  imageUrl?: string;
}

export const questions: Question[] = [
  {
    id: 1,
    question: "当你在驾驶时看到前方有儿童正在玩球，你应该怎么做？",
    options: [
      "鸣笛并加速通过",
      "保持原速通过",
      "减速并准备停车",
      "闪灯示意他们离开"
    ],
    correctAnswer: 2,
    explanation: "儿童的行为不可预测，你应该减速并随时准备停车，以防他们突然跑上马路。",
    category: "安全驾驶"
  },
  {
    id: 2,
    question: "在高速公路上，当你错过出口时，你应该：",
    options: [
      "立即倒车回到出口",
      "在路肩上掉头",
      "继续行驶直到下一个出口",
      "停车并等待交警指示"
    ],
    correctAnswer: 2,
    explanation: "在高速公路上倒车或掉头极其危险且违法。你应该继续行驶至下一个出口，然后安全返回。",
    category: "高速公路"
  },
  {
    id: 3,
    question: "这个标志是什么意思？(红圈内有一个数字 50)",
    options: [
      "最低限速 50 km/h",
      "最高限速 50 km/h",
      "前方 50 米有危险",
      "建议速度 50 km/h"
    ],
    correctAnswer: 1,
    explanation: "红圈内的数字表示最高法定限速。在这个区域内，你的速度不得超过 50 km/h。",
    category: "交通标志"
  },
  {
    id: 4,
    question: "在环岛（Roundabout）行驶时，如果你打算在第一个出口驶出，你应该：",
    options: [
      "保持在右侧车道，打右转向灯",
      "保持在左侧车道，打左转向灯",
      "保持在左侧车道，不打灯",
      "保持在右侧车道，打左转向灯"
    ],
    correctAnswer: 1,
    explanation: "在爱尔兰（左侧通行），进入环岛并打算在第一出口驶出时，应保持在左侧车道并开启左转向灯。",
    category: "环岛规则"
  },
  {
    id: 5,
    question: "血液酒精含量（BAC）的法定限制是多少（对于普通驾驶员）？",
    options: [
      "20mg/100ml",
      "50mg/100ml",
      "80mg/100ml",
      "0mg/100ml"
    ],
    correctAnswer: 1,
    explanation: "对于普通驾驶员，血液酒精浓度限制是 50mg/100ml。对于新手（Learner）和职业司机，限制更严，为 20mg/100ml。",
    category: "法律法规"
  },
  {
    id: 6,
    question: "当交通灯变黄时，你应该：",
    options: [
      "加速通过路口",
      "停车，除非停车会导致危险",
      "继续行驶，因为黄灯意味着警示",
      "立即紧急刹车"
    ],
    correctAnswer: 1,
    explanation: "黄灯意味着停车，除非你已经太接近路口，以至于停车可能会导致后车追尾或其他危险。",
    category: "交通信号"
  }
];

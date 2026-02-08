import { useState } from 'react';
import { MessageCircle, Settings } from 'lucide-react';

const DrivingTest = () => {
  const [activeTab, setActiveTab] = useState<'commands' | 'bonnet'>('commands');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">路考技巧指南</h1>
        <p className="text-gray-600">掌握考官指令和车辆检查要点，助你自信通过路考。</p>
      </div>

      <div className="flex justify-center mb-8">
        <div className="bg-white rounded-lg shadow-sm p-1 inline-flex">
          <button
            onClick={() => setActiveTab('commands')}
            className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'commands'
                ? 'bg-purple-600 text-white shadow'
                : 'text-gray-600 hover:text-purple-600'
            }`}
          >
            考官指令对照
          </button>
          <button
            onClick={() => setActiveTab('bonnet')}
            className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'bonnet'
                ? 'bg-purple-600 text-white shadow'
                : 'text-gray-600 hover:text-purple-600'
            }`}
          >
            车辆检查 (Bonnet Check)
          </button>
        </div>
      </div>

      {activeTab === 'commands' && <CommandsSection />}
      {activeTab === 'bonnet' && <BonnetCheckSection />}
    </div>
  );
};

const CommandsSection = () => {
  const commands = [
    { en: "Turn left", cn: "左转" },
    { en: "Turn right", cn: "右转" },
    { en: "Take the next turn left", cn: "下一个路口左转" },
    { en: "Take the second exit", cn: "第二个出口驶出（环岛）" },
    { en: "Pull over on the left", cn: "靠左停车" },
    { en: "Move off when it's safe", cn: "安全时起步" },
    { en: "Turn about (3-point turn)", cn: "三点掉头" },
    { en: "Reverse around the corner", cn: "倒车入弯" },
    { en: "Hill start", cn: "坡道起步" },
    { en: "Show me hand signals", cn: "展示手势信号" },
    { en: "Switch on dipped headlights", cn: "打开近光灯" },
    { en: "Operate the windscreen washer", cn: "打开雨刮器喷水" },
    { en: "Demist the front windscreen", cn: "前挡风除雾" },
  ];

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-6 bg-purple-50 border-b border-purple-100">
          <h2 className="text-xl font-bold text-purple-900 flex items-center">
            <MessageCircle className="h-6 w-6 mr-2" />
            常用路考指令 (English - Chinese)
          </h2>
        </div>
        <div className="divide-y divide-gray-100">
          {commands.map((cmd, index) => (
            <div key={index} className="p-4 flex justify-between items-center hover:bg-gray-50">
              <span className="font-medium text-gray-900">{cmd.en}</span>
              <span className="text-gray-600">{cmd.cn}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const BonnetCheckSection = () => {
  const checks = [
    {
      title: "Engine Oil (机油)",
      desc: "指着机油尺 (Dipstick)，说：'I would pull out the dipstick, wipe it clean, put it back in, pull it out again, and check the oil level is between the min and max markers.'",
    },
    {
      title: "Coolant (冷却液)",
      desc: "指着冷却液壶，说：'The level should be between the min and max markings.'",
    },
    {
      title: "Brake Fluid (刹车油)",
      desc: "指着刹车油壶，说：'The level should be between the min and max markings.'",
    },
    {
      title: "Windscreen Wash (玻璃水)",
      desc: "指着玻璃水壶（通常是蓝色盖子），说：'I would open the cap and check if it needs topping up.'",
    },
    {
      title: "Power Steering Fluid (转向助力油)",
      desc: "（有些车可能没有独立的壶）指着助力油壶，说：'Check the level is between min and max.'",
    },
  ];

  return (
    <div className="max-w-3xl mx-auto">
      <div className="grid gap-6">
        {checks.map((check, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md p-6 border-l-4 border-purple-500">
            <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
              <Settings className="h-5 w-5 mr-2 text-purple-600" />
              {check.title}
            </h3>
            <p className="text-gray-700 bg-gray-50 p-4 rounded-lg italic">
              "{check.desc}"
            </p>
          </div>
        ))}
      </div>
       <div className="mt-8 bg-yellow-50 p-4 rounded-lg border border-yellow-200">
        <p className="text-sm text-yellow-800">
          <strong>注意：</strong> 考官通常只会问其中 1-2 个问题。你不需要真的打开盖子检查，只需要指着正确的位置并口述如何检查即可。
        </p>
      </div>
    </div>
  );
};

export default DrivingTest;

import { useState } from 'react';
import { Search, CheckCircle, ListOrdered, AlertTriangle, Lightbulb, Dumbbell } from 'lucide-react';

interface NoteItem {
  id: number;
  title: string;
  importance: string;
  standard: string;
  process: string;
  errors: string;
  mnemonic: string;
  practice: string;
  tags: string[];
}

const data: NoteItem[] = [
  {
    id: 1,
    title: "MSP 原则 (核心)",
    importance: "高风险 / 基础",
    standard: "所有驾驶动作的基石：Mirror - Signal - Position",
    process: "1. Mirror: 观察相关镜子\n2. Signal: 提前打灯\n3. Position: 调整车身位置",
    errors: "先打灯后看镜子；动作顺序混乱；忽略Position调整",
    mnemonic: "MSP 永远第一",
    practice: "每次转弯、变道、起步时大声念出MSP并执行",
    tags: ["high", "basic"]
  },
  {
    id: 2,
    title: "Move Off (起步)",
    importance: "高风险 / Fail",
    standard: "安全起步，无干扰，观察充分",
    process: "1. 挂档 (D/1档)\n2. 5点观察，中镜、左镜、右镜、两个盲区\n3. 打右灯\n4. 松手刹（自动档车松手刹可忽略）\n5. 回头看右肩盲区确认安全起步",
    errors: "不看盲点直接走；忘了放手刹；起步影响后车",
    mnemonic: "挂-镜-灯-盲-走",
    practice: "路边反复练习起步流程，形成肌肉记忆",
    tags: ["high", "basic"]
  },
  {
    id: 3,
    title: "小区限速",
    importance: "一般扣分 / 高风险",
    standard: "严格控制速度，适应环境",
    process: "进入住宅区立即收油，脚备刹车，保持30km/h以下",
    errors: "超过30km/h；通过路口未减速",
    mnemonic: "小区不过三(30)",
    practice: "练习定速巡航般的脚感，多看仪表盘",
    tags: ["speed"]
  },
  {
    id: 4,
    title: "小区路口观察",
    importance: "高风险",
    standard: "所有路口无论有无标识，必须减速观察",
    process: "1. 接近路口减速\n2. 即使是虚线也要准备停\n3. 左右深度观察\n4. 确认安全再转",
    errors: "抢行；观察不彻底；切弯",
    mnemonic: "路口即虎口，慢看再走",
    practice: "模拟无标识路口处理，养成减速习惯",
    tags: ["junction"]
  },
  {
    id: 5,
    title: "Stop Sign (停车牌)",
    importance: "直接 Fail",
    standard: "车轮必须完全静止 (Dead Stop)",
    process: "1. 减速接近\n2. 在白线前完全刹停\n3. 数3秒 (1-2-3)\n4. 观察后起步",
    errors: "溜车 (Rolling Stop)；停在白线后太远；停过线",
    mnemonic: "Stop就是钉在地上",
    practice: "感受车身完全静止后的后坐力",
    tags: ["high", "junction"]
  },
  {
    id: 6,
    title: "环岛通用法则",
    importance: "高风险 / Fail",
    standard: "正确选道，正确信号，正确观察",
    process: "1. 进环岛前：MSP，选道，打灯(左/右/不打)\n2. 减速观察(Slow, Look)\n3. 右侧无车/安全距离则进\n4. 保持观察右侧和前方",
    errors: "进环岛不让右侧车；犹豫不决；信号错误",
    mnemonic: "进前定计，右侧为尊",
    practice: "多跑不同大小环岛，练习快速判断间隙",
    tags: ["roundabout", "high"]
  },
  {
    id: 7,
    title: "环岛第二出口 (直行)",
    importance: "一般扣分",
    standard: "保持外圈/直行轨迹，不要切内圈",
    process: "1. 左车道进入(通常)\n2. 保持外圈弧线行驶\n3. 过第1出口后打左灯\n4. 驶出",
    errors: "走直线切入内圈(Straight line)；压导流线",
    mnemonic: "走弧线，不走直线",
    practice: "想象车道中心有轨道，严格沿线行驶",
    tags: ["roundabout"]
  },
  {
    id: 8,
    title: "出环岛动作",
    importance: "高风险",
    standard: "告知后车意图，确保左侧安全",
    process: "1. 过了目标出口的前一个口\n2. 立即看中镜+左镜\n3. 打左灯\n4. 驶出",
    errors: "打灯太早(让别人误会)；打灯太晚；不看左镜",
    mnemonic: "过口打灯看左镜",
    practice: "练习打灯时机，正好在刚过前一个口时",
    tags: ["roundabout"]
  },
  {
    id: 9,
    title: "变道 (Lane Change)",
    importance: "高风险 / Fail",
    standard: "确认盲区无车才能变道",
    process: "1. 中镜+侧镜\n2. 打灯\n3. 扭头看盲区(Chin to Shoulder)\n4. 再次确认\n5. 平稳切入",
    errors: "不看盲区直接变；打灯同时变道(吓人)",
    mnemonic: "镜-灯-肩-动",
    practice: "静态练习扭头看盲区动作，不要动方向盘",
    tags: ["high", "maneuver"]
  },
  {
    id: 10,
    title: "减速带 (Speed Bump)",
    importance: "舒适度 / 车辆控制",
    standard: "平稳通过，不颠簸",
    process: "1. 上坡前减速至25-30km/h\n2. 松刹车滑行过坡\n3. 下坡后轻补油",
    errors: "速度过快(飞车)；在坡顶急刹车",
    mnemonic: "前减速，滑行过",
    practice: "找减速带路段练习，感受悬挂反馈",
    tags: ["speed"]
  },
  {
    id: 11,
    title: "超车 (Overtaking)",
    importance: "高风险",
    standard: "安全距离，合法超车",
    process: "1. 观察前方无来车\n2. 观察后方\n3. 打右灯，看右镜\n4. 超过(留一车门宽)\n5. 看到后车完整出现在后视镜再回道",
    errors: "贴太近超车；对面有车强行超；回正太早",
    mnemonic: "留足门宽，镜中见车再回",
    practice: "通常路考较少超活车，主要针对自行车/障碍物",
    tags: ["maneuver"]
  },
  {
    id: 12,
    title: "盲区观察时长",
    importance: "一般扣分",
    standard: "快速有效，不要盯着看",
    process: "扭头一瞥 (Glance)，确认无车立刻回正视线",
    errors: "盯着盲区看太久(导致车跑偏)；完全不看",
    mnemonic: "如蜻蜓点水，快看快回",
    practice: "练习头部快速转动，手部保持稳定",
    tags: ["basic"]
  },
  {
    id: 13,
    title: "红绿灯 (Amber Light)",
    importance: "高风险 / Fail",
    standard: "黄灯即停 (除非急刹不安全)",
    process: "1. 见绿灯久了预判变灯\n2. 见黄灯平稳刹停\n3. 不要加速冲",
    errors: "抢黄灯；跟前车太近导致被困路口",
    mnemonic: "黄灯是停不是冲",
    practice: "培养'绿灯很久可能要变'的预判意识",
    tags: ["junction"]
  },
  {
    id: 14,
    title: "路权 (Right of Way)",
    importance: "Fail",
    standard: "绝对遵守路权规则",
    process: "1. 辅路让主路\n2. 转弯让直行\n3. 环岛让右侧\n4. 障碍方让行",
    errors: "抢路权；该走不走(过度谨慎)",
    mnemonic: "该让就让，该走果断",
    practice: "复习交规图解，烂熟于心",
    tags: ["basic", "high"]
  },
  {
    id: 16,
    title: "刹车观察",
    importance: "一般扣分",
    standard: "每次减速前必须知晓后方情况",
    process: "脚踩刹车前 -> 先扫一眼中后视镜",
    errors: "急刹车不看后镜",
    mnemonic: "刹车必看镜",
    practice: "养成条件反射：脚动眼动",
    tags: ["basic"]
  },
  {
    id: 17,
    title: "排队起步",
    importance: "一般扣分",
    standard: "确认周围安全",
    process: "车流移动 -> 看中镜、左镜、右镜 -> 跟随起步",
    errors: "光看前车屁股，不看周围",
    mnemonic: "动车先看镜",
    practice: "堵车时是最好的练习机会",
    tags: ["basic"]
  },
  {
    id: 18,
    title: "行驶中观察 (左镜)",
    importance: "安全意识",
    standard: "防范自行车/摩托车钻缝",
    process: "直行时，每8-10秒快速扫视左后视镜(特别是由于自行车道时)",
    errors: "长时间不看后视镜",
    mnemonic: "眼观六路，勤扫左镜",
    practice: "给自己定个闹钟节奏，保持扫描频率",
    tags: ["basic"]
  },
  {
    id: 19,
    title: "礼让行人",
    importance: "直接 Fail",
    standard: "行人拥有最高优先级",
    process: "1. 见行人有过街意图\n2. 减速/停车\n3. 点头示意(必要时)\n4. 耐心等待",
    errors: "与行人抢行；逼停行人",
    mnemonic: "见人必让",
    practice: "把所有行人都当成考官",
    tags: ["high"]
  },
  {
    id: 20,
    title: "减速带速度 (再次强调)",
    importance: "车辆控制",
    standard: "25-30km/h",
    process: "同第10条，重点在于平稳",
    errors: "过快颠簸",
    mnemonic: "二三十，慢慢过",
    practice: "同第10条",
    tags: ["speed"]
  },
  {
    id: 21,
    title: "心态与专注",
    importance: "核心素质",
    standard: "冷静、自信、专注",
    process: "深呼吸 -> 动作有条理 -> 即使犯错不慌张继续开",
    errors: "加戏(做多余动作)；慌乱；注意力分散",
    mnemonic: "冷静，不急，一步步来",
    practice: "考前模拟考，适应压力",
    tags: ["basic"]
  },
  {
    id: 22,
    title: "右转弯 (Right Turn)",
    importance: "高风险 / Fail",
    standard: "标准直角转弯，不切角",
    process: "1. 驶入路口中心点附近\n2. 90度转弯(L型)\n3. 驶入目标车道左侧",
    errors: "Swan Neck (天鹅颈/S型切入)；Cut Corner (切角/逆行)",
    mnemonic: "直角转，走中线",
    practice: "找十字路口练习标准的直角轨迹",
    tags: ["junction", "high"]
  },
  {
    id: 23,
    title: "视线受阻路口 (Creep & Peep)",
    importance: "高风险 / Fail",
    standard: "确保视野，绝不盲开",
    process: "1. Stop线完全停\n2. 慢慢探头(Creep)\n3. 观察(Peep)\n4. 确认安全通过",
    errors: "看不清直接冲；探头速度太快",
    mnemonic: "Don't know, Don't go",
    practice: "在墙角/树丛遮挡路口练习",
    tags: ["junction", "high"]
  },
  {
    id: 24,
    title: "左转弯 (Left Turn)",
    importance: "位置控制",
    standard: "紧贴左侧，保持轨迹",
    process: "1. MSPSL(Mirror-Signal-Position-Speed-Look)\n2. 贴近左侧路沿(不压)\n3. 随弯度转入新路左侧",
    errors: "转弯太宽(跑到对面车道)；压路沿",
    mnemonic: "镜 → 灯 → 减速靠左 → 看 → 转 → 镜",
    practice: "练习车感，判断左轮位置",
    tags: ["junction"]
  },
  {
    id: 25,
    title: "Lidl/特殊路口 (双Stop)",
    importance: "考点特例",
    standard: "两次停车观察",
    process: "1. 在Stop线停第一次\n2. 向前挪至自行车道虚线处停第二次\n3. 观察主路再走",
    errors: "只停一次；停在自行车道实线上",
    mnemonic: "一停线，二停边",
    practice: "针对特定考点路线实地演练",
    tags: ["junction", "high"]
  },
  {
    id: 26,
    title: "上坡起步/加油站口",
    importance: "车辆控制",
    standard: "不后溜，不堵路口",
    process: "1. 停车拉手刹(防止后溜)\n2. 观察前方Clearway(黄色网格/路口)\n3. 前车走远留出空间再动",
    errors: "后溜(Roll back)；堵在Clearway上",
    mnemonic: "坡道手刹，留足车距",
    practice: "练习坡道起步油离/刹车配合",
    tags: ["control"]
  },
  {
    id: 27,
    title: "Turnabout (掉头)",
    importance: "高风险 / Fail",
    standard: "全程观察，尤其是盲区",
    process: "每次倒车前：左肩 -> 左镜 -> 中镜 -> 右镜 -> 右肩 (5点观察)",
    errors: "只看镜子不回头；观察不连续",
    mnemonic: "动车前必扫一圈",
    practice: "三点掉头专门练习观察节奏",
    tags: ["maneuver", "high"]
  },
  {
    id: 28,
    title: "倒车遇人 (Reverse)",
    importance: "直接 Fail",
    standard: "绝对安全",
    process: "1. 只要看到人/车靠近\n2. 立即停车\n3. 等待其离开\n4. 重新360度观察再动",
    errors: "有人还在动车；只看一个点",
    mnemonic: "有人就停，没人才动",
    practice: "找朋友配合模拟干扰",
    tags: ["maneuver", "high"]
  },
  {
    id: 29,
    title: "速度控制总结",
    importance: "一般扣分",
    standard: "合规且合理",
    process: "主路: 50(或60) 尽量开到限速\n小区: 30 (车多20)\n环岛: 25-30\n有车流: 跟随车流",
    errors: "路况好开太慢(阻碍交通)；超速",
    mnemonic: "该快则快，该慢则慢",
    practice: "培养对速度的敏感度",
    tags: ["speed"]
  },
  {
    id: 30,
    title: "油门与刹车控制",
    importance: "舒适度 / 控制",
    standard: "平稳丝滑 (Smooth)",
    process: "油门: 稳定有力，不猛踩\n刹车: 渐进式踩踏 (Progressive braking)",
    errors: "顿挫；急刹急起",
    mnemonic: "脚下有鸡蛋",
    practice: "练习穿软底鞋感受踏板",
    tags: ["control"]
  },
  {
    id: 31,
    title: "主路过T路口",
    importance: "优先权",
    standard: "保持主路优先权",
    process: "看到辅路有车等待 -> 观察并保持速度通过 -> 不要无故减速",
    errors: "好心办坏事(减速让辅路车)",
    mnemonic: "主路不让辅路",
    practice: "建立主路行驶的自信",
    tags: ["junction"]
  },
  {
    id: 32,
    title: "MSM 顺序",
    importance: "高风险",
    standard: "Mirror - Signal - Maneuver",
    process: "1. 镜子(收集信息)\n2. 信号(传递信息)\n3. 动作(执行)",
    errors: "边打灯边看镜；先打灯",
    mnemonic: "先看后打灯",
    practice: "任何操作前强制自己先动眼",
    tags: ["basic", "high"]
  },
  {
    id: 33,
    title: "直行位置 (Position)",
    importance: "一般扣分",
    standard: "车道中央偏左 (Left of Center)",
    process: "保持在车道中间，略微靠左，但绝不压左侧路沿或白线",
    errors: "太靠右(贴中线)；太靠左(压水沟)",
    mnemonic: "居中微左",
    practice: "利用后视镜观察车身与边线距离",
    tags: ["position"]
  },
  {
    id: 34,
    title: "自行车道白线",
    importance: "直接 Fail",
    standard: "实线不可越，虚线需观察",
    process: "视白实线为墙，任何时候(包括左转)不得压线",
    errors: "左转切入自行车道；避让对面车时压线",
    mnemonic: "白线是墙",
    practice: "养成给自行车道留余量的习惯",
    tags: ["position", "high"]
  },
  {
    id: 35,
    title: "直行观察频率",
    importance: "安全意识",
    standard: "保持警惕",
    process: "直行无操作时，每8-10秒扫视三镜",
    errors: "眼神呆滞只看前",
    mnemonic: "眼球要活",
    practice: "数秒练习",
    tags: ["basic"]
  },
  {
    id: 36,
    title: "红灯起步",
    importance: "安全意识",
    standard: "防范闯红灯车辆/行人",
    process: "绿灯亮 -> 快速扫视左右路口 -> 确认安全 -> 起步",
    errors: "绿灯亮弹射起步不观察",
    mnemonic: "绿灯也要看左右",
    practice: "路口起步必做动作",
    tags: ["junction"]
  },
  {
    id: 37,
    title: "T路口接近",
    importance: "高风险",
    standard: "防范行人",
    process: "接近T路口 -> 收油减速 -> 观察两边路口是否有行人横穿",
    errors: "快速冲过路口",
    mnemonic: "路口必减速",
    practice: "防御性驾驶",
    tags: ["junction"]
  },
  {
    id: 38,
    title: "直角倒车 (Reverse Corner)",
    importance: "高风险 / Fail",
    standard: "防止车头摆入车道",
    process: "倒车时 -> 频繁检查右前方(车头摆动区)盲点",
    errors: "只看后面不看前面车头",
    mnemonic: "顾后也要瞻前",
    practice: "倒车转弯时注意车头扫过的区域",
    tags: ["maneuver"]
  }
];

const PassNotes = () => {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = data.filter(item => {
    const matchesTag = filter === 'all' || item.tags.includes(filter);
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.process.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.mnemonic.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesTag && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-10">
          <h1 className="text-3xl font-bold text-green-700 sm:text-4xl mb-4">
            爱尔兰路考通关笔记 (自动档车型)
          </h1>
          <p className="text-lg text-gray-600">37个核心考点 · 自动档重点 · 考前必刷</p>
        </header>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-6 justify-between items-center">
            <div className="relative flex-1 w-full">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="搜索考点 (如: 环岛, 盲区, Stop)..."
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-full leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 text-base"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex flex-wrap gap-2 justify-center md:justify-end">
              {[
                { id: 'all', label: '全部' },
                { id: 'high', label: '高风险/Fail' },
                { id: 'roundabout', label: '环岛' },
                { id: 'junction', label: '路口' },
                { id: 'maneuver', label: '倒车/操作' }
              ].map(tag => (
                <button
                  key={tag.id}
                  onClick={() => setFilter(tag.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                    filter === tag.id
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {tag.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {filteredData.length === 0 ? (
          <div className="text-center py-12 text-gray-500 bg-white rounded-lg shadow-sm">
            未找到相关考点
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredData.map(item => {
              const isFail = item.importance.includes('Fail');
              const isHighRisk = item.importance.includes('高风险');
              const borderColor = isFail ? 'border-red-500' : (isHighRisk ? 'border-orange-400' : 'border-green-600');
              const badgeBg = isFail ? 'bg-red-50 text-red-700' : (isHighRisk ? 'bg-orange-50 text-orange-700' : 'bg-blue-50 text-blue-700');

              return (
                <div 
                  key={item.id} 
                  className={`bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 border-t-4 ${borderColor} overflow-hidden flex flex-col`}
                >
                  <div className="p-4 bg-gray-50 border-b border-gray-100">
                    <div className="flex justify-between items-start gap-2">
                      <h3 className="text-xl font-bold text-gray-800 leading-tight">
                        {item.title}
                      </h3>
                      <span className={`text-sm px-2 py-1 rounded font-semibold whitespace-nowrap ${badgeBg}`}>
                        {item.importance}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-5 flex-1 flex flex-col gap-4">
                    <div>
                      <div className="flex items-center gap-2 text-sm font-bold text-gray-500 uppercase tracking-wider mb-1">
                        <CheckCircle className="w-4 h-4" /> 标准要求
                      </div>
                      <div className="text-base text-gray-700">{item.standard}</div>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 text-sm font-bold text-gray-500 uppercase tracking-wider mb-1">
                        <ListOrdered className="w-4 h-4" /> 操作流程
                      </div>
                      <div className="text-base text-gray-700 bg-gray-50 p-3 rounded-md border-l-2 border-green-500 whitespace-pre-line">
                        {item.process}
                      </div>
                    </div>

                    <div className="pt-4 mt-auto border-t border-dashed border-gray-200 space-y-3">
                      <div>
                        <div className="flex items-center gap-2 text-sm font-bold text-gray-500 uppercase tracking-wider mb-1">
                          <AlertTriangle className="w-4 h-4" /> 常见错误
                        </div>
                        <div className="text-base text-red-600">{item.errors}</div>
                      </div>

                      <div>
                        <div className="flex items-center gap-2 text-sm font-bold text-gray-500 uppercase tracking-wider mb-1">
                          <Lightbulb className="w-4 h-4" /> 记忆口诀
                        </div>
                        <div className="text-base text-green-700 font-medium">{item.mnemonic}</div>
                      </div>

                      <div>
                        <div className="flex items-center gap-2 text-sm font-bold text-gray-500 uppercase tracking-wider mb-1">
                          <Dumbbell className="w-4 h-4" /> 练习建议
                        </div>
                        <div className="text-base text-gray-600">{item.practice}</div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default PassNotes;

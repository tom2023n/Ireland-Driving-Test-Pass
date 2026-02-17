import { ClipboardCheck, Clock, UserCheck, Car, MessageSquare, AlertCircle, CheckCircle2 } from 'lucide-react';

const TestDay = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">路考当天全流程详解</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          考试当天可能会很紧张，熟悉每一个环节可以帮助你从容应对。
          以下是爱尔兰驾照路考当天的标准流程。
        </p>
      </div>

      <div className="space-y-12">
        {/* Step 1: Before Departure */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
          <div className="bg-green-600 p-4 flex items-center">
            <ClipboardCheck className="text-white h-6 w-6 mr-3" />
            <h2 className="text-xl font-bold text-white">1. 出发前准备 (Before Departure)</h2>
          </div>
          <div className="p-6">
            <p className="text-gray-700 mb-4">出门前务必再次检查所有证件和车辆状态，任何一项缺失都可能导致考试直接取消。</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-bold text-green-900 mb-2">必备证件 Checklist</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start"><CheckCircle2 className="h-4 w-4 text-green-600 mr-2 mt-0.5" /> Learner Permit (实习驾照) - 必须有效且在身边</li>
                  <li className="flex items-start"><CheckCircle2 className="h-4 w-4 text-green-600 mr-2 mt-0.5" /> 车辆保险纸 (Insurance Disc) - 必须在有效期内且展示在挡风玻璃上(如何是中国驾照购买的保险，先将保险驾照更新成L照)</li>
                  <li className="flex items-start"><CheckCircle2 className="h-4 w-4 text-green-600 mr-2 mt-0.5" /> 路税纸 (Tax Disc) - 必须在有效期内且展示在挡风玻璃上</li>
                  <li className="flex items-start"><CheckCircle2 className="h-4 w-4 text-green-600 mr-2 mt-0.5" /> NCT Disc (如果车龄超过4年) - 必须在有效期内</li>
                </ul>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-bold text-green-900 mb-2">车辆检查</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start"><CheckCircle2 className="h-4 w-4 text-green-600 mr-2 mt-0.5" /> L 牌 (L-Plates) - 前后都要贴，必须是标准的红L白底</li>
                  <li className="flex items-start"><CheckCircle2 className="h-4 w-4 text-green-600 mr-2 mt-0.5" /> 刹车灯、转向灯、大灯 - 确保全部工作正常</li>
                  <li className="flex items-start"><CheckCircle2 className="h-4 w-4 text-green-600 mr-2 mt-0.5" /> 轮胎 - 胎纹深度合规，无明显破损</li>
                  <li className="flex items-start"><CheckCircle2 className="h-4 w-4 text-green-600 mr-2 mt-0.5" /> 车辆清洁 - 车内整洁，无异味</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Step 2: Arrival */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
          <div className="bg-green-600 p-4 flex items-center">
            <Clock className="text-white h-6 w-6 mr-3" />
            <h2 className="text-xl font-bold text-white">2. 到达考场 (Arrival)</h2>
          </div>
          <div className="p-6">
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="font-bold mr-2 text-green-700">时间控制:</span>
                建议提前 10-15 分钟到达。不要太早，以免在考场等待增加紧张感；绝对不要迟到。
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-2 text-green-700">停车:</span>
                到达考场停车场后，建议采用 **倒车入库 (Reverse Park)** 的方式停车。这样考试开始时，你可以直接向前开出，更加轻松。
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-2 text-green-700">等候:</span>
                锁好车，带上 Learner Permit 进入候考室 (Waiting Room)。保持安静，留意听考官叫你的名字。
              </li>
            </ul>
          </div>
        </div>

        {/* Step 3: Meet Tester */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
          <div className="bg-green-600 p-4 flex items-center">
            <UserCheck className="text-white h-6 w-6 mr-3" />
            <h2 className="text-xl font-bold text-white">3. 考官见面与文件检查</h2>
          </div>
          <div className="p-6">
            <p className="text-gray-700 mb-4">
              考官出来后会叫你的名字。向考官问好 (Good morning/afternoon)，然后跟随考官。
            </p>
            <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
              <h3 className="font-bold text-gray-900 mb-2">通常流程:</h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-700">
                <li>考官核对你的 Learner Permit。</li>
                <li>考官让你在评分表或平板电脑上签名 (声明车辆保险合规且你身体健康)。</li>
                <li>简单寒暄，询问你是否准备好。</li>
              </ol>
            </div>
          </div>
        </div>

        {/* Step 4: Oral & Checks */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
          <div className="bg-green-600 p-4 flex items-center">
            <MessageSquare className="text-white h-6 w-6 mr-3" />
            <h2 className="text-xl font-bold text-white">4. 口试与车辆检查</h2>
          </div>
          <div className="p-6">
            <p className="text-gray-700 mb-4">
              这个环节可能在办公室进行，也可能走到车旁进行。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-green-900 mb-3 text-lg">口试 (Oral Questions)</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm">
                  <li><strong>交通规则:</strong> 例如 "什么时候可以使用公交车道?", "全驾照最高罚分是多少?"</li>
                  <li><strong>路标识别:</strong> 考官展示一页路标图片，让你逐一说出含义。</li>
                  <li><strong>手势 (Hand Signals):</strong> 考官可能会问 "如果刹车灯坏了，怎么用手势表示减速/左转/右转?"</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-green-900 mb-3 text-lg">车辆检查 (Technical Checks)</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm">
                  <li><strong>引擎盖检查 (Under the Bonnet):</strong> 即使不懂修车，也要知道如何打开引擎盖，并指出: 机油 (Oil dipstick/filler), 冷却液 (Coolant), 刹车油 (Brake fluid), 玻璃水 (Windscreen wash), 转向助力油 (Power steering fluid)。</li>
                  <li><strong>车内控制 (Secondary Controls):</strong> 坐进车里，开启电源（不打火），演示: 大灯 (Dip/Full beam), 雾灯, 危险报警灯 (Hazards), 雨刷, 玻璃除雾 (Demister), 喇叭。</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Step 5: The Drive */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
          <div className="bg-green-600 p-4 flex items-center">
            <Car className="text-white h-6 w-6 mr-3" />
            <h2 className="text-xl font-bold text-white">5. 路考驾驶 (The Drive)</h2>
          </div>
          <div className="p-6">
            <p className="text-gray-700 mb-4">
              这是最关键的部分，通常持续 25-40 分钟。
            </p>
            <div className="space-y-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-bold text-green-900 mb-2">主要考核内容</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-700">
                  <li><span className="font-semibold">起步与停车:</span> 安全检查 (盲点), 平稳起步。</li>
                  <li><span className="font-semibold">路口处理:</span> 环岛, T字路口, 十字路口, 让行规则。</li>
                  <li><span className="font-semibold">位置控制:</span> 保持在车道中央，转弯切角不压线。</li>
                  <li><span className="font-semibold">观察:</span> 频繁查看后视镜 (每10-15秒)，变道/转弯前Blind Spot Check。</li>
                  <li><span className="font-semibold">信号:</span> 提前打灯，正确取消。</li>
                  <li><span className="font-semibold">速度:</span> 不超速，也不要无故过慢 (Progress)。</li>
                </ul>
              </div>
              
              <div className="border-t border-gray-200 pt-4 mt-4">
                <h3 className="font-bold text-green-900 mb-2">必考动作 (Manoeuvres)</h3>
                <p className="text-sm text-gray-600 mb-2">考官会找安静路段考以下动作:</p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-center"><span className="bg-green-100 text-green-800 px-2 py-0.5 rounded text-xs font-bold mr-2">倒车转角</span> Reverse around a corner</li>
                  <li className="flex items-center"><span className="bg-green-100 text-green-800 px-2 py-0.5 rounded text-xs font-bold mr-2">三点掉头</span> Turnabout (3-point turn)</li>
                  <li className="flex items-center"><span className="bg-green-100 text-green-800 px-2 py-0.5 rounded text-xs font-bold mr-2">坡道起步</span> Hill start</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Step 6: Result */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
          <div className="bg-green-600 p-4 flex items-center">
            <AlertCircle className="text-white h-6 w-6 mr-3" />
            <h2 className="text-xl font-bold text-white">6. 考试结束与结果</h2>
          </div>
          <div className="p-6">
            <p className="text-gray-700 mb-4">
              回到考场停车场，停好车，熄火。跟随考官回到办公室。
            </p>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 mb-2">宣布结果</h3>
                <p className="text-gray-600 text-sm">
                  考官会告诉你结果："I'm pleased to tell you that you have passed" 或者 "I'm sorry but you haven't been successful today"。
                </p>
              </div>
              <div className="flex-1 bg-green-50 p-4 rounded-lg border border-green-100">
                <h3 className="font-bold text-green-900 mb-2">评分标准</h3>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li><strong>Grade 1 (绿色):</strong> 轻微错误。不影响结果。</li>
                  <li><strong>Grade 2 (蓝色):</strong> 中等错误。允许犯8次，第9次导致挂科。</li>
                  <li><strong>Grade 3 (粉色):</strong> 严重/危险错误。犯1次直接挂科。</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TestDay;

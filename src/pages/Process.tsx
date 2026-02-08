import { BookOpen, CreditCard, Car, CheckCircle, Award, ArrowDown, ExternalLink } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      id: 1,
      title: '理论考试 (Driver Theory Test)',
      icon: <BookOpen className="h-6 w-6 text-white" />,
      color: 'bg-blue-500',
      shadow: 'shadow-blue-200',
      description: '这是考驾照的第一步，你需要通过计算机考试来证明你掌握了基本的交通规则。',
      details: [
        '准备工作：确保你有 PPSN 号码和 PSC (Public Services Card) 卡，这是预约考试的前提。',
        '报名：在 RSA 官网 (MyRoadSafety) 预约考试，费用 €45。',
        '考试形式：40道选择题，答对35道及以上通过。',
        '复习：推荐使用官方 APP "Official Driver Theory Test"，或使用itest.ie上的题库。',
        '有效期：通过后获得理论合格证，有效期2年。'
      ],
      registrationSteps: [
        '搜索 DTT (Driver Theory Test)',
        '点击 "Book a test"',
        '选择考试种类为 "Car or bike"',
        '选择考试地点，选个离自己近的',
        '选择考试证件，考试当天要带过去验证，一般选 PPSN 或护照',
        '选择考试种类 "BW Cars, tractors and work vehicles"',
        '选择语言 "Simplified Chinese" (考试时题目后面会有中文语音播报，完全不用担心不会英文)',
        '填写地点和想考的时间段',
        '选择考场及时间',
        '填写个人信息 + 付款，收到确认邮件'
      ]
    },
    {
      id: 2,
      title: '申请实习驾照 (Learner Permit)',
      icon: <CreditCard className="h-6 w-6 text-white" />,
      color: 'bg-emerald-500',
      shadow: 'shadow-emerald-200',
      description: '拿到理论合格证后，就可以申请实习驾照（绿本）了。',
      details: [
        '视力检查：去眼镜店做视力检查，并填写 D502 表格（有效期1个月）。',
        '所需材料：理论合格证、D502 表格、PSC 卡、居住证明（如水电单）。',
        '办理方式：推荐在 NDLS 官网在线办理，也去线下中心办理。',
        '费用：€35。',
        '注意：持有实习驾照驾车必须有持有全驾照2年以上的人陪同，且车辆必须贴 L 牌。'
      ]
    },
    {
      id: 3,
      title: '完成 EDT 课程 (Essential Driver Training)',
      icon: <Car className="h-6 w-6 text-white" />,
      color: 'bg-amber-500',
      shadow: 'shadow-amber-200',
      description: '爱尔兰规定新手必须完成12节必须驾驶课程。',
      details: [
        '寻找教练：在 RSA 官网查找你所在区域的 ADI (Approved Driving Instructor) 教练。',
        '课程内容：共12节课，每节课1小时，涵盖驾驶的各个方面。',
        '记录：每节课完成后，教练会将记录上传到 MyRoadSafety 系统。',
        '练车：除了 EDT，还需要大量的私下练习。',
        '六个月规则：第一次拿到 Learner Permit 必须满6个月才能参加路考（Reduced EDT 除外）。'
      ]
    },
    {
      id: 4,
      title: '路考 (Driving Test)',
      icon: <CheckCircle className="h-6 w-6 text-white" />,
      color: 'bg-rose-500',
      shadow: 'shadow-rose-200',
      description: '这是最具挑战性的一步，通过后即可获得全驾照。',
      details: [
        '报名：在 MyRoadSafety 官网报名，目前排队时间较长（通常需数周甚至数月）。',
        '费用：€85。',
        '考试内容：口语测试（交规+路标）、车辆检查 (Bonnet Check)、约30-40分钟的实际驾驶。',
        '评分：严重错误（Grade 3）直接挂科，中等错误（Grade 2）允许犯8个（单个项目最多3个）。'
      ]
    },
    {
      id: 5,
      title: '申请全驾照 (Full License)',
      icon: <Award className="h-6 w-6 text-white" />,
      color: 'bg-purple-500',
      shadow: 'shadow-purple-200',
      description: '恭喜！通过路考后，你就是一名合格的司机了。',
      details: [
        '办理：拿着路考合格证去 NDLS 申请全驾照（粉本）。',
        '新手期：前两年必须贴 N 牌。',
        '保险：拿到全驾照后，保险费用通常会大幅降低。'
      ]
    }
  ];

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-green-50 to-white pt-16 pb-32 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-30">
           <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-green-200 blur-3xl mix-blend-multiply filter"></div>
           <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-blue-200 blur-3xl mix-blend-multiply filter"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-6 ring-1 ring-green-200">
             5 Steps to Success
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
            爱尔兰考驾照 <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">全流程解析</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            从零基础到拿到 Full License，你需要经历这五个阶段。我们为你整理了每一步的关键信息，助你顺利通关。
          </p>
          
          <div className="mt-10 flex justify-center">
            <ArrowDown className="h-6 w-6 text-gray-400 animate-bounce" />
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20">
        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-200 via-gray-200 to-gray-100" />
          <div className="md:hidden absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200" />

          <div className="space-y-16">
            {steps.map((step, index) => (
              <div key={step.id} className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-center md:items-stretch group`}>
                
                {/* Icon Bubble */}
                <div className={`absolute left-8 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center w-16 h-16 rounded-full ${step.color} ${step.shadow} border-4 border-white shadow-xl z-10 transition-transform duration-300 group-hover:scale-110`}>
                  {step.icon}
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-1/2 pl-20 md:pl-0 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                  <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 relative overflow-hidden group/card hover:-translate-y-1">
                    {/* Top Accent */}
                    <div className={`absolute top-0 left-0 w-full h-1.5 ${step.color}`} />
                    
                    <div className="flex items-center justify-between mb-4">
                       <span className={`text-xs font-bold uppercase tracking-wider ${step.color.replace('bg-', 'text-')} bg-opacity-10 px-2 py-1 rounded bg-gray-50`}>
                         Step 0{step.id}
                       </span>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover/card:text-green-700 transition-colors">{step.title}</h3>
                    <p className="text-gray-600 mb-6 text-sm leading-relaxed">{step.description}</p>
                    
                    <div className="space-y-3 mb-6">
                      {step.details.map((detail, idx) => (
                        <div key={idx} className="flex items-start">
                          <div className={`mt-1.5 mr-3 min-w-[6px] h-[6px] rounded-full ${step.color} opacity-60`} />
                          <span className="text-gray-600 text-sm leading-relaxed">{detail}</span>
                        </div>
                      ))}
                    </div>

                    {/* @ts-ignore */}
                    {step.registrationSteps && (
                      <div className="mt-6 bg-slate-50 p-5 rounded-xl border border-slate-100">
                        <h5 className="font-bold text-slate-700 text-sm mb-3 flex items-center">
                          <span className="bg-slate-200 text-slate-600 w-5 h-5 rounded flex items-center justify-center text-xs mr-2">i</span>
                          报名流程参考
                        </h5>
                        <div className="space-y-2">
                          {/* @ts-ignore */}
                          {step.registrationSteps.map((rStep, rIdx) => (
                            <div key={rIdx} className="flex text-sm text-slate-600">
                              <span className="font-mono text-slate-400 mr-2 select-none w-4 text-right">{rIdx + 1}.</span>
                              <span>{rStep}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Empty space for the other side on desktop */}
                <div className="hidden md:block w-1/2" />
              </div>
            ))}
          </div>
        </div>

        {/* Reduced EDT Section */}
        <div className="mt-24">
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-1 shadow-lg border border-emerald-100">
            <div className="bg-white/50 backdrop-blur-sm rounded-[20px] p-8 md:p-10 relative overflow-hidden">
               {/* Background Pattern */}
               <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-gradient-to-br from-emerald-100/40 to-teal-100/40 blur-3xl" />

               <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                   <div className="flex items-center">
                      <div className="bg-emerald-100 p-3 rounded-2xl mr-4 shadow-sm">
                        <Award className="h-8 w-8 text-emerald-600" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900">中国驾照持有者福利</h2>
                        <p className="text-emerald-600 font-medium">Reduced EDT Programme</p>
                      </div>
                   </div>
                   <div className="hidden md:block">
                      <span className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 font-bold text-sm">
                        省时 · 省钱 · 快速拿证
                      </span>
                   </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-10">
                  <div className="space-y-6">
                    <div className="prose prose-emerald">
                       <p className="text-gray-700 leading-relaxed text-lg">
                         如果你持有有效的中国驾照（满2年以上），你可以申请 <strong>Reduced EDT (精简版驾驶课程)</strong>。一旦获批，你将享受以下优待：
                       </p>
                    </div>
                    <ul className="space-y-4">
                      <li className="flex items-start bg-white p-4 rounded-xl shadow-sm border border-emerald-50 hover:border-emerald-200 transition-colors">
                        <CheckCircle className="h-6 w-6 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
                        <div>
                           <span className="block text-gray-900 font-bold mb-1">免除6个月等待期</span>
                           <span className="text-gray-600 text-sm">拿到实习驾照后可以立即报名路考，无需等待半年实习期。</span>
                        </div>
                      </li>
                      <li className="flex items-start bg-white p-4 rounded-xl shadow-sm border border-emerald-50 hover:border-emerald-200 transition-colors">
                        <CheckCircle className="h-6 w-6 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
                         <div>
                           <span className="block text-gray-900 font-bold mb-1">课程减半</span>
                           <span className="text-gray-600 text-sm">只需完成 6 节 EDT 必修课（原为 12 节），省下一半课程费用。</span>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-2xl p-6 md:p-8 shadow-md border border-gray-100 relative">
                    <h5 className="font-bold text-gray-900 mb-6 flex items-center text-lg">
                      <span className="bg-emerald-100 text-emerald-600 w-8 h-8 rounded-lg flex items-center justify-center mr-3 text-sm">
                        <ExternalLink className="h-4 w-4" />
                      </span>
                      申请流程详解
                    </h5>
                    <ol className="relative border-l-2 border-emerald-100 ml-3 space-y-8">
                      <li className="ml-6 relative">
                        <span className="absolute -left-[31px] top-0 flex items-center justify-center w-7 h-7 bg-white rounded-full border-2 border-emerald-500 shadow-sm">
                          <span className="text-emerald-600 text-xs font-bold">1</span>
                        </span>
                        <h6 className="font-bold text-gray-900 mb-1">填写申请表</h6>
                        <p className="text-sm text-gray-600">
                          下载并填写 <a href="https://www.ndls.ie/images/Documents/Forms/169030%20RSA%20Foreign%20Licence%20(Reduced%20EDT)%201305_Web_HR.pdf" target="_blank" rel="noopener noreferrer" className="text-emerald-600 underline hover:text-emerald-700 font-medium">Reduced EDT 申请表</a>。
                        </p>
                      </li>
                      <li className="ml-6 relative">
                        <span className="absolute -left-[31px] top-0 flex items-center justify-center w-7 h-7 bg-white rounded-full border-2 border-emerald-500 shadow-sm">
                          <span className="text-emerald-600 text-xs font-bold">2</span>
                        </span>
                        <h6 className="font-bold text-gray-900 mb-2">准备材料</h6>
                        <ul className="text-sm text-gray-600 list-none space-y-2 bg-gray-50 p-3 rounded-lg border border-gray-100">
                          <li className="flex items-start"><span className="text-emerald-500 mr-2">•</span>填写好的申请表</li>
                          <li className="flex items-start"><span className="text-emerald-500 mr-2">•</span>中国驾照复印件（需要彩色复印件，4个面都要，最好复印在同一张纸上）</li>
                          <li className="flex items-start"><span className="text-emerald-500 mr-2">•</span>驾照英文翻译件（TB翻译大概30元人民币，不用公证）</li>
                          <li className="flex items-start"><span className="text-emerald-500 mr-2">•</span>国内安全驾驶记录和翻译（有人反馈可以不用这个国内安全驾驶记录，建议加上，以防需要补件耽误时间）</li>
                        </ul>
                      </li>
                      <li className="ml-6 relative">
                        <span className="absolute -left-[31px] top-0 flex items-center justify-center w-7 h-7 bg-white rounded-full border-2 border-emerald-500 shadow-sm">
                          <span className="text-emerald-600 text-xs font-bold">3</span>
                        </span>
                        <h6 className="font-bold text-gray-900 mb-1">邮寄申请</h6>
                        <p className="text-sm text-gray-600">
                          将以上材料邮寄至表格上注明的 NDLS Cork 地址（建议使用 Registered Post 挂号信）。
                        </p>
                      </li>
                      <li className="ml-6 relative">
                        <span className="absolute -left-[31px] top-0 flex items-center justify-center w-7 h-7 bg-white rounded-full border-2 border-emerald-500 shadow-sm">
                          <span className="text-emerald-600 text-xs font-bold">4</span>
                        </span>
                        <h6 className="font-bold text-gray-900 mb-1">等待审批 & 通知教练</h6>
                        <p className="text-sm text-gray-600">
                          2-4 周后收到 NDLS 批准信，出示给你的教练，即可在系统注册 6 节课的 Reduced EDT。
                        </p>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;

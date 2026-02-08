import { Link } from 'react-router-dom';
import { Map, ArrowRight, Milestone } from 'lucide-react';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-green-600 to-emerald-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 flex flex-col items-center text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/30 border border-green-400/30 text-green-50 mb-8 backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-green-300 mr-2 animate-pulse"></span>
            爱尔兰华人首选驾考助手
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tight leading-tight">
            轻松搞定 <span className="text-green-300">爱尔兰驾照</span>
          </h1>
          <p className="text-xl md:text-2xl text-green-100 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            从理论考试到路考拿证，提供全方位的中文指南、路线解析和实用技巧，助你顺利通过！
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link
              to="/process"
              className="btn-primary bg-white text-green-700 hover:bg-green-50 border-white hover:text-green-800"
            >
              查看全流程指南
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/test-routes"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-green-300 text-base font-medium rounded-full text-green-50 hover:bg-white/10 transition-all duration-200"
            >
              浏览考试路线
            </Link>
          </div>
        </div>
        
        {/* Wave Shape Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="fill-gray-50 w-full h-12 md:h-24" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">一站式备考平台</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              无论你是刚开始准备，还是即将参加路考，这里都有你需要的内容。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 card-hover flex flex-col h-full">
              <div className="bg-blue-100 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 rotate-3">
                <Milestone className="text-blue-600 h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">全流程指南</h3>
              <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
                详细解析从申请 Learner Permit 到 Full License 的每一步骤，包含Reduced EDT福利详解，让你不再迷茫。
              </p>
              <Link to="/process" className="text-blue-600 font-semibold hover:text-blue-700 flex items-center group">
                了解详情 <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

             {/* Feature 3 */}
             <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 card-hover flex flex-col h-full">
              <div className="bg-purple-100 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 rotate-3">
                <Map className="text-purple-600 h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">考点路线解析</h3>
              <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
                收录都柏林及周边热门考点的详细路线图、通过率数据和易错点提示，助你提前熟悉考场环境。
              </p>
              <Link to="/test-routes" className="text-purple-600 font-semibold hover:text-purple-700 flex items-center group">
                查看路线 <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Steps Section */}
      <div className="bg-white py-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-0">考驾照只需四步</h2>
            <Link to="/process" className="text-green-600 font-medium hover:text-green-700 flex items-center">
              查看完整流程图 <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connecting Line (Desktop only) */}
            <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gray-200 -z-10"></div>
            
            {[
              { title: '1. 理论考试', desc: '复习题库，通过电脑考试，获得理论合格证', icon: '📝' },
              { title: '2. 申请实习驾照', desc: '凭借理论合格证申请 Learner Permit', icon: '🪪' },
              { title: '3. 练车 & EDT', desc: '完成12节必修课，并练习至少6个月', icon: '🚗' },
              { title: '4. 参加路考', desc: '报名路考，通过后即可申请全驾照', icon: '🏆' },
            ].map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center group">
                <div className="bg-white w-24 h-24 rounded-full flex items-center justify-center shadow-md mb-6 border-4 border-white ring-1 ring-gray-100 group-hover:ring-green-500 group-hover:scale-110 transition-all duration-300">
                  <span className="text-4xl">{step.icon}</span>
                </div>
                <div className="bg-gray-50 rounded-xl p-6 w-full h-full hover:bg-green-50 transition-colors duration-300">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

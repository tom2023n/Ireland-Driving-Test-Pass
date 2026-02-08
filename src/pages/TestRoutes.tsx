import { MapPin, Navigation, AlertTriangle, TrendingUp } from 'lucide-react';
import { testRoutes } from '../data/testRoutes';

const TestRoutes = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">热门考点路线解析</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          熟悉考试路线是提高通过率的关键。这里整理了都柏林及周边地区热门考点的常见路线和注意事项。
        </p>
      </div>

      {/* Pass Rate Chart Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-12 max-w-3xl mx-auto">
        <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
          <TrendingUp className="h-5 w-5 text-green-600 mr-2" />
          考点通过率排行 (RSA 历史数据)
        </h2>
        <div className="space-y-4">
          {[...testRoutes]
            .sort((a, b) => parseFloat(b.passRate) - parseFloat(a.passRate))
            .map((center) => {
              const rate = parseFloat(center.passRate);
              return (
                <div key={center.id}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium text-gray-700">{center.centerName}</span>
                    <span className="font-bold text-gray-900">{center.passRate}</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-3">
                    <div 
                      className={`h-3 rounded-full transition-all duration-1000 ${rate >= 50 ? 'bg-green-500' : 'bg-amber-500'}`} 
                      style={{ width: `${rate}%` }}
                    ></div>
                  </div>
                </div>
              );
            })}
        </div>
        <p className="text-xs text-gray-400 mt-6 text-right">
          * 数据来源: RSA Driving Test Pass Rates. 仅供参考，通过率受多种因素影响。
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {testRoutes.map((center) => (
          <div key={center.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-gray-100">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {center.centerName}
                  </h3>
                  <div className="flex items-start text-gray-600">
                    <MapPin className="h-4 w-4 mr-1.5 mt-0.5 flex-shrink-0 text-green-600" />
                    <div>
                      <p className="text-sm font-medium">{center.location}</p>
                      <p className="text-xs text-gray-500 mt-0.5">{center.address}</p>
                    </div>
                  </div>
                </div>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 flex-shrink-0 ml-2">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  通过率 {center.passRate}
                </span>
              </div>
              
              <p className="text-gray-600 text-sm mb-6 bg-gray-50 p-3 rounded-lg border border-gray-200">
                {center.description}
              </p>

              <div className="space-y-6">
                {center.routes.map((route, idx) => (
                  <div key={idx} className="border-t pt-4 first:border-t-0 first:pt-0">
                    <h4 className="font-semibold text-gray-800 mb-2 flex items-center text-sm">
                      <Navigation className="h-4 w-4 text-blue-500 mr-2" />
                      {route.name}
                    </h4>
                    
                    <ul className="space-y-1 mb-3 ml-6">
                      {route.points.map((point, pIdx) => (
                        <li key={pIdx} className="text-xs text-gray-600 list-disc">
                          {point}
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-start text-xs bg-yellow-50 p-2 rounded text-yellow-800 border border-yellow-100">
                      <AlertTriangle className="h-3 w-3 mr-1.5 flex-shrink-0 mt-0.5" />
                      <span>{route.tips}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-50 px-6 py-3 border-t border-gray-100">
              <p className="text-xs text-gray-500 text-center">
                * 路线仅供参考，实际考试路线可能由考官随机调整
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestRoutes;

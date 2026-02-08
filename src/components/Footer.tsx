import { Car } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Car className="h-8 w-8 text-green-400" />
              <span className="ml-2 text-xl font-bold">爱尔兰驾考通</span>
            </div>
            <p className="text-gray-400 text-sm">
              专为在爱尔兰的华人打造的驾照考试学习平台，助你轻松拿到 Full License。
            </p>
          </div>
          <div className="md:text-right">
            <h3 className="text-lg font-semibold mb-4">快速链接</h3>
            <ul className="space-y-2 text-gray-400 inline-block text-left">
              <li><Link to="/process" className="hover:text-white">考驾照流程</Link></li>
              <li><Link to="/test-routes" className="hover:text-white">考试路线</Link></li>
              <li><Link to="/pass-notes" className="hover:text-white">通关笔记</Link></li>
              <li><a href="https://www.rsa.ie/docs/default-source/road-safety/r1---rules-of-the-road/ruleoftheroad_book-for-web.pdf?sfvrsn=b5d57830_7" target="_blank" rel="noopener noreferrer" className="hover:text-white">交通规则书 (PDF)</a></li>
              <li><a href="https://tom2023n.github.io/my-single-page/" target="_blank" rel="noopener noreferrer" className="hover:text-white">路标学习</a></li>
              <li><a href="https://tom2023n.github.io/rules-of-the-road/" target="_blank" rel="noopener noreferrer" className="hover:text-white">交规问答</a></li>
              <li><Link to="/test-day" className="hover:text-white">考试当天流程</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
          <p className="flex flex-col md:flex-row justify-center items-center gap-2">
            <span>&copy; {new Date().getFullYear()} 爱尔兰驾考通. All rights reserved.</span>
            <span className="hidden md:inline">|</span>
            <span>Tom制作</span>
            <span className="hidden md:inline">|</span>
            <span>如有错误欢迎指正</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

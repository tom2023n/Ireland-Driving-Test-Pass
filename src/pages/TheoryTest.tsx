import { useState } from 'react';
import { questions } from '../data/questions';
import { CheckCircle, XCircle, AlertTriangle, ArrowRight, RefreshCcw } from 'lucide-react';

const TheoryTest = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];

  const handleOptionClick = (index: number) => {
    if (showExplanation) return; // Prevent changing answer after selection

    setSelectedOption(index);
    setShowExplanation(true);

    if (index === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
      setShowExplanation(false);
    } else {
      setIsFinished(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setShowExplanation(false);
    setScore(0);
    setIsFinished(false);
  };

  if (isFinished) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-12 text-center">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="mb-6">
            {score >= questions.length * 0.8 ? (
              <CheckCircle className="h-20 w-20 text-green-500 mx-auto" />
            ) : (
              <AlertTriangle className="h-20 w-20 text-yellow-500 mx-auto" />
            )}
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">测试完成！</h2>
          <p className="text-xl text-gray-600 mb-8">
            你的得分是：<span className="font-bold text-blue-600">{score}</span> / {questions.length}
          </p>
          <p className="text-gray-500 mb-8">
            {score >= questions.length * 0.8 
              ? "恭喜！你通过了模拟测试。继续保持！" 
              : "别灰心，多加练习一定能通过！"}
          </p>
          <button
            onClick={restartQuiz}
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            <RefreshCcw className="mr-2 h-5 w-5" />
            再测一次
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900">理论考试模拟</h1>
        <div className="text-gray-500 font-medium">
          进度: {currentQuestionIndex + 1} / {questions.length}
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        {/* Question Section */}
        <div className="p-6 md:p-8 border-b border-gray-100">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mb-4">
            {currentQuestion.category}
          </span>
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
            {currentQuestion.question}
          </h2>
        </div>

        {/* Options Section */}
        <div className="p-6 md:p-8 bg-gray-50 space-y-3">
          {currentQuestion.options.map((option, index) => {
            let optionClass = "w-full text-left p-4 rounded-lg border-2 transition-all duration-200 flex items-center justify-between ";
            
            if (showExplanation) {
              if (index === currentQuestion.correctAnswer) {
                optionClass += "border-green-500 bg-green-50 text-green-900";
              } else if (index === selectedOption) {
                optionClass += "border-red-500 bg-red-50 text-red-900";
              } else {
                optionClass += "border-gray-200 bg-white text-gray-400 opacity-60";
              }
            } else {
              optionClass += "border-gray-200 bg-white hover:border-blue-300 hover:bg-blue-50 text-gray-700";
            }

            return (
              <button
                key={index}
                onClick={() => handleOptionClick(index)}
                disabled={showExplanation}
                className={optionClass}
              >
                <span className="font-medium">{option}</span>
                {showExplanation && index === currentQuestion.correctAnswer && (
                  <CheckCircle className="h-5 w-5 text-green-500" />
                )}
                {showExplanation && index === selectedOption && index !== currentQuestion.correctAnswer && (
                  <XCircle className="h-5 w-5 text-red-500" />
                )}
              </button>
            );
          })}
        </div>

        {/* Explanation Footer */}
        {showExplanation && (
          <div className="p-6 md:p-8 bg-blue-50 border-t border-blue-100">
            <div className="mb-4">
              <h3 className="font-bold text-blue-900 mb-1">解析：</h3>
              <p className="text-blue-800">{currentQuestion.explanation}</p>
            </div>
            <div className="flex justify-end">
              <button
                onClick={handleNextQuestion}
                className="inline-flex items-center px-6 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                {currentQuestionIndex === questions.length - 1 ? "查看结果" : "下一题"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TheoryTest;

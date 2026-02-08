import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Process from './pages/Process';
import TheoryTest from './pages/TheoryTest';
import DrivingTest from './pages/DrivingTest';
import TestRoutes from './pages/TestRoutes';
import TestDay from './pages/TestDay';
import PassNotes from './pages/PassNotes';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="process" element={<Process />} />
          <Route path="test-day" element={<TestDay />} />
          <Route path="pass-notes" element={<PassNotes />} />
          <Route path="theory" element={<TheoryTest />} />
          <Route path="driving-test" element={<DrivingTest />} />
          <Route path="test-routes" element={<TestRoutes />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import NotFound from './pages/notfound/NotFound';
import NavBar from './components/navbar/NavBar';
import PathFinding from './pages/pathfinding/PathFinding';

function App() {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<Home />} />
        <Route path="pathfind" element={<PathFinding />} />
        <Route path="sorting" />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;

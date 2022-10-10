import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import NotFound from './pages/notfound/NotFound';
import NavBar from './components/navbar/NavBar';
import PathFinding from './pages/pathfinding/PathFinding';
import Sorting from './pages/sorting/Sorting';

function App() {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<Home />} />
        <Route path="pathfind" element={<PathFinding />} />
        <Route path="sorting" element={<Sorting />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;

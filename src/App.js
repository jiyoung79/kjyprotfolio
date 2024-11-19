import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './layouts/Layout';
import Dashboard from './pages/jsx/Dashboard';
import Aboutme from './pages/jsx/Aboutme';
import Skills from './pages/jsx/Skills';
import Archiving from './pages/jsx/Archiving';
import Projects from './pages/jsx/Projects';
import NotFound from './pages/jsx/NotFound';

function App() {
   return (
      <Layout>
         <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/' element={<Aboutme />} />
            <Route path='/' element={<Skills />} />
            <Route path='/' element={<Archiving />} />
            <Route path='/' element={<Projects />} />
            <Route path='*' element={<NotFound />} />
         </Routes>
      </Layout>
   );
}

export default App;

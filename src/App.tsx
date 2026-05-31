import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ProjectDetail from './pages/ProjectDetail'
import CriativosHub from './pages/projects/CriativosHub'
import CriativosCategory from './pages/projects/CriativosCategory'
import ScrollToTop from './components/ScrollToTop'

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projeto/pecas-graficas" element={<CriativosHub />} />
        <Route path="/projeto/pecas-graficas/:category" element={<CriativosCategory />} />
        <Route path="/projeto/:slug" element={<ProjectDetail />} />
        <Route path="*" element={<ProjectDetail />} />
      </Routes>
    </>
  )
}

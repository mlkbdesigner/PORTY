import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ProjectDetail from './pages/ProjectDetail'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projeto/:slug" element={<ProjectDetail />} />
      <Route path="*" element={<ProjectDetail />} />
    </Routes>
  )
}

// router
import {Route, Routes} from 'react-router-dom';
// pages
import Home from './pages/Home'
import AdminPanel from './pages/AdminPanel'
// components
import TopNavigation from './components/layout/TopNavigation'
import { ThemeProvider } from './components/theme/ThemeProvider'

// styles
import './App.css'

function App() {

  return (
    <>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <main className="flex flex-col h-screen">
        <TopNavigation />
        <div className="p-[24px]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="admin-panel" element={<AdminPanel />} />
          </Routes>
        </div>
      </main>
    </ThemeProvider>
    </>
  )
}

export default App

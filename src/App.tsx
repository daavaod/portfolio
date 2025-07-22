import './App.css'
// pages
import Home from './components/pages/Home'
// components
import TopNavigation from './components/layout/TopNavigation'
import { ThemeProvider } from './components/theme/ThemeProvider'

function App() {

  return (
    <>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <main className="flex flex-col h-screen">
        <TopNavigation />
        {/* <QueryClientComp /> */}
        <Home />
      </main>
    </ThemeProvider>
    </>
  )
}

export default App

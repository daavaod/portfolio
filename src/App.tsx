import './App.css'
// components
import Card from './components/card/card'
import QueryClientComp from './components/practice/QueryClientComp'
import TopNavigation from './components/layout/TopNavigation'
import { ThemeProvider } from './components/theme/ThemeProvider'

function App() {

  return (
    <>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <main className="flex flex-col h-screen">
        <TopNavigation />
        <QueryClientComp />
        <div className="grid grid-cols-3 gap-8">
            <Card>g1</Card>
            <Card>g2</Card>
            <Card>g3</Card>
        </div>
      </main>
    </ThemeProvider>
    </>
  )
}

export default App

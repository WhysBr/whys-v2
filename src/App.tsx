import HalideLanding from './components/ui/HalideLanding'
import AspirationSection from './components/ui/AspirationSection'
import ContactSection from './components/ui/ContactSection'
import { MinimalFooter } from './components/ui/minimal-footer'

function App() {
  return (
    <main className="w-full bg-[#0a0a0a]">
      <HalideLanding />
      <AspirationSection />
      <ContactSection />
      <MinimalFooter />
    </main>
  )
}

export default App

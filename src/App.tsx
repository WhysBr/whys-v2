import HalideLanding from './components/ui/HalideLanding'
import AspirationSection from './components/ui/AspirationSection'
import WorksSection from './components/ui/WorksSection'
import FAQSection from './components/ui/FAQSection'
import ContactSection from './components/ui/ContactSection'

function App() {
  return (
    <main className="w-full bg-[#0a0a0a]">
      <HalideLanding />
      <AspirationSection />
      <WorksSection />
      <FAQSection />
      <ContactSection />
    </main>
  )
}

export default App

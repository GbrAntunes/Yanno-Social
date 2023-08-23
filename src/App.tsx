import { Benefits } from './components/Benefits'
import { CapsuleSection } from './components/CapsuleSection'
import { Categories } from './components/Categories'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { InfoCards } from './components/InfoCards'
import { OmegaSection } from './components/OmegaSection'
import { PrescriberBanner } from './components/PrescriberBanner'
import { Products } from './components/Products'
import { QuizBanner } from './components/QuizBanner'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { ThemeProvider } from 'styled-components'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <Benefits />
      <Categories />
      <QuizBanner />
      <InfoCards />
      <CapsuleSection />
      <Products />
      <PrescriberBanner />
      <OmegaSection />
      <Footer />

      <GlobalStyle />
    </ThemeProvider>
  )
}

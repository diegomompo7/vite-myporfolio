import './App.css'
import { Nav } from './components/Nav/Nav'
import { Header } from './components/Header/Header'
import { About } from './components/About/About'
import { Habilities } from './components/Habilities/Habilities'
import { Projects } from './components/Projects/Projects'
import { Contact } from './components/Contact/Contact'
import { Footer } from './components/Footer/Footer'
import { IntlProvider } from "react-intl";
import English from "./lang/en.json";
import Spanish from "./lang/es.json";
import { createContext, useEffect, useState } from 'react'

export const LanguageSelector = createContext<any>(null)

function App() {

  const [locale, setLocale] = useState<string>(navigator.language);
  const [messages, setMessages] = useState<any>();

  useEffect(() => {
    switch (locale) {
      case 'es-ES':
        setMessages(Spanish);
        break;
      default:
        setMessages(English);
    }
  }, [locale]);

  return (
    <div>
      <LanguageSelector.Provider value={{ language: locale, setLanguage: setLocale }}>
        <IntlProvider messages={messages} locale={locale}>
          <Nav></Nav>
          <Header></Header>
          <About></About>
          <Habilities></Habilities>
          <Projects></Projects>
          <Contact></Contact>
          <Footer></Footer>
        </IntlProvider>
      </LanguageSelector.Provider>
    </div >
  )
}

export default App

import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home/Home"
import Footer from "./components/Footer/Footer"
import styles from "./App.module.css"

function App() {
  return (
    <div className={styles.appContainer}>
      <Navbar />
      <main className={styles.mainContent}>
        <Home />
      </main>
      <Footer />
    </div>
  )
}

export default App

import { ToastContainer } from "react-toastify"
import "./components/Styles/reset.css"
import { HomePage } from "./pages/homepage"

function App() {
  return <>
    <HomePage/>
    <ToastContainer/>
  </>
}

export default App

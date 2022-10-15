import './App.css'
import './WatsapIcon/Watsapp.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
// COMPONENTS
import NewExpenditur from './components/NewExpenditur'
import ExpenditurList from './components/ExpenditurList'
import Watsap from './WatsapIcon/Watsap'



function App() {
  
  return (
    <div className='container'>
      <ToastContainer
        autoClose={3000}
        pauseOnHover={false}
        pauseOnFocusLoss={false}
      />
      <NewExpenditur />
      <ExpenditurList /> 
      <Watsap/>
      
    </div>
  )
}

export default App

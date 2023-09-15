
import { Mainpage } from './pages/Mainpage/Mainpage'
import { Route, Routes } from 'react-router'
import { Direction } from './pages/Usedirection/Direction'
import { Localstorage } from './pages/Uselocalstorage/Localstoragepage'
import { Toggle } from './pages/Usetoggle/Toggle'


function App() {
 

  return (
    <div>
      <Routes>
        <Route path='/' element={<Mainpage/>} />
        <Route path='/direction' element={<Direction/>}/>
        <Route path='/localstorage' element={<Localstorage/>} />
        <Route path='/toggle' element={<Toggle/>}/>
      </Routes>
      
     </div>
  )
}

export default App

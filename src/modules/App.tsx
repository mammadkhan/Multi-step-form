import type { RootState } from '../state/store'
import {useSelector} from 'react-redux'

import Status from '../components/Status'
import First from '../components/First'
import Second from '../components/Second'
import Third from '../components/Third'
import Fourth from '../components/Fourth'
import Last from '../components/Last'

import '../styles/App.scss'


function App() {

  const pages = [<First/>,<Second/>,<Third/>,<Fourth/>,<Last/>]

  const page = useSelector((state:RootState)=> state.page.page)

  return (
    <div className="App">
      <Status />
      <form>
          {pages[page]}
      </form>
    </div>
  )
}

export default App

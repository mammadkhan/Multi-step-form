import Status from '../components/Status'
import First from '../components/First'
import Second from '../components/Second'
import Third from '../components/Third'
import Fourth from '../components/Fourth'
import Last from '../components/Last'

import '../styles/App.scss'


function App() {

  return (
    <div className="App">
      <Status />
      <form>
        <Last />
      </form>
    </div>
  )
}

export default App

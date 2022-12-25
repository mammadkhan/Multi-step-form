import {ChangeEvent} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { saveThird } from '../state/formSlice'
import { next,previus} from '../state/pageSlice' 
import { RootState } from '../state/store'


export default function Third() {

  const formSlice = useSelector((state:RootState) => state.form)
  const dispatch = useDispatch()

  const onChange = (e:ChangeEvent<HTMLInputElement>) => {
    dispatch(saveThird({...formSlice.addons,[e.target.value as keyof typeof formSlice.addons]:!formSlice.addons[e.target.value as keyof typeof formSlice.addons]}))
  }
  

  return (
    <div className='third'>
        <div className="info">
          <h1>Pick add-ons</h1>
          <p>Add-ons help enhance your gaming experience.</p>
        </div>
        <div className="addons">
          <div className='addon'>
            <input id='os' type="checkbox" value="Online service" onChange={(e)=>onChange(e)} checked={formSlice.addons['Online service']}/>
            <label htmlFor='os'>
              <div>
                <h2>Online service</h2>
                <p>Access to multiplayer games</p>
              </div>
              <p className='price'>+{formSlice.addonPrices['Online service']}</p>
            </label>
          </div>
          <div className='addon'>
            <input id='ls' type="checkbox" value="Larger storage" onChange={(e)=>onChange(e)}  checked={formSlice.addons['Larger storage']}/>
            <label htmlFor='ls'>
              <div>
                <h2>Larger storage</h2>
                <p>Extra 1TB of cloud save</p>
              </div>
              <p className='price'>+{formSlice.addonPrices['Larger storage']}</p>
            </label>
          </div>
          <div className='addon'>
            <input id='cp' type="checkbox" value="Customizable profile" onChange={(e)=>onChange(e)}  checked={formSlice.addons['Customizable profile']}/>
            <label htmlFor='cp'>
              <div>
                <h2>Customizable profile</h2>
                <p>Custom theme on your profile</p>
              </div>
              <p className='price'>+{formSlice.addonPrices['Customizable profile']}</p>
            </label>
          </div>
        </div>
        <div className='nextContainer'>
            <button onClick={()=>dispatch(previus())}>Go Back</button>
            <button onClick={()=>{dispatch(saveThird(formSlice.addons)),dispatch(next())}}>Next Step</button>
        </div>
    </div>
  )
}

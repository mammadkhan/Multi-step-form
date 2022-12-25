import {ChangeEvent,MouseEvent} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { next,previus} from '../state/pageSlice' 
import { RootState } from '../state/store'

import arcade from '../assets/images/icon-arcade.svg'
import advanced from '../assets/images/icon-advanced.svg'
import pro from '../assets/images/icon-pro.svg'
import { saveSecond } from '../state/formSlice'


export default function Second() {

  const formSlice = useSelector((state:RootState) => state.form)
  const dispatch = useDispatch()

  const onChange = (e:ChangeEvent<HTMLInputElement>) => {
    dispatch(saveSecond({...formSlice.plan,option:e.target.value}))
  }

  const checkboxChange = (e:ChangeEvent<HTMLInputElement>) => {
    if(e.target.value === "Monthly"){
      dispatch(saveSecond({...formSlice.plan,type:"Yearly"}))
    }else if(e.target.value === "Yearly"){
      dispatch(saveSecond({...formSlice.plan,type:"Monthly"}))
    }
  }

  const nextPage = (e:MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if(formSlice.plan.option !== ""){
      console.log(formSlice.plan)
      dispatch(next())
    }
  }

  return (
    <div className='second'>
        <div className="info">
          <h1>Select your plan</h1>
          <p>You have the option of monthly or yearly billing.</p>
        </div>
        <div className="choices">
          <div className='choice'>
            <input type="radio" name="payment" id="arcade" value="Arcade" onChange={(e)=>onChange(e)} checked={formSlice.plan.option === "Arcade"}/>
            <label htmlFor='arcade'>
              <img src={arcade} alt="#" />
              <div>
                <h2>Arcade</h2>
                <p>{formSlice.planPrices.Arcade}</p>
                {formSlice.plan.type === "Yearly" && <p className='monthsfree'>2 months free</p>}
              </div>
            </label>
          </div>
          <div className='choice'>
            <input type="radio" name="payment" id="advanced" value="Advanced" onChange={(e)=>onChange(e)} checked={formSlice.plan.option === "Advanced"}/>
            <label htmlFor='advanced'>
              <img src={advanced} alt="#" />
              <div>
                <h2>Advanced</h2>
                <p>{formSlice.planPrices.Advanced}</p>
                {formSlice.plan.type === "Yearly" && <p className='monthsfree'>2 months free</p>}
              </div>
            </label>
          </div>
          <div className='choice'>
            <input type="radio" name="payment" id="pro" value="Pro" onChange={(e)=>onChange(e)} checked={formSlice.plan.option === "Pro"}/>
            <label htmlFor='pro'>
              <img src={pro} alt="#" />
              <div>
                <h2>Pro</h2>
                <p>{formSlice.planPrices.Pro}</p>
                {formSlice.plan.type === "Yearly" && <p className='monthsfree'>2 months free</p>}
              </div>
            </label>
          </div>
        </div>
        <div className='toggle'>
          <p className={formSlice.plan.type === "Monthly"?'active':''}>Monthly</p>
          <input type="checkbox" value={formSlice.plan.type} onChange={(e)=>checkboxChange(e)} checked={formSlice.plan.type ==="Yearly"}/>
          <p className={formSlice.plan.type === "Yearly"?'active':''}>Yearly</p>
        </div>
        <div className='nextContainer'>
          <button onClick={()=>dispatch(previus())}>Go Back</button>
          <button onClick={(e)=>nextPage(e)}>Next Step</button>
        </div>
    </div>
  )
}

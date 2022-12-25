import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { next,previus, changeButton} from '../state/pageSlice' 
import { RootState } from '../state/store'

export default function Fourth() {

  const formSlice = useSelector((state:RootState) => state.form)

  const dispatch = useDispatch()

  return (
    <div className='fourth'>
        <div className="info">
          <h1>Finishing up</h1>
          <p>Double-check everything looks OK before confirming.</p>
        </div>
        <div className='checkUp'>
          <div className='subscription' style={Object.values(formSlice.addons).includes(true) ? {paddingBottom:'20px'}:{paddingBottom:'0px'}}>
            <div>
              <h2>{formSlice.plan.option}({formSlice.plan.type})</h2>
              <button onClick={()=>dispatch(changeButton())}>Change</button>
            </div>
            <p className='price'>{formSlice.planPrices[formSlice.plan.option as keyof typeof formSlice.planPrices]}</p>
          </div>
          {Object.values(formSlice.addons).includes(true) && (<div className="addons">
            {Object.entries(formSlice.addons).map((addon)=>(
              addon[1] && (<div>
                <h3>{addon[0]}</h3>
                <p className='price'>+{formSlice.addonPrices[addon[0] as keyof typeof formSlice.addonPrices]}</p>
              </div>)
            ))}
          </div>
        )}
        </div>
        <div className="total">
          <h3>Total ({formSlice.plan.type === "Yearly" ? "per year" : "per month"})</h3>
          <p className='price'>+{formSlice.final}</p>
        </div>
        <div className='nextContainer'>
          <button onClick={()=>dispatch(previus())}>Go Back</button>
          <button onClick={()=>dispatch(next())}>Confirm</button>
        </div>
    </div>
  )
}

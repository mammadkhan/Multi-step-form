import React from 'react'
import {useSelector} from 'react-redux'
import type { RootState } from '../state/store'

export default function Status() {

  const page = useSelector((state:RootState) => state.page.page)

  return (
    <div className='status'>
      <div>
        <span className={page==0 ? 'statusStep selected' : "statusStep"}>1</span>
        <div className='stepInfo'>
          <p>STEP 1</p>
          <h2>YOUR INFO</h2>
        </div>
      </div>
      <div>
        <span className={page==1 ? 'statusStep selected' : "statusStep"}>2</span>
        <div className='stepInfo'>
          <p>STEP 2</p>
          <h2>SELECT PLAN</h2>
        </div>
      </div>
      <div>
      <span className={page==2 ? 'statusStep selected' : "statusStep"}>3</span>
      <div className='stepInfo'>
        <p>STEP 3</p>
        <h2>ADD-ONS</h2>
      </div>
      </div>
      <div>
      <span className={(page==3 || page == 4) ? 'statusStep selected' : "statusStep"}>4</span>
      <div className='stepInfo'>
        <p>STEP 4</p>
        <h2>SUMMARY</h2>
      </div>
      </div>
    </div>
  )
}

import {ChangeEvent, MouseEvent, useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { saveFirst } from '../state/formSlice'
import type { RootState } from '../state/store'
import { next } from '../state/pageSlice' 

export default function First() {
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  const numberRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/

  const formSlice = useSelector((state:RootState) => state.form)
  const dispatch = useDispatch()

  const [nameError,setNameError] = useState("")
  const [emailError,setEmailError] = useState("")
  const [numberError,setNumberError] = useState("")

  const onChange = (event:ChangeEvent<HTMLInputElement>) => {
    setNameError("")
    setEmailError("")
    setNumberError("")
    if(event.target.name==="name"){
      dispatch(saveFirst({...formSlice,name:event.target.value}))
    }else if(event.target.name==="email"){
      dispatch(saveFirst({...formSlice,email:event.target.value}))
    }else if(event.target.name==="number"){
      dispatch(saveFirst({...formSlice,number:event.target.value}))
    }
  }

  const nextPage = (event:MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    if(formSlice.name === ""){
      setNameError("This field is required.")
    }
    if(formSlice.email===""){
      setEmailError("This field is required.")
    }else if(!(emailRegex.test(formSlice.email))){
      setEmailError("Wrong email format.")
    }
    if(formSlice.number===""){
      setNumberError("This field is required.")
    }else if(!(numberRegex.test(formSlice.number))){
      setNumberError("Wrong number format.")
    }
    if(formSlice.name !== "" && formSlice.email !== "" && formSlice.number!== "" && emailRegex.test(formSlice.email) && numberRegex.test(formSlice.number)){
      dispatch(next())
    }
  }

  return (
    <div className='first'>
        <div className='info'>
          <h1>Personal info</h1>
          <p>Please provide your name, email, address and phone number.</p>
        </div>
        <div className="fields">
          <div className='field'>
            <label htmlFor="name">Name <span>{nameError}</span></label>
            <input className={nameError!==""?"error":""} type="text" name="name" id="name" value={formSlice.name} onChange={(e)=>onChange(e)} placeholder="e.g Stephen King" />
          </div>
          <div className='field'>
            <label htmlFor="email">Email Address <span>{emailError}</span></label>
            <input className={emailError!==""?"error":""} type="email" name="email" id="email" value={formSlice.email} onChange={(e)=>onChange(e)} placeholder="e.g stephenking@lorem.com" />
          </div>
          <div className='field'>
            <label htmlFor="number">Phone Number <span>{numberError}</span></label>
            <input className={numberError!==""?"error":""} type="tel" name="number" id="number" value={formSlice.number} onChange={(e)=>onChange(e)} placeholder="e.g +1 234 567 890"/>
          </div>
        </div>
        <div className='nextContainer'>
          <button onClick={(event)=>nextPage(event)}>Next Step</button>
        </div>
    </div>
  )
}

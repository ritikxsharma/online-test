import React, { useState } from 'react'
import '../../assets/styles/components/LandingPage/UserInfoFormStyling.scss'
const UserInfoForm = ({user, updateUserInfo}) => {

    const [name, setName] = useState(user.name)
    const [mobile, setMobile] = useState(user.mobile)

    const handleUserInfo = () =>{
        const newUser = {name, mobile}
        updateUserInfo(newUser)
    }

  return (
    <div className='form-control'>
        <h2>Test Registeration</h2>
        <form onSubmit={handleUserInfo}>
            <div className="input-box">
                <span class="material-symbols-outlined">
                    badge
                </span>
                <input type="text" placeholder=' ' value={name} onChange={ e => setName(e.target.value)} required/>
                <label htmlFor="username">
                    username
                </label>
            </div>
            <div className="input-box">
                <span class="material-symbols-outlined">
                    mail
                </span>
                <input type="text" placeholder=' ' />
                <label htmlFor="email">
                    email
                </label>
            </div>
            <div className="input-box">
                <span class="material-symbols-outlined">
                    call
                </span>
                <input type="text" placeholder=' ' value={mobile} onChange={ e => setMobile(e.target.value)} />
                <label htmlFor="mobile">
                    mobile
                </label>
            </div>

            <div className="submit-btn">
                <button type="submit">Submit</button>
            </div>

        </form>
    </div>
  )
}

export default UserInfoForm
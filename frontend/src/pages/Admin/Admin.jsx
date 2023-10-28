import React, { useState } from 'react'

const Admin = () => {
    const [showPassword, setShowPassword] = useState("password");
    const [auth, setAuth] = useState(true);
    return (
        <>
            {
                auth ? 
                
                <div>delete</div> 
                
                : <div className='flex items-center justify-center flex-col h-screen space-y-5'>
                    <h3 className='text-xl font-medium text-primary'>Enter Your Admin Passward</h3>
                    <div className="flex items-center border-[1px] border-gray rounded-sm p-2 text-font_two hover:font-medium hover:border-primary focus:font-medium focus:border-primary">
                        <input className='mr-2' type={showPassword} placeholder='password' />
                        {
                            showPassword === "password" ?
                                <i onClick={() => setShowPassword("text")} className="fa-regular fa-eye cursor-pointer text-font_two hover:text-primary"></i>
                                :
                                <i onClick={() => setShowPassword("password")} className="fa-regular fa-eye-slash cursor-pointer text-font_two hover:text-primary"></i>
                        }
                    </div>
                </div>
            }
        </>
    )
}

export default Admin;
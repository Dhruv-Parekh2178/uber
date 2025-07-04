import { useState, useContext } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';
import {UserDataContext} from '../context/UserContext';

const UserSignup = () => {
      const [email , setEmail] = useState('')
      const [password , setPassword] = useState('')
      const [firstName , setFirstName] = useState('')
      const [lastName , setLastName] = useState('')
      // const [UserData , setUserData] = useState({})

      const navigate = useNavigate()

      const {user , setUser} = useContext(UserDataContext)

      const submitHandler = async (e) => {
            e.preventDefault()
            
            const newUser = {
                  fullname : {
                       firstname : firstName,
                       lastname : lastName  
                  },
                  email : email,
                  password : password
            }
            const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`,newUser)

                  if(response.status === 201){
                        const data = response.data

                        setUser(data.user)

                        navigate('/home')
                  }

            setEmail('')
            setPassword('') 
            setFirstName('')
            setLastName('')
      }      
     return (
           <div>
                  <div className='p-7 h-screen flex flex-col justify-between'>
             <div>
             <img className='w-16 mb-10' src ="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/800px-Uber_logo_2018.svg.png"/>
                  <form onSubmit={(e)=>{
                        submitHandler(e) 
                  }}>
                        <h3 className='text-lg font-medium mb-2' >what&apos;s your Name</h3>
                        <div  className ='flex gap-4 mb-6'>
                        <input
                          required
                          className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base'
                          type ='text'
                          placeholder='First name'
                          value = {firstName}
                          onChange={(e) => {
                              setFirstName(e.target.value)
                          }}
                          />
                            <input
                          required
                          className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base'
                          type ='text'
                          placeholder='Last name'
                          value = {lastName}
                          onChange={(e) => {
                              setLastName(e.target.value)
                          }}
                          />   
                  </div>
         <h3 className='text-lg font-medium mb-2' >what&apos;s your email</h3>
                        <input
                          required
                          className='bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
                          type ='email'
                          placeholder='email@example.com'
                          value = {email}
                          onChange={(e) => {
                              setEmail(e.target.value)
                          }}
                          />
                        <h3 className='text-lg font-medium mb-2' >Enter Password</h3>
                        <input
                          required
                          className='bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
                          type ='password'
                          placeholder='password'
                          value = {password}
                          onChange={(e) => {
                              setPassword(e.target.value)
                          }}
                          />

                        <button
                        className='bg-[#111] text-[#fff] font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base'
                        >Create Account</button>
                  </form>
                        <p className='text-center' >Already have a account? <Link to='/login' className='text-blue-600' >Login here</Link>
                        </p>
             </div>
             <div>
                       <p className='text-[10px] leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy Policy</span> and <span className='underline'>Terms of Services apply</span>.</p>

             </div>
           </div>
           </div>
        );
};

export default UserSignup;  
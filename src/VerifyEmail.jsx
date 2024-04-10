import React,{useState} from 'react'
import axios  from 'axios'

const VerifyEmail = () => {
  const [email,setEmail] = useState('')
  const [otp,setOtp] = useState('')
  const [message,setMessage] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:4000/auth/verify', {email, otp_code: otp});
      console.log(response);
      if(response.data.result[0].message === 'Email is verified') {
        window.alert('Email Verified Successfully')
      }
    } catch (error) {
      setMessage(error.response.data.message);
    }
  }
  
  return (
    <div className=' h-screen flex p-6 bg-slate-900 justify-center items-center'>
      <form onSubmit={handleSubmit} className=' p-12 gap-8 w-auto bg-slate-700 rounded-lg flex flex-col'>
        <label className=' flex flex-col'>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
        </label>
        <label className=' flex flex-col'>
          OTP:
          <input type="password" value={otp} onChange={(e) => setOtp(e.target.value)} required/>
        </label>
        <button className=' p-2 bg-cyan-600 font-medium rounded-lg hover:bg-cyan-500 ease-in duration-200' type='submit'>Verify OTP</button>
        {message && <p>{message}</p>}
      </form>
    </div>
  )
}

export default VerifyEmail
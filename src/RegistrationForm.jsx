import React,{useState} from 'react'
import axios  from 'axios'

const RegistrationForm = () => {
  
  const [username,setUsername] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [message,setMessage] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:4000/auth/register', {username, email, password})
      setMessage(response.data.message);
      // if(response.data.result[0].message === 'User registered successfully') {
      //     history.push('/verify');
      // }
    } catch (error) {
      setMessage(error.response.data.message);
    }
  }
  
  return (
    <div className=' h-screen flex p-6 bg-slate-900 justify-center items-center'>
      <form onSubmit={handleSubmit} className=' p-12 gap-8 w-auto bg-slate-700 rounded-lg flex flex-col'>
        <label className=' flex flex-col'>
          Username:
          <input className=' w-full' type="name" value={username} onChange={(e) => setUsername(e.target.value)} required/>
        </label>
        <label className=' flex flex-col'>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
        </label>
        <label className=' flex flex-col'>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
        </label>
        <button className=' p-2 bg-cyan-600 font-medium rounded-lg hover:bg-cyan-500 ease-in duration-200' type='submit'>Register</button>
        {message && <p>{message}</p>}
        <p>After Registeration Enter the OTP Below</p>
      </form>
    </div>
  )
}

export default RegistrationForm;
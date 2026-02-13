import axios from "axios"
import { useState } from "react"
import useUserStore from "../stores/userStore"
import { useNavigate } from "react-router"

function Login() {
    const[formLogin, setFormLogin] = useState({
        username:"",
        password:""
    })
    const inputStyle = "border w-full rounded-md px-2"

    const setUser  = useUserStore((state)=>state.setUser)
    const setToken = useUserStore((state => state.setToken))
    const navigate = useNavigate()

    const hdlChange = (e)=>{
        const {name, value} = e.target
        setFormLogin((prv)=>({...prv, [name]: value}))
    }

    const hdlSubmit = async(e)=>{
        e.preventDefault()
        const resp = await axios.post("https://dummyjson.com/auth/login",formLogin)
        console.log(resp.data)
        const {image , lastName, fullName, username, email, accessToken} = resp.data
        setUser({image , lastName, fullName, username, email})
        setToken(accessToken)
        navigate('/profile')

    }

    console.log(formLogin)
  return (
        <div className="min-h-screen bg-gray-200 flex justify-center p-5">
            <form onSubmit={hdlSubmit}
            className="bg-white flex flex-col justify-center gap-2 py-5 px-8 mt-20 rounded-3xl h-fit ">
                <h2 className="font-bold mb-2">Login</h2>
                <label>Username:
                    <input type="text" name="username" placeholder="username" className={inputStyle}
                    onChange={hdlChange} value={formLogin.username}/>
                </label>
                <label>Password:
                    <input type="password" name="password" placeholder="password" className={inputStyle}
                    onChange={hdlChange} value={formLogin.password}/>
                </label>
                <button className="bg-gray-500 w-full px-4 py-1 mt-5 text-amber-50 rounded-4xl">Login</button>
            </form>
        </div>
  )
}

export default Login
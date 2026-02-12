import axios from "axios";
import { useState } from "react"
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { registerValidator } from "../validators/registerValidator";


export default function Register(){
    const[formData, setFormData] = useState({
        username: "",
        password: "",
        email: "",
        phone: "",
    })
    const inputStyle = "border w-full rounded-md px-2"

    const [error , setError] = useState(null)
    
    const navigate = useNavigate()
    
    const hdlChange = (e)=> {
        const {name, value} = e.target;
        setFormData((prev)=>({...prev, [name]: value}));
        console.log(name, value);
    }
    const hdlSubmit = async (e)=>{
        e.preventDefault();
        setError({});
        const result = registerValidator.safeParse(formData)
        if (!result.success){
            const {fieldErrors} = result.error.flatten()
            console.log(fieldErrors)
            setError(fieldErrors)
            return;
        }
        // try {
        //     const res = await axios.post("https://jsonplaceholder.typicode.com/posts",formData);
        //     console.log('Register successfully', res.data);
        //     toast.success("ลงทะเบียนสำเร็จ")
        //     navigate('/post')
        // } catch (error) {
        //     console.log('ERROR')
        // }
    }
 
    // console.log("error",error)
    return(
        <div className="min-h-screen bg-gray-200 flex justify-center p-5">
            <form onSubmit={hdlSubmit}
            className="bg-white flex flex-col justify-center gap-2 py-5 px-8 mt-20 rounded-3xl h-fit ">
                <h2 className="font-bold mb-2">Create account</h2>
                <label>Username:
                    <input type="text" name="username" placeholder="username" className={inputStyle} onChange={hdlChange}/>
                    {error?.username && <p className="text-red-600 text-[12px]">{error?.username[0]}</p>}
                </label>
                <label>Password:
                    <input type="password" name="password" placeholder="password" className={inputStyle} onChange={hdlChange} />
                    {error?.password && <p className="text-red-600 text-[12px]">{error?.password[0]}</p>}
                </label>
                <label>Email:
                    <input type="text" name="email" placeholder="example@mail.com" className={inputStyle} onChange={hdlChange} />
                    {error?.email && <p className="text-red-600 text-[12px]">{error?.email[0]}</p>}
                </label>
                <label>Phone:
                    <input type="text" name="phone" placeholder="081-xxxxxxx" className={inputStyle} onChange={hdlChange} />
                    {error?.phone && <p className="text-red-600 text-[12px]">{error?.phone[0]}</p>}
                </label>
                <button className="bg-gray-500 w-full px-4 py-1 mt-5 text-amber-50 rounded-4xl">Submit</button>
            </form>
        </div>
    )
}
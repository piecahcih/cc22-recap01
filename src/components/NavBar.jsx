import { NavLink } from "react-router"

function NavBar() {
  return (
    <div className="bg-lime-700 text-white font-bold flex justify-center gap-7 p-3">
        <NavLink className="hover:bg-amber-100 hover:text-black rounded-3xl p-1" 
        to="/">Home</NavLink>
        <NavLink className="hover:bg-amber-100 hover:text-black rounded-3xl p-1"  
        to="/register">Register</NavLink>
        <NavLink className="hover:bg-amber-100 hover:text-black rounded-3xl p-1" 
        to="/post">Post</NavLink>
    </div>
  )
}

export default NavBar
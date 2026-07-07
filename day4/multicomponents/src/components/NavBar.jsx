import  NavLink from "./NavLink"
import logovite from "../assets/vite.svg"
const NavBar = () => {
  return (
    <>
        <div className="">
            <div className="bg-blue-500 text-white p-4  flex justify-between items-center">
                <Logo/>
                <NavLink/>



            </div>

            

            


        </div>
        

    </>
  )
}

export default NavBar

const Logo = () => {
  return (
    <>
    <div className="bg-black p-2 rounded-lg shadow-md flex items-center gap-2 w-10 h-10">
        <img src={logovite} alt="logovite" />
    </div>
    </>
  )
}
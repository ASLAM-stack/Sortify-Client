import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
 
 

const Navber = () => {
  const {user,logOut} = useContext(AuthContext)
  console.log(user);
  const [color,setColor] = useState(false);
  const handleColor = () => {
    if(window.scrollY >= 90){
      setColor(true)
    }
    else{
      setColor(false)
    }
  }
  window.addEventListener('scroll',handleColor)
   
    const navOption =  <>
    <li>
        <NavLink to='/'>
            Home
        </NavLink>
    </li>

    
    <li>
        <NavLink to='/our_menu'>
            About
        </NavLink>
    </li>
    <li>
        <NavLink to='/our_shop'>
            Products
        </NavLink>
    </li>
    <li>
        <NavLink to='/secret'>
            Catagories
        </NavLink>
    </li>
    <li>
        <NavLink to='/contact'>
            contact us  
        </NavLink>
    </li>
    </>
  return (
    <div className="bg-black">
      <div className={`navbar z-10 ${color ? 'bg-black ' :'bg-black bg-opacity-30'}  text-white max-w-screen-xl mx-auto`}>
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52 uppercase bg-black"
            >
               {navOption}
            </ul>
          </div>
          <a className="btn btn-ghost md:text-xl text-base uppercase cinzel font-semibold text-white "><Link>Sortify</Link>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 uppercase">
            {navOption}
          </ul>
        </div>
        <div className="navbar-end">
 
{
  user ? <div className="dropdown dropdown-end">
  <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
    <div className="w-10 rounded-full">
      <img alt="Tailwind CSS Navbar component" src={user.photoURL} />
    </div>
  </div>
  <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black">
    <li>
      <a className="justify-between">
        {user.displayName}
        <span className="badge">New</span>
      </a>
    </li>
    <li><a>Settings</a></li>
    <li onClick={logOut}><a>Logout</a></li>
  </ul>
</div> : <NavLink to='/login' className="btn btn-outline btn-secondary">Log In</NavLink>
}
        </div>
      </div>
    </div>
  );
};

export default Navber;

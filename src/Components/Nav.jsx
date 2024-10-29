import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { CiMenuBurger } from "react-icons/ci";
import { ImCross } from "react-icons/im";

const Nav = () => {

    let[icon,seticon]= useState(true)

    let handleicon=()=>{
        seticon(!icon)
    }
    return (


        <div>

            <div onClick={()=>handleicon()} className='flex md:hidden mt-2 text-red-500'>

                {
                    icon ?<CiMenuBurger></CiMenuBurger> : <ImCross />
                }

                

            </div>




                <div className={`md:flex md:static md:justify-between mt-2 ms-5 absolute  duration-1000  ${!icon?"top-8":"-top-60"} `}>

                <NavLink className=" hover:text-yellow-500">Posts</NavLink><br />
                <NavLink className=" hover:text-yellow-500">Comments</NavLink><br />
                <NavLink className=" hover:text-yellow-500">Albums</NavLink><br />
                <NavLink to="/todos" className=" hover:text-yellow-500">Tudos</NavLink><br />
                <NavLink className=" hover:text-yellow-500">Users</NavLink><br />

                </div>






        </div>
       
    );
};

export default Nav;
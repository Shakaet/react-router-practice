import React from 'react';
import Nav from './nav';
import Footer from './footer';
import { Outlet, useNavigation } from 'react-router-dom';
import { ClipLoader } from "react-spinners";

const Header = () => {


    let navigation=useNavigation()
    // console.log(navigation)
    return (
        <div>

            <Nav></Nav>

            {/* {
                navigation.state==="loading"? <p className='text-center'>loading....</p>:<Outlet></Outlet>
            } */}

{
    navigation.state === "loading" ? (
        <div className="flex justify-center items-center">
            <ClipLoader color="#000000" size={50} /> {/* Spinner from react-spinners */}
        </div>
    ) : (
        <Outlet />
    )
}

        


            <Footer></Footer>

            
            
        </div>
    );
};

export default Header;
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import About from "./Components/About/About";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Movies from "./Components/Movies/Movies";
import Navbar from "./Components/Navbar/Navbar";
import Notfound from "./Components/Notfound/Notfound";
import People from "./Components/People/People";
import Register from "./Components/Register/Register";
import Tvshows from "./Components/Tvshows/Tvshows";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import Moviedetails from "./Components/Moviedetails/Moviedetails";



export default function App() {


    let [userData , setUserData] = useState(null);
    useEffect(()=>{
        if(localStorage.getItem("userToken"))
        {
            getUserData();
        }
    } , [])

    function getUserData(){
        let userToken = jwtDecode(localStorage.getItem("userToken"));
        setUserData(userToken);
        console.log("fjfjfjfj" , userData)
    }

    let navigate = useNavigate();
    function logOut()
    {
        localStorage.removeItem("userToken");
        setUserData(null);
        let path = "/Login";
        navigate(path);
    }

    function ProtectedRoute({children})
    {
        if(!localStorage.getItem("userToken"))
        {
            return <Navigate to="/Login"/>
        }
        else
        {
            return children
        }
    }




    return  <>
        <Navbar userData={userData} logout={logOut}/>
        <div className=" container mt-5 py-5 ">
            <Routes>
                    <Route path="/" element={ <ProtectedRoute> <Home/></ProtectedRoute> }></Route>

                    <Route path="Home" element={<ProtectedRoute><Home/></ProtectedRoute> }></Route>

                    <Route path="Movies" element={<ProtectedRoute><Movies/></ProtectedRoute> }></Route>

                    <Route path="/Moviedetails" element={<ProtectedRoute><Moviedetails/></ProtectedRoute> }>
                        <Route path=":mediaType/:id" element={<ProtectedRoute><Moviedetails/></ProtectedRoute> }></Route>
                    </Route>

                    <Route path="Tvshows" element={<ProtectedRoute><Tvshows/></ProtectedRoute> }></Route>

                    <Route path="People" element={<ProtectedRoute><People/></ProtectedRoute> }></Route>

                    <Route path="About" element={ <ProtectedRoute><About />  </ProtectedRoute> }></Route>

                    <Route path="Login" element={<Login getUserData={getUserData}/>}></Route>

                    <Route path="Register" element={<Register/>}></Route>

                    <Route path="*" element={<Notfound/>}></Route>
            </Routes>
            
            
        </div>
    </>

  
}










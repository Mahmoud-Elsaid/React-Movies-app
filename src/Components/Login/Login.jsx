import axios from "axios";
import Joi from "joi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login(props) {
    let [errorMessage , setErrorMessage] = useState("");
    let [validateError , setValidateError] = useState([]);
    let [loadingButton , setLoadingButton] = useState(false);
    const navigate = useNavigate();
    let [user , setUser] = useState({
        password:"",
        username:"",
        
    })



    
    async function submitFormData(e){
        e.preventDefault();
        setLoadingButton(true);
        let validate = validateFormData();
        if(validate.error)
        {
            setValidateError(validate.error.details);
            console.log( "validate error",validate.error.details);
            setLoadingButton(false); 
        }
        else
        {
            console.log("before",user);
            setValidateError([])
        try
        {
            console.log("try");
            let response = await axios.post("http://localhost:8080/generate-token" , user);
            console.log("after api")

            if(response.status ==200)
                {

                    localStorage.setItem("userToken" ,response.data.token);
                    props.getUserData();
                    goToHOME();
                    console.log("goToHOME is run");  
                    console.log("response mahmoud" ,response.data.token);                  
                }
                else 
                {
                    alert("Unexpected response status: " + response.status);
                    console.log("Response Data Mahmoud:", response.data); 
                }

        }
        catch(error) {
            console.error("Error mahmoud:", error);
            if(error.response)
            {
                setErrorMessage(error.response.data.message + " => Your mail or user name is not match please try again");
            }
            else
            {
                setErrorMessage(error.message + " there is a problem in the web site it will be solve soon");
            }
            
            
        }
        setLoadingButton(false);
        }
        
        
    }

    function validateFormData(){
        let shcema = Joi.object({
            username:Joi.string().required().alphanum(),
            password:Joi.string().required()
        })
        return shcema.validate(user , {abortEarly:false}) ;
    }
    
    function getFormValue(e)
    {
        let myUser = {...user};
        myUser[e.target.name] = e.target.value;
        setUser(myUser);
        console.log(myUser);
    }

    function goToHOME(){
        let path ="/Home";
        navigate(path);
    }

    return (
        
        <div className=" my-3 w-75 m-auto">
            
            <h1 className=" my-5">Login form</h1>
            
            {validateError ==[] ? "" :validateError.map((error ,index)=> <div key={index} className=" alert alert-danger p-3 fw-bold">{error.message}</div> ) }
            {errorMessage == "" ? "" : <div className=" alert alert-danger p-3 fw-bold">{errorMessage}</div>}
            <form onSubmit={submitFormData}>


               
                <div className=" input-group  my-2 ">
                    <label className="ms-2 fw-bolder" htmlFor="username">user name:</label>
                    <input onChange={getFormValue} type="text" id="username" name="username" className=" w-100  p-2 my-3" />
                </div>  

                 <div className=" input-group  my-2 ">
                    <label className="ms-2 fw-bolder" htmlFor="password">password:</label>
                    <input onChange={getFormValue} type="password" id="password" name="password" className=" w-100  p-2 my-3" />
                </div>
        

                

                <button type="submit" className=" btn btn-info float-end">{loadingButton ==true ? <i className="fa-solid fa-spinner  fa-spin"></i> : "submit"}</button>
            </form>
        </div>
    )
}

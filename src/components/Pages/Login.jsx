import React, { useRef, useState } from "react";
import { Alert } from "@mui/material";
import axios from "axios";



const Login = () => {
    const [login, setLogin] = useState(false)
    const [sendingReq, setSendingReq] = useState(false);
    const [openalert, setOpenAlert] = useState(false);
    const [alertSeverity, setAlertSeverity] = useState('');
    const [alertMsg, setAlertMsg] = useState("");
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const AuthHandler = async (obj) => {
        try {
            if (login) {
                console.log('login being called')
                setSendingReq(true);
                const response = await axios.post(`https://crudcrud.com/api/22bef8e43d8b4f12b503b513a26d088c/users`, obj);
                setSendingReq(false);
                setAlertSeverity('success');
                console.log(response)
                setAlertMsg(response.data.msg);
                
                localStorage.setItem('token', JSON.stringify(response.data.token));
                
                window.location.href = '/Store'


                //https://ecommerce-backend-xe7w.onrender.com
                //https://ecommerceapi-production-ba45.up.railway.app

            }
            else {
                console.log('signup being called');
                setSendingReq(true);
                const response = await axios.post(`https://crudcrud.com/api/22bef8e43d8b4f12b503b513a26d088c/users`, obj);
                setAlertSeverity('success');
                setAlertMsg(response.data.msg);
                setSendingReq(false);
                setLogin(true);
            }
        } catch (error) {
            console.log(error);
            setAlertSeverity('error');
            setSendingReq(false);
            console.log(error)
            setAlertMsg(error.response.data.msg);
        }
        setOpenAlert(true);
        setTimeout(() => {
            setOpenAlert(false);
        }, 5000)
    }
    const formSubmitHandler = async (e) => {
        e.preventDefault();
        let SignUpObj = {};
        let LoginObj = {};
        if (!login) SignUpObj = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value
        }
        if (login) LoginObj = {
            email: emailRef.current.value,
            password: passwordRef.current.value
            
        }
        passwordRef.current.value = emailRef.current.value = "";
        if (!login) nameRef.current.value = "";
        login ? AuthHandler(LoginObj) : AuthHandler(SignUpObj)
    }

  
      


    return (
        <div className="mt-[30px] flex flex-col items-center " >
            <p className=" text-6xl my-4  text-center">Shopping Cart </p>
            <div className=" grid sm:grid-cols-2 sm:grid-rows-1 p-7 bg-gradient-to-r from-cyan-600 to-blue-500 ... ">
                <div className=" bg-white p-5 flex flex-col justify-evenly">

                    {openalert && <Alert severity={alertSeverity}>{alertMsg}!</Alert>}

                    <form className="  min-h-[200px] flex flex-col justify-evenly md:min-h-[300px] md:min-w-[200px]" action="" onSubmit={formSubmitHandler}>
                        <p className="font-Indie text-4xl font-bold tracking-[4px]">{login ? 'Login' : 'SignUp'}</p>
                        {!login && <div className="flex flex-col  py-3 ">
                            <label >Name</label>
                            <input ref={nameRef} className="text-center border-b-4 p-2 border-gray-400" type="text" ></input>
                        </div>}
                        <div className="flex flex-col py-3">
                            <label>Email :</label>
                            <input ref={emailRef} className="text-center border-b-4 p-2 border-gray-400" type="email" ></input>
                        </div>
                        <div className="flex flex-col py-3">
                            <label >Password</label>
                            <input ref={passwordRef} className=" text-center border-b-4 p-2 border-gray-400" type="string" ></input>
                        </div>



                        {!sendingReq && <button className="bg-cyan-500 rounded-md hover:bg-blue-600 duration-700 text-white text-2xl p-2 text-center" >{login ? 'login' : 'signUp '}</button>}
                        {sendingReq && <button className="bg-cyan-500 rounded-md hover:bg-blue-600 duration-700 text-white text-2xl p-2 text-center">sending Req</button>}


                    </form>
                    <div className="text-2xl p-2 text-center font-QuickSand " onClick={() => setLogin((state) => !state)}>
                        <button >{login ? 'New User??' : 'Already a member??'}
                            <p>Click Here</p></button>
                    </div>
                </div>
                <div className=" hidden sm:block bg-white   ">
                    <img className="object-cover max-h-[400px] w-full " src="https://cdn.pixabay.com/photo/2018/05/16/18/08/e-commerce-3406613_1280.jpg" alt="" />

                </div>
            </div>
        </div>


    );
}

export default Login








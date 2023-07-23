import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios"
import {URL} from "../../../API"

const VerifyEmail = () => {
  const { emailToken } = useParams();
  const [verifyEmail, setVerifyEmail] = useState(false);
  const navigate = useNavigate()
  useEffect(() => {
    async function getData(){
        try{
            const res = await axios.post(`${URL}/api/v1/verifyUser`,{token : emailToken })
            setVerifyEmail(true)
            console.log(res.data)
            alert("Successfull")
            navigate("/login")
         }catch(err){
             console.log(err.data)
             setVerifyEmail(false)
             navigate("/")
         }
    }
    getData()
  }, []);

  if (!verifyEmail) return null;
  else return <div> Successfull </div>;
};

export default VerifyEmail;

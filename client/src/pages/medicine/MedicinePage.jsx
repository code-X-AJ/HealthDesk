import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MedicineCom from "../../components/medicine/MedicineCom";

function MedicinePage() {
  // const navigate = useNavigate();
  
  // useEffect(()=>{
  //   if(!localStorage.getItem('user')){
  //     navigate("/auth")
  //   }
  // })

  return (
    <div>
      <MedicineCom />
    </div>
  );
}

export default MedicinePage;

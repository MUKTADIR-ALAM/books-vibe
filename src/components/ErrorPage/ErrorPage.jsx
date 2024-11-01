import React from "react";
import img from "../../assets/img/dog.webp";
import { useNavigate, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const navigate = useNavigate();
  const error = useRouteError;
  const handleGoBack = () => {
    navigate(-1);
  };
//   console.log(error);

  return (
    <div className="w-screen h-screen bg-black">
      <div className="text-white flex flex-col justify-center items-center gap-4 pt-20">
        <img height={500} width={500} src={img} alt="" />
        <h1 className="font-bold text-4xl">Why are you here?</h1>
        <p>You’re not supposed to be here.</p>
        <button
          onClick={handleGoBack}
          className="text-black bg-white rounded-xl px-5 py-2 font-bold"
        >
          Get out
        </button>
      </div>
    </div>
  );
}

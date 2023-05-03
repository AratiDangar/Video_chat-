import { useState } from "react";
import { Form, useNavigate } from "react-router-dom";

import im from "../src/assets/caal.jpg";
import Navbar from "./Navbar";
function Home() {
  const [RoomCode, setRoomCode] = useState("");
  const navigate = useNavigate();

  const submitCode = (e) => {
    e.preventDefault();
    navigate(`/room/${RoomCode}`);
  };
  return (
    <div className="">
      <div className="">
        <Navbar />
      </div>
      <div className="relative ">
        <div
          style={{ minWidth: "-webkit-fill-available" }}
          className=" absolute h-[68rem] flex overflow-hidden ;"
        >
          <img
            src={im}
            alt="hjj"
            className="object-cover w-full h-full "
            style={{ opacity: "0.7" }}
          />
        </div>
        <div className="relative z-10 px-6">
          <div className="font-bold text-black">
            <h1
              style={{
                fontSize: "60px",
                fontWeight: "bold",
                paddingTop: "2em",
              }}
            >
              Video Chat App
            </h1>
            <p style={{ fontSize: "45px" }}> With ZegoCloude</p>
          </div>
          <form
            onSubmit={submitCode}
            className="flex flex-col items-center justify-center text-black "
          >
            <label className="font-bold text-[20px] pt-12 ">
              Enter Room code
            </label>

            <input
              type="text"
              className=" placeholder:text-black py-2 w-[16rem] rounded-full pl-8 mt-4"
              required
              placeholder=" Room Code"
              value={RoomCode}
              style={{ color: "black" }}
              onChange={(e) => {
                setRoomCode(e.target.value);
              }}
            />

            <button
              style={{
                background:
                  "linear-gradient(to bottom, #33ccff 0%, #ff99cc 100%)",
              }}
              className=" rounded-[0.5rem] mt-4 py-1.5 px-4 font-bold"
              type="submit"
            >
              submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Home;

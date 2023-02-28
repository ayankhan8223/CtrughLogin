import React from "react";
import { useState } from "react";
import Modal from "react-modal";
import Lottie from "lottie-react";
import groovyWalkAnimation from "./Assets/113967-thank-you.json";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

function RightPart() {
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function openModal() {
    if (name && email) {
      setIsOpen(true);
    } else {
      alert("please Enter name or email");
    }
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className="p-5 flex items-center justify-center h-screen">
      <div>
        <div className="flex flex-col items-center">
          <div className=" bg-[#f9f9f9] w-[120px] h-[120px] rounded-full">
            <img src="./updated_logo (1).png" alt="" width={120} />
          </div>
          <h1 className="text-4xl font-medium text-[#454545] mt-[7px]">
            Hello Again!
          </h1>
          <p className="text-md w-[60%] text-center mt-[10px] text-[#959595]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam
            voluptate
          </p>
        </div>

        <div className="w-[100%] flex flex-col items-center mt-[50px]">
          <label class="custom-field one">
            <input
              type="text"
              placeholder=" "
              onChange={(e) => setName(e.target.value)}
            />
            <span class="placeholder">Enter Name</span>
          </label>

          <label class="custom-field one mt-[10px]">
            <input
              type="text"
              placeholder=" "
              onChange={(e) => setEmail(e.target.value)}
            />
            <span class="placeholder">Enter Email</span>
          </label>

          <button
            onClick={openModal}
            className="bg-[#336cb5] w-[400px] text-white mt-[20px] p-3 text-[16px] font-light rounded-full mt-[40px]"
          >
            Submit
          </button>
        </div>

        <div className="flex gap-[40px] items-center justify-center mt-[90px]">
          <a href="https://www.google.com/maps/place/Ctruh/@12.9156996,77.6324643,15z/data=!4m5!3m4!1s0x0:0x61d9e51b9d6db90d!8m2!3d12.9156996!4d77.6324643">
            <div className="card">
              <img src="./google.png" alt="" width={30} />
            </div>
          </a>
          <a href="https://in.linkedin.com/company/ctruh">
            <div className="card">
              <img src="./linkedin.png" alt="" width={30} />
            </div>
          </a>
          <a href="https://www.facebook.com/people/Ctruh/100088449870499/">
            <div className="card">
              <img src="./facebook.png" alt="" width={30} />
            </div>
          </a>
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="w-[600px] h-[340px]">
          <div className="flex items-end justify-end">
            <button className="card" onClick={closeModal}>
              <img src="./close.png" alt="" width={18} />
            </button>
          </div>
          <div className="flex items-center justify-center flex-col">
            <div className="w-[400px]">
              <Lottie animationData={groovyWalkAnimation} loop={true} />
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default RightPart;

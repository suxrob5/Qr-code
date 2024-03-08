import { useState } from "react";

const Qrcode = () => {
  const [inputValue, setInputValue] = useState("");
  const [imagesUlr, setImagesUlr] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleBtn = () => {
    if (inputValue !== "") {
      setImagesUlr(
        `https://api.qrserver.com/v1/create-qr-code/?data=${inputValue}&`
      );
      setInputValue("");
    } else {
      alert("Please enter a code name");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen w-[100%] bg-gradient-to-r from-blue-500 to-purple-500 to-green-500">
      <div className="w-[98%] mx-auto">
        <form
          action="qr-code"
          onSubmit={handleSubmit}
          className="flex items-center justify-center"
        >
          <input
            type="text"
            placeholder="Enter your text for qr-code"
            className="border-2 shadow-xl focus:outline-blue-500 text-xl px-5 py-3 rounded-lg border-blue-400"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button
            className="border px-5 py-3 bg-blue-500 focus:shadow-lg text-xl text-white rounded-lg font-[500]"
            onClick={handleBtn}
          >
            Add
          </button>
        </form>
        <div className="mt-5 w-[90%] mx-auto flex items-center justify-center">
          <img src={imagesUlr} alt="" className="" />
        </div>
      </div>
    </div>
  );
};

export default Qrcode;

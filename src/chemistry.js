import { useState } from "react";
import ReactDOM from "react-dom/client";
import Molarmass from "molarmass.js";

function MyForm() {
  const mm = new Molarmass();
  console.log(mm.getMolarMass("H20"));

  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    // event.preventDefault();
    // alert(`The Molar Mass of ${name} is ${mm.getMolarMass(`${name}`)}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          className="input text-white placeholder-gray-500 input-ghost text-xl font-semibold input-bordered w-full max-w-xs mb-5 "
          type="text"
          placeholder="H2O"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      {/* <input type="submit" className="btn" /> */}
      <div>
        <p className="text-7xl font-semibold">{mm.getMolarMass(`${name}`)}</p>
        <p>g/mol</p>
      </div>
    </form>
  );
}

export default MyForm;

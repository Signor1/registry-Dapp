import "./App.css";
import { useEffect, useState } from "react";
import { ethers } from "ethers";
import contractABI from "./abi.json";

function App() {
  const [age, setAge] = useState();
  const [name, setName] = useState("");

  const [newAge, setNewAge] = useState(0);
  const [newName, setNewName] = useState("");

  const contractAddress = "0x1b1460B64D96AcFbD46f6BCBF3f491cd6AB2E0f5";

  // async function for accessing metamask in our browser
  async function requestAccount() {
    await window.ethereum.request({ method: "eth_requestAccounts" });
  }

  //getMessage function using ethers
  async function getDetails() {
    if (typeof window.ethereum !== "undefined") {
      await requestAccount();
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(
        contractAddress,
        contractABI,
        signer
      );

      try {
        const data = await contract.getEntityDetails();
        const [entityName, entityAge] = data;
        setName(entityName);
        setAge(entityAge);
      } catch (err) {
        console.error("Error:", err);
      }
    } else {
      await requestAccount();
    }
  }

  //set message function using ethers
  async function updateName(data) {
    if (typeof window.ethereum !== "undefined") {
      // await requestAccount();
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(
        contractAddress,
        contractABI,
        signer
      );

      try {
        await contract.updateName(data);
        console.log("sent new name");
      } catch (err) {
        console.error("Error:", err);
      }
    } else {
      await requestAccount();
    }
  }

  async function updateAge(data) {
    if (typeof window.ethereum !== "undefined") {
      // await requestAccount();
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(
        contractAddress,
        contractABI,
        signer
      );

      try {
        await contract.updateAge(data);
        console.log("sent new age");
      } catch (err) {
        console.error("Error:", err);
      }
    } else {
      await requestAccount();
    }
  }

  const handleNewName = async () => {
    updateName(newName);
    setNewName("");
  };

  const handleNewAge = async () => {
    updateAge(newAge);
    setNewAge(0);
  };

  return (
    <div className="App">
      <button type="button" className="connect" onClick={requestAccount}>
        Connect Wallet
      </button>

      <section className="container">
        <div className="data">
          {name === "" ? (
            <h1>Loading...</h1>
          ) : (
            <h1>
              My name is {name} and I am {Number(age)} years old.
            </h1>
          )}

          <button type="button" onClick={getDetails}>
            Get Data
          </button>
        </div>

        <div className="form">
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
          <button type="button" onClick={handleNewName}>
            Set Name
          </button>
        </div>

        <div className="form">
          <input
            type="number"
            value={newAge}
            onChange={(e) => setNewAge(e.target.value)}
          />
          <button type="button" onClick={handleNewAge}>
            Set Age
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;

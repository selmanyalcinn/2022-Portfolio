import logo from "./logo.svg";
import "./App.css";
import Web3 from "web3/dist/web3.min.js";
import { abi, address } from "./Contract";
const web3 = new Web3(window.ethereum);
const contract = new web3.eth.Contract(abi, address);

function App() {
  const connectWallet = async () => {
    console.log("Cüzdan");
    const accounts = await window.ethereum
      .request({ method: "eth_requestAccounts" })
      .catch((err) => {
        console.log(err);
      });
    console.log(accounts);
  };

  const getValue = () => {
    contract.methods
      .getValue()
      .call()
      .then(function (value) {
        console.log(value);
      });
  };

  const setValue = async () => {
    const account = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    console.log(account[0]);
    contract.methods.setValue(12).send({ from: account[0] });
  };

  return (
    <div className="App">
      <button onClick={connectWallet}>Cüzdan Bağla</button>
      <button onClick={getValue}>Veriyi Çek</button>
      <button onClick={setValue}>Veriyi Değiştir</button>
    </div>
  );
}

export default App;

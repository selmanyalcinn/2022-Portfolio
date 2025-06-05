import "../App.css";
import News from "../Components/News";
import NewsList from "../Components/NewsList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";

function App() {
  const [searchTerm, setSearchTerm] = useState();
  const Search = () => {
    localStorage.setItem("Search", document.getElementById("Search").value);
    document.location.reload();
  };
  function openNav() {
    document.getElementById("YanMenu").style.width = "250px";
  }

  function closeNav() {
    document.getElementById("YanMenu").style.width = "0";
  }
  return (
    <div className="App">
      <div className="Header">
        <div className="LeftHeader">
          <button className="OpenButton" onClick={openNav}>
            <i class="fa-solid fa-bars fa-xl"></i>
          </button>
          <h2>News</h2>
        </div>
        <div className="RightHeader">
          <div className="SearchBar">
            <i class="fas fa-search fa-xl"></i>
            <input
              className="SearchBar2"
              placeholder="Search News..."
              id="Search"
            />
            <Link to="/Search">
              <button
                className="SearchButton"
                onClick={() =>
                  localStorage.setItem(
                    "Search",
                    document.getElementById("Search").value
                  )
                }
              >
                search
              </button>
            </Link>
          </div>

          <Link className="Link" to="/">
            <h2>Home</h2>
          </Link>

          <Link className="Link" to="/Economy">
            <h2>Economy</h2>
          </Link>
          <Link className="Link" to="/Politics">
            <h2>Politics</h2>
          </Link>
          <Link className="Link" to="/Science">
            <h2>Science & Tech</h2>
          </Link>
        </div>
      </div>
      <NewsList SearchTerm="Science" />
      <div id="YanMenu" class="sidenav">
        <a href="javascript:void(0)" class="closebtn" onClick={closeNav}>
          &times;
        </a>
        <button className="CloseButton" onClick={closeNav}>
          <i class="fa-solid fa-xmark fa-2xl"></i>
        </button>

        <div className="SearchBar3">
          <i class="fas fa-search fa-xl"></i>
          <input
            className="SearchBar2"
            placeholder="Search News..."
            id="Search2"
          />
          <Link className="Link" to="/Search">
            <button
              className="SearchButton"
              onClick={() =>
                localStorage.setItem(
                  "Search",
                  document.getElementById("Search2").value
                )
              }
            >
              search
            </button>
          </Link>
        </div>

        <Link className="Link2" to="/">
          <div className="Link2">
            <i class="fa-solid fa-house"></i>
            <h4 className="Text">Home</h4>
          </div>
        </Link>

        <Link className="Link2" to="/Economy">
          <div className="Link2">
            <i class="fa-solid fa-coins"></i>
            <h4 className="Text">Economy</h4>
          </div>
        </Link>
        <Link className="Link2" to="/Politics">
          <div className="Link2">
            <i class="fa-solid fa-landmark-dome"></i>
            <h4 className="Text">Politics</h4>
          </div>
        </Link>
        <Link className="Link2" to="/Science">
          <div className="Link2">
            <i class="fa-solid fa-atom fa-large"></i>
            <h4 className="Text">Science & Tech</h4>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default App;

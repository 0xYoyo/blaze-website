import blazeLogo from "/blazetransparent.png";
import "./styles/App.css";
import { FaDiscord, FaXTwitter } from "react-icons/fa6";

function App() {
  return (
    <>
      <div>
        <img src={blazeLogo} className="logo" alt="Blaze logo" />
      </div>
      <h1>Blaze labs.</h1>
      <h2 className="typewriter">
        All in one solutions for trail
        <span className="blaze">blaze</span>rs.
      </h2>
      <div className="card">
        <div className="links">
          <a
            href="https://discord.gg/bn3GgBC5xj"
            target="_blank"
            rel="noreferrer"
          >
            <FaDiscord id="discord" /> <span className="name">Discord</span>
          </a>
          <a
            href="https://twitter.com/Blaze_Labs"
            target="_blank"
            rel="noreferrer"
          >
            <FaXTwitter id="twitter" /> <span className="name">Twitter</span>
          </a>
        </div>
        {/* <p>© 2023 Blaze Labs, Inc. All Rights Reserved.</p> */}
      </div>
    </>
  );
}

export default App;

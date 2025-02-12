import { FaLinkedin, FaFacebook, FaGoogle } from "react-icons/fa"; {/*Imports the icons from the react-icon library*/}


function Footer() { {/*function called Footer*/}


  return ( 
    
    <footer className="footer"> {/*returns the structure of the footer*/}
      <div className="social-icons"> 
        <a href="https://www.linkedin.com/in/marc-ruzzel-muzada-24a472345/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="icon" />
        </a>
        <a href="https://www.facebook.com/marcruzzel.muzada.9" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="icon" />
        </a>
        <a href="mailto:tambaoan11@gmail.com" target="_blank" rel="noopener noreferrer"> {/*mailto: where to put my email*/}
          <FaGoogle className="icon" />
        </a>
      </div>
      <p className="footer-text">&copy; {new Date().getFullYear()} Marc Ruzzel Muzada</p> {/*&copy; for copyright symbol, {new Date().getFullYear()} gets the current year*/}
    </footer>
  );
}

export default Footer; {/*so it can be used in other files*/}

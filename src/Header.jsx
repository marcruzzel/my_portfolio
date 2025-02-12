
function Header() { {/*functional component*/}

{/*used to scroll smoothly to a section of the website*/}
  const scrollToSection = (id) => { 
    document.getElementById(id).scrollIntoView({ behavior: "smooth" }); {/*used a document.getElementById() to finds the element*/}
  };

  return ( 
    
    <header className="header">
      <nav className="navbar">
        <button className="nav-btn" onClick={() => scrollToSection("projects")}>Projects</button> {/*the onclick event Call the (function scrollToSection)*/}
        <button className="nav-btn" onClick={() => scrollToSection("skills")}>Skills</button>
        <button className="nav-btn" onClick={() => scrollToSection("about")}>About Me</button>
      </nav>
    </header>
  );
}

export default Header; {/*so it can use to other files*/}

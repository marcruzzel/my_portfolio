import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import Details from "./Details.jsx"; {/*imports components that can use*/}

{/*functional components*/}
function App() { 

  return(
    <> {/*allows grouping a element without adding extra HTML wrapper*/}
    <Header/>{/*renders components*/}
    <Details/>
    <Footer/>
    </>
  );

}

{/*exports the app so it can be imported and used to other file*/}
export default App;

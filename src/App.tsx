// import ViteIntro from "./components/ViteIntro/ViteIntro.tsx";

//Ονοματίζουμε με το όνομα του component και γράφουμε ολη τη λογική της Javascript. MΜπαινει ολη η λογική του routing
// import ClassComponent from "./components/ClassComponent.tsx";
// import FunctionalComponent from "./components/FunctionalComponent.tsx";
// import ArrowFunctionalComponent from "./components/ArrowFunctionalComponent.tsx";
import ArrowFunctionalComponentWithProps from "./components/ArrowFunctionalComponentWithProps.tsx";

function App() {

    //στο return μπαίνει η html
  return (
    <>
        {/*<ViteIntro />  //Καλώ το component*/}
        {/*<ClassComponent />*/}
        {/*<FunctionalComponent/>*/}
        {/*<ArrowFunctionalComponent/>*/}
        <ArrowFunctionalComponentWithProps title = "Is an Arrow Functional Component With Props"/>
        <ArrowFunctionalComponentWithProps title = "2nd Title"/>



    </>
  )
}

export default App
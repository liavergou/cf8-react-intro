// import ViteIntro from "./components/ViteIntro/ViteIntro.tsx";

//Ονοματίζουμε με το όνομα του component και γράφουμε ολη τη λογική της Javascript. MΜπαινει ολη η λογική του routing
// import ClassComponent from "./components/ClassComponent.tsx";
// import FunctionalComponent from "./components/FunctionalComponent.tsx";
// import ArrowFunctionalComponent from "./components/ArrowFunctionalComponent.tsx";
// import ArrowFunctionalComponentWithProps from "./components/ArrowFunctionalComponentWithProps.tsx";
// import ArrowFunctionalComponentWithPropsType from "./components/ArrowFunctionalComponentWithPropsType.tsx";
// import Card from "./components/Card.tsx";
import Layout from "./components/Layout.tsx";
// import ClassComponentWithState from "./components/ClassComponentWithState.tsx";
// import FunctionalComponentsWithState from "./components/FunctionalComponentsWithState.tsx";
// import Counter from "./components/Counter.tsx";
import CounterWithProps from "./components/CounterWithProps.tsx";

function App() {

    //στο return μπαίνει η html
  return (
    <>
        {/*/!*<ViteIntro />  //Καλώ το component*!/*/}
        {/*/!*<ClassComponent />*!/*/}
        {/*/!*<FunctionalComponent/>*!/*/}
        {/*/!*<ArrowFunctionalComponent/>*!/*/}
        {/*<ArrowFunctionalComponentWithProps title = "Is an Arrow Functional Component With Props"/>*/}
        {/*<ArrowFunctionalComponentWithProps title = "2nd Title"/>*/}
        {/*/!*<ArrowFunctionalComponentWithPropsType*!/*/}
        {/*/!*    title = "Is an Arrow Functional Component With 2 Props"*!/*/}
        {/*/!*    description = "Lorem ipsum..........."*!/*/}
        {/*/!*    />*!/*/}

        {/*<Card title="Card">*/}
        {/*    <ArrowFunctionalComponentWithPropsType*/}
        {/*        title = "Is an Arrow Functional Component With 2 Props"*/}
        {/*        description = "Lorem ipsum..........."*/}
        {/*    />*/}
        {/*</Card>*/}

        <Layout>
            layout text

            {/*<FunctionalComponentsWithState/>*/}

            {/*<ClassComponentWithState/>*/}
            {/*<Counter/>*/}
            <CounterWithProps/>
        </Layout>

    </>
  )
}

export default App
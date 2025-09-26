import Footer from "./Footer.tsx";
import Header from "./Header.tsx";

interface LayoutProps {
    children: React.ReactNode;
}
const Layout = ({children}:LayoutProps) =>{

    return(

        <>
            <Header/>

            <div className="container.mx-auto.pt-24.min-h-[95vh]">
            {children}
            </div>

            <Footer/>

        </>
    )
}

export default Layout;
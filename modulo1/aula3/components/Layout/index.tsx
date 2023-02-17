import Footer from "../Footer";
import Navbar from "../Navbar";

interface Props {
    children: React.ReactNode
}

const Layout: React.FC<Props> = ({children}) => {
    return(
        <div>
            <Navbar/>
            <main>{children}</main>
           
        </div>
    )
}

export default Layout;
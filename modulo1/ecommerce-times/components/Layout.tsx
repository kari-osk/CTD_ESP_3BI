import Image from "next/image";
import logo from "../public/logo.png";

export default function Layout({children}) {
    return (
        <div className="bg-zinc-900 mx-auto my-auto min-h-screen w-full px-12">
            <Image src={logo} alt="Logo" className="py-10"/>
            {children}
        </div>
    )
}
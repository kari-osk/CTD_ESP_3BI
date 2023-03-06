import Image from "next/image";
import Link from "next/link";
import logo from "../public/logo.png";

export default function Layout({children}) {
    return (
        <div className="bg-zinc-900 mx-auto my-auto min-h-screen w-full px-12">
            <Link href={"/"}>
            <Image src={logo} alt="Logo" className="py-10"/>
            </Link>
            {children}
        </div>
    )
}
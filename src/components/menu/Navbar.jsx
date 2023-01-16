import firebase from "../../firebase/firebase"
import { getAuth } from "firebase/auth";
import { useEffect } from "react";
import { useRouter } from "next/router";

const auth = getAuth();
export default function Navbar() {
    const router = useRouter();
    useEffect(() => {
        if (auth.currentUser == null) {
            router.push('/login')
        }
    }, [router])
    return (
        <div className="w-screen h-20 flex justify-between items-center bg-black">
            <p className="text-amber-400 p-10 text-2xl">Welcome {auth?.currentUser?.displayName}</p>
            <ul className="flex text-amber-400 p-10 text-2xl">
                <li onClick={() => { router.push('/cart') }} className="mr-10 cursor-pointer rounded hover:bg-amber-400 hover:text-white active:bg-black transition ease-in-out duration-300 p-2 select-none">Cart</li>
                <li className="mr-10 cursor-pointer rounded hover:bg-amber-400 hover:text-white active:bg-black transition ease-in-out duration-300 p-2 select-none">Help</li>
                <li onClick={() => { auth.signOut(); router.push('/') }} className="mr-10 cursor-pointer rounded hover:bg-amber-400 hover:text-white active:bg-black transition ease-in-out duration-300 p-2 select-none">Sign Out</li>
            </ul>
        </div>
    )
}
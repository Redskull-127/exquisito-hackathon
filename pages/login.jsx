import Image from "next/image"
import { useEffect, useState } from "react"
import { Cormorant_Garamond } from "@next/font/google";
import firebase from '../src/firebase/firebase'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useRouter } from 'next/router';
const lobster = Cormorant_Garamond({ subsets: ["latin"], weight: '400' });


export default function Login() {
    const router = useRouter();
    const [photos, setData] = useState(null)
    const [user, setUser] = useState(null)
    function getPhotos() {
        fetch('/Assets/Data/pexels.json').then(res => res.json()).then(data => {
            const random = Math.floor(Math.random() * data.length)
            setData(data[random])
        }).catch(err => console.log(err))
    }
    useEffect(() => {
        getPhotos();
    }, [])
    if (photos != null) {
        return (
            <div className={`w-screen select-none h-screen flex flex-col justify-center items-center ${lobster.className}`}>
                <Image src={photos.src.large} className="-z-10 opacity-80" layout="fill" objectFit="cover" alt='hero' />
                <div className="w-1/2 h-1/2 flex flex-col justify-evenly items-center bg-white rounded-xl">
                    <p className="text-4xl font-semibold">Login</p>
                    <div className="flex justify-evenly items-center w-11/12">
                        <div onClick={() => {
                           
                            const provider = new GoogleAuthProvider();
                            const auth = getAuth();
                            signInWithPopup(auth, provider)
                                .then((result) => {
                                    console.log(result);
                                    
                                    router.push('/menu')
                                }).catch((error) => {
                                    // Handle Errors here.
                                    const errorCode = error.code;
                                    const errorMessage = error.message;
                                    // The email of the user's account used.
                                    const email = error.customData.email;
                                    // The AuthCredential type that was used.
                                    const credential = GoogleAuthProvider.credentialFromError(error);
                                    // ...
                                });
                        }} className="p-3 rounded-lg cursor-pointer text-2xl bg-amber-400 active:bg-black transition ease-in-out duration-300">Login as user</div>
                        <div onClick={() => {
                            router.push('/adminLogin')
                        }} className="p-3 rounded-lg cursor-pointer text-2xl bg-amber-400 active:bg-black transition ease-in-out duration-300">Login as admin</div>
                    </div>
                </div>
            </div>
        )
    }
}
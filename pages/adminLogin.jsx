import firebase from '../src/firebase/firebase'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRef, useState } from 'react';
import Admin from '../src/components/admin';
export default function AdminLogin() {
    const [user, setUser] = useState(false);
    const email = useRef();
    const password = useRef();
    if (!user) {
        return (
            <div className="h-screen w-screen flex justify-center items-center">
                <div className="h-96 w-96 flex flex-col justify-evenly items-center rounded-lg">
                    <p className="text-amber-400 text-2xl">Admin Login</p>
                    <input ref={email} className="h-10 w-96 rounded-lg" type="text" placeholder="Username" />
                    <input ref={password} className="h-10 w-96 rounded-lg" type="password" placeholder="Password" />
                    <button onClick={() => {
                        const auth = getAuth();
                        signInWithEmailAndPassword(auth, email.current.value, password.current.value).then((userCredential) => {
                            setUser(true);
                        }).catch((error) => {
                            const errorCode = error.code;
                            const errorMessage = error.message;
                        });
                    }} className="h-10 w-96 rounded-lg bg-amber-400 text-black">Login</button>
                </div>
            </div>
        )
    }
    else {
        return (
            <Admin />
        )
    }
}
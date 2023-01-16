import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import firebase from '../../firebase/firebase'
import { doc, setDoc, getFirestore } from "firebase/firestore";


const db = getFirestore(firebase);
export default function CartNavbar() {
    const uuid = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    const router = useRouter();
    const [totalValue, setTotalValue] = useState(0);
    function fetchItems() {
        setTotalValue(JSON.parse(localStorage.getItem('cart')).reduce((acc, item) => acc + item.price, 0));
    }
    useEffect(() => {
        fetchItems();
    }, [totalValue]);
    return (
        <div className="w-screen h-20 flex justify-between items-center bg-black">
            <p className="text-amber-400 text-2xl">Total Value = {totalValue}₹</p>
            <a onClick={async () => {
                await setDoc(doc(db ,"cart", uuid), {
                    totalValue: totalValue,
                    items: JSON.parse(localStorage.getItem('cart')).map(item => item.title),
                    uuid: uuid
                })
                localStorage.removeItem('cart');
                localStorage.setItem('orderId', uuid);
                router.push('/checkout');
            }} className="text-amber-400 select-none text-2xl mr-10 cursor-pointer active:bg-amber-400 active:text-black p-2 rounded"> Checkout</a>
        </div>
    )
}
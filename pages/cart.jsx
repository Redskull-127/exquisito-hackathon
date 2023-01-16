import { useEffect, useState } from "react"
import Navbar from "../src/components/cartpage/Navbar"
export default function Cart() {
    const [cart, setCart] = useState(null);
    function fetchItems() {
        setCart(JSON.parse(localStorage.getItem('cart')));
    }
    useEffect(() => {
        fetchItems();
    }, []);
    return (
        <><Navbar /><div className="h-screen w-screen flex flex-col justify-center items-center">
            {cart?.map((item, index) => {
                return (<div key={index} className="flex justify-between mb-10 p-5 items-center w-full h-24 border-2 border-solid border-black rounded-lg">
                    <div className="flex">
                        <p className="text-3xl ml-5">{item.title}</p>
                    </div>
                    <div className="flex">
                        <p className="text-3xl mr-5">₹ {item.price}</p>
                    </div>
                </div>);
            })}
        </div></>
    )
}
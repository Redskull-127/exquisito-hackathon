import Navbar from "../src/components/menu/Navbar";
import { Cormorant_Garamond } from "@next/font/google";
import { useEffect, useState } from "react";
import { GrAdd } from "react-icons/gr";
const lobster = Cormorant_Garamond({ subsets: ["latin"], weight: '400' });

export default function Menu() {
    const [items, setItems] = useState([]);
    const [cart, setCart] = useState(null);
    function fetchItems() {
        fetch('/Assets/Data/items.json').then(res => res.json()).then(data => {
            setItems(data);
        }).catch(err => console.log(err));
    }
    useEffect(() => {
        if (cart) {
            localStorage.setItem('cart', JSON.stringify(cart));
        }
        console.log(cart);
    }, [cart]);
    useEffect(() => {
        fetchItems();
    }, []);
    if (!items.length) return (<div>Loading...</div>)
    return (
        <div className={`${lobster.className}`}>
            <Navbar />
            <div className="w-screen h-screen p-10 flex flex-col">
                {items.map((item, index) => {
                    return (<div key={index} className="flex justify-between mb-10 p-5 items-center w-full h-24 border-2 border-solid border-black rounded-lg">
                        <div className="flex">
                            <p className="text-3xl ml-5">{item.title}</p>
                        </div>
                        <div className="flex">
                            <p className="text-3xl mr-5">₹ {item.price}</p>
                            <button onClick={() => {
                                if (cart) {
                                    setCart([...cart, item]);
                                } else {
                                    setCart([item]);
                                }
                            }} className="p-2 active:bg-black transition ease-in-out duration-75">
                                <GrAdd className="text-3xl" />
                            </button>
                        </div>
                    </div>)
                })}
            </div>
        </div>
    );
}
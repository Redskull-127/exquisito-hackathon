import firebase from "../firebase/firebase";
import { collection, deleteDoc, doc, getDocs, getFirestore, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import {AiFillCheckSquare} from 'react-icons/ai';

const db = getFirestore(firebase);

export default function Admin() {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        const fetchOrders = async () => {
            // const orderss = await getDocs(collection(db, "cart"));
            // const orders = orderss.docs.map(doc => doc.data());
            // setOrders(orderss.docs.map(doc => doc.data()));
            const q = query(collection(db, "cart"))
            const querySnapshot = await getDocs(q);
            const data = querySnapshot.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
              }));
            setOrders(data);
        }
        fetchOrders();
    }, []);
    return (
        <div className="h-screen w-screen flex flex-col justify-center items-center">
            {orders.map((order, index) => {
                return (<div key={index} className="flex justify-between mb-10 p-5 items-center w-full h-24 border-2 border-solid border-black rounded-lg">
                    <div className="flex">
                        <p className="text-xl ml-5">Order ID: {order.uuid}</p>
                        <p className="text-xl ml-5">{order.items}</p>
                    </div>
                    <div className="flex">
                        <p className="text-3xl mr-2">₹ {order.totalValue}</p>
                        <AiFillCheckSquare onClick={async () => {
                            await deleteDoc(doc(db, "cart", order.uuid));
                            const orderss = await getDocs(collection(db, "cart"));
                            setOrders(orderss.docs.map(doc => doc.data()));
                        }} className="text-4xl cursor-pointer" />
                    </div>
                </div>);
            })}
        </div>
    );
}
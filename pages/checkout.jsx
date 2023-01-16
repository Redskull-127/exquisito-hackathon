/* eslint-disable @next/next/no-html-link-for-pages */
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

export default function Checkout() {
    const router = useRouter();
    const [orderId, setOrderId] = useState(null);
    useEffect(() => {
        setOrderId(localStorage?.getItem('orderId'));
    }, []);
    return (
        <div className="h-screen w-screen flex flex-col justify-evenly items-center">
            <h1 className="text-4xl text-center font-semibold">Your order has been received! <br /> <p className="text-xl">Order Id : {orderId}</p> </h1>

            <div className="flex justify-evenly items-center w-9/12">
                <Image src="/Assets/Images/upi.svg" width={150} height={150} alt='qr'/>
                <p className="text-4xl text-center font-semibold">Scan the QR to pay using UPI!
                    <br/>
                    <p className="text-xl">Else, move to counter for cash!</p>
                </p>
            </div>
            <p className="absolute bottom-4 text-2xl font-semibold">Thank You, visit again!{" "}
                <a href="/">Go Home!</a>
            </p>
        </div>
    )
}
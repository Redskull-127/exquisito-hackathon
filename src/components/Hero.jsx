import Navbar from "./Navbar"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function Hero() {
    const [photos, setData] = useState(null)
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
            <div className="w-screen flex flex-col h-screen">
                <Image src={photos.src.large} className="-z-10 opacity-80" layout="fill" objectFit="cover" alt='hero' />
                <Navbar />
                <div className="w-screen h-72 bg-whitelike opacity-75 mt-52 flex justify-evenly ">
                    <Image src="/Assets/Images/testimonial.png" height={200} width={280} alt='testimonials' />
                    <div className="w-1/2 flex flex-col justify-evenly">
                        <p className="text-4xl font-semibold">What our customers say</p>
                        <p className="text-2xl font-semibold">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed semper nunc. Sed auctor, nisl sit amet ultricies lacinia, nisl nisl aliquet nisl, nec aliquet nisl nisl sit amet nisl. </p>
                    </div>
                </div>
            </div>
        )
    }
}
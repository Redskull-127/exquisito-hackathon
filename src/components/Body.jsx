import { Cormorant_Garamond } from "@next/font/google";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const lobster = Cormorant_Garamond({ subsets: ["latin"], weight: '400' });
export default function Body() {
    const router = useRouter();
    const [video, setData] = useState(null);
    function getVideo() {
        fetch("/Assets/Data/pexelsvid.json")
            .then((res) => res.json())
            .then((data) => {
                const random = Math.floor(Math.random() * data.length);
                setData(data[random]);
            })
            .catch((err) => console.log(err));
    }
    useEffect(() => {
        getVideo();
    }, []);
    if (video != null) {
        return (
            <div className={`w-screen h-screen flex flex-col justify-evenly items-center bg-bodybg ${lobster.className}`}>
                <video src={video.video_files[3].link} className="absolute opacity-60" muted={true} height={700} width={700} autoPlay={true} loop={true} alt='hero' ></video>
                <div className="relative flex flex-col justify-evenly items-center">
                    <h1 className="text-5xl font-semibold text-center text-whitelike">Explore variety of food cuisine!</h1>
                    <a onClick={() => {
                        router.push('/login')
                    }} className="m-28 p-4 text-xl cursor-pointer bg-amber-400 rounded-xl">Order Now!</a>
                </div>
            </div>
        );
    }
}
import { Container } from "./styles.css";
//import bookSmall from '../../../public/assets/Booksmall.png'
import Image from "next/image";
import { RatingStars } from "../RatingStars";

interface props {
    title: string,
    image: string,
    author: string,
    rate: number,
}

export default function CardBookSmall({author, image, rate, title} : props) {
    return (
        <div className={Container}>
            <Image src={image} alt="" width={80} height={100}/>
            <div>
                <h1>{title}</h1>
                <span>{author}</span>
                <div>
                    <RatingStars rating={rate} size="sm" />
                </div>

            </div>

        </div>
    )
}
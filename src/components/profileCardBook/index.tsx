import Image from "next/image";
//import book from '../../../public/images/books/14-habitos-de-desenvolvedores-altamente-produtivos.png'
import { Container, AuthorInfo, ContentBook, DescriptionBook, H3, Span, Paragraph, SpanTime } from "./styles.css";
import { RatingStars } from "../RatingStars";
//import { useState } from "react";
//import { useSession } from "next-auth/react";
import { formatDistanceToNow, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale'

interface props {
    author: string,
    rate: number,
    title: string,
    description: string,
    image: string
    created_at: string,

}

export default function ProfileCardBook({ author, description, image, title, rate, created_at }: props) {
   
    const timeDistance = formatDistanceToNow(parseISO(created_at), { locale: ptBR });


 const formattedTime = timeDistance.replace('cerca de ', 'há ');


    // Função para alternar entre mostrar mais ou menos
    // const toggleReadMore = () => {
    //     setIsExpanded(!isExpanded);
    // };

    return (
        <div className={Container}>
            <span className={SpanTime}>
                {formattedTime}
            </span>
            <main className={ContentBook}>
                <div className={DescriptionBook}>
                    <Image src={image} alt="" width={120} height={150} />
                    <div className={AuthorInfo}>
                        <h3 className={H3}>
                            {title}
                            <span className={Span}>
                                {author}
                            </span>
                        </h3>
                        <RatingStars rating={rate} size="md"/>
                    </div>
                </div>

                <p className={Paragraph}>
                    {description}
                </p>
            </main>
        </div>
    )
}
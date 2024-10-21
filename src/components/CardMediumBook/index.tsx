import Image from "next/image";
//import book from '../../../public/assets/Book.png'
import { Container, ContentBook, DivFlex, H3, InfoBook } from "./styles.css";
import { RatingStars } from "../RatingStars";
import { formatDistanceToNow, parseISO } from "date-fns";
import { ptBR } from 'date-fns/locale'


interface props{
    author?: string | undefined,
    rate: number | undefined,
    title?: string ,
    description?: string ,
    image?: string ,
    created_at: Date | undefined,

}

export default function CardMediumBook({author, created_at, description, image, rate, title}:props) {
    const createdAtString = created_at instanceof Date ? created_at.toISOString() : created_at;
    if (!createdAtString) return null;
    const timeDistance = formatDistanceToNow(parseISO(createdAtString), { locale: ptBR });

    // Removendo "cerca de" da string se presente
    const formattedTime = timeDistance.replace('cerca de ', 'há ');

console.log(image)
    return (
        <div className={Container}>
            <main className={ContentBook}>
                {image && (
                    <Image src={image} alt="" width={150} height={150} />
                )}
                <div className={InfoBook}>
                    <div>
                        <div className={DivFlex}>
                            <span>
                                {formattedTime}
                            </span>
                            {
                                 typeof rate === 'number' ? (
                                    <RatingStars rating={rate} />

                                ) : (
                                    <RatingStars rating={0} />
                                )
                            }
                        </div>
                        <h3 className={H3}>
                           {title}
                            <span>
                              {author}
                            </span>
                        </h3>
                        <p>
                            {`${description?.substring(0, 130)}...`} 

                        </p>
                    </div>
                </div>
            </main>
        </div>
    )
}
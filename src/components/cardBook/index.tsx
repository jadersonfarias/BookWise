import Image from "next/image";
//import book from '../../../public/images/books/14-habitos-de-desenvolvedores-altamente-produtivos.png'
import { Container, UserImage, ProfileHeader, UserInfo, ContentBook, InfoBook,  H3 } from "./styles.css";
import { RatingStars } from "../RatingStars";
import { useState } from "react";
//import { useSession } from "next-auth/react";
import { formatDistanceToNow, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale'

interface props{
    author: string,
    rate: number,
    title: string,
    description: string,
    image: string
    created_at: string,
    user: string,
    avatar_url: string

}

export default function CardBook({author, description, image, title, created_at, rate, user, avatar_url}: props) {
    const [isExpanded, setIsExpanded] = useState(false);
    const timeDistance = formatDistanceToNow(parseISO(created_at), { locale: ptBR });

  // Removendo "cerca de" da string se presente
  const formattedTime = timeDistance.replace('cerca de ', 'há ');


    // Função para alternar entre mostrar mais ou menos
    const toggleReadMore = () => {
        setIsExpanded(!isExpanded);
    };

    const text =
        "Semper et sapien proin vitae nisi. Feugiat neque integer donec et aenean posuere amet ultrices. Cras fermentum id pulvinar varius leo a in. Amet libero pharetra nunc elementum fringilla velit ipsum. Sed vulputate massa velit nibhv   232443rw3r...";


    return (
        <div className={Container}>
            <header className={ProfileHeader}>
                <div className={UserInfo}>
                    <Image src={avatar_url} alt="" width={50} height={50} className={UserImage} />
                    <div>
                        <h3 className={H3}>
                            {user}
                        </h3>
                        <span>
                           {formattedTime}
                        </span>
                    </div>
                </div>
                <RatingStars rating={rate} />
            </header>
            <main className={ContentBook}>
                <Image src={image} alt=""  width={120} height={150}/>

                <div className={InfoBook}>
                    <h3 className={H3}>
                        {title}
                        <span>
                            {author}
                        </span>
                    </h3>
                    <p>
                        {isExpanded ? description : `${text.substring(0, 230)}...`} {/* Mostra parte do texto */}
                        <button onClick={toggleReadMore}>
                            {isExpanded ? "Ver mais" : "Ver menos"}
                        </button>
                    </p>
                </div>
            </main>
        </div>
    )
}
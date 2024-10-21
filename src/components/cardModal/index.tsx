import Image from "next/image";
import { Container, UserImage, ProfileHeader, UserInfo, H3, InfoBook, span } from "./styles.css";
import { RatingStars } from "../RatingStars";
import { formatDistanceToNow, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale'



// Interface para a avaliação
interface Review {
  rate: number;
  description: string;
  created_at: string;
  userName: string | undefined;
  userImage: string | undefined,
}


export default function CardModal({
  description,
  created_at,
  userImage,
  userName,
  rate
}: Review) {
  const timeDistance = formatDistanceToNow(parseISO(created_at), { locale: ptBR });

  // Removendo "cerca de" da string se presente
  const formattedTime = timeDistance.replace('cerca de ', 'há ');

  return (
    <div className={Container}>
      <header className={ProfileHeader}>
        <div className={UserInfo}>
        {userImage && (
          <Image src={userImage} alt="" width={50} height={50} className={UserImage} />
        )}
          <div>
            <h3 className={H3}>
              {userName}
            </h3>
            <span className={span}>
              {formattedTime}
            </span>
          </div>
        </div>
        <RatingStars rating={rate} />
      </header>
      <div className={InfoBook}>
        <p>
          {description}
        </p>
      </div>
    </div>
  );
}
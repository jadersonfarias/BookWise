import Image from "next/image";
import { ProfileContainer, ProfileImage, ProfileInfo, ProfileUser, CardInfo,DivBorde,  Span } from "./styles.css";
import { useSession } from "next-auth/react";
import { BookOpen, BookmarkSimple, Books, UserList } from "@phosphor-icons/react";

interface profileInfo {
    readPages?: number
    ratedBooks?: number
    readAuthors?: number
    mostReadCategory?: string
    date?: Date 
}
export default function ProfileCard({ ratedBooks, readAuthors, readPages,mostReadCategory, date}:profileInfo) {
    const { data } = useSession()
    
    const parsedDate = date ? new Date(date) : null;
    
    // Extrai o ano se parsedDate for válido
    const year = parsedDate ? parsedDate.getFullYear() : null;

    return (
        <div className={ProfileContainer}>
            <header className={ProfileUser}>
                {data?.user?.avatar_url ?
                    <Image
                        src={data.user.avatar_url}
                        alt="usuarío"
                        className={ProfileImage}
                        width={72}
                        height={72}
                        />
                        
                    : null}

                <h1  className={Span({ size: 'lg' })}>{data?.user.name}</h1>

                <span className={Span({ size: 'sm' })}>membro desde {year}</span>
            </header>

            <div className={DivBorde}/>

            <main className={ProfileInfo}>
                <div className={CardInfo}>
                    <BookOpen size={52} color="#50B2C0"/>
                    <div>
                        <span className={Span({ size: 'md' })}>{readPages}</span>
                        <span className={Span({ size: 'sm' })}>Páginas lidas</span>
                    </div>
                </div>

                <div className={CardInfo}>
                    <Books size={52} color="#50B2C0"/>
                    <div>
                        <span className={Span({ size: 'md' })}>{ratedBooks}</span>
                        <span className={Span({ size: 'sm' })}>Livros avaliados</span>
                    </div>
                </div>

                <div className={CardInfo}>
                  <UserList size={52} color="#50B2C0"/>
                    <div>
                        <span className={Span({ size: 'md' })}>{readAuthors}</span>
                        <span className={Span({ size: 'sm' })}>Autores lidos</span>
                    </div>
                </div>
                
                <div className={CardInfo}>
                    <BookmarkSimple size={52} color="#50B2C0"/>
                    <div>
                        <span className={Span({ size: 'md' })}>{mostReadCategory}</span>
                        <span className={Span({ size: 'sm' })}>Categoria mais lida</span>
                    </div>
                </div>
            </main>
        </div>
    )
}
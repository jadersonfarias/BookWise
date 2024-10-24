import { Box, ButtonAll, Container, Span, TextDiv, Title } from "./styles.css";
import { GreaterThan, IconProps } from "@phosphor-icons/react";
import CardBook from "../cardBook";
import { useSession } from "next-auth/react";
import CardMediumBook from "../CardMediumBook";
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { api } from '@/lib/axios'
import { Book, Rating as RatingType, User } from '@prisma/client'

import { useQuery } from "@tanstack/react-query";
import ProfileCardBook from "../profileCardBook";
import { SearchInput } from "../SearchInput";
import { useRouter } from "next/router";


// import { SearchInput } from "../SearchInput";



interface types {
    title: string,
    Icon: React.ComponentType<IconProps>,
    input: boolean,
    profile?: boolean
}




interface Rating {
    id: string;
    rate: number;
    description: string;
    created_at: string;
    book: {
        id: string;
        name: string;
        author: string;
        summary: string;
        cover_url: string;
    };
    user: {
        id: string;
        name: string;
        avatar_url: string;
        created_at: string;
        email: string | null;
        emailVerified: string | null;
    };
    book_id: string;
    user_id: string;
}

export type ReviewWithAuthorAndBook = RatingType & {
    user: User
    book: Book
}



const inputSchema = z.object({
    search: z.string()
})

type InputData = z.infer<typeof inputSchema>

export default function BodyContainer({ title, Icon, input, profile }: types) {
    const { data, status } = useSession()
    const router = useRouter()

    const {
        register,
        watch,
    } = useForm<InputData>({
        resolver: zodResolver(inputSchema),
    })
    const searchValue = watch('search')


    const { data: AllBooks } = useQuery({
        queryKey: ['allBooks'], // queryKey agora dentro do objeto
        queryFn: async () => {
            const response = await api.get<Rating[]>('/books');
            return response.data;
        }
    });


    const { data: lastUserReview } = useQuery<ReviewWithAuthorAndBook>({
        queryKey: ['latest-user-review', data?.user.id],
        queryFn: async () => {
            const { data } = await api.get('/users/user-latest')
            return data.review ?? null
        },
        enabled: !!data?.user.id

    })


    function handleClickRoute(page: string) {
        router.push(`/${page}`)
    }


    const { data: InfoBooks } = useQuery({
        queryKey: ['userRatings'], // queryKey agora dentro do objeto
        queryFn: async () => {
            const response = await api.get('/users/ratingUser');
            return response.data;
        }
    });


    const filteredBooks = InfoBooks?.filter((rating: Rating) => {
        // Se o searchValue estiver vazio, retorna todos os livros
        if (!searchValue) {
            return true;
        }

        // Filtra por nome do livro ou autor quando há valor de busca
        return (
            rating.book.name.toLowerCase().includes(searchValue.toLowerCase()) ||
            rating.book.author.toLowerCase().includes(searchValue.toLowerCase())
        );
    });


    return (
        <div className={Container}>
            <span className={Span}>

                {Icon && <Icon size={30} color={'#50B2C0'} />}
                {title}
            </span>
            {input === true ? (

                <SearchInput type="text" placeholder="Buscar livro avaliado"  {...register('search')} />

            ) : (
                null
            )}


            <div className={TextDiv}>
                {status === 'authenticated' && profile === true ? (
                    <>
                        <strong>Sua última leitura</strong>
                        <button onClick={() => handleClickRoute('explorar')} className={ButtonAll}>
                            Ver todos
                            <GreaterThan />
                        </button>
                    </>

                ) : profile === false ? (
                    <span>
                    </span>
                ) : (
                    <>
                        <strong>Avaliações mais recentes</strong>
                        <>
                        </>
                    </>
                )}
            </div>

            {status === 'authenticated' && profile === true ?
                lastUserReview?.book ? (
                    <CardMediumBook
                        author={lastUserReview?.book?.author}
                        created_at={lastUserReview?.created_at}
                        description={lastUserReview?.book?.summary}
                        image={lastUserReview?.book?.cover_url}
                        rate={lastUserReview?.rate}
                        title={lastUserReview?.book?.name}
                    />
                ) : (
                    <div className={Box}>
                        <h1 className={Title}>
                            Não viu nenhum livro 😞
                        </h1>
                    </div>

                ) : null}

            {status === 'authenticated' && profile === true ? <strong >Avaliações mais recentes</strong> : null}

            {profile === true ? (
                AllBooks?.map((rating) => (
                    <CardBook
                        key={rating.id}
                        rate={rating.rate}
                        author={rating.book.author}
                        created_at={rating.created_at}
                        title={rating.book.name}
                        description={rating.book.summary}
                        image={rating.book.cover_url}
                        avatar_url={rating.user.avatar_url}
                        user={rating.user.name}
                    />
                ))
            ) : (
                filteredBooks && filteredBooks.length > 0? (
                filteredBooks?.map((rating: Rating) => (
                    <ProfileCardBook
                        key={rating.id}
                        rate={rating.rate}
                        author={rating.book.author}
                        created_at={rating.created_at}
                        title={rating.book.name}
                        description={rating.book.summary}
                        image={rating.book.cover_url}
                    />
                ))
                ):(
                    <div className={Box}>
                    <h1 className={Title}>
                        Nenhum livro comentado😞
                    </h1>
                </div>
                )
            )}

        </div>
    )
}
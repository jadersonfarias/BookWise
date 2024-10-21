import * as Dialog from '@radix-ui/react-dialog';
import { BoxBooks, dialogBookInfos, dialogBox, dialogClose, dialogOverlay, moreInfo, InfoBook, H2Book, Flex, FlexColumn, CommentContainer, AvailableInfo, reviewButton, Span, Textearea, UserImage, AvailableBoxProfile, ContainerTextArea } from './style.css';
import img from '../../../public/images/books/arquitetura-limpa.png'
import Image from 'next/image';
import { RatingStars } from '../RatingStars';
import { BookmarkSimple, BookOpen, Check, X } from '@phosphor-icons/react';
//import CardBook from '../cardBook';
import CardModal from '../cardModal';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useMutation, useQuery } from '@tanstack/react-query';
import { v4 as uuidv4 } from 'uuid'


import { api } from '@/lib/axios';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { queryClient } from '@/lib/react-query';
import { useSession } from 'next-auth/react';
import { LoginModal } from '../LoginModal';


//import { BookCard } from '@/pages/components/BookCard';
interface Category {
    book_id: string;
    categoryId: string;
    category: {
        id: string;
        name: string;
    };
}

interface Rating {
    id: string;
    rate: number;
    description: string;
    created_at: string;
    book_id: string;
    user?: { // User pode ser opcional dependendo do contexto
        id: string;
        name: string;
        avatar_url: string;
        email: string | null;
        created_at: string;
    };
}

interface Book {
    id: string;
    name: string;
    author: string;
    summary: string;
    cover_url: string;
    created_at: string;
    total_pages: number;
    AVGRating: number;
    categories: Category[];
    ratings: Rating[];
}

interface BookModalProps {
    bookId: string
    onClose: () => void;

}const inputSchema = z.object({
    textArea: z.string()

})

type InputData = z.infer<typeof inputSchema>

export function BookModal({ bookId, onClose }: BookModalProps) {
    const [isCommentBoxOpen, setIsCommentBoxOpen] = useState(false)
    const [userRating, setUserRating] = useState<number | null>(null);
    const { register,
        handleSubmit,
    }
        = useForm<InputData>({ resolver: zodResolver(inputSchema), })


    const { status } = useSession()


    const { data: BookDetails } = useQuery<Book>({
        queryKey: ['book', bookId],
        queryFn: async () => {
            const { data } = await api.get(`/books/details/${bookId}`)
            return data?.book ?? {}
        },
    })

    const categories =
        BookDetails?.categories.map((X) => X.category.name).join(', ') ?? ''


    // console.log(JSON.stringify(BookDetails))

    const { mutateAsync: handleReview } = useMutation({
        mutationFn: async ({ description, rate }: { description: string; rate: number }) => {
            try {
                await api.post(`/books/${bookId}/createRatings`, {
                    description,
                    rate,
                });
            } catch (error) {
                console.error("Erro ao criar avaliação:", error);
                alert("Usuario já comentou neste livro.");
                throw error; // Lança o erro para o onError
            }
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['book', bookId] });
            queryClient.invalidateQueries({ queryKey: ['books'] });
            saveCommentedBook(bookId)
            handleCloseCommentBox(); // Fecha o modal ou área de comentários
        },
        onError: (error) => {
            console.error("Erro na avaliação:", error);
        },
    })

    function saveCommentedBook(bookId: string) {
        const commentedBooks = JSON.parse(localStorage.getItem('commentedBooks') || '[]');
        if (!commentedBooks.includes(bookId)) {
            commentedBooks.push(bookId);
            localStorage.setItem('commentedBooks', JSON.stringify(commentedBooks));
        }
    }

    async function handleTextArea(data: InputData) {
        if (userRating === null) {
            console.error("User rating is not set");
            return; // Evita envio se a avaliação não foi definida
        }

        try {
            await handleReview({
                description: data.textArea,
                rate: userRating,
            });
        } catch (error) {
            console.error("Erro ao enviar a avaliação:", error);
        }
    }

    const sortedBookReviews: Rating[] | undefined = BookDetails?.ratings.sort((a, b) => {
        return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
    });

    console.log({ sortedBookReviews })


    function handleCloseCommentBox() {
        setIsCommentBoxOpen(false)
    }

    function handleOpenCommentBox() {
        setIsCommentBoxOpen(true)
    }

    return (
        <div>
            {BookDetails && (
                <Dialog.Root open={!!bookId} onOpenChange={(open) => !open && onClose()}>
                    <Dialog.Trigger asChild>
                        <button>Avaliar</button>
                    </Dialog.Trigger>
                    <Dialog.Portal>
                        <div className={dialogOverlay}>
                            <div className={dialogBox}>
                                <Dialog.Close asChild>
                                    <button className={dialogClose}>X</button>
                                </Dialog.Close>
                                <div className={dialogBookInfos}>
                                    <section className={BoxBooks}>
                                        <Image src={BookDetails.cover_url} alt="rwr" width={120} height={150} />
                                        <div className={InfoBook}>
                                            <div>
                                                <h2 className={H2Book}>{BookDetails.name}</h2>
                                                <span className={Span} >{BookDetails.author}</span>
                                            </div>

                                            <span className={Span}>
                                                <RatingStars rating={BookDetails.AVGRating} size={'md'} />
                                                {sortedBookReviews && sortedBookReviews?.length > 1
                                                    ? `${sortedBookReviews?.length} reviews`
                                                    : `${sortedBookReviews?.length} review`}
                                            </span>
                                        </div>
                                    </section>
                                    <div className={moreInfo}>
                                        <div className={Flex}>
                                            <BookmarkSimple size={35} weight="bold" color='#50B2C0' />
                                            <div className={FlexColumn}>
                                                <span className={Span}>Categoria</span>


                                                <strong className={H2Book}>
                                                    {categories}</strong>

                                            </div>
                                        </div>
                                        <div>
                                            <div className={Flex}>
                                                <BookOpen size={35} weight="bold" color='#50B2C0' />
                                                <div className={FlexColumn}>
                                                    <span className={Span}>Páginas</span>
                                                    <strong>{BookDetails.total_pages}</strong>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className={CommentContainer}>
                                    <div className={AvailableInfo}>
                                        <span>Avaliações</span>

                                        {status === 'authenticated' ? (

                                            <button className={reviewButton["purple"]} onClick={handleOpenCommentBox}>Avaliar</button>
                                        ) : (
                                            <LoginModal />
                                        )}
                                    </div>
                                    {isCommentBoxOpen && (
                                        <form className={ContainerTextArea} onSubmit={handleSubmit(handleTextArea)}>
                                            <div className={AvailableBoxProfile}>
                                                <div className={Flex}>
                                                    <Image src={img} alt='' className={UserImage} width={50} height={50} />
                                                    <h2 className={H2Book}>Cristofer Rosser</h2>
                                                </div>
                                                <RatingStars rating={userRating || 0} size="md" setRating={setUserRating} />
                                            </div>
                                            <textarea placeholder="Escreva sua avaliação" className={Textearea} {...register('textArea')} />
                                            <button className={reviewButton["purple"]} onClick={handleCloseCommentBox} type='button'>
                                                <X size={24} />
                                            </button>
                                            <button className={reviewButton["green"]} type='submit'>
                                                <Check size={24} />
                                            </button>
                                        </form>

                                    )}
                                </div>
                                {sortedBookReviews?.map((rating) => {
                                    return <CardModal
                                        key={uuidv4()}
                                        description={rating.description}
                                        created_at={rating.created_at}
                                        rate={rating.rate}
                                        userImage={rating.user?.avatar_url}
                                        userName={rating.user?.name}
                                    />
                                })}
                            </div>
                        </div>
                    </Dialog.Portal>
                </Dialog.Root>
            )}
        </div>
    );
}

{/* <Dialog.Root open={!!bookId} onOpenChange={(open) => !open && onClose()}>
<Dialog.Trigger asChild>
    {BookDetails.ratings.map((book) => (
        <button key={book.id} >

        </button>
    ))}
</Dialog.Trigger>
<Dialog.Portal>
    <div className={dialogOverlay}>
        <div className={dialogBox}>
            <Dialog.Close asChild>
                <button className={dialogClose}>X</button>
            </Dialog.Close>

            <div className={dialogBookInfos}>
                <section className={BoxBooks}>
                    <Image src={BookDetails.cover_url} alt="rwr" width={120} height={150} />
                    <div className={InfoBook}>
                        <div>
                            <h2 className={H2Book}>{BookDetails.name}</h2>
                            <span className={Span} >{BookDetails.author}</span>
                        </div>

                        <RatingStars rating={1} size={'md'} />

                    </div>
                </section>

                <div className={moreInfo}>
                    <div className={Flex}>
                        <BookmarkSimple size={35} weight="bold" color='#50B2C0' />
                        <div className={FlexColumn}>
                            <span className={Span}>Categoria</span>


                           <strong className={H2Book}>
                           {categories}</strong>

                        </div>
                    </div>
                    <div>
                        <div className={Flex}>
                            <BookOpen size={35} weight="bold" color='#50B2C0' />
                            <div className={FlexColumn}>
                                <span className={Span}>Páginas</span>
                                <strong>{BookDetails.total_pages}</strong>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={CommentContainer} onSubmit={handleSubmit(handleTextArea)}>
                <div className={AvailableInfo}>
                    <span>Avaliações</span>
                    <button className={reviewButton["purple"]} onClick={handleOpenCommentBox} >Avaliar</button>
                </div>
                {isCommentBoxOpen === true ? (
                    <form className={ContainerTextArea} onSubmit={handleSubmit(handleTextArea)}>
                        <div className={AvailableBoxProfile}>
                            <div className={Flex}>
                                <Image src={img} alt='' className={UserImage} width={50} height={50} />
                                <h2 className={H2Book}>Cristofer Rosser</h2>
                            </div>
                            <RatingStars rating={userRating || 0} size="md" setRating={setUserRating} />
                        </div>
                        <textarea placeholder="Write your review" className={Textearea} {...register('textArea')} />
                        <button className={reviewButton["purple"]} onClick={handleCloseCommentBox} type='button'>
                            <X size={24} />
                        </button>
                        <button className={reviewButton["green"]} disabled={isLoading} type='submit'>
                            <Check size={24} />
                        </button>
                    </form>
                ) : (
                    null
                )}
            </div>

            <CardModal />

        </div>
    </div>
</Dialog.Portal>
</Dialog.Root> */}
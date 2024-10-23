import Sidebar from '@/components/Sidebar'
import { ButtonCategories, Container, Content, ExplorarCategories, BookContainer, BookContent, BookImage, GridContainer, DivFlex, SpanExplorar, ExplorarBooksContainer, BoxInput, H2Eplorer, SpanComment, ImageButton } from './styles.css'

import { User } from '@phosphor-icons/react'

import Image from 'next/image'
import { RatingStars } from '@/components/RatingStars'
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { Category } from '@prisma/client'
import { api } from '@/lib/axios'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { BookModal } from '@/components/bookModal'
import { SearchInput } from '@/components/SearchInput'
import { NextSeo } from 'next-seo'


export interface BookData {
    author: string
    cover_url: string
    created_at: Date
    id: string
    name: string
    summary: string
    total_pages: number
    avgRating: number;
}

const inputSchema = z.object({
    search: z.string()
})

type InputData = z.infer<typeof inputSchema>


export default function Explorar() {
    const [selectedTag, setSelectedTag] = useState<string | null>(null)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedBookId, setSelectedBookId] = useState<string>("");




    const {
        register,
        watch,
    } = useForm<InputData>({
        resolver: zodResolver(inputSchema),
    })

    const search = watch('search') || ''


    function handleSelectTag(tag: string | null) {
        setSelectedTag(tag)
    }

    const { data: categories } = useQuery<Category[]>({
        queryKey: ['categories'],
        queryFn: async () => {
            const { data } = await api.get('/categories')
            return data.categories ?? []
        },
    })



    const { data: books } = useQuery<BookData[]>({
        queryKey: ['books', selectedTag],
        queryFn: async () => {
            const { data } = await api.get('/books/bookCategorie', {
                params: {
                    category: selectedTag,
                },
            })
            return data.books ?? []
        },
    })

    

    const filteredBooks = books?.filter((book) => {
        return (
            book.name.toLowerCase().includes(search.toLowerCase()) ||
            book.author.toLowerCase().includes(search.toLowerCase())
        )
    })

    function isBookCommented(bookId: string): boolean {
        const commentedBooks = JSON.parse(localStorage.getItem('commentedBooks') || '[]');
        return commentedBooks.includes(bookId);
    }




    const handleOpenModal = (bookId: string) => {
        setSelectedBookId(bookId);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false); // Fecha o modal
        setSelectedBookId(""); // Limpa o ID do livro selecionado
    };


    return (
        <>
       <NextSeo title="Explorar | BookWise" />
        <div className={Container}>
            <Sidebar />

            <div className={Content}>
                <main className={ExplorarBooksContainer} >
                    <div className={DivFlex}>
                        <span className={SpanExplorar} >
                            <User size={35} color={'#50B2C0'} />
                            Explorar
                        </span>
                        <div className={BoxInput}>
                            <SearchInput type="text" placeholder="Buscar livro ou author"  {...register('search')} />
                        </div>
                    </div>
                    <div className={ExplorarCategories}>
                        {categories?.map((categorie) => (
                            <button
                                key={categorie.id}
                                className={`${ButtonCategories} ${selectedTag === categorie.id ? 'active' : ''}`}
                                onClick={() => handleSelectTag(categorie.id)}>
                                {categorie.name}
                            </button>

                        )
                        )}

                    </div>
                    <div className={GridContainer}>
                        {filteredBooks &&
                            filteredBooks.map((book) => {
                                return (
                                    <div className={BookContainer} key={book.id}>
                                        <div className={BookImage}>
                                            <Image src={book.cover_url} width={76} height={115} alt='livros' onClick={() => handleOpenModal(book.id)} className={ImageButton} />
                                        </div>
                                        <div className={BookContent}>
                                            <div>
                                                <h2 className={H2Eplorer}>{book.name}</h2>
                                                <span>{book.author}</span>
                                            </div>
                                            <RatingStars rating={book.avgRating} size='sm' />
                                        </div>
                                        {isBookCommented(book.id) ? (
                                            <span className={SpanComment}>Lido</span>
                                        ) : (
                                           <div></div>
                                        )}
                                    </div>

                                )
                            })}
                    </div>
                </main >

            </div>
            {isModalOpen && selectedBookId && (
                <BookModal bookId={selectedBookId} onClose={handleCloseModal} />
            )}
        </div>
        </>
    )
}
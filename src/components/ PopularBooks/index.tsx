import { GreaterThan } from "@phosphor-icons/react";
import { Container, TextDiv } from "./styles.css";
import CardBookSmall from "../cardBookSmall";
import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/axios";
import { useRouter } from "next/router";
import { Book } from "@prisma/client";
export type PopularBooksWithAVGRating = Book & {
    avgRating: number
  }


export default function PopularBooks() {
const router = useRouter()


    const { data: popularBooks } = useQuery<PopularBooksWithAVGRating[]>({
        queryKey: ['popular-books'],
        queryFn: async () => {
          const { data } = await api.get('/books/popular-books')
          return data.popularBooks ?? []
        },
      })


    function handleClickRoute(page: string) {
        router.push(`/${page}`)
      }

    
    return (
        <div className={Container}>
            <div className={TextDiv}>
                <span>Livros populares</span>
                <button onClick={() => {handleClickRoute('explorar')}}>
                    Ver todos
                    <GreaterThan />
                </button>
            </div>
            
            {Array.isArray(popularBooks) && popularBooks?.map((rating) => {
                return (
                    <CardBookSmall 
                     key={rating.id}
                     author={rating.author}
                     image={rating.cover_url}
                     rate={rating.avgRating}
                     title={rating.name}
                    />
                )
            })}

        </div>
    )
}
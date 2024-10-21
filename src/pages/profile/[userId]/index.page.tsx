import Sidebar from '@/components/Sidebar'
import { Container, Content  } from './styles.css'
import BodyContainer from '@/components/BodyContainer'
import { Book, CategoriesOnBooks, Category, Rating } from '@prisma/client'
import { User } from '@phosphor-icons/react'
import ProfileCard from '@/components/profileCard'
import { useQuery } from '@tanstack/react-query'
import { api } from '@/lib/axios'
import { useRouter } from 'next/router'

export interface ProfileRating extends Rating {
    book: Book & {
      categories: CategoriesOnBooks &
        {
          category: Category
        }[]
    }
  }

interface UserData {
    ratings: ProfileRating[]
    user: {
      image: string
      name: string
      created_at: Date
      email: string
    }
    readPages: number
    ratedBooks: number
    readAuthors: number
    mostReadCategory?: string
  }

export default function Profile() {
    const router = useRouter()
    const userId = router.query.userId as string

    const { data: user } = useQuery<UserData>({
        queryKey: ['user', userId],
        queryFn: async () => {
          const { data } = await api.get(`/users?userId=${userId}`)
          return data.user ?? null
        },
        enabled: !!userId,
      })

    return (
        <div className={Container}>
            <Sidebar/>

            <div className={Content}>
                <BodyContainer title='Perfil' Icon={User} input profile={false}/>

                <ProfileCard
                  ratedBooks={user?.ratedBooks}
                  readAuthors={user?.readAuthors}
                  readPages={user?.readPages}
                  mostReadCategory={user?.mostReadCategory}
                  date={user?.user.created_at}
                />
            </div>
        </div>
    )
}
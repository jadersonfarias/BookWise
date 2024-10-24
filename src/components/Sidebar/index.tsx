import { ButtonNav, ButtonSidebar, Container, FooterSidebar,  LinkContainer } from "./styles.css";
import { TrendUp, Binoculars, ArrowLineRight, User, ArrowLineLeft } from '@phosphor-icons/react';
import logo from '../../../public/assets/logo.svg'
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/axios";




export default function Sidebar() {
    const { status, data: user } = useSession()
    
    const { data: userId } = useQuery({
        queryKey: ['user', user?.user],
        queryFn: async () => {
          const { data, } = await api.get(`/users?userEmail=${user?.user?.email}`)
    
          return data.user.id
        },
      })


    const router = useRouter()

    function handleClickMenu(page: string) {
        router.push(`/${page}`)
      }
    
      function handleClickRoute(page: string) {
        router.push(`/${page}`)
      }

    function handleSignOut() {
        signOut({ callbackUrl: '/' })
    }

    return (
        <aside className={Container}>
            <div className={LinkContainer}>
                <div>
                    <Image src={logo} alt="" />
                </div>
                <button className={ButtonNav}  onClick={() => handleClickRoute('home')}>
                    <TrendUp size={24} />
                    início
                </button>
                <button className={ButtonNav}  onClick={() => handleClickRoute('explorar')}>
                    <Binoculars size={24} />
                    Explorar
                </button>
                {status  === 'authenticated'  ?
                    <button className={ButtonNav}   onClick={() => handleClickMenu(`profile/${userId}`)}>
                        <User size={24} />
                        Perfil
                    </button>
                    : null}
            </div>

            <footer className={FooterSidebar}>
                {user?.user?.avatar_url ? (                   
                 <button onClick={handleSignOut} className={ButtonSidebar} >
                    <Image src={user.user.avatar_url} alt="Avatar" width={30} height={30} />                                   
                      {user.user.name}                   
                     <ArrowLineLeft color="#F75A68" size={24}/>
                 </button>
               

                ) : (
                  
                    <button className={ButtonSidebar} onClick={() => handleClickRoute('')}>
                        Login
                        <ArrowLineRight color="#50B2C0" size={24} />
                    </button>
                )}
            </footer>
        </aside>
    )
}
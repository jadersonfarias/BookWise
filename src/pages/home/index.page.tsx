import Sidebar from '@/components/Sidebar'

import { HomeContainer, HomeContent } from './styles.css'
import BodyContainer from '@/components/BodyContainer'
import PopularBooks from '@/components/ PopularBooks'
import { TrendUp } from '@phosphor-icons/react'
import { NextSeo } from 'next-seo'


export default function Home() {

    return (
        <>
        <NextSeo title="BookWise" />
            <div className={HomeContainer}>
                <Sidebar>

                </Sidebar>

                <div className={HomeContent}>
                    <BodyContainer title='Início' Icon={TrendUp} input={false} profile={true} />
                    <PopularBooks />
                </div>
            </div>
        </>
    )
}
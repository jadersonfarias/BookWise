import * as Dialog from '@radix-ui/react-dialog'
import github from '../../../public/assets/github.svg'
import gooogle from '../../../public/assets/google.svg'
import { signIn } from 'next-auth/react'
import { Button, dialogClose, DialogOverlay, LoginButton, LoginModalContainer, Title } from './styles.css'
import Image from 'next/image'


export function LoginModal() {
    async function handleSocialLogin(provider: 'github' | 'google') {
        await signIn(provider)
    }
    return (
        <Dialog.Root>
            <Dialog.Trigger asChild>
                <button className={Button}>Avaliar</button>
            </Dialog.Trigger>
            <Dialog.Overlay className={DialogOverlay} />
            <Dialog.Content className={LoginModalContainer}>
                <Dialog.Close asChild>
                    <button className={dialogClose}>X</button>
                </Dialog.Close>
                <Dialog.DialogTitle className={Title}>
                    Faça login para deixar sua avaliação
                </Dialog.DialogTitle>
                <div className='ButtonContainer'>
                    <button className={LoginButton} onClick={() => {
                        handleSocialLogin('google')
                    }}>
                        <Image src={gooogle} alt='google' />
                        Entrar com Google
                    </button>
                    <button className={LoginButton} onClick={() => {
                        handleSocialLogin('github')
                    }}>
                        <Image src={github} alt='github' />
                        Entrar com GitHub
                    </button>
                </div>
            </Dialog.Content>
        </Dialog.Root>
    )
}
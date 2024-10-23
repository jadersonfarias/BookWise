import Image from 'next/image';
import logo from '../../../public/assets/logo.svg'
import github from '../../../public/assets/github.svg'
import gooogle from '../../../public/assets/google.svg'
import rocket from '../../../public/assets/rocket.svg'
import { signIn } from 'next-auth/react';
import { ImageContainer, Container, LoginContainer, Button, ButtonContainer, TextContainer, H3 } from './styles.css'
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';

export default function Login() {

  const router = useRouter()

  const handleGoogleSignIn = () => {
    signIn('google', { callbackUrl: '/home' });
  };

  const handleGithubSignIn = () => {
    signIn('github', { callbackUrl: '/home' });
  };

  const handleVisitor = () => {
    router.push('/home')
  };
  return (
    <>
      <NextSeo title="Login | BookWise" />
      <div className={Container}>
        <div className={ImageContainer}>
          <Image src={logo} alt='logo' />
        </div>
        <div className={LoginContainer}>
          <div className={TextContainer}>
            <h1>Boas vindas!</h1>
            <h3 className={H3}>Faça seu login ou acesse como visitante.</h3>
          </div>

          <div className={ButtonContainer}>
            <button className={Button} type='submit' onClick={handleGoogleSignIn}>
              <Image src={gooogle} alt='' />
              Entrar com Google
            </button>
            <button className={Button} type='submit' onClick={handleGithubSignIn}>
              <Image src={github} alt='' />
              Entrar com GitHub
            </button>
            <button className={Button} type='submit' onClick={handleVisitor}>
              <Image src={rocket} alt='' />
              Acessar como visitante
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
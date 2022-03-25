import Head from 'next/head'
import type { NextPage } from 'next'
import { useEffect } from 'react'
import { useAnimation, motion } from 'framer-motion'
import { LoginModal } from '../components/LoginModal'
import * as S from '../styles/home'

const Home: NextPage = () => {
  const controlLoginModal = useAnimation()

  useEffect(() => {
    async function startAnimation() {
      await controlLoginModal.start({
        top: '25%',
        transition: {
          delay: 2,
        },
      })
    }

    startAnimation()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <S.Body>
      <Head>
        <title>Posterizer</title>
        <meta name="Posterizer" content="Posterizer App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <S.Mask />
      <motion.div
        animate={controlLoginModal}
        initial={{
          top: '-50%',
          position: 'absolute',
          maxWidth: '500px',
          width: '100%',
        }}
      >
        <LoginModal />
      </motion.div>
    </S.Body>
  )
}

export default Home

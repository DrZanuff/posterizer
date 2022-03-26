import Head from 'next/head'
import Image from 'next/image'
import type { NextPage } from 'next'
import { useEffect, useCallback } from 'react'
import { useAnimation, motion } from 'framer-motion'

import { LoginModal } from '../components/LoginModal'
import { MainPage } from '../components/MainPage'

import * as S from '../styles/home'

export type ComponentsList = 'LoginModal' | 'MainPage'

const Home: NextPage = () => {
  const controlLoginModal = useAnimation()
  const controlMainPage = useAnimation()

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

  const changeComponent = useCallback(
    async (componentName: ComponentsList) => {
      if (componentName === 'MainPage') {
        await controlLoginModal.start({
          top: '-50%',
        })

        await controlMainPage.start({
          top: '1%',
          transition: {
            delay: 0.2,
            // duration: 0.8,
          },
        })
      }
    },
    [controlLoginModal, controlMainPage]
  )

  return (
    <S.Body>
      <Head>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <title>Posterizer</title>
        <meta name="Posterizer" content="Posterizer App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <S.BackGroundImage>
        <Image
          src="https://images.unsplash.com/photo-1542652694-40abf526446e"
          alt="BG"
          layout="fill"
        />
      </S.BackGroundImage>
      <S.Mask />
      <motion.div
        id="login-modal"
        animate={controlLoginModal}
        initial={{
          top: '-50%',
          position: 'absolute',
          maxWidth: '457px',
          width: '100%',
        }}
      >
        <LoginModal changeComponent={changeComponent} />
      </motion.div>

      <motion.div
        animate={controlMainPage}
        initial={{
          top: '-100%',
          position: 'absolute',
          maxWidth: '700px',
          width: '100%',
          height: '97vh',
        }}
      >
        <MainPage />
      </motion.div>
    </S.Body>
  )
}

export default Home

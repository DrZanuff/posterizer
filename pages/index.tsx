import Head from 'next/head'
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
          top: '5%',
          transition: {
            delay: 0.2,
            duration: 0.8,
          },
        })
      }
    },
    [controlLoginModal, controlMainPage]
  )

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
        <LoginModal changeComponent={changeComponent} />
      </motion.div>

      <motion.div
        animate={controlMainPage}
        initial={{
          top: '-100%',
          position: 'absolute',
          maxWidth: '700px',
          width: '100%',
          height: '90vh',
        }}
      >
        <MainPage />
      </motion.div>
    </S.Body>
  )
}

export default Home

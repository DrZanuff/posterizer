import type { NextPage } from 'next'
import Head from 'next/head'
import { Paper } from '@mui/material'
import * as S from '../styles/home'

const Home: NextPage = () => {
  return (
    <S.Body>
      <Head>
        <title>Posterizer</title>
        <meta name="Posterizer" content="Posterizer App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <S.LoginContainer>
        <Paper sx={{ maxWidth: '500px', height: '220px', width: '100%' }}>
          <h1>Hello World</h1>
        </Paper>
      </S.LoginContainer>
    </S.Body>
  )
}

export default Home

import { BasketBall, LogoText } from './icons'
import Image from 'next/image'
import * as S from './styles'

export function Logo() {
  return (
    <S.LogoContainer>
      <Image
        src="/Logo.png"
        alt="Posterizer Logo"
        // layout="fill"
        width={228}
        height={33}
      />
      {/* <LogoText /> */}
      {/* <img src="/Logo.png" alt="Posterizer Logo" /> */}
      <S.BasketBallContainer>
        <BasketBall />
        {/* <Image src="/Ball.png" alt="BasketBall" height={29} width={29} /> */}
      </S.BasketBallContainer>
    </S.LogoContainer>
  )
}

import Head from 'next/head'
import { useEffect } from 'react'

import * as S from './styled'

export default function Home() {
  useEffect(() => {
    fetch('/api/stars')
    .then(response => response.json())
    .then(data => console.log(data))
  },[])
  return (
    <S.Wrapper>
      <S.Forms></S.Forms>
    </S.Wrapper>
  )
}

import { useState } from 'react'

import './App.css'
import styled from 'styled-components'

import SofaImg from '/images/sofa.svg'
import SofaMP4 from '/videos/sofa.gif'
import Flip from './assets/flip.svg'
import Close from './assets/close.svg'

import { Button } from './components/Button/Button'
import { IoMdClose } from 'react-icons/io'

// styled-components

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 100%;
  height: 100vh;
  padding: 20px;

  @media screen and (max-width: 745px) {
    flex-direction: column;
    gap: 50px;
  }
`

const Sofa = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 50%;
  width: 100%;
  position: relative;

  @media screen and (max-width: 745px) {
    min-width: 100%;
  }
`

const SofaImage = styled.img`
  width: 100%;
`

const ButtonIcon = styled.img`
  position: absolute;
  top: 0;
  right: 8%;
  cursor: pointer;
`

const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  max-width: 50%;
  width: 100%;
  gap: 20px;

  @media screen and (max-width: 745px) {
    min-width: 100%;
  }
`

const Code = styled.p`
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  color: var(--colors-purple100);

  @media screen and (max-width: 425px) {
    font-size: 12px;
  }
`

const Title = styled.h2`
  font-family: 'Crimson Pro', serif;
  font-size: 40px;
  color: var(--colors-purple100);

  @media screen and (max-width: 425px) {
    font-size: 30px;
  }
`

const Price = styled.span`
  font-family: 'Poppins', sans-serif;
  color: var(--colors-purple100);
`

function App() {
  const [rotation, setRotation] = useState(false)
  const showRotation = (() => setRotation(!rotation))

  return (
    <Container>
      <Sofa>
        <SofaImage src={rotation ? SofaMP4 : SofaImg} alt="" />
        <ButtonIcon src={rotation ? Close : Flip} alt="" onClick={showRotation} />
      </Sofa>
      <AboutContent>
        <Code>CÓDIGO: 42404</Code>
        <Title>Sofá Margot II - Rosé</Title>
        <Price>R$ 4.000</Price>
        <Button children="ADICIONAR À CESTA" />
      </AboutContent>
    </Container>
  )
}

export default App

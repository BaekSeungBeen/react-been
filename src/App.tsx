import styled from '@emotion/styled'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [index, setIndex] = useState(0)
  const [history, setHistory] = useState([0])
  
  return (
    <Container>
      <Header>My Counter</Header>
      <Number>{sumHistory(history)}</Number>
      <Input 
        type="number" 
        placeholder="Enter a number"  
        onChange={handleChange} 
        value={isNaN(count) ? '' : count}
      />
      <Footer>
        <Button onClick={handleBefore}>⇦</Button>
        <Button onClick={handleIncrement}>+</Button>
        <Button onClick={handleDecrement}>-</Button>
        <Button onClick={handleAfter}>⇨</Button>
      </Footer>
    </Container>
  )
  
  function sumHistory(historyArray: number[]): number {
    // index보다 작은 인덱스의 값들만 필터링해서 합산
    return historyArray.reduce((total, num, i) => {
      return i <= index ? total + num : total
    }, 0)
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value
    // 빈 문자열이거나 NaN인 경우 0으로 설정
    const numValue = value === '' ? 0 : parseInt(value) || 0
    setCount(numValue)
  }

  function handleIncrement() {
    setHistory([...history, count])
    setIndex(index + 1);
  }
  function handleDecrement() {
    setHistory([...history, -count])
    setIndex(index + 1);
  }

  function handleBefore() {
    if (index > 0) {
      setIndex(index - 1);
    }
  }
  
  function handleAfter() {
    if (index < history.length) {
      setIndex(index + 1);
    }
  }
}

export default App

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  gap: 10px;
`

const Header = styled.h1`
  font-size: 3.2em;
  font-weight: 700;
`
const Number = styled.span`
  font-size: 3.2em;
  font-weight: 700;
`

const Input = styled.input`
  border: 1px solid #000;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
`

const Footer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`
const Button = styled.button`
  width: 100%;
  height: 100%;
  border: 1px solid #000; 
  border-radius: 5px;
  margin: 0px 10px;
`
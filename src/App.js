import styled from "styled-components"
import SearchBar from "./components/SearchBar"
import Time from "./components/Time"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background: #000;
    color: #fff;
`

const App = () => {
  return (  
    <Container>
      <Time />
      <SearchBar />
    </Container>
  )
}

export default App
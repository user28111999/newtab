import styled from "styled-components"
import SearchBar from "./components/SearchBar"
import Time from "./components/Time"
import Tasks from "./components/Tasks"

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
      <Tasks />
    </Container>
  )
}

export default App
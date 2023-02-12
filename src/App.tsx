import { Container } from "./components/Container/Container.style"
import { Controls } from "./components/Controls/Controls"
import { DescriptionMusic } from "./components/DescriptionMusic/DescriptionMusic"
import { GraphicDisplay } from "./components/GraphicDisplay/GraphicDisplay"
import { Main } from "./components/Main/Main"
import { ProgressBar } from "./components/ProgressBar/ProgressBar"
import { Timer } from "./components/Timer/Timer"

function App() {

  return (
    <Main>
      <GraphicDisplay />
      <Container direction="column">
        <DescriptionMusic
          text="Acorda Devinho"
          fontWeight={700}
          sizeFont={'1.5rem'}
          primary={true}
        />
        <DescriptionMusic
          text="Banda Rocketseat"
        />
      </Container>
      <Controls />
      <Container
        direction="column"
        gap=".5rem">
        <ProgressBar percentage={80} />
        <Timer />
      </Container>
    </Main>
  )
}

export default App

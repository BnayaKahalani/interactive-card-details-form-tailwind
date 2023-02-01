import { CardDetails } from "./components/CardDetails"
import CardBack from "./components/CardBack"
import CardFront from "./components/CardFront"

function App() {
  return (
    <div className='h-screen font-display'>
      <CardDetails>
        <CardBack id='cardback' />
        <CardFront id='cardfront' />
      </CardDetails>
    </div>
  )
}

export default App

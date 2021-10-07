import Routing from './routing/routing'
import Main from './components/main'

function App() {
  return (
    <div className="container">
      <Main>
        {(props) => <Routing {...props}/>}
      </Main>
    </div>
  )
}

export default App

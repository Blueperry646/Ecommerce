import './App.css'
import Capa from './components/Capa'
import Topo from './components/topo'
import Produtos from './components/Produtos'

function App() {
  return (
    <>
      <div>
      <header>
        <Topo></Topo>
        <main>
        <Capa/>
        <section>
          <Produtos/>
        </section>
        </main>
      </header>
      </div>
    </>
  )
}

export default App

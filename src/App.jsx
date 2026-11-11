import { useState } from "react"
import Button from "./components/Button"
import Counter from "./components/Counter"

function App() {
  const [count, setCount] = useState(0)

  function incr() {
    if (count === 10)
      return

    setCount(count + 1)
  }

  function decr() {
    if (count === 0)
      return

    setCount(count - 1)
  }

  return (
    <main className="h-screen flex flex-col justify-center items-center">
      <h1 className="font-bold text-2xl text-center">My Counter</h1>
      <Counter count={count} incrFn={incr} decrFn={decr} />
    </main>
  )
}

export default App
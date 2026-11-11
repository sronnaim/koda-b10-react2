import { useState } from "react"
import Button from "./components/Button"

function App() {
  const [counter, setCounter] = useState(0)

  function incr() {
    if (counter === 10)
      return

    setCounter(counter + 1)
  }

  function decr() {
    if (counter === 0)
      return

    setCounter(counter - 1)
  }

  return (
    <main className="h-screen flex flex-col justify-center items-center">
      <h1 className="font-bold text-2xl text-center">My Counter</h1>
      <div className="flex justify-center items-center gap-2">
        <Button innerText={"-"} onClick={decr}></Button>
        <span className="shadow-[2px_2px_0_1px_black] rounded w-[5ch] text-center p-2 border-1">{counter}</span>
        <Button innerText={"+"} onClick={incr} />
      </div>
    </main>
  )
}

export default App
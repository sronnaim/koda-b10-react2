import Button from "./Button";
import Display from "./Display";

export default function Counter({ count, decrFn, incrFn }) {
  return (
    <div className="flex justify-center items-center gap-2">
      <Button innerText={"-"} onClick={decrFn}></Button>
      <Display innerText={count} />
      <Button innerText={"+"} onClick={incrFn} />
    </div>

  )
}
export default function Button({ innerText, onClick }) {
  return (
    <button className="px-4 py-2 rounded shadow-[2px_2px_0_1px_black] border-1 active:border-4 hover:bg-black/10 cursor-pointer" onClick={onClick}>{innerText}</button>
  )
}
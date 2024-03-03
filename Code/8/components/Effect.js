import { useEffect, useState } from "react";

export default function Effect() {
    const [count, setCount] = useState(0)
    const [effect, setEffect] = useState('')
    const [clear, setClear] = useState('')
  
    useEffect(() => {
      setEffect('Use Effect! ' + count)
  
      return () => {
        setClear('Clear = ' + count)
      }
    }, [count])
  
    return (
      <div>
        <div>{count}</div>
        <button onClick={() => {setCount(count + 1)}}>Нажми на меня</button>
        <div>{effect}</div>
        <div>{clear}</div>
      </div>
    );
 
}





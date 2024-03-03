import { useRef } from "react";

export default function Effect() {
    const inputRef = useRef(null)

    function handleClick() {
        inputRef.current.focus()
    }
   
    return (
      <div>
        <input type="text"/><br/>
        <input type="text" ref={inputRef}/>
        <button onClick={handleClick}>Фокус сюда!</button><br/>
        <input type="text"/><br/>
        <input type="text"/>
      </div>
    );
 }





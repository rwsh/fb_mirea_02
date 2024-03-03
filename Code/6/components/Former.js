import { useState } from "react"

export default function Former() {
    const [name, setName] = useState("")
    const [isvalid, setIsValid] = useState(false)
    const [nameColor, setNameColor] = useState("")

    function handlerChange(e) {
        setName(e.target.value)
        if (e.target.value.length > 2) {
            setIsValid(true)
        } else {
            setIsValid(false)
        }
    }

    function handlerSubmit(e) {
        e.preventDefault();
        if (!isvalid) {
            setNameColor("1px solid red")
        } else {
            setNameColor("1px solid green")
        }
    }

    return (
        <div>
            <form onSubmit={handlerSubmit}>
                <label>Имя: </label>
                <input type="text" value={name} onChange={handlerChange} style={{border:nameColor}}/>
                &nbsp;
                <input type="submit" value="Отправить"/>
            </form>
        </div>
    )
}





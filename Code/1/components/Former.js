import { useState } from "react"

export default function Former() {
    const [name, setName] = useState("")

    return (
        <div>
            <form>
                <label>Имя: </label>
                <input type="text" value={name}/>
                <input type="submit" value="Отправить"/>
            </form>
        </div>
    )
}
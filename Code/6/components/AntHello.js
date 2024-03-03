import { Input, Select, Button } from "antd";
import { useState } from "react";
const { Option } = Select;

export default function AntHello() {
    const [name, setName] = useState()
    const [title, setTitle] = useState("подполковник")
    const [hello, setHello] = useState("")
    function handlerChangeTitle (e) {
        setTitle(e)
    }
    function handlerChange(e) {
        setName(e.target.value)
    }
    function handlerClick(e) {
        setHello("Здравия желаю, " + title + " " + name + "!")
    }
    const selectBefore = (
        <Select defaultValue="подполковник" onChange={handlerChangeTitle}>
            <Option value="лейтенант">Лейтенант</Option>
            <Option value="капитан">Капитан</Option>
            <Option value="майор">Майор</Option>
            <Option value="подполковник">Подполковник</Option>
            <Option value="полковник">Полковник</Option>
            <Option value="генерал">Генерал</Option>
        </Select>
    );
    return (
        <div>
            <Input addonBefore={selectBefore} onChange={handlerChange}/>
            <br/><br/>
            <Button type="primary" onClick={handlerClick}>Приветствие!</Button>
            <br/><br/>
            <span>{hello}</span>
        </div>
    )
}





import { Cascader } from 'antd';

const options = [
  {
    value: 'Математика',
    label: 'Математика',
    children: [
        {
            value: 'Математический анализ',
            label: 'Математический анализ',
          },
          {
            value: 'Линейная алгебра',
            label: 'Линейная алгебра',
          },
          {
            value: 'Теория вероятностей',
            label: 'Теория вероятностей',
          },
    ],
  },
  {
    value: 'Физика',
    label: 'Физика',
    children: [
        {
            value: 'Механика',
            label: 'Механика',
          },
          {
            value: 'Термодинамика',
            label: 'Термодинамика',
          },
          {
            value: 'Оптика',
            label: 'Оптика',
          },
    ],
  },
];
const onChange = (value) => {
  console.log(value);
};

export default function Cascader1 () {
    return (
        <Cascader options={options} onChange={onChange} placeholder="Please select" />        
    )
}



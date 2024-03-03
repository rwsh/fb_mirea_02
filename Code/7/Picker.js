import { ColorPicker, Calendar, message } from 'antd';

const onPanelChange = (value) => {
    message.info(value.format('DD-MM-YYYY'));
};

export default function Picker () {
    const wrapperStyle = {
        width: 300,
        border: `1px solid blue`,
      }

    return (
        <div>
            <ColorPicker defaultValue="#22D924" />
            <br/><br/>
            <div style={wrapperStyle}>
            <Calendar fullscreen={false} onChange={onPanelChange} />
            </div>
        </div>
    )
}



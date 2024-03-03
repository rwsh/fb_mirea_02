import { DownOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Dropdown, message, Space, Tooltip } from 'antd';
const handleButtonClick = (e) => {
  message.info('Click on button.');
};
const handleMenuClick = (e) => {
  message.info('Click on menu item: '+ e.key);
};
const items = [
  {
    label: '1st menu item',
    key: '1',
    icon: <UserOutlined />,
  },
  {
    label: '2nd menu item',
    key: '2',
    icon: <UserOutlined />,
  },
  {
    label: '3rd menu item',
    key: '3',
    icon: <UserOutlined />,
    danger: true,
  },
  {
    label: '4rd menu item',
    key: '4',
    icon: <UserOutlined />,
    danger: true,
    disabled: true,
  },
];
const menuProps = {
  items,
  onClick: handleMenuClick,
};

export default function Dropdown1 () {
    return (
        <div>
            <Dropdown.Button menu={menuProps} icon={<UserOutlined />} onClick={handleButtonClick}>
                Пример
            </Dropdown.Button>
        </div>
    )
}



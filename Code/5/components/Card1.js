import React from 'react';
import { Card, Space } from 'antd';

export default function Card1() {
    return (
        <Space
            direction="vertical"
            size="small"
            style={{display: 'flex', }}
        >
            <Card title="Классические языки" size="small">
                <p>Pascal</p>
                <p>C</p>
                </Card>
                <Card title="Объектно-ориентированные" size="small">
                <p>C++</p>
                <p>Java</p>
                </Card>
                <Card title="Скриптовые" size="small">
                <p>Python</p>
                <p>JavaScript</p>
            </Card>
        </Space>
    )
}



import React from 'react';
import { Button } from 'antd';

export default function AntButton1 () {
  return (
    <div>
      <Button type="primary">Primary</Button>
      <br/><br/>
      <Button>Default</Button>
      <br/><br/>
      <Button type="dashed">Dashed</Button>
      <br/><br/>
      <Button type="primary" danger>Danger</Button>
    </div>
  )
}



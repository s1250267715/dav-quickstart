'use strict'
import React from 'react';
import { Affix, Button } from 'antd';
import './index.scss' 


export default class SAffix extends React.Component {
    render() {
        return (
            <Affix className='s' offsetTop={120} onChange={affixed => console.log(affixed)}>
                <Button>120px to affix top</Button>
            </Affix>
        )
    }
}
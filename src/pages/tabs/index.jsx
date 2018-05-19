import React from 'react'
import 'antd/dist/antd.less';
import styles from './index.less'
import classnames from 'classnames/bind'
import { Tabs } from 'antd'

const TabPane = Tabs.TabPane
const cx = classnames.bind(styles)

function callback(key) {
    console.log(key);
}

function CBTab({ children }) {
    return (
        <div className={cx('container')}>
            <span>titlsssse</span>
            <Tabs defaultActiveKey="1" onChange={callback} tabBarGutter={40} style={{ padding: '9px 0', margin: 0 }}>
                <TabPane tab="Tab ffdfdffd1" key="1"></TabPane>
                <TabPane tab="Tab 2" key="2"></TabPane>
                <TabPane tab="Tab 3" key="3"></TabPane>
            </Tabs>
        </div>

    )
}

export default CBTab

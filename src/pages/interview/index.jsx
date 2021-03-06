import { Component } from 'react';
import { observer, inject } from 'mobx-react';
import SInput from '../../components/Input';
import SButton from '../../components/Button/button';
import { toJS } from 'mobx';
import style from './index.scss';
import classNames from 'classnames/bind';
import Spin from 'antd/lib/spin'
import 'antd/lib/spin/style'
let cx = classNames.bind(style)

@inject('common')

@observer
export default class extends Component {
    componentDidMount(){
        this.props.common.getData()
    }
    render() {
        console.log(this.props, 'props')
        let { text, data, getData, changeText ,loading} = this.props.common
        data = toJS(data)
        return (
            <div>
                <div className={cx('flex')}>
                    <SInput changeText={changeText} placeholder='请输入电话号码'></SInput>
                    <SButton getData={getData} text='搜索'></SButton>
                </div>
                <ul style={{ marginTop: 30 }}>
                    {data.length > 0 ? data.map(item => {
                        let place = item.phone.indexOf(text)
                        return <li key={item.id}>name:{item.name}
                            <span style={{ marginLeft: 50 }}>phone:{item.phone.substr(0, place)}
                                <span className={cx('a')}>{item.phone.substr(place, text.length)}</span>
                                {item.phone.substr(text.length)}
                            </span>
                        </li>
                    }
                    ) : <li>暂无数据</li>}
                </ul>
                {loading && <Spin />}
            </div>
        )
    }
}

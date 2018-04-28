import React from 'react';
import { Button } from 'antd';
import './button.scss'
import { observer, inject } from 'mobx-react';
import PropTypes from 'prop-types';

@inject('common')
@observer
export default class SButton extends React.Component {
    componentWillMount() {
        console.log('component will mount')
    }

    componentDidMount() {
        console.log('component did mount')
    }
    render() {
        console.log('render', this.props)
        const { getData, text } = this.props
        return (
            <div className='test'>
                <Button type="primary" icon="search" onClick={getData}>{text || '默认值'}</Button>
            </div>
        );
    }
};
SButton.propTypes = {
    getData: PropTypes.func,
    text: PropTypes.string
}


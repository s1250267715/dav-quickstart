import React from 'react';
import { Input } from 'antd';
import { observer, inject } from 'mobx-react';
import PropTypes from 'prop-types';


@inject('common')

@observer
export default class SInput extends React.Component {
  render() {
    const { changeText, placeholder } = this.props
    return <Input type='text' placeholder={placeholder || 'defaultValue'} onChange={(e) => changeText({ val: e.target.value })}></Input>
  }
}
SInput.proTypes = {
  changeText: PropTypes.func
}
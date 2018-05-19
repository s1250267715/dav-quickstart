import React from 'react'
import { observer, inject } from 'mobx-react'
import AutoLoader from './AutoLoader'

let arrAutoLoader = []
for (var i = 0; i < 30; i++) {
  arrAutoLoader.push(`这是第${i + 1}条数据`)
}

@inject('common')

@observer
export default class  extends React.Component {
  render () {
    const {autoloaderObj, loadMore, arrAutoLoader} = this.props.common
    return (
      <AutoLoader data = {autoloaderObj} callback={loadMore}>
          <ul>
            {arrAutoLoader.map(item => <li key={Math.random()}>{item}</li>)}
          </ul>
      </AutoLoader>
    )
  }
}

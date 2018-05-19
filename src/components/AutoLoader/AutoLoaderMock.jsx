import React from 'react'
import Spin from 'antd/lib/spin'
import 'antd/lib/spin/style'
import AutoLoader from './AutoLoader'

let arrAutoLoader = []
for (var i = 0; i < 30; i++) {
  arrAutoLoader.push(`这是第${i + 1}条数据`)
}
export default class  extends React.Component {
  constructor (props) {
    super(props)
    this.state = {arrAutoLoader: arrAutoLoader, threhold: 20, loading: false, hasMore: true, visible: false, icon: <Spin />}
    this.loadMore = this.loadMore.bind(this)
  }
  loadMore () {
    const { arrAutoLoader } = this.state
    if (arrAutoLoader.length >= 150) {
      this.setState({loading: true, hasMore: false})
      setTimeout(() => {
        this.setState({loading: false})
      }, 1000)
      return false
    }
    for (var i = 0; i < 30; i++) {
      arrAutoLoader.push(`这是第${i + 1}条数据`)
    }
    this.setState({arrAutoLoader: arrAutoLoader, loading: true})
    setTimeout(() => {
      this.setState({loading: false})
    }, 1000)
    console.log('callback数组的 length', arrAutoLoader.length)
  }
  render () {
    return (
      <AutoLoader data = {this.state} callback={()=>this.loadMore()}>
          <ul>
            {this.state.arrAutoLoader.map(item => <li key={Math.random()}>{item}</li>)}
          </ul>
      </AutoLoader>
    )
  }
}

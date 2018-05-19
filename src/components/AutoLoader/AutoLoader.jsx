import React from 'react'
import PropTypes from 'prop-types'
import styles from './AutoLoader.less'
import classnames from 'classnames/bind'
import Spin from 'antd/lib/spin'
import Icon from 'antd/lib/icon'
import 'antd/lib/spin/style'
import 'antd/lib/icon/style'

const cx = classnames.bind(styles)


const defaultConfig = {
  height: 300,
  threhold: 20,
  loading: false,
  hasMore: true,
  icon: <Icon type='loading' spin />
}

function AutoLoader ({data, callback, children}) {
  function autoloaderScroll (scrollEle) {
    let lastScrollTop = 0
    console.log('scrollEle--- :', scrollEle)
    scrollEle && scrollEle.addEventListener('scroll', () => {
      if (scrollEle.scrollHeight - height - scrollEle.scrollTop < threhold && scrollEle.scrollTop > lastScrollTop) {
        callback()
        lastScrollTop = scrollEle.scrollTop
      }
    })
  }
  const { height, loading, hasMore, icon, threhold } = Object.assign({}, defaultConfig, data)
  if (height < threhold) {
    console.log('若可视高度小于阀值,该组件不做处理')
    return false
  }

  return (
    <div className={cx('autoloader')}>
      <div className={cx('autoloader-scroll')} style={{height: height}} ref={autoloaderScroll}>
        {children}
      </div>
      {loading && <div className={cx('loading')}>{hasMore ? <Spin indicator={icon} tip='loading' /> : '已经是最后一条数据啦'}</div>}
    </div>
  )
}

AutoLoader.propTypes = {
  data: PropTypes.object,
  callback: PropTypes.func.isRequired
}

export default AutoLoader

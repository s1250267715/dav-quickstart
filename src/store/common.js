import { observable, action } from 'mobx';
import axios from 'axios';

let defaultArrAutoLoader = []
for (var i = 0; i < 30; i++) {
    defaultArrAutoLoader.push(`这是第${i + 1}条数据`)
}

class store {
    @observable text = ''
    @observable loading = false
    @observable obj = {
        name: 'xiaoming',
        age: 28
    }
    @observable data = []

    @observable arrAutoLoader = defaultArrAutoLoader
    @observable autoloaderObj = {
        height: 300,
        threhold: 20,
        loading: false,
        hasMore: true,
    }
    @action changeText = (payload) => {
        this.text = payload.val
    }
    @action loadMore = () => {
        if (this.arrAutoLoader.length >= 150) {
          this.autoloaderObj.loading = true
          this.autoloaderObj.hasMore = false
          setTimeout(() => {
            this.autoloaderObj.loading = false
          }, 1000)
          return false
        }
        for (var i = 0; i < 30; i++) {
          this.arrAutoLoader.push(`这是第${i + 1}条数据`)
        }
        this.autoloaderObj.loading = true
        setTimeout(() => {
            this.autoloaderObj.loading = false
          }, 1000)
        console.log('callback数组的 length', this.arrAutoLoader.length)
    }

    @action getData = async () => {
        console.log('11 :', 11);
        this.loading = true
        const url = `https://jsonplaceholder.typicode.com/users`;
        const res = await axios.get(url) || {}
        if (res.status === 200) {
            this.loading = false
            this.data = res.data.filter(item => item.phone.includes(this.text))
        }
    }
}

export default new store()
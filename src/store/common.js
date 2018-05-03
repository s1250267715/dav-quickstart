import { observable, action } from 'mobx';
import axios from 'axios';

class store {
    @observable text = ''
    @observable obj = {
        name: 'xiaoming',
        age: 28
    }
    @observable data = []
    @action changeText = (payload) => {
        this.text = payload.val
    }

    @action getData = async () => {
        const url = `https://jsonplaceholder.typicode.com/users`;
        const res = await axios.get(url) || {}
        if (res.status === 200) {
            this.data = res.data.filter(item => item.phone.includes(this.text))
        }
    }
}

export default new store()
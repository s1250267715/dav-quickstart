import { observable, action, computed } from 'mobx';

class Todo {
    @observable id = Date.now()
    @observable value
    @observable checked = false
    constructor(value) {
        this.value = value
    }
}
class store {
    @observable text = ''
    @observable todolist = []
    @observable filterList = []
    @computed get filterListLength() {
        return this.todolist.filter(i => !i.checked).length
    }
    @action change = (e) => {
        this.text = e.target.value
    }
    @action add = () => {
        this.text.length > 0 && this.filterList.push(new Todo(this.text))
        this.todolist = this.filterList
        this.text = ''
    }
    @action todoFilter = (type) => {
        console.log('type :', type);
        switch (type) {
            case 'clear':
                this.filterList = this.todolist = []
                break;
            case 'active':
                this.filterList = this.todolist.filter(i => !i.checked)
                break;
            case 'completed':
                this.filterList = this.todolist.filter(i => i.checked)
                break;
            case 'all':
                this.filterList = this.todolist
                break;
            default:
                break;
        }
    }
}

export default new store()
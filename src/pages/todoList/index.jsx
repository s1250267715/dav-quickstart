import { Component } from 'react';
import { observer, inject } from 'mobx-react';
// import classNames from 'classnames/bind';
// import style from './index.scss';

// let cx = classNames.bind(style)

@inject('todo')

@observer
export default class extends Component {
    render() {
        const { text, filterList, change, add, todoFilter, filterListLength } = this.props.todo
        return (
            <div>
                <input type="text" onChange={change} value={text} />
                <button onClick={add}>add</button>
                <ul>
                    {filterList.length > 0 ? filterList.map(v => <li key={v.id}><input type="checkbox" checked={v.checked} onChange={() => v.checked = !v.checked} />{v.value}</li>) : <li>no data</li>}
                </ul>
                <div>
                    Target Left:{filterListLength}<button onClick={() => todoFilter('clear')}>clear</button><button onClick={() => todoFilter('active')}>active</button><button onClick={() => todoFilter('completed')}>completed</button><button onClick={() => todoFilter('all')}>all</button>
                </div>

            </div>
        )
    }
};


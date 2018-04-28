import { Component } from 'react';
import Menu from '../../components/Menu';

export default class extends Component {
    render() {
        return (
            <div>
                <h1 style={{ textAlign: 'center', fontSize: '30' }}>初学 ant design</h1>
                <Menu />
                <div>{this.props.children}</div>
            </div>
        )
    }
};

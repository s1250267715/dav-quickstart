import React from 'react';

class ListOfWords extends React.PureComponent {
  render() {
    console.log(this.props)
    return <div>{this.props.words.join(',')}</div>;
  }
}

export default class WordAdder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      words: ['marklar']
    };
  }

  handleClick() {
    // This section is bad style and causes a bug
    // const words = this.state.words;
    // words.push('marklar');
    // this.setState({words: words});

    this.setState(prevState=>({
      words:[...prevState.words,'shl']
    }))
    console.log(this.state.words)
    
  }

  render() {
    return (
      <div>
        <button onClick={()=>this.handleClick()} />
        <ListOfWords words={this.state.words} />
      </div>
    );
  }
}
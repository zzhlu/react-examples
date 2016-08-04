const HelloUniverse = React.createClass({
  getInitialState: function () {
    return {
      name: ''
    };
  },
  handleChange: function (event) {
    this.setState({
      name: event.target.value
    });
  },
  render: function () {
    return <div>
      <HelloWorld name={this.state.name}/>
      <br/>
      <input type="text" onChange={this.handleChange}/>
    </div>
  },
});

const HelloWorld = React.createClass({
  render: function () {
    return <p>Hello,{this.props.name ? this.props.name : "World"}</p>;
  },
});

ReactDOM.render(<HelloUniverse />, document.getElementById('content'));

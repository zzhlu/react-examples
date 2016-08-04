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
    return <Notelist>
      <p>Hello,</p>
      <HelloWorld name={this.state.name}/>
      <input type="text" onChange={this.handleChange}/>
    </Notelist>
  },
});

const Notelist = React.createClass({
  render: function () {
    return (
      <ol>
        {
          React.Children.map(this.props.children, function (child) {
            return <li type="circle">{child}</li>;
          })
        }
      </ol>
    )
  }
});

const HelloWorld = React.createClass({
  render: function () {
    return <p>{this.props.name ? this.props.name : "World"}</p>;
  },
});

ReactDOM.render(<HelloUniverse />, document.getElementById('content'));

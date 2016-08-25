import React, {Component} from 'react';

import Hello from '../../../Hello.jsx';


export default class AdminPage extends Component {

	render() {
		return(
				<Tabs>
					<Pane label="Academies" faIcon="fa-leaf">
            <div>This is my tab 1 contents!</div>
          </Pane>
          <Pane label="Tests" faIcon="fa-cube">
            <Hello />
          </Pane>
          <Pane label="Users" faIcon="fa-filter">
            <div>This is my tab 3 contents!</div>
          </Pane>
          <Pane label="Hello" faIcon="fa-user">
            <div>This is my tab 4 contents!</div>
          </Pane>
				</Tabs>
		)
	}
}

const Tabs = React.createClass({
  displayName: 'Tabs',
  propTypes: {
    selected: React.PropTypes.number,
    children: React.PropTypes.oneOfType([
      React.PropTypes.array,
      React.PropTypes.element
    ]).isRequired
  },
  getDefaultProps() {
    return {
      selected: 0
    };
  },
  getInitialState() {
    return {
      selected: this.props.selected
    };
  },
  handleClick(index, event) {
    event.preventDefault();
    this.setState({
      selected: index
    });
  },
  _renderTitles() {
    function labels(child, index) {
      let activeClass = (this.state.selected === index ? 'active' : '');
      return (
        <li key={index} >
          <a href="#" className={activeClass} onClick={this.handleClick.bind(this, index)} >
          	<i className={"fa " + child.props.faIcon + " fa-lg"}></i>
            {child.props.label}
          </a>
        </li>
      );
    }
    return (
    	<div className="admin-menu">
      	<ul className="my-ul">
        	{this.props.children.map(labels.bind(this))}
      	</ul>
      </div>
    );
  },
  _renderContent() {
    return (
      <div>
        {this.props.children[this.state.selected]}
      </div>
    );
  },
  render() {
    return (
      <div className="admin-body">
      	<div className="admin-nav">{this._renderTitles()}</div>
      	<div className="admin-content">{this._renderContent()}</div>
      </div>
    );
  }
});

const Pane = React.createClass({
  displayName: 'Pane',
  propTypes: {
    label: React.PropTypes.string.isRequired,
    children: React.PropTypes.element.isRequired
  },
  render() {
    console.log(this.props.children);
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
});

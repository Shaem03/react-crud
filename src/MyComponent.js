import React from 'react';
import PropTypes from 'prop-types'

const propTypes = {
	name: PropTypes.string.isRequired,
	onClicked: PropTypes.func,
	title: PropTypes.string.isRequired
}

const defaultProps = {
	name: 'App name will always be Shaem-app'
}
class MyComponent extends React.Component {

  render(){
  	const { title, name, onClick} = this.props;
    return (
        <div className="component">
          <h1> Title : {title} </h1>
          <h1> Name : {name} </h1>
          <div onClick = {onClick}>
          	Click me
          </div>
        </div>
      );
  }
}

MyComponent.propTypes = propTypes;
MyComponent.defaultProps = defaultProps;
export default MyComponent;

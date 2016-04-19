import React from 'react';
import ReactDOM from 'react-dom';

export default class LoginForm extends React.Component {
  render() {
    if (!this.props) {
      return (null);
    }
    return (
      <div>MDR</div>
    );
  }
}

ReactDOM.render(
  <LoginForm />,
  document.getElementById('content')
);

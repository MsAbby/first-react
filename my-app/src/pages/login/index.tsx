import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div className="P-login">
        <p>我是登录</p>
        <button onClick={this.gotoHome.bind(this)}>跳转Home页</button>
      </div>
    )
  }

  gotoHome() {
    console.log('111')
  }
}

export default Login;
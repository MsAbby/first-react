import React from 'react'
import {withRouter} from 'react-router-dom';

function Home() {
  return (
    <div className="P-home">
      <p>我是首页</p>
    </div>
  )
}

export default withRouter(Home);

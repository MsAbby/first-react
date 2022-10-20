// 1. 导入react
import React from 'react'
import ReactDOM from 'react-dom'
import Comment from './pages/demo/comment';

import * as serviceWorker from './serviceWorker';
import { createRoot } from 'react-dom/client';


// import PCRouter from './router/index';
// import './assets/reset.scss';

// 2. 渲染 react 元素
const container = document.getElementById('root') as HTMLElement;

const root = createRoot(container);
root.render(<Comment />);

serviceWorker.unregister();

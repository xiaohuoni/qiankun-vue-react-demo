import './public-path';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

function render(props) {
  const { container } = props;
  ReactDOM.render(<App />, container ? container.querySelector('#root') : document.querySelector('#root'));
}

// 如果不是乾坤子应用环境，直接渲染
if (!window.__POWERED_BY_QIANKUN__) {
  render({});
}

// 导出乾坤需要的生命周期函数
export async function bootstrap() {
  console.log('[react] react app bootstraped');
}

export async function mount(props) {
  console.log('[react] props from main framework', props);
  render(props);
}

export async function unmount(props) {
  const { container } = props;
  ReactDOM.unmountComponentAtNode(container ? container.querySelector('#root') : document.querySelector('#root'));
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import React from 'react';
import MainIndex from './component/index/MainIndex';
import styles from './component/css/index.module.css';

const App = () => {
  return (
    <div className={ styles.app_wrap }>
      {/* 오늘의 의문? 홈페이지의 로고와 이름을 변경하고 싶다.
        왜 vscode에서 js를 사용하며 컴포넌트를 만들어 사용하는가, html과 js 사용에 따른 차이가 있는가? */}
        <MainIndex className={ styles.app_login } />
    </div>
  );
};

export default App;
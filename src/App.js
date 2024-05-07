import logo from './logo.svg';
import './header.css';
import './Content.css';
import Header from './Header';
import Content from './Content';
import ccrlogo from './img/ccr_logo.png';
import icon from './img/fuzi.jpg';
import phpIcon from './img/php.png';
import jsIcon from './img/js.png';
import C_sharp_Icon from './img/Logo_C_sharp.png';
import C_Logo_Icon from './img/C_Logo.png';
import Python_Icon from './img/python.png';
import Java_Icon from './img/java.svg';
import git_Icon from './img/git.png';
import linux_Icon from './img/linux.png';
import robot from './img/robot1_blue.png';
import React, { useState, useEffect } from 'react';

const useWindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return width;
};

function App() {
  const width = useWindowWidth();
  let maxWindowContent = (
    <div className="flexbox">
              <div className="itembox">
              <Content title={<a href='https://kvdomain.shop/' target='_blank'>COOKING CROSS</a>} img={[ccrlogo]} 
              txt={<div>日々の夕飯の献立決めに困っている主婦や、これから料理を学ぼうと思っている方向けのレシピ共有アプリです。レシピのCRUD機能はもちろん、画像認識を用いたレシピの提案機能も実装しています。<hr/>
              <ul className='Context'><li><strong>Frontend</strong>：HTML,CSS,JS(JQuery)</li><li><strong>Backend</strong>：PHP、MYSQL</li>
              <li><strong>Server</strong>：XAREA</li></ul></div>}
                ></Content>
              </div>
              <div className="itembox">
                <Content title={"自己紹介"} img={[robot]} 
                txt={<div>高校生の時から少しづつプログラミングをはじめ、
                  専門学校では学生ITコンテストやETロボコンなど外部の活動にも積極的に参加しています。
                  現在はLaravelとReactの勉強を行っています。よろしくお願いします。<hr/>
                 <p>GitHub：<a href='https://github.com/Hken12340' target='_blank'>https://github.com/Hken12340</a></p>
                 <p>Zenn：<a href='https://zenn.dev/k1822m' target='_blank'>https://zenn.dev/k1822m</a></p> </div>}
                ></Content>
              </div>
              <div className="itembox">
              <Content title={"スキル"} 
              img={[phpIcon,jsIcon,Python_Icon,C_sharp_Icon,C_Logo_Icon,Java_Icon,git_Icon,linux_Icon]}></Content>
              </div>
          </div>
  );

  let minWindowContent = (
    <div className="flexbox_min">
              <div className="itembox">
                <Content title={"自己紹介"} img={[robot]} 
                txt={<div>高校生の時から少しづつプログラミングをはじめ、
                  専門学校では学生ITコンテストやETロボコンなど外部の活動にも積極的に参加しています。
                  現在はLaravelとReactの勉強を行っています。よろしくお願いします。<hr/>
                 <p>GitHub：<a href='https://github.com/Hken12340' target='_blank'>https://github.com/Hken12340</a></p>
                 <p>Zenn：<a href='https://zenn.dev/k1822m' target='_blank'>https://zenn.dev/k1822m</a></p> </div>}
                ></Content>
              </div>
              <div className="itembox">
              <Content title={<a href='https://kvdomain.shop/' target='_blank'>COOKING CROSS</a>} img={[ccrlogo]} 
              txt={<div>日々の夕飯の献立決めに困っている主婦や、これから料理を学ぼうと思っている方向けのレシピ共有アプリです。レシピのCRUD機能はもちろん、画像認識を用いたレシピの提案機能も実装しています。<hr/>
              <ul className='Context'><li><strong>Frontend</strong>：HTML,CSS,JS(JQuery)</li><li><strong>Backend</strong>：PHP、MYSQL</li>
              <li><strong>Server</strong>：XAREA</li></ul></div>}
                ></Content>
              </div>
              <div className="itembox">
              <Content title={"スキル"} 
              img={[phpIcon,jsIcon,Python_Icon,C_sharp_Icon,C_Logo_Icon,Java_Icon,git_Icon,linux_Icon]}></Content>
              </div>
          </div>
  );


  let mainContent = maxWindowContent;
  if(width < 1200){
    mainContent = minWindowContent;
  }

  return (
    <div className="App">
      <header>
        <title>プロフィールサイト</title>
      </header>
      <Header></Header>
      
      <div className="ProfileName">
        <img src={icon} className="icon"></img>
        <p>Kenta Hontani / 本谷 健太</p>
      </div>
    {mainContent}
    </div>  
  );
}
export default App;

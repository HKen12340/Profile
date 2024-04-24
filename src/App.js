import logo from './logo.svg';
import './header.css';
import './Content.css';
import Header from './Header';
import Content from './Content';
import ccrlogo from './img/ccr_logo.png';
import mogura from './img/mogura.png';
import learn from './img/learn.png'
import akaubu from './img/akaubu.png';
import suisou from './img/suisou_side.png';
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
import sikaku from './img/sikaku.png';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="ProfileName">
        <img src={icon} className="icon"></img>
        <p>Kenta Hontani / 本谷 健太</p>
      </div>
          <div className="flexbox">
            <div className="itembox">
            <Content title={<a href='https://kvdomain.shop/' target='_blank'>COOKING CROSS</a>} img={[ccrlogo]} 
            txt={<div>日々の夕飯の献立決めに困っている主婦や、これから料理を学ぼうと思っている方向けのレシピ共有アプリです。レシピのCRUD機能はもちろん、画像認識を用いたレシピの提案機能も実装しています。<hr/>
            <ul className='Context'><li><strong>Frontend</strong>：HTML,CSS,JS(JQuery)</li><li><strong>Backend</strong>：PHP、MYSQL</li>
            <li><strong>Server</strong>：XAREA</li></ul></div>}
              ></Content>
              {/* <Content title={"取得資格"} img={[sikaku]} 
            txt={<div>
            <ul className='Context'><li>基本情報技術者試験</li><li>ITパスポート試験</li>
            <li>Webクリエイター認定試験スタンダード</li><li>PHP7技術者認定試験初級</li></ul></div>}
              ></Content> */}
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
        <div>
          {/* コメントここから */}
          {/* <h2 className="SecTitle">作ったもの</h2>
          <div className="flexbox">
            <div className="itembox">
              <Content title={<a href='https://kvdomain.shop/' target='black'>COOKING CROSS</a>} img={[ccrlogo]} 
            txt={<div>日々の夕飯の献立決めに困っている主婦や、これから料理を学ぼうと思っている方向けのレシピ共有アプリです。レシピのCRUD機能はもちろん、画像認識を用いたレシピの提案機能も実装しています。<hr/>
            <ul className='Context'><li><strong>Frontend</strong>：HTML,CSS,JS(JQuery)</li><li><strong>Backend</strong>：PHP、MYSQL</li>
            <li><strong>Server</strong>：XAREA</li></ul></div>}
              ></Content>
            </div>
            <div className="itembox">
              <Content title={"漢字王"} img={[mogura]} 
              txt={<div>子供向け語学学習ゲームです。ゲームモードが「羊の中に犬が一匹」
                「世界の文字」「仲間をあつまれ」「神経衰弱(開発中)」の4つあります。<hr></hr>
                <ul className='Context'><li><strong>Frontend：</strong>JS(Phaser.js)</li></ul>
                </div>}
              ></Content>
            </div>
            <div className="itembox">
              <Content title={"manalog"} img={[learn]} 
              txt={<div>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                <hr/>
                <ul className='Context'><li><strong>Frontend：</strong>HTML,JS,CSS(Bootstrap)</li>
                <li><strong>Backend：</strong>PHP,MYSQL</li></ul>
              </div>}
              ></Content>
            </div>
            <div className="itembox">
              <Content title={"横浜デジタルアーカイブ"} img={[akaubu]} txt={<div>
                aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa<hr></hr>
                <ul className='Context'>
                <li><strong>Frontend：</strong>Next.js</li>
                <li><strong>Backend：</strong>Laravel</li></ul>
                </div>}
              ></Content>
            </div>
            <div className="itembox">
              <Content title={"カメの自動エサやりIoT"} img={[suisou]} 
              txt={<div>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                <hr></hr>
                <ul className='Context'>
                <li><strong>機材</strong>：RasberryPi,Webカメラ,サーボモーター,水温センサー</li>
                <li><strong>プログラム</strong>：Python,JS,HTML,CSS</li>
                </ul>
              </div>}
              ></Content>
            </div>
            <div className="itembox">
              <Content title={"ゲーム置き場"} 
              txt={<div>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                <hr></hr>
                <ul className='Context'>
                <li><strong>Frontend</strong>：HTML,CSS,JS</li>
                </ul>
              </div>}
              ></Content>
            </div>
        </div> */}
        {/* コメントここまで */}
    </div>
    </div>
  );
}

export default App;

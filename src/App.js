import './App.css';
import './CSS.css';
import Bootstrap from './Bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './animation.css';


  
function App() {
  return (  
    <div className="App">
      <header>
        <div id="about">
          <ul>
            <li>
              <a href="./world.html">World</a>
            </li>
            <li>
              <div className="dropdown">
                  <a href="https://www.youtube.com/" className="dropbtn">
                    Character's.
                  </a>
                  <div className="dropDownContent">
                      <a href="https://www.youtube.com/">Saitama</a>
                      <a href="https://www.youtube.com/">Genos</a>
                      <a href="https://www.youtube.com/">Speed-o'-Sound Sonic</a>
                      <a href="https://www.youtube.com/">Bang, white fang</a>
                  </div>
              </div>
            </li>
                <li><a href="https://www.youtube.com/">Media</a></li>
                <li><a href="https://www.youtube.com/">Community</a></li>
            </ul>
        </div>
      </header>
    <div id="logo">   
        <a href="http://localhost:3000/"><img src="https://upload.wikimedia.org/wikipedia/commons/0/09/One_Punch_Man_logo.svg" alt="Sorry, something went wrong" width="800px" height="200px"/> </a><br/>
    </div>
    <div className="animate">
        <link href="https://fonts.googleapis.com/css?family=Roboto:100" rel="stylesheet"/>
              
        <div className='light x1'></div>
        <div className='light x2'></div>
        <div className='light x3'></div>
        <div className='light x4'></div>
        <div className='light x5'></div>
        <div className='light x6'></div>
        <div className='light x7'></div>
        <div className='light x8'></div>
        <div className='light x9'></div>
    </div>
    <div id="top">

        <div id="top1">
            <p>
                One-Punch Man (Japanese: ワンパンマン, Hepburn: Wanpanman) is a Japanese superhero franchise created by the artist ONE. It tells the story of Saitama, a superhero who can defeat any opponent with a single punch but seeks to find a worthy opponent after growing
                bored by a lack of challenge due to his overwhelming strength. ONE wrote the original webcomic version in early 2009. A digital manga remake began publication on Shueisha's Tonari no Young Jump website in June 2012. The manga is illustrated
                by Yusuke Murata, and its chapters are periodically compiled and published into individual tankōbon volumes. As of December 2021, 24 volumes have been released. In North America, Viz Media has licensed the remake manga for English language
                release and was serialized in its Weekly Shonen Jump digital magazine.
            </p>
        </div>

        <img src="https://www.enjpg.com/img/2020/one-punch-man-33-500x747.jpg" alt=""/><br/>
        <p>
            An anime adaptation of the manga, produced by Madhouse, was broadcast in Japan from October to December 2015. A second season, produced by J.C.Staff, was broadcast from April to July 2019. The anime series is licensed in North America by Viz Media, and premiered in the United States on Adult Swim's Toonami programming block in July 2016. The second season premiered in October 2019.

            As of June 2012, the original webcomic surpassed 7.9 million hits. As of April 2020, the manga remake had sold over 30 million copies worldwide.
        </p>
    </div>
    <div id="middle">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, explicabo.</p>
    </div>
    <div className="bootstrap">
        
        <Bootstrap/>
    </div>
    {/* <div id="characters">
       

    </div> */}
    </div>
  );
}

export default App;

import React, { Component, useEffect } from 'react';
import './App.css';
import { Gradient } from './Gradient.js';
import bootstrap from "./techStack/bootstrap.png";
import csharp from "./techStack/csharp.png";
import css from "./techStack/css2.png";
import github from "./techStack/github.png";
import html from "./techStack/html2.jpg";
import javascript from "./techStack/javascript3.png";
import mudblazor from "./techStack/mudblazor.png";
import net from "./techStack/net3.png";
import react from "./techStack/react.png";
import threejs from "./techStack/threejs.png";
import typescript from "./techStack/typescript4.png";
import vite from "./techStack/vite.png";


class App extends Component {

  componentDidMount () {
    const gradient = new Gradient();

    gradient.initGradient('#gradient-canvas');
  }

  typescript = () => {
    window.open("https://www.typescriptlang.org/");
  }

  javascript = () => {
    window.open("https://www.javascript.com/");
  }

  html = () => {
    window.open("https://html.com/");
  }

  css = () => {
    window.open("https://www.w3.org/Style/CSS/Overview.en.html");
  }

  net = () => {
    window.open("https://dotnet.microsoft.com/en-us/");
  }

  react = () => {
    window.open("https://react.dev/");
  }

  threejs = () => {
    window.open("https://threejs.org/");
  }

  mudblazor = () => {
    window.open("https://mudblazor.com/");
  }

  bootstrap = () => {
    window.open("https://getbootstrap.com/");
  }

  vite = () => {
    window.open("https://vitejs.dev/");
  }

  csharp = () => {
    window.open("https://learn.microsoft.com/en-us/dotnet/csharp/");
  }

  github = () => {
    window.open("https://github.com/");
  }

  githubProfile = () => {
    window.open("https://github.com/AlecJans02");
  }

  exhaustRepo = () => {
    window.open("https://github.com/AlecJans02/Performance-Exhaust-Website");
  }

  exhuastSite = () => {
    window.open("https://performance-exhaust-website-git-main-alecjans02.vercel.app/");
  }
  
  rolexRepo = () => {
    window.open("https://github.com/AlecJans02/rolex-product-display-page");
  }

  rolexSite = () => {
    window.open("https://rolex-product-display-page-git-main-alecjans02.vercel.app/");
  }

  unitRepo = () => {
    window.open("https://github.com/AlecJans02/Measurement-Conversion-App");
  }

  unitSite = () => {
    window.open("https://blue-mushroom-03448ef10.3.azurestaticapps.net/");
  }

  bitcoinRepo = () => {
    window.open("https://github.com/AlecJans02/Bitcoin-Api");
  }

  bitcoinSite = () => {
    window.open("https://jolly-stone-0a11d9510.3.azurestaticapps.net/");
  }

  universityRepo = () => {
    window.open("https://github.com/AlecJans02/Typescript-University-Finder");
  }

  projectRepo = () => {
    window.open("https://github.com/AlecJans02/portfolio");
  }

  projectSite = () => {
    window.open("https://portfolio-alecjans02.vercel.app/");
  }

  userRepo = () => {
    window.open("https://github.com/AlecJans02/User-Api-Filter");
  }

  userSite = () => {
    window.open("https://user-api-filter-alecjans02.vercel.app/");
  }

  javacalRepo = () => {
    window.open("https://github.com/AlecJans02/Calculator");
  }

  javacalSite = () => {
    window.open("https://calculator-alecjans02.vercel.app/");
  }

  javastopRepo = () => {
    window.open("https://github.com/AlecJans02/JavaScript-StopWatch");
  }

  javastopSite = () => {
    window.open("https://java-script-stop-watch-alecjans02.vercel.app/");
  }

  render () {
    return (
      <div>
        <div className='animatedGradient'>
          <canvas id="gradient-canvas" data-transition-in />
        </div>
        <div className='gradientOverlay'>
          <h1 className='gradientTitle'>ALEC JANSEN</h1>
          <h2 className='gradientText'>SOFTWARE DEVELOPER</h2>
        </div>
        <div className='portfolioBody'>
          <h1 className='objectiveTitle'>CAREER OBJECTIVE</h1>
          <p className='objectiveP'>My Goal is to become a Software Engineer in an exiteful and collaborative environment, working on projects that im passionate and enthusiastic about. I would love to join a team where i can not only contribute my skills, but 
          develop them and gain experience. Learning new technologies, languedges and frameworks is something I personally love and would love to join a culture in which embraces such new technologies. Overall, i would love to be given a chance to prove my skills and 
          dedication as a Software Engineer that will make a great improvement to your development team. </p>
        </div>
        <div className='languedgeBody'>
          <h1 className='languedgeTitle'>TECH STACK</h1>
          <div className='languedgeDiv'>
            <div className='languedgeBox' onClick={this.typescript}><img className='langImg' src={typescript}></img></div>
            <div className='languedgeBox' onClick={this.csharp}><img className='langImg' src={csharp}></img></div>
            <div className='languedgeBox' onClick={this.javascript}><img className='langImg' src={javascript}></img></div>
            <div className='languedgeBox' onClick={this.net}><img className='langImg' src={net}></img></div>
            <div className='languedgeBox' onClick={this.react}><img className='langImg' src={react}></img></div>
            <div className='languedgeBox' onClick={this.html}><img className='langImg' src={html}></img></div>
            <div className='languedgeBox' onClick={this.css}><img className='langImg' src={css}></img></div>
            <div className='languedgeBox' onClick={this.mudblazor}><img className='langImg' src={mudblazor}></img></div>
            <div className='languedgeBox' onClick={this.threejs}><img className='langImg' src={threejs}></img></div>
            <div className='languedgeBox' onClick={this.bootstrap}><img className='langImg' src={bootstrap}></img></div>
            <div className='languedgeBox' onClick={this.github}><img className='langImg' src={github}></img></div>
            <div className='languedgeBox' onClick={this.vite}><img className='langImg' src={vite}></img></div>
          </div>
        </div>
        <div className='githubDisplay'>
          <div className='github' onClick={this.githubProfile}>
            <h1 className='githubText'>GITHUB</h1>
          </div>
        </div>
        <div className='projectBody'>
          <h1 className='projectTitle'>PROJECTS</h1>
          <div className='projectDisplays'>
            <div className='projectDiv'>
              <h1 className='projectDisplayTitle'>EXHAUST DISPLAY PAGE</h1>
              <h2 className='projectTools'>React, Bootstrap.</h2>
              <p className='projectDescription'>This website allows the user to select a specific motorbike or car model and will display a list of performance exhuats options. The website will display import information like the power increase and material. 
                The user also has the ability to look at the specific website where you can find the exact products shown on screen aswell as browse through the manufacturers that we specifically made displays for.</p>
              <div className='projectButtons'>
                <div className='buttonDiv' onClick={this.exhaustRepo}>
                  <h1 className='buttonText'>Github Repository</h1>
                </div>
                <div className='buttonDiv' onClick={this.exhuastSite}>
                  <h1 className='buttonText'>Hosted Site (if available)</h1>
                </div>
              </div>
            </div>
            <div className='projectDiv'>
              <h1 className='projectDisplayTitle'>ROLEX DISPLAY PAGE</h1>
              <h2 className='projectTools'>React, Three JS</h2>
              <p className='projectDescription'>This website shows users the current 2023 year watch models that rolex have to offer. The user is able to flick through the watch colour options and they are also provided with a direct link the the speceif product page of choice. 
              This website also contains a 3D Model where users can move and zoom in on a Rolex Model. Latly this page also provides users with the rolex materials, contact pages and store locations.</p>
              <div className='projectButtons'>
                <div className='buttonDiv' onClick={this.rolexRepo}>
                  <h1 className='buttonText'>Github Repository</h1>
                </div>
                <div className='buttonDiv' onClick={this.rolexSite}>
                  <h1 className='buttonText'>Hosted Site (if available)</h1>
                </div>
              </div>
            </div>
            <div className='projectDiv'>
              <h1 className='projectDisplayTitle'>UNIT CONVERSION CALCULATOR</h1>
              <h2 className='projectTools'>C#, Mudblazor, .NET</h2>
              <p className='projectDescription'>This project allows the user to convert different units suck as Kilometers to Miles or Litres to Gallons. this project also has some nice built in features such as a toggle mode for a 
              Light/Dark mode, aswell as a collapsable navbar. Overall this app allows the user to convert 7 different types of units and is extremely simple to use.</p>
              <div className='projectButtons'>
                <div className='buttonDiv' onClick={this.unitRepo}>
                  <h1 className='buttonText'>Github Repository</h1>
                </div>
                <div className='buttonDiv' onClick={this.unitSite}>
                  <h1 className='buttonText'>Hosted Site (if available)</h1>
                </div>
              </div>
            </div>
            <div className='projectDiv'>
              <h1 className='projectDisplayTitle'>BITCOIN API DISPLAY</h1>
              <h2 className='projectTools'>C#, Mudblazor, .NET, Web API</h2>
              <p className='projectDescription'>This project makes a get request to a Web API which stores the current time value of bitcoin in JSON form. This applications stores the data and then displays the information needed to the user. 
              The application also allows the user to refresh the data on screen so they are also able to see the current price conversion live.</p>
              <div className='projectButtons'>
                <div className='buttonDiv' onClick={this.bitcoinRepo}>
                  <h1 className='buttonText'>Github Repository</h1>
                </div>
                <div className='buttonDiv' onClick={this.bitcoinSite}>
                  <h1 className='buttonText'>Hosted Site (if available)</h1>
                </div>
              </div>
            </div>
            <div className='projectDiv'>
              <h1 className='projectDisplayTitle'>UNIVERSITY FINDER</h1>
              <h2 className='projectTools'>TypeScript, React JS, Web API</h2>
              <p className='projectDescription'>This project allows the user to select a country in which they would like to veiw all of the current universities from. The application when then get the selected country and call a Web API to receive
              all of the current university names and website in JSON foramt. this JSON is then displayed to the user in a neat table.</p>
              <div className='projectButtons'>
                <div className='buttonDiv' onClick={this.universityRepo}>
                  <h1 className='buttonText'>Github Repository</h1>
                </div>
                <div className='buttonDiv'>
                  <h1 className='buttonText'>Hosted Site (if available)</h1>
                </div>
              </div>
            </div>
            <div className='projectDiv'>
              <h1 className='projectDisplayTitle'>THREE JS PORTFOLIO</h1>
              <h2 className='projectTools'>Javascript, Three JS, Html, Css</h2>
              <p className='projectDescription'>This project page was a previous project page made with mainly Three JS. It displays all of the important information neccesary for a portfolio page. Unfortunaltey a good computer is needed to reliably
              run the site due to the amount of Three Js used.</p>
              <div className='projectButtons'>
                <div className='buttonDiv' onClick={this.projectRepo}>
                  <h1 className='buttonText'>Github Repository</h1>
                </div>
                <div className='buttonDiv' onClick={this.projectSite}>
                  <h1 className='buttonText'>Hosted Site (if available)</h1>
                </div>
              </div>
            </div>
            <div className='projectDiv'>
              <h1 className='projectDisplayTitle'>USER API DISPLAY</h1>
              <h2 className='projectTools'>React JS, Web API</h2>
              <p className='projectDescription'>This project uses the fetch method to retrive JSON data from a Web API and store it using React State. the user information is then displayed on the website for the user to browse. 
              Above the data is a searchbar which allows the user to filter through the saved users by showing username's with the same letters as those typed by the user.</p>
              <div className='projectButtons'>
                <div className='buttonDiv' onClick={this.userRepo}>
                  <h1 className='buttonText'>Github Repository</h1>
                </div>
                <div className='buttonDiv' onClick={this.userSite}>
                  <h1 className='buttonText'>Hosted Site (if available)</h1>
                </div>
              </div>
            </div>
            <div className='projectDiv'>
              <h1 className='projectDisplayTitle'>JAVASCRIPT CALCULATOR</h1>
              <h2 className='projectTools'>JavaScript, Html, Css</h2>
              <p className='projectDescription'>This is a simple calculator application made with vanilla JS. The app allows the user to add, subtract, divide, multiply and get a percentage of whatever numbers the user would prefer. 
              The calculator also allows the user to remove numbers from the calculation and clear current calculation.</p>
              <div className='projectButtons'>
                <div className='buttonDiv' onClick={this.javacalRepo}>
                  <h1 className='buttonText'>Github Repository</h1>
                </div>
                <div className='buttonDiv' onClick={this.javacalSite}>
                  <h1 className='buttonText'>Hosted Site (if available)</h1>
                </div>
              </div>
            </div>
            <div className='projectDiv'>
              <h1 className='projectDisplayTitle'>JAVASCRIPT STOPWATCH</h1>
              <h2 className='projectTools'>JavaScript, Html, Css</h2>
              <p className='projectDescription'>This application is a simple stop watch made with vanilla JS. The app allows the user to control a stop watch displayed on screen utilising the Start, Stop and Reset buttons located in the center.</p>
              <div className='projectButtons'>
                <div className='buttonDiv' onClick={this.javastopRepo}>
                  <h1 className='buttonText'>Github Repository</h1>
                </div>
                <div className='buttonDiv' onClick={this.javastopSite}>
                  <h1 className='buttonText'>Hosted Site (if available)</h1>
                </div>
              </div>
            </div>
          </div>
          <div className='contact'>
              <h1 className='contactTitle'>CONTACT ME</h1>
              <h2 className='contactInfo'>Email:   aljans122@gmail.com</h2>
              <h2 className='contactInfo'>Phone:   0455504879</h2>
              <h2 className='contactInfo'>LinkedIn:   alec-jansen-a1b78b278</h2>
            </div>
        </div>
      </div>
    )
    }
}

export default App

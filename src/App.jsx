import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Profile from "./components/userprofile/userprofile";
import Projects from "./components/addprojects/addprojects";
import Header from "./components/certification/certificationheader/header";
import Footer from "./components/certification/certificationfooter/footer";
import Certificationhero from "./components/certification/certificationhero/hero";
import Education from "./components/certification/education/education";
import Skills from "./components/certification/skills/skills";
import Currentchat from "./components/chatpage/currentchatpage/currentchat";
import Recentchat from "./components/chatpage/recentchatpage/recentchat";
import Createaccount from "./components/createaccount/createaccount";
import Addpost from "./components/createpost/addpost/addpost";
import Follow from "./components/followlist/followlist/follow";
import Headermain from "./components/mediaheader/header/header";
import Lander from "./components/medialander/lander";
import Newsfeed from "./components/newsfeedprofile/newsfeed";
import News from "./components/newslist/News/news";
import MainProjects from "./components/portfoliopage/mainprojects/mainprojects";
import PortfolioHero from "./components/portfoliopage/portfoliohero/portfoliohero";
import Cards from "./components/profilecards/cards/cards";
import MediaLander from "./components/projects1/page_info/page_info";
import MediaLanderhero from "./components/projects1/projects1_hero/projects1_hero";
import Newsfeedhero from "./components/projects2/newsfeedhero/newsfeedhero";
import Newsfeedpage from "./components/projects2/newsfeedpage_info/newsfeedpage";
import Mediainfo from "./components/projects3/mediainfo/mediainfo";
import Mediahero from "./components/projects3/mediahero/mediahero";
import Signin from "./components/medialander/signin";
import Profilecards from "./components/socialmediacards/mediacards/mediacards";

function App() {
  return (
    <>
      <div>
        <Profile />
        <Projects />
        <Header />
        <Footer />
        <Certificationhero />
        <Education />
        <Skills />
        <Currentchat />
        <Recentchat />
        <Createaccount />
        <Addpost />
        <Follow />
        <Headermain />
        <Lander />
        <Newsfeed />
        <News />
        <MainProjects />
        <PortfolioHero />
        <Cards />
        <MediaLander />
        <MediaLanderhero />
        <Newsfeedhero />
        <Newsfeedpage />
        <Mediainfo />
        <Mediahero />
        <Signin />
        <Profilecards />
      </div>
    </>
  );
}

export default App;

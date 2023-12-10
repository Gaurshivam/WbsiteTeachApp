import './App.css';
import Blog from './Components/Body/Blogs/Blog';
import Categories from './Components/Body/Categories/Categories';
import Classes from './Components/Body/Classes/Classes';
import Community from './Components/Body/Community/Community';
import Explore from './Components/Body/EventExplore/Explore';
import Features from './Components/Body/Features/Features';
import Main from './Components/Body/Main/Main';
import Reason from './Components/Body/Reason/Reason';
import SkillComp from './Components/Body/Skills/SkillComp';
import Teacher from './Components/Body/Teachers/Teacher';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
    {/* Navbar Section  */}
      <Navbar />

      {/* body Section  */}
      <Main />
      <Features />
      <Classes />
      <Categories />
      <Reason />
      <Community />
      <Teacher />
      <Explore />
      <Blog />
      <SkillComp />

      {/* Footer Section  */}
      <Footer />
    </div>
  );
}

export default App;
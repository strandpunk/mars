import CarouselBox from '../carouselBox/CarouselBox';
import Content from '../content/Content';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import Nav from '../navbar/Navbar';
import classes from './AppWrapper.module.scss';

import img01 from './01.jpg';
import img02 from './02.jpg';
import img03 from './03.jpg';



import { BrowserRouter } from 'react-router-dom';


function AppWrapper() {
  return (
    <BrowserRouter>
      <div className={classes.appwrapper}>
        <Header />
        <CarouselBox>
          <img src={img01} alt="placeholder" />
          <img src={img02} alt="placeholder" />
          <img src={img03} alt="placeholder" />
        </CarouselBox>
        <Nav />
        <Content />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default AppWrapper;

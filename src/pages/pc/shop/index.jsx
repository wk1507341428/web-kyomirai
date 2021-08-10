import { useEffect } from 'react';
import { NavBar, Foot, HomePage1, HomePage2, HomePage3, HomePage4, HomePage5 } from '@/components';
import fullpage from 'fullpage.js';
import 'fullpage.js/dist/fullpage.min.css';
import { ShopPage1, ShopPage2, ShopPage3 } from './components'


export default function IndexPage() {

  useEffect(() => {
      new fullpage('#fullPage', {
        navigation: true,
        sectionsColor:['#FFFFFF', '#FFFFFF', '#F4F3F2', '#F4F3F2', '#FFFFFF'],
      });
  }, [])

  return (
    <div>
      <NavBar />
      <div id="fullPage">
        <div className="section">
          <ShopPage3 />
        </div>
        <div className="section">
          <ShopPage1 />
        </div>
        <div className="section">
          <HomePage3 />
        </div>
        <div className="section">
          <HomePage4 />
        </div>
        <div className="section">
          <HomePage5 />
        </div>
      </div>
      <Foot />
    </div>
  );
}

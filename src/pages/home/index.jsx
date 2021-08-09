import { useEffect } from 'react';
import $styles from './index.less';
import { NavBar, Foot } from '@/components';
import fullpage from 'fullpage.js';
import 'fullpage.js/dist/fullpage.min.css';


export default function IndexPage() {

  useEffect(() => {
      new fullpage('#fullPage', {
        navigation: true,
        sectionsColor:['#ff5f45', '#0798ec', '#fc6c7c', 'grey'],
      });
  }, [])

  return (
    <div>
      <NavBar />
      <div id="fullPage">
        <div className="section" data-anchor="slide1">Some section</div>
        <div className="section" data-anchor="slide2">Some section</div>
        <div className="section" data-anchor="slide3">Some section</div>
        <div className="section" data-anchor="slide4">Some section</div>
      </div>
      <Foot />
    </div>
  );
}

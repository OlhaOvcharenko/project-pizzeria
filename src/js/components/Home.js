import {templates } from '../settings.js';
import utils from '../utils.js';

class Home {
  constructor(element){
    const thisHome = this;
    thisHome.render(element);

  }

  render(element) {
    const thisHome = this;

    const generatedHTML = templates.pageHome();

    thisHome.dom = {};
    thisHome.dom.wrapper = element;

    element.innerHTML = generatedHTML;
    console.log('home', generatedHTML);
  }


}

export default Home;

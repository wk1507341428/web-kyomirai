import { Loading } from "@/components";
import ReactDOM from 'react-dom';

function useLoading() {


  const className =  'i-loading';

  const show = ({
    
  } = {}) => {
    const dom = document.createElement('div');
    dom.setAttribute('id', className);
    document.body.appendChild(dom);
    ReactDOM.render(
      <Loading hide={hide}></Loading>, 
      dom);
  }

  const hide = () => {
    document.body.removeChild(document.getElementById(className));
  }

  return { show, hide }
}

export default useLoading()
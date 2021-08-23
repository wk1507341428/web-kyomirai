import { DialogVideo } from "@/components";
import ReactDOM from 'react-dom';

function useVideoDialog() {


  const className =  'i-dialog-video';

  const show = ({
    
  } = {}) => {
    const dom = document.createElement('div');
    dom.setAttribute('id', className);
    document.body.appendChild(dom);
    ReactDOM.render(
      <DialogVideo hide={hide}></DialogVideo>, 
      dom);
  }

  const hide = () => {
    document.body.removeChild(document.getElementById(className));
  }

  return { show, hide }
}

export default useVideoDialog()
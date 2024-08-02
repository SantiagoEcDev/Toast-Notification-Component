import "./NotificationButtons.css";
import { toast } from 'react-toastify';

export const NotificationButtons = ({type, text}) => {
    const showToast = () => {
        switch (type) {
            case 'success':
              toast.success(text);
              break;
            case 'info':
              toast.info(text);
              break;
            case 'warning':
              toast.warning(text);
              break;
            case 'error':
              toast.error(text);
              break;
            default:
              toast(text);
          }
    }
  return (
    <button className={`button ${type}`} onClick={showToast}>
        {text}
    </button>
  )
}

import { createPortal } from 'react-dom';
import { Button } from './Button';
const Modal = ({ children, ref, buttonCaption }) => {
  return createPortal(
    <dialog
      ref={ref}
      className="backdrop: bg-stone-900/90 p-4 rounded-md shadow-md"
    >
      {children}
      <form method="dialog" className="mt-4 text-right">
        <Button>{buttonCaption}</Button>
      </form>
    </dialog>,
    document.getElementById('modal-root')
  );
};
export default Modal;

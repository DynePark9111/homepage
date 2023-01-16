import styles from "../styles/Modal.module.scss";
import ReactDom from "react-dom";
import { ReactNode } from "react";
import { FiX } from "react-icons/fi";

export default function Modal({ open, children, onClose }: ModalProps) {
  if (!open) return null;

  return ReactDom.createPortal(
    <div className={styles.Modal}>
      <FiX className={styles.icon} onClick={onClose} />
      <div className={styles.wrapper} onClick={onClose}>
        {children}
      </div>
    </div>,
    document.getElementById("portal") as HTMLElement
  );
}

type ModalProps = {
  open: boolean;
  children: ReactNode;
  onClose: () => void;
};

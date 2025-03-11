import React from "react";
import { useBoundedDrag } from "./useBoundedDrag";

interface ClassNames {
  modal?: string;
  header?: string;
  body?: string;
}

interface ModalProps {
  isOpen: boolean;
  onOutsideClick: () => void;
  header?: React.ReactNode;
  children?: React.ReactNode;
  classNames?: ClassNames;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onOutsideClick, header, children, classNames }) => {
  const drag = useBoundedDrag();
  if (!isOpen) return null;

  return (
    <div style={styles.overlay} onClick={onOutsideClick}>
      <div className={classNames?.modal} style={!classNames?.modal ? styles.modal : undefined} {...drag} onClick={(e) => e.stopPropagation()}>
        <div className={classNames?.header} style={!classNames?.header ? styles.header : undefined}>
          {header}
        </div>
        <div className={classNames?.body} style={!classNames?.body ? styles.body : undefined} onTouchStart={(e) => e.stopPropagation()} onPointerDown={(e) => e.stopPropagation()}>
          {children}
        </div>
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  modal: {
    backgroundColor: "#fff",
    position: "relative",
    minWidth: "300px",
    borderRadius: "5px",
  },
  header: {
    cursor: "move",
    display: "flex",
    userSelect: "none",
    justifyContent: "center",
  },
  body: {
    display: "flex",
    justifyContent: "center",
  },
};

export default Modal;

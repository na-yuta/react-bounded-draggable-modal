import React from "react";
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
declare const Modal: React.FC<ModalProps>;
export default Modal;

import React from "react";
import cl from "./MyModal.module.css";

interface ModalProps {
  visible: boolean;
  setVisible: (x: boolean) => void;
  children: JSX.Element;
}

const MyModal = ({ children, visible, setVisible }: ModalProps) => {
  const rootClasses = [cl.myModal];
  if (visible) {
    rootClasses.push(cl.active);
  }

  return (
    <div className={rootClasses.join(" ")} onClick={() => setVisible(false)}>
      <div className={cl.myModalContent} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default MyModal;

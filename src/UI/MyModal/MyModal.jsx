import React from 'react';

import cl from "./MyModal.module.scss"
const MyModal = ({children, visible, setVisible}) => {
    return (
        <div className={`${cl.overlay} ${visible? cl.active : ""}`} onClick={() => setVisible(false)}>
            <div className={cl.modal} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
}

export default MyModal;

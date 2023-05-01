import React from 'react';
import Style from "./Modal.module.css";
function Modal ({setOpenModal}) {
    return (
        <div className={Style.modalBackground}>
            <div className={Style.modalContainer}>
                <div className={Style.titleCloseBtn}>
                    <button
                        onClick={() => {
                            setOpenModal(false);
                        }}
                    >
                        X
                    </button>
                </div>
                <div className={Style.title}>
                    <h1>Are You Sure You Want to Continue?</h1>
                </div>
                <div className={Style.body}>
                    <p>The next page looks amazing. Hope you want to go there!</p>
                </div>
                <div className={Style.footer}>
                    <button
                        onClick={() => {
                            setOpenModal(false);
                        }}
                        id="cancelBtn"
                    >
                        Cancel
                    </button>
                    <button>Continue</button>
                </div>
            </div>
        </div>
    );
}

export default Modal;
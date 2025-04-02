import React from 'react'
import './index.css'

function Modal({ closeModal, text }) {
    return (
        <div className='bloc-modal'>
            <div className='modal'>
                <p className="title">{text}</p>
                <div className='close' onClick={closeModal}>X</div>
            </div>
        </div>
    )
}

export default Modal
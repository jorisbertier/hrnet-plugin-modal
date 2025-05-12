import React from 'react'
import './index.css'

function Modal({ onClose, text, isOpen }) {
    if (!isOpen) return null;  

    return (
        <div className='bloc-modal'>
            <div className='modal'>
                <p className="title">{text}</p>
                <div className='close' onClick={onClose}>X</div>
            </div>
        </div>
    )
}

export default Modal
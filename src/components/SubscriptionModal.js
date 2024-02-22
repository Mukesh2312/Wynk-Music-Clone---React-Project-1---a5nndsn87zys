import React from 'react'
import '../styles/SubModal.css'
import { useUser } from './UserProvider'
import { FaTimes } from 'react-icons/fa';

function SubscriptionModal() {
    const { modalHandler } = useUser();
    return (
        <div className='modal'>
            <div className="modal_content">
                <h1 className='modal_heading'>Subscribe to our Premiume pack!</h1>
                <div className='closebtn_contianer'>
                    <FaTimes className='closebtn' onClick={() => modalHandler(false)} />
                </div>
            </div>

        </div>
    )
}

export default SubscriptionModal

import React from 'react'
import '../styles/SubModal.css'
import { FaTimes } from 'react-icons/fa';

function SubscriptionModal({ modalStatus }) {
    return (
        <div className='modal'>
            <div className="modal_content">
                <div className="modal_heading">
                    <img src="/footerImages/logo.png" alt="primiume logo" />
                    <h2>
                        Premium
                    </h2>
                </div>
                {/* <small>Comming Soon</small> */}
                <div className="premium_subscription_content">
                    <div className="premium_content_heading">
                        <h2>
                            Go Premium
                        </h2>
                        <span>
                            Get the best of music & podcasts
                        </span>
                    </div>
                </div>
                <div className='closebtn_contianer'>
                    <FaTimes className='closebtn' onClick={modalStatus} />
                </div>
            </div>

        </div>
    )
}

export default SubscriptionModal

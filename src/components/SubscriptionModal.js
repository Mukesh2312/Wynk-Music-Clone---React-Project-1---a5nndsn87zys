import React from 'react'
import '../styles/SubModal.css'
import { FaTimes, FaCheck } from 'react-icons/fa';

function SubscriptionModal({ modalStatus, bodyScrollingControl }) {
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
                    <div className="plans-details-outer">
                        <div className="plans_header">
                            <div className="header_items">
                                <div className="items_plans">Benifits</div>
                                <div className="items_plans">Now</div>
                                <div className="items_plans">Premium</div>
                            </div>
                        </div>
                        <div className="plans-prices">
                            <div className="features">
                                <div className="features-items">Unlimited Streaming</div>
                                <div className="features-items">Unlimited Downloads</div>
                                <div className="features-items">Add-free Music</div>
                            </div>
                            <div className="plans-now">
                                <div className="plan-status"><FaCheck /></div>
                                <div className="plan-status"><FaCheck /></div>
                                <div className="plan-status"><FaCheck /></div>
                            </div>
                            <div className="plans-premium">
                                <div className="plan-status"><FaCheck /></div>
                                <div className="plan-status"><FaCheck /></div>
                                <div className="plan-status"><FaCheck /></div>
                            </div>
                        </div>
                        <div className="choose-plane">
                            <div className="plans plan1">
                                <p>Yearly</p>

                                <p><sup>₹999</sup> <strong>₹399</strong></p>
                                <p>SAVE 60%</p>
                            </div>
                            <div className="plans plan2">
                                <p>3 Months</p>
                                <p><sup>₹289</sup> <strong>₹129</strong></p>
                                <p>SAVE 55%</p>
                            </div>
                            <div className="plans plan3">

                                <p>Monthly</p>
                                <p><sup>₹99</sup> <strong>₹49</strong></p>
                                <p>SAVE 50%</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='closebtn_contianer'>
                    <FaTimes className='closebtn' onClick={() => { modalStatus(); bodyScrollingControl(false) }} />
                </div>
            </div>

        </div>
    )
}

export default SubscriptionModal

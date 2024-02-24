import React from 'react';
import './accountSetting.css'

const AccountSetting: React.FC = () => {
    return (
        <div className='account-setting-container'>
            <div className='premium-account-container'>
                <div className='premium-account-content'>
                    <div className='career-account-container' style={{ width: "48px" }}>
                        <img src='/images/career.svg' alt='career account' />
                    </div>
                    <div className='premium-account-content-text'>
                        <h1>Premium Account</h1>
                        <p>You have a premium account, granting you access to all the remarkable features offered by ResumeDone. With this privilege, you can indulge in the freedom of downloading an unlimited number of resumes and cover letters in both PDF and Word formats.</p>
                    </div>
                </div>
            </div>
            <div className='personnal-information-container'>
                <h2>Personal Information</h2>
                <div className='personnal-information-content'>
                    <div className='form-group-container'>
                        <div className='grid-container'>
                            <div className='form-group'>
                                <label>First Name</label>
                                <input type='text' placeholder='Petter' />
                            </div>
                            <div className='form-group'>
                                <label>Last Name</label>
                                <input type='text' placeholder='Cetera' />
                            </div>
                        </div>
                        <div className='grid-container'>
                            <div className='form-group'>
                                <label>City</label>
                                <input type='text' placeholder='London' />
                            </div>
                            <div className='form-group'>
                                <label>Postal code</label>
                                <input type='text' placeholder='E2 4XF' />
                            </div> 
                        </div>
                        <div className='form-group'>
                            <label>Address</label>
                            <input type='text' placeholder='Address' />
                        </div>
                        <div className='grid-container'>
                            <div className='form-group'>
                                <label>Email</label>
                                <input type='text' placeholder='petter@gmail.com' defaultValue={'petter@gmail.com'} />
                                <img src='/images/substract.svg' alt='substract' />
                            </div>
                            <div className='form-group'>
                                <label>Phone</label>
                                <input type='text' placeholder='+442223334444' defaultValue={'+442223334444'} />
                            </div>
                            <div className='form-group'>
                                <label>Password</label>
                                <input type='text' placeholder='Password' />
                            </div>
                        </div>
                        <p>Use this email to log in to your <a>resumedone.io</a> a account and receive notifications.</p>
                    </div>
                    <img src='/images/temp-profile.png' alt='profile' />
                </div>
                <button>Save</button>
            </div>
            <div className='account-action'>
                <div className='show-account'>
                    <input type='checkbox' />
                    <p>Show my profile to serious employers on <a>hirethesbest.io</a> for free</p>
                </div>
                <div className='delete-account'>
                    <div className='delete-account-content'>
                        <h2 >Delete account</h2>
                        <p>If you delete your account you’ll be permanently removing it from our systems - you can’t undo it.</p>
                        <p className='error'>Yes, Delete my account</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default AccountSetting;
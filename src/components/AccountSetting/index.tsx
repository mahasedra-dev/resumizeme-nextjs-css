import React from 'react';
import './accountSetting.css'

const AccountSetting: React.FC = () => {
    return (
        <>
            <div className='premium-account-container'>
                <div className='premium-account-content'>
                    <div className='career-account-container' style={{width: "48px"}}>
                        <img src='/images/career.svg' alt='career account' />
                    </div>
                    <div className='premium-account-content-text'>
                        <h1>Premium Account</h1>
                        <p>You have a premium account, granting you access to all the remarkable features offered by ResumeDone. With this privilege, you can indulge in the freedom of downloading an unlimited number of resumes and cover letters in both PDF and Word formats.</p>
                    </div>
                </div>
            </div>
            <div className='personnal-information'>
                <h2>Personal Information</h2>
                <div className='personnal-information-content'>
                    <div className='personnal-information-content-left'>
                        <p>First Name</p>
                        <input type='text' placeholder='John' />
                    </div>
                    <div className='personnal-information-content-right'>
                        <p>Last Name</p>
                        <input type='text' placeholder='Doe' />
                    </div>
                </div>
            </div>
        </>
    );
}
export default AccountSetting;
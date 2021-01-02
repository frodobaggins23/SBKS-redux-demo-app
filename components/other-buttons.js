import React from 'react';
import { PrimaryButton } from './main-styles';

const OtherButtons = () => {
    return (
        <div>
            <PrimaryButton>Fetch User</PrimaryButton>
            <PrimaryButton>Generate Random Password</PrimaryButton>
            <PrimaryButton>Register User</PrimaryButton>
        </div>
    );
};

export default OtherButtons;

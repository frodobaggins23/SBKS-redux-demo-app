import React from 'react';
import { LicencesWrapper, SubHeading } from './main-styles';

const Licences = () => {
    return (
        <>
            <SubHeading>Licences</SubHeading>
            <LicencesWrapper>
                <button>+</button>
                <input type='number' />
                <button>-</button>
            </LicencesWrapper>
        </>
    );
};

export default Licences;

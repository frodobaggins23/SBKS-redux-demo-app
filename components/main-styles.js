import styled from 'styled-components';

const mainBlue = '#042B66';
const secondaryBlue = '#2B4D80';
const tertiaryBlue = '#5E7BB8';

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 1080px;
    min-height: 90vh;
    margin: 20px auto;
    padding: 5px;
    border: ${mainBlue} 1px solid;
`;

export const LeftCol = styled.div`
    flex: 0 0 30%;
    padding: 10px;
`;

export const RightCol = styled.div`
    flex: 0 0 60%;
    height: 100%;
    padding: 10px;
    background-color: ${tertiaryBlue};
`;

export const AppTitle = styled.h1`
    font-size: 32px;
    font-weight: 500px;
    text-align: center;
    color: ${secondaryBlue};
`;

export const Heading = styled.h2`
    font-size: 24px;
    font-weight: 500px;
    text-align: center;
`;

export const SubHeading = styled.h4`
    font-size: 18px;
    text-align: center;
`;

export const LicencesWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
`;

export const PrimaryButton = styled.button`
    display: block;
    border: none;
    font-size: 16px;
    background-color: ${secondaryBlue};
    color: #fff;
    margin-bottom: 10px;
    padding: 7px;
    cursor: pointer;

    &:hover {
        background-color: ${tertiaryBlue};
    }
`;

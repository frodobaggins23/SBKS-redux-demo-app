import React from 'react';
import { connect } from 'react-redux';
import Licences from './licences';
import { Wrapper, LeftCol, RightCol, AppTitle, Heading } from './main-styles';
import OtherButtons from './other-buttons';

const mapStateToProps = ({ licenceReducer, userReducer }) => ({
    amount: licenceReducer.amount,
    type: licenceReducer.type,
    username: userReducer.username,
    password: userReducer.password,
    registered: userReducer.registered,
});

function Home({ amount, type, username, password, registered }) {
    return (
        <>
            <AppTitle>Redux Playground</AppTitle>
            <Wrapper>
                <LeftCol>
                    <Heading>Actions</Heading>
                    <Licences />
                    <OtherButtons />
                </LeftCol>
                <RightCol>
                    <Heading>Store</Heading>
                    <ul>
                        <li>
                            number of licences: <code>{amount}</code>
                        </li>
                        <li>
                            licence type: <code>{type.toString()}</code>
                        </li>
                        <li>
                            user: <code>{username}</code>
                        </li>
                        <li>
                            password: <code>{password}</code>
                        </li>
                        <li>
                            registered: <code>{registered.toString()}</code>
                        </li>
                    </ul>
                </RightCol>
            </Wrapper>
        </>
    );
}

export default connect(mapStateToProps, null)(Home);

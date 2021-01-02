import Licences from '../components/licences';
import {
    Wrapper,
    LeftCol,
    RightCol,
    AppTitle,
    Heading,
} from '../components/main-styles';
import OtherButtons from '../components/other-buttons';

export default function Home() {
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
                            number of licences: <code>3</code>
                        </li>
                        <li>
                            licence type: <code>Windows</code>
                        </li>
                        <li>
                            user: <code>null</code>
                        </li>
                        <li>
                            password: <code>null</code>
                        </li>
                        <li>
                            registered: <code>false</code>
                        </li>
                    </ul>
                </RightCol>
            </Wrapper>
        </>
    );
}

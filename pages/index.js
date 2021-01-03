import Home from '../components/home';
import { Provider } from 'react-redux';
import store from '../redux/store';

export default function Main() {
    return (
        <Provider store={store}>
            <Home />
        </Provider>
    );
}

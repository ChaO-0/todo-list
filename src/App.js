import ListCard from './components/ListWrap/ListWrap';
import { Provider } from 'react-redux';
import store from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <ListCard />
    </Provider>
  );
};

export default App;

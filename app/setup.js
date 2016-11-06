import React, {
  Component
} from 'react';

import { Provider } from 'react-redux';
import App from './App';
import createStore from './store';
import LoadingAppView from './components/LoadingAppView';

class Root extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      store: null
    };
    createStore((store) => {
      /* eslint-disable react/no-set-state */
      this.setState({
        isLoading: false,
        store
      });
      /* eslint-enable react/no-set-state */
    });
  }
  render() {
    if (this.state.isLoading) {
      return <LoadingAppView />;
    }
    return (
      <Provider store={this.state.store}>
        <App />
      </Provider>
    );
  }
}

export default Root;

import * as React from 'react';
import AppDrawer from '../../Containers/ExchangeContainer'
import { applyMiddleware, createStore } from "redux"
import reducers from "../../Reducers"
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import promise from "redux-promise-middleware"

const middleware = [promise(), thunk]
const composeStoreWithMiddleware = applyMiddleware(
    middleware,
)(createStore)
const store = createStore(reducers)

class ExchangeComponent extends React.Component {

    render() {
        console.log(this.props)
        return (
            <Provider store={store}>
                <AppDrawer />
            </Provider>
        );
    }
}

export default ExchangeComponent; 
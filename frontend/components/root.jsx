import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Switch } from 'react-router-dom';
import App from './app';

const Root = ({ store }) => {
    return (
        <Provider store={store}>
            <HashRouter>
                <Switch>
                    <App />
                </Switch>
            </HashRouter>
        </Provider>
    )
};

export default Root;
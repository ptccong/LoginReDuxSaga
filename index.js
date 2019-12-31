import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import allReducer from '../LoginReDuxSaga/reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas/rootSaga';
const sagaMiddleware = createSagaMiddleware();
let store = createStore(allReducer, applyMiddleware(sagaMiddleware));
const App = () => (
    <Provider store={store}>
        <userContainer />
    </Provider>
);
sagaMiddleware.run(rootSaga);
AppRegistry.registerComponent('LoginReDuxSaga', () => App)

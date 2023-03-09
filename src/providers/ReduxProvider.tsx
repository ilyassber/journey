'use client';

import React from 'react';
import { Provider } from 'react-redux';
import store from '@/services/store';

type ReduxProviderProps = {
    children: React.ReactNode,
};

const ReduxProvider: React.FC<ReduxProviderProps> = (props) => {
    return (
        <Provider store={store}>
            {props.children}
        </Provider>
    );
};

export default ReduxProvider;
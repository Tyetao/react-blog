import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';
import App from 'components/App/App';

import 'assets/stylus/index.styl';
renderWithHotReload(App);

if (module.hot) {
    module.hot.accept('components/App/App', () => {
        const NextApp = require('components/App/App').default;
        renderWithHotReload(NextApp);
    });
}

function renderWithHotReload(RootElement) {
    ReactDom.render(
        <AppContainer>
            <Router>
                <RootElement />
            </Router>
        </AppContainer >,
        document.getElementById('app')
    )
}


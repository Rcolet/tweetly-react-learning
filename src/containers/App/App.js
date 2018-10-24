import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

const App = ({ children }) => (
    <main>
        {children}
    </main>
);

App.propTypes = {
    children: PropTypes.node.isRequired
};

export default App;
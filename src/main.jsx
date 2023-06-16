/* eslint-disable no-undef */
import React from 'react';
import { createRoot } from 'react-dom/client';
import { MantineProvider } from '@mantine/core';
import App from './App';

document.body.innerHTML = '<div id="root"></div>';

const root = createRoot(document.getElementById('root'));
root.render(
    <MantineProvider withGlobalStyles withNormalizeCSS theme={{ colorScheme: 'dark' }}>
        <App />
    </MantineProvider>
    );

import React from 'react';
import { createRoot, Root } from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { store } from '@/store';

const root: Root = createRoot(document.getElementById('root') as HTMLElement);

const insert2body = (html: string): void => {
  const div: HTMLDivElement = document.createElement('div');
  div.innerHTML = html;
  div.style.display = 'none';
  const body: HTMLBodyElement | null = document.querySelector('body');

  if (body) {
    body.prepend(div);
  }
};

(async () => {
  if (typeof window !== 'undefined' && 'caches' in window) {
    const spriteLink = '/sprite.svg';
    const newCache = await caches.open('sprite');
    const options = {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'image/svg+xml',
      }),
    };
    let response = await newCache.match(spriteLink);
    let html;

    if (!response) {
      const req = new Request(spriteLink, options);
      await newCache.add(req);
      response = await newCache.match(spriteLink);
      html = await response?.text();
      insert2body(html || '');
      return;
    }

    html = await response.text();
    insert2body(html);
  }
})();

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);

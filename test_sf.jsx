import { renderToString } from 'react-dom/server';
import { Symbol } from '@serviette/sf-symbols-react';

console.log(renderToString(<Symbol name="apple.logo" />));

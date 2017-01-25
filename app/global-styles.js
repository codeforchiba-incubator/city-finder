import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Avenir Next', Avenir, -apple-system, BlinkMacSystemFont, '.SFNSDisplay-Regular', 'ヒラギノ角ゴ ProN W3', 'Hiragino Kaku Gothic ProN', 'メイリオ', Meiryo, sans-serif;
  }

  #app {
    background-color: #ececec;
    min-height: 100%;
    min-width: 100%;
  }
`;

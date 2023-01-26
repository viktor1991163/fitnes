import {iosVhFix} from './utils/ios-vh-fix';
import {initPlay} from './modules/video';
import {initTab} from './modules/tab';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {
  iosVhFix();
  initPlay();
  initTab();
});

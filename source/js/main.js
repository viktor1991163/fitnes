import {iosVhFix} from './utils/ios-vh-fix';
import {initPlay} from './modules/video';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {
  iosVhFix();
  initPlay();
});

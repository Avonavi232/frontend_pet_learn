/* eslint-disable import/no-import-module-exports */
import { runApp } from 'app';
import 'shared/config/i18n';

runApp();

if (module.hot) {
  module.hot.accept();
}

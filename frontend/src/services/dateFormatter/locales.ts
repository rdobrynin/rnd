import 'dayjs/locale/id';
import 'dayjs/locale/ms';
import 'dayjs/locale/cs';
import 'dayjs/locale/da';
import 'dayjs/locale/de';
import 'dayjs/locale/en';
import 'dayjs/locale/es';
import 'dayjs/locale/et';
import 'dayjs/locale/fi';
import 'dayjs/locale/fr';
import 'dayjs/locale/it';
import 'dayjs/locale/nb';
import 'dayjs/locale/nl';
import 'dayjs/locale/lt';
import 'dayjs/locale/lv';
import 'dayjs/locale/pl';
import 'dayjs/locale/pt';
import 'dayjs/locale/pt-br';
import 'dayjs/locale/sv';
import 'dayjs/locale/vi';
import 'dayjs/locale/tr';
import 'dayjs/locale/tl-ph';
import 'dayjs/locale/ru';
import 'dayjs/locale/ko';
import 'dayjs/locale/ja';
import 'dayjs/locale/zh-cn';
import 'dayjs/locale/zh-tw';
import 'dayjs/locale/ar';
import 'dayjs/locale/af';
import 'dayjs/locale/yo';
import 'dayjs/locale/sw';
import 'dayjs/locale/uk';

import dayjs from 'dayjs';

export function initLocale(): void {
  const locale = document.documentElement.lang || 'en';

  const dayjsLocale = locale.toLowerCase();

  if (dayjs.Ls[dayjsLocale]) {
    dayjs.locale(dayjsLocale);
  } else {
    console.error(`Can not load dayjs locale ${locale}. Using default locale`);
  }
}

// eslint-disable-next-line camelcase
import { Ubuntu, Open_Sans } from 'next/font/google';

export const ubuntu = Ubuntu({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export const openSans = Open_Sans({ subsets: ['latin'], display: 'swap' });

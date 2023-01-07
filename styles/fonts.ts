//  ## TEMPLATE TO MODIFY ##

import { Inter, Nunito, PT_Mono } from '@next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--normal' });
const nunito = Nunito({ variable: '--title' });
const number = PT_Mono({ weight: '400', subsets: ['latin'], variable: '--number' });

export { inter, nunito, number };

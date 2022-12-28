import { Html, Head, Main, NextScript } from 'next/document';
import { colors } from '../constants/colors';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body style={{ background: colors.lightGrayBackground}}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

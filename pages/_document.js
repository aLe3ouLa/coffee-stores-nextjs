import Document, { NextScript, Html, Head, Main } from 'next/document';

class MyDocument extends Document {
  render() {
    return (<Html lang="en">
      <Head>
        <link rel="preload" href='/fonts/Nunito-Black.ttf' as="Font" crossOrigin='anonymous' />
        <link rel="preload" href='/fonts/Nunito-BlackItalic.ttf' as="Font" crossOrigin='anonymous' />
        <link rel="preload" href='/fonts/Nunito-Bold.ttf' as="Font" crossOrigin='anonymous' />
        <link rel="preload" href='/fonts/Nunito-BoldItalic.ttf' as="Font" crossOrigin='anonymous' />
        <link rel="preload" href='/fonts/Nunito-ExtraBold.ttf' as="Font" crossOrigin='anonymous' />
        <link rel="preload" href='/fonts/Nunito-ExtraBoldItalic.ttf' as="Font" crossOrigin='anonymous' />
        <link rel="preload" href='/fonts/Nunito-ExtraLight.ttf' as="Font" crossOrigin='anonymous' />
        <link rel="preload" href='/fonts/Nunito-ExtraLightItalic.ttf' as="Font" crossOrigin='anonymous' />
        <link rel="preload" href='/fonts/Nunito-Italic.ttf' as="Font" crossOrigin='anonymous' />
        <link rel="preload" href='/fonts/Nunito-Light.ttf' as="Font" crossOrigin='anonymous' />
        <link rel="preload" href='/fonts/Nunito-LightItalic.ttf' as="Font" crossOrigin='anonymous' />
        <link rel="preload" href='/fonts/Nunito-Medium.ttf' as="Font" crossOrigin='anonymous' />
        <link rel="preload" href='/fonts/Nunito-Regular.ttf' as="Font" crossOrigin='anonymous' />
        <link rel="preload" href='/fonts/Nunito-SemiBold.ttf' as="Font" crossOrigin='anonymous' />
        <link rel="preload" href='/fonts/Nunito-SemiBoldItalic.ttf' as="Font" crossOrigin='anonymous' />

      </Head>
      <body>
        <Main></Main>
        <NextScript />
      </body>
    </Html>)
  }
}

export default MyDocument;

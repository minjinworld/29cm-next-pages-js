import { Html, Head, Main, NextScript } from "next/document";

// _document는 _app 다음에 실행되며, 공통적으로 활용할 < head > (Ex.메타 태그) 나 < body > 태그 안에 들어갈 내용들을 커스텀할때 활용
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* cdn 으로 넣을땐 head 열림 닫힘 태그로 변경후 설정 */}
        {/* <script src="https://cdn.tailwindcss.com"></script> */}
        <title>29CM-next_ver</title>
      </Head>
      <body>
        <Main />

        <NextScript />
      </body>
    </Html>
  );
}

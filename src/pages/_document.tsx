import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  console.log(`I AM ALIVE`);

  return (
    <Html>
      <Head>
        <title>Сеть инициатив</title>
        <meta
          name="description"
          content="Платформа для роста команд и проектов и создания своих инициатив"
        />
        <link
          rel="shortcut icon"
          href="/initiatives/logo1_(1) (1).ico"
          type="image/x-icon"
        />
      </Head>

      <body>
        <Main />
        <NextScript />

        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
            (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
         
            ym(93970145, "init", {
                 clickmap:true,
                 trackLinks:true,
                 accurateTrackBounce:true,
                 webvisor:true
            });
              `,
          }}
        />
        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/93970145"
              style={{ position: "absolute", left: "-9999px" }}
              alt=""
            />
          </div>
        </noscript>
      </body>
    </Html>
  );
}

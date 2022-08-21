import Layout from 'layouts/Layout';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import GlobalStyle from 'styles/GlobalStyle';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width" />
				<meta charSet="utf-8" />
				<title>오늘회 :: 찾아가는 내손안의 수산마켓</title>
				<meta
					name="description"
					content="100만이 인정한 초신선 식재료 필수앱! 맛있는 회부터 돼지고기, 채소·과일까지! 맛있는 먹조합보고 구매까지 한번에!"
				/>
				<meta name="twitter:card" content="summary_large_image" />
				<meta property="og:title" content="오늘회 :: 찾아가는 내손안의 수산마켓" />
				<meta
					property="og:description"
					content="100만이 인정한 초신선 식재료 필수앱! 맛있는 회부터 돼지고기, 채소·과일까지! 맛있는 먹조합보고 구매까지 한번에!"
				/>
				<meta property="og:url" content="https://shop-pc.onul-hoi.com/" />
				<meta property="og:type" content="website" />
				<meta property="og:image" content="https://cdn.onul-hoi.com/uploads/config/image/3/d108f9_220731153117.jpg" />
				<meta property="og:image:alt" content="오늘회" />
				<meta property="og:image:width" content="800" />
				<meta property="og:image:height" content="400" />
				<meta property="og:locale" content="ko_KR" />
				<meta property="og:site_name" content="오늘회" />
				<link rel="icon" href="https://shop-pc.onul-hoi.com/images/favicon-32x32.png" />
			</Head>

			<GlobalStyle />
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	);
}

export default MyApp;

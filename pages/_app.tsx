import { AppProps } from "next/app"; // Importe AppProps do Next.js
import "../styles/globals.css"; // Importe o estilo global do Tailwind CSS aqui

function MyApp({ Component, pageProps }: AppProps) {
  // Defina o tipo do parâmetro Component como React.ComponentType<AppProps>
  return <Component {...pageProps} />;
}

export default MyApp;

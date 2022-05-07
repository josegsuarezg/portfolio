import {DataProvider} from '../context/DataProvider';
import '../styles/globalStyles/normalize.scss';
import '../styles/globalStyles/globals.scss';

//FONT AWESOME
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

function MyApp({ Component, pageProps }) {
  return (
    <DataProvider>
      <Component {...pageProps} />
    </DataProvider>
  )
}

export default MyApp

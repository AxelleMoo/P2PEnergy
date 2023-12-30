import '../styles/globals.css'

import { NavBar, Footer } from '../components/componentsindex';

const MyApp = ({ Component, pageProps}) => 
<div className="app-container">
    <NavBar/>
    <Component {...pageProps}/>
    <Footer/>
</div>


export default MyApp;

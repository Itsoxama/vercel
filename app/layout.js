// app/layout.js
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { getFilters, getSearchQueries } from '../lib/api';



export default async function RootLayout({ children }) {
  let filterData=await getFilters()
  const squeries= await getSearchQueries()
  return (
    <html lang="en">
      <body>
        <Header  filters={filterData} queries={squeries} />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

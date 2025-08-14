// app/layout.js
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { getFilters, GetLocations, getSearchQueries } from '../lib/api';



export default async function RootLayout({ children }) {
  let filterData=await getFilters()
    let locationData=await GetLocations()
  const squeries= await getSearchQueries()
  return (
    <html lang="en">
      <body>
        <Header locationData={locationData} filters={filterData} queries={squeries} />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

import './App.css';
import Index from './Component/landingPage/Index';
import ContactUs from './Component/ContactUs/Index';
import AboutUs from './Component/AboutUs/Index';
import Team from './Component/Team/Index'
import FAQPage from './Component/FAQPage/Index';
import PricingDetails from './Component/PricingDetails';

function App() {
  return (
    <div className="App">



     {/*      */}  
         <Index/>  
    <ContactUs/>
  
    
    <AboutUs/>
         <Team/>
         <FAQPage/>
    <PricingDetails/>
 
     {/*Y
    <Team/>
   
    */}
 
    </div>
  );
}

export default App;

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
    
//     </div>
//   );
// }

// export default App;

import React from 'react'
import styles from './style'
import { Navbar,Hero,Stats,Business,Billing,CaedDeal,Testimonials,
Clients,CTA,Footer
} from './components';
const App = () => (
 <div className='bg-gray-950 w-full overflow-hidden' >
  <div className={`${styles.paddingX} ${styles.flexCenter}`}>
  <div className={`${styles.boxWidth}`}>
   <Navbar></Navbar>
  </div>
  </div>


<div className={`bg-gray-950 ${styles.flexStart}`}> 
<div className={`${styles.boxWidth}`}>
  <Hero></Hero>
</div>
</div>

<div className={`bg-gray-950 ${styles.paddingX} ${styles.flexStart}`}> 
<div className={`${styles.boxWidth}`}>
  <Stats></Stats>
  <Business></Business>
  <Billing></Billing>
  <CaedDeal></CaedDeal>
  <Testimonials></Testimonials>
  <Clients></Clients>
  <CTA></CTA>
  <Footer></Footer>
  </div>
</div>

 </div>
);

export default App

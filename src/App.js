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
import { Navbar,Hero,Business,Billing,
Clients,CTA,Footer
} from './components';
const App = () => (
 <div className='bg-primary w-full overflow-hidden' >
  <div className={`${styles.paddingX} ${styles.flexCenter} `}>
  <div className={`${styles.boxWidth} `}>
   <Navbar></Navbar>
  </div>
  </div>


<div className={`bg-primary ${styles.flexStart}`}> 
<div className={`${styles.boxWidth}    `}>
  <Hero></Hero>
</div>
</div>

<div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}> 
<div className={`${styles.boxWidth}`}>
  <Business ></Business>
  <Billing ></Billing>
  <Clients></Clients>
  <CTA></CTA>
  <Footer></Footer>
  </div>
</div>

 </div>
);

export default App

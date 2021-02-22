import React from 'react';
import FormInput from './components/FormInput';
import Header from './components/Header';
import Stories from './components/Stories';
import { Route } from "react-router-dom";
import FeedbackContextProvider from './context/FeedbackContext';



function App() {
  return (
    <div>
      <FeedbackContextProvider>

      
        <Header />
        {/* <FormInput/> */}
        
      
      <Route path="/" exact> 
        <Stories />
        
      </Route>
       <Route path="/FormInput" exact> 
         <FormInput/>
        </Route>
          
        </FeedbackContextProvider>
    </div>
  );
}

export default App;

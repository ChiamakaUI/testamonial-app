import React from 'react';
import FormInput from './components/FormInput';
import Header from './components/Header';
import Stories from './components/Stories';
import { Route } from "react-router-dom";



function App() {
  return (
    <div>
      <Header />
      
      <Route path="/" exact> 
        <Stories />
        
      </Route>
       <Route path="/FormInput" exact> 
         <FormInput/>
      </Route>
    </div>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import React from "react";
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
//import FeedbackData from "./data/FeedbackData"
import AboutPage from "./components/pages/AboutusPage"
import AboutIconLink from "./components/AboutIconLink"

import { FeedbackProvider } from "./context/FeedbackContext"

//import {useState} from 'react'

function App() {

 
return (

  <FeedbackProvider>

    <Router>
      <Header  />
      <div className="container">

      <Routes>

      <Route exact path='/' element={
        <>
         <FeedbackForm  />
          <FeedbackStats />
          < FeedbackList/>
          < AboutIconLink />
        </>
      }/>

      < Route exact path="/about"   element={ <AboutPage /> } />

      </Routes>   
      </div>
     
    </Router>

  </FeedbackProvider>
 
)

}

export default App;
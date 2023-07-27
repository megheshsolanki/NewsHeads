import "./App.css";

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import LoadingBar from "react-top-loading-bar"

const App = () => {
  const apiKey = process.env.REACT_APP_NEWS_API_KEY
  const [progress, setProgress] = useState(0);
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar color="#f11946" progress={progress} />
          <Routes>
            <Route path="/" index element={<News setProgress={ setProgress} apiKey={ apiKey} 
 key={"general"} pageSize={6} category={"general"} country={"in"} />}/>
            
            <Route path="/business" element={<News setProgress={ setProgress} apiKey={ apiKey} 
 key={"business"} pageSize={6} category={"business"} country={"in"} />}/>
              
            <Route path="/sports" element={<News setProgress={ setProgress} apiKey={ apiKey} 
 key={"sports"} pageSize={6} category={"sports"} country={"in"} />}/>
            
            <Route path="/science" element={<News setProgress={ setProgress} apiKey={ apiKey} 
 key={"science"} pageSize={6} category={"science"} country={"in"} />}/>
            
            <Route path="/technology" element={<News setProgress={ setProgress} apiKey={ apiKey} 
 key={"technology"} pageSize={6} category={"technology"} country={"in"} />}/>
            
            <Route path="/health" element={<News setProgress={ setProgress} apiKey={ apiKey} 
 key={"health"} pageSize={6} category={"health"} country={"in"} />}/>
            
            <Route path="/entertainment" element={<News setProgress={ setProgress} apiKey={ apiKey} 
 key={"entertainment"} pageSize={6} category={"entertainment"} country={"in"} />}/>
            
          </Routes>
        </Router>
      </div>
    );
}

export default App;

import "./assets/css/App.css";
import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './validations/ServiceWorkerValidation'



function App() {


  //Pages
  // const User = lazy(() => import('./pages/User'))
  const Home = lazy(() => import("./pages/Home"));
  

  return (
    <>
      <Router>
        <Suspense fallback={<>Loading...</>}>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/" element={<User/>}/> */}
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default App;

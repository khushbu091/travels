import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./component/layout";
import Hotel from "./pages/hotels";
import Flights from "./pages/flights";
import Trains from "./pages/trains";
const App=()=>{
  return(
    <>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout/>}>
          <Route index element={<Hotel/>}/>
          <Route path="/hotels" element={<Hotel/>}/>
          <Route path="/flights" element={<Flights/>}/>
          <Route path="/trains" element={<Trains/>}/>
          </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;

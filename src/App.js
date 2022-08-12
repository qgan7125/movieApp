import Navbar from "./components/navbar";
import Home from "./pages/Home/Home";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Favorite from "./pages/favorite";

function App() {
  return (
      <BrowserRouter>
        <Provider store={store}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/home" element={<Home />}/>
            <Route path="/favorite" element={<Favorite />}/>
          </Routes>
          
        </Provider>
      </BrowserRouter>
  );
}

export default App;

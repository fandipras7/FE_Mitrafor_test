import {
  BrowserRouter, Route, Routes,
} from 'react-router-dom';
import Sidebar from '../components/module/Sidebar';
import Product from '../pages/DetailProduct/Product';
import Home from '../pages/Home/index';

export default function router() {
  return (
    <BrowserRouter>
      <Routes path="/">
        <Route
          index
          element={
            <Sidebar>
              <Home/>
            </Sidebar>
          }
        />
        <Route path="/product/:id">
          <Route
            index
            element={
              <Sidebar>
                <Product />
              </Sidebar>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

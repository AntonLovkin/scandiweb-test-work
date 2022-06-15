import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import './styles.css';

const ProductListViews = lazy(() => import('./views/ProductListViews'));
const AddProductViews = lazy(() => import('./views/AddProductViews'));

const App = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<ProductListViews />} />
          <Route path="/addproduct" element={<AddProductViews />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;

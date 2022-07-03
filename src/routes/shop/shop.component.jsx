import { Routes, Route } from 'react-router-dom';
import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';
import { CategoriesContextProvider } from '../../contexts/categories.context';
                 
import './shop.styles.scss';

const Shop = () => {
  return (
    <CategoriesContextProvider>
      <Routes>
        <Route index element={<CategoriesPreview />}></Route>
        <Route path=":category" element={<Category />}></Route>
      </Routes>
    </CategoriesContextProvider>
  )
}

export default Shop;
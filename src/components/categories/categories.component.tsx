import { useState } from 'react';
import Category from '../../types/category.types';
import './categories.styles.css';

const Categories = () => {
  const [categories] = useState<Category[]>([]);
  return (
    <div className='categories-container'>
      <div className='categories-content'>
        {categories.map((category) => (
          <div key={category.id}>
            <img src={category.imageUrl} alt={category.displayName} />
            <h3>{category.displayName}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;

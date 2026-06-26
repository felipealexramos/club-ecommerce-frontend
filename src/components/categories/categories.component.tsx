import { useEffect, useState } from 'react';
import Category from '../../types/category.types';
import './categories.styles.css';
import axios from 'axios';
import env from '../../config/.env.config';

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await axios.get(`${env.apiUrl}/api/category`);
        console.log('Fetched categories:', data);
        setCategories(data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

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

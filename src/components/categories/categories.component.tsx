import { useEffect, useState } from 'react';
import Category from '../../types/category.types';
import axios from 'axios';
import env from '../../config/.env.config';
import CategoryItem from '../category-item/category-item.component';
import { CategoriesContainer, CategoriesContent } from './categories.styles';

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await axios.get<Category[] | { data: Category[] }>(`${env.apiUrl}/api/category`);
        const categoryList = Array.isArray(data) ? data : data.data;
        setCategories(Array.isArray(categoryList) ? categoryList : []);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <CategoriesContainer>
      <CategoriesContent>
        {categories.map((category) => (
          <div key={category.id}>
            <CategoryItem category={category} />
          </div>
        ))}
      </CategoriesContent>
    </CategoriesContainer>
  );
};

export default Categories;

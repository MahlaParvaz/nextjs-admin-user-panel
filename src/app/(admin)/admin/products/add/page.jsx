'use client';

import { useGetCategories } from '@/hooks/useCategories';
import { useState } from 'react';
import ProductForm from '@/components/ProductForm';
import { useAddProduct } from '@/hooks/useProducts';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

function AddProductPage() {
  const { isLoading, mutateAsync } = useAddProduct();
  const { data } = useGetCategories();
  const { categories } = data || {};
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    slug: '',
    brand: '',
    price: '',
    offPrice: '',
    discount: '',
    countInStock: '',
    imageLink: '',
  });
  const [tags, setTags] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const router = useRouter();
  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { message } = await mutateAsync({
        ...formData,
        tags,
        category: selectedCategory._id,
      });
      router.push('/admin/products');
      toast.success(message);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };
  return (
    <div className="mb-10">
      <h1 className="mb-4 font-bold text-xl">اضافه کردن محصول</h1>
      <ProductForm
        onSubmit={submitHandler}
        categories={categories}
        setSelectedCategory={setSelectedCategory}
        tags={tags}
        setTags={setTags}
        isLoading={isLoading}
        productData={formData}
        productDataOnChange={changeHandler}
      />
    </div>
  );
}

export default AddProductPage;

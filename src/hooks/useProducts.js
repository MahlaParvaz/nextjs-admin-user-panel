import {
  getProducts,
  addProduct,
  getOneProdcutById,
  updateProduct,
} from '@/services/productService';
import { useMutation, useQuery } from '@tanstack/react-query';

export const useGetProducts = () =>
  useQuery({
    queryKey: ['get-products'],
    queryFn: getProducts,
    retry: false,
    refetchOnWindowFocus: true,
  });

export const useAddProduct = () => {
  return useMutation({ mutationFn: addProduct });
};

export const useUpdateProduct = () => {
  return useMutation({ mutationFn: updateProduct });
};
export const useGetProductById = (id) =>
  useQuery({
    queryKey: ['get-product', id],
    queryFn: () => getOneProdcutById(id),
    retry: false,
    refetchOnWindowFocus: true,
  });

// src/hooks/useProducts.ts
import useSWR from 'swr';
import type { Product } from '@prisma/client';

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export function useProducts() {
  const { data, error, mutate } = useSWR<Product[]>('/api/products', fetcher);
  return { products: data, loading: !data && !error, error, mutate };
}

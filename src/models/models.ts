export interface Product {
  id: number;
  name: string;
  price: number;
}

export interface ProductState {
  products: Product[];
  pending: boolean;
  error: boolean;
}

export interface Category {
  category: string;
}

export interface CategoryState {
  categories: Category[];
  productsByCategry: Product[];
  selectedCategory: string;
  pending: boolean;
  error: boolean;
}

export interface Cart {
  productId: number;
  quantity: number;
}

export interface CartState {
  cart: Cart[];
  pending: boolean;
  error: boolean;
  totalPrice: number;
}

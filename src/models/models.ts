export interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
  category: string;
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

export interface FavouriteItem {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
  category: string;
}

export interface FavouriteState {
  favourites: FavouriteItem[];
}

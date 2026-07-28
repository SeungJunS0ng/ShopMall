import { createContext, useContext, useState, type ReactNode } from 'react';
import type { Product, Category, FilterState } from '../types'
import { PRODUCTS } from '../data/products'

interface ProductContextType {
    products: Product[];
    getProduct: (id: number) => Product | undefined;
    getBestProducts: () => Product[];
    getNewProducts: () => Product[];
    getProductsByCategory: (category: Category | "all") => Product[];
    filterProducts: (filter: FilterState) => Product[];
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

interface ProductProviderProps {
    children: ReactNode;
}


export function ProductProvider({ children }: ProductProviderProps) {
    const [products] = useState<Product[]>(PRODUCTS)

    const getProduct = (id: number): Product | undefined => {
        return products.find(product => product.id === id);
    }

    const getBestProducts = (): Product[] => {
        return products.filter(product => product.isBest)
    };

    const getNewProducts = (): Product[] => {
        return products.filter(product => product.isNew)
    }
    const getProductsByCategory = (category: Category | "all"): Product[] => {
        if (category === "all") return products;
        return products.filter(product => product.category === category);
    }
    const filterProducts = (filter: FilterState): Product[] => {
        let filtered = products;

        if (filter.category !== "all") {
            filtered = filtered.filter(p => p.category === filter.category)
        }
        filtered = filtered.filter(
            p => p.price >= filter.minPrice && p.price <= filter.maxPrice
        );
        switch (filter.sortBy) {
            case "price-low":
                filtered = [...filtered].sort((a, b) => a.price - b.price)
                break;
            case "price-high":
                filtered = [...filtered].sort((a, b) => b.price - a.price)
                break;
            case "newest":
                filtered = [...filtered].sort((a, b) => b.id - a.id);
                break;
        }
        return filtered;
    }
    const value : ProductContextType = {
        products,
        getProduct,
        getBestProducts,
        getNewProducts,
        getProductsByCategory,
        filterProducts
    };
    return (
        <ProductContext.Provider value={value}>
            {children}
        </ProductContext.Provider>
    )
}

export function useProducts() {
    const context = useContext(ProductContext)
    if(context === undefined) {
        throw new Error('useProducts는 ProductProvider 안에서만 사용할 수 있습니다.')
    }
    return context;
}
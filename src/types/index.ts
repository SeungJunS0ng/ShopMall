// 카테고리
export type Category =
    | "전자기기"
    | "패션"
    | "식품"
    | "도서"
    | "생활용품";
// 상품 옵션
export interface ProductOption {
    name: string; // "색상", "사이즈"
    values: string[]; // ["빨강", "파랑"]
}
// 상품
export interface Product {
    id: number;
    name: string;
    price: number;
    category: Category;
    image: string;
    description: string;
    stock: number;
    rating: number;
    reviewCount: number;
    options?: ProductOption[];
    isBest?: boolean; // 베스트 상품
    isNew?: boolean; // 신상품
}
// 장바구니 아이템
export interface CartItem {
    id: number; // 장바구니 아이템 고유 ID
    product: Product;
    quantity: number;
    selectedOptions?: { [key: string]: string }; // { "색상": "빨강" }
}
// 필터 상태
export interface FilterState {
    category: Category | "all";
    minPrice: number;
    maxPrice: number;
    sortBy: "popular" | "price-low" | "price-high" | "newest";
}
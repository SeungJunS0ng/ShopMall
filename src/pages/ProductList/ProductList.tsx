import { useSearchParams } from "react-router-dom"
import { useProducts } from "../../contexts/ProductContext"
import { useEffect, useState } from "react"
import type { FilterState, Category } from "../../types"
import styles from './ProductList.module.css'
import ProductCard from "../../components/ProductCard/ProductCard"

export default function ProductList() {
    const { filterProducts, products } = useProducts()
    const [searchParams] = useSearchParams()

    // 필터 상태
    const [filters, setFilters] = useState<FilterState>({
        category: (searchParams.get('category') as Category) || 'all',
        minPrice: 0,
        maxPrice: 2000000,
        sortBy: 'popular'
    })

    // URL 쿼리 파라미터 반영
    useEffect(() => {
        const category = searchParams.get('category') as Category
        if (category) {
            setFilters(prev => ({ ...prev, category }))
        }
    }, [searchParams])

    // 필터링된 상품
    const filteredProducts = filterProducts(filters)

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>상품 목록</h1>

            {/* 필터 영역 */}
            <div className={styles.filters}>
                {/* 카테고리 */}
                <div className={styles.filterGroup}>
                    <label className={styles.filterLabel}>카테고리</label>
                    <select
                        value={filters.category}
                        onChange={(e) => setFilters({ ...filters, category: e.target.value as Category | 'all' })}
                        className={styles.select}
                    >
                        <option value="all">all</option>
                        <option value="전자기기">전자기기</option>
                        <option value="패션">패션</option>
                        <option value="식품">식품</option>
                        <option value="도서">도서</option>
                        <option value="생활용품">생활용품</option>
                    </select>
                </div>

                {/* 가격 범위 */}
                <div className={styles.filterGroup}>
                    <label className={styles.filterLabel}>
                        가격: {filters.minPrice.toLocaleString()}원 ~ {filters.maxPrice.toLocaleString()}원
                    </label>
                    <div className={styles.priceInputs}>
                        <input
                            type="number"
                            value={filters.minPrice}
                            onChange={(e) => setFilters({ ...filters, minPrice: Number(e.target.value) })}
                            className={styles.input}
                            placeholder="최소 가격"
                        />
                        <span>~</span>
                        <input
                            type="number"
                            value={filters.maxPrice}
                            onChange={(e) => setFilters({ ...filters, maxPrice: Number(e.target.value) })}
                            className={styles.input}
                            placeholder="최대 가격"
                        />
                    </div>
                </div>

                {/* 정렬 */}
                <div className={styles.filterGroup}>
                    <label className={styles.filterLabel}>정렬</label>
                    <select
                        value={filters.sortBy}
                        onChange={(e) => setFilters({ ...filters, sortBy: e.target.value as FilterState['sortBy'] })}
                        className={styles.select}
                    >
                        <option value="popular">인기순</option>
                        <option value="price-low">가격 낮은순</option>
                        <option value="price-high">가격 높은순</option>
                        <option value="newest">최신순</option>
                    </select>
                </div>
            </div>

            {/* 상품 개수 */}
            <p className={styles.count}>
                총 {filteredProducts.length}개의 상품
            </p>

            {/* 상품 그리드 */}
            {filteredProducts.length > 0 ? (
                <div className={styles.productGrid}>
                    {filteredProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            ) : (
                <div className={styles.empty}>
                    <p>😢 조건에 맞는 상품이 없습니다.</p>
                </div>
            )}
        </div>
    )
}
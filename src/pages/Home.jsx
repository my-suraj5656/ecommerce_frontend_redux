import { useDispatch, useSelector } from "react-redux";
import { fetchStart, fetchSuccess, fetchFail, setPage, setCategories, setCategory } from "../redux/slices/productSlice";
import { getCategories, getProducts } from "../services/productService";

import { useEffect } from "react";
import { addToCart } from "../redux/slices/cartslice";

export default function Home() {
    const dispatch = useDispatch();
    const { items, totals,page, category, categories } = useSelector(s => s.products);

    // console.log(totals);
    

    const loadProducts = async () => {
        dispatch(fetchStart());
        try {
            const data = await getProducts(page, category);
            // console.log(data);
            
            dispatch(fetchSuccess(data));
            // console.log(data);
            
        } catch {
            dispatch(fetchFail());
        }
    };

    const loadCategories = async () => {
        const data = await getCategories();
        dispatch(setCategories(data));
    };

    useEffect(() => {
        loadProducts();
    }, [page, category]);

    useEffect(() => {
        loadCategories();
    }, []);

    return (
        <div>
            <select
                value={category}
                onChange={(e) => dispatch(setCategory(e.target.value))}
            >
                <option value="">All</option>
                {categories.map(c => (
                    <option key={c.slug} value={c.slug}>
                        {c.name}
                    </option>
                ))}
            </select>

            <hr />
            {items?.map(p => (
                <div style={{ border: "1px solid black", padding: "1rem", marginBottom: "1rem" }} key={p.id}>
                    <h4>Name: {p.title}</h4>
                    <p>Price: ${p.price}</p>
                    <button onClick={() => dispatch(addToCart(p))}>
                        Add to Cart
                    </button>
                </div>
            ))}

            <button onClick={() => dispatch(setPage(page - 1))}>Prev</button>
            <button onClick={() => dispatch(setPage(page + 1))}>Next</button>
        </div>
    );
}

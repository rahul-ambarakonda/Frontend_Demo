import React, { useState, useEffect } from 'react';

function App() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    // Mock data fetching function
    const fetchProducts = async () => {
        setLoading(true);
        setError(false);
        try {
            // Simulate network delay
            await new Promise(resolve => setTimeout(resolve, 1500));

            // Simulate an error 30% of the time
            if (Math.random() < 0.3) {
                throw new Error("Failed to fetch products");
            }

            // Simulate fetching some product data
            const mockProducts = [
                { id: 1, name: 'Brake Pads', price: 59.99 },
                { id: 2, name: 'Oil Filter', price: 12.50 },
                { id: 3, name: 'Spark Plugs', price: 25.00 },
            ];
            setProducts(mockProducts);
        } catch (err) {
            console.error("Error fetching products:", err);
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    if (loading) {
        return (
            <div className="App">
                <h1>Auto Parts Inc.</h1>
                <p>Loading products...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="App">
                <h1>Auto Parts Inc.</h1>
                <p style={{ color: 'red' }}>Failed to load products. Please try again later.</p>
            </div>
        );
    }

    return (
        <div className="App">
            <h1>Auto Parts Inc.</h1>
            <h2>Available Products:</h2>
            {products.length > 0 ? (
                <ul>
                    {products.map(product => (
                        <li key={product.id}>{product.name} - ${product.price.toFixed(2)}</li>
                    ))}
                </ul>
            ) : (
                <p>No products found.</p>
            )}
        </div>
    );
}

export default App;
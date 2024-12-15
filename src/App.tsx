import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import ProductList from './components/ProductList';

type Product = {
    name: string;
    description: string;
    category: string;
    quantity: number;
    unit: string;
    imageUrl?: string;
};

interface Filters {
    name: string;
    category: string;
    nonZeroQuantity: boolean;
}

const App: React.FC = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [filters, setFilters] = useState<Filters>({ name: '', category: '', nonZeroQuantity: false });
    const [products] = useState<Product[]>([
        { name: 'Product A', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', category: 'Category A', quantity: 1, unit: 'lb', imageUrl: 'https://bee-master.ru/wp-content/uploads/5/7/a/57a3da20da775e5e93c496b3192fe631.jpeg' },
        { name: 'Product B', description: 'Lorem ipsum dolor sit amet.', category: 'Category B', quantity: 10, unit: 'kg', imageUrl: '' },
        { name: 'Product C', description: 'Lorem ipsum dolor sit amet.', category: 'Category C', quantity: 5, unit: 'l', imageUrl: '' },
        { name: 'Product D', description: 'Lorem ipsum dolor sit amet.', category: 'Category C', quantity: 0, unit: 'l', imageUrl: '' },
        { name: 'Product D', description: 'Lorem ipsum dolor sit amet.', category: 'Category C', quantity: 5, unit: 'l', imageUrl: '' },
        { name: 'Product E', description: 'Lorem ipsum dolor sit amet.', category: 'Category C', quantity: 0, unit: 'l', imageUrl: '' },
        { name: 'Product E', description: 'Lorem ipsum dolor sit amet.', category: 'Category C', quantity: 0, unit: 'l', imageUrl: '' },
        { name: 'Product E', description: 'Lorem ipsum dolor sit amet.', category: 'Category C', quantity: 0, unit: 'l', imageUrl: '' },
        { name: 'Product F', description: 'Lorem ipsum dolor sit amet.', category: 'Category C', quantity: 5, unit: 'l', imageUrl: '' },
        { name: 'Product F', description: 'Lorem ipsum dolor sit amet.', category: 'Category C', quantity: 0, unit: 'l', imageUrl: '' },
        { name: 'Product F', description: 'Lorem ipsum dolor sit amet.', category: 'Category C', quantity: 0, unit: 'l', imageUrl: '' },
        { name: 'Product F', description: 'Lorem ipsum dolor sit amet.', category: 'Category C', quantity: 5, unit: 'l', imageUrl: '' },
    ]);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleApplyFilters = (newFilters: Filters) => {
        setFilters(newFilters);
        setIsSidebarOpen(false);
    };

    const filteredProducts = products.filter((product) => {
        const nameMatch = new RegExp(filters.name, 'i').test(product.name);
        const categoryMatch = filters.category ? product.category === filters.category : true;
        const quantityMatch = filters.nonZeroQuantity ? product.quantity > 0 : true;
        return nameMatch && categoryMatch && quantityMatch;
    });

    return (
        <div>
            <Navbar toggleSidebar={toggleSidebar} />
            <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} onApplyFilters={handleApplyFilters} />
            <ProductList products={filteredProducts} />
        </div>
    );
};

export default App;
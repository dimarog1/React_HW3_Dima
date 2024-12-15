import React, { useState } from 'react';
import { styled } from '@mui/material';
import ProductCard from './ProductCard';
import Modal from './ModalWindow';
import Pagination from './Pagination';

type Product = {
    name: string;
    description: string;
    category: string;
    quantity: number;
    unit: string;
    imageUrl?: string;
};

interface ProductListProps {
    products: Product[];
}

const ProductListContainer = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
}));

const ProductsContainer = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    gap: theme.spacing(5),
    paddingLeft: theme.spacing(4),
    paddingTop: theme.spacing(6),
}));

const StyledPagination = styled(Pagination)(({ theme }) => ({
    marginTop: theme.spacing(4),
}));

const ProductList: React.FC<ProductListProps> = ({ products }) => {
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    const handleCardClick = (product: Product) => {
        setSelectedProduct(product);
    };

    const handleCloseModal = () => {
        setSelectedProduct(null);
    };

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentProducts = products.slice(startIndex, startIndex + itemsPerPage);

    return (
        <ProductListContainer>
            <ProductsContainer>
                {currentProducts.map((product, index) => (
                    <ProductCard key={index} {...product} onClick={() => handleCardClick(product)} />
                ))}
            </ProductsContainer>
            <StyledPagination
                totalItems={products.length}
                itemsPerPage={itemsPerPage}
                currentPage={currentPage}
                onPageChange={handlePageChange}
            />
            <Modal isOpen={!!selectedProduct} onClose={handleCloseModal}>
                {selectedProduct && (
                    <div style={{ textAlign: 'center' }}>
                        <h3>{selectedProduct.name}</h3>
                        {selectedProduct.imageUrl ? (
                            <img src={selectedProduct.imageUrl} alt={selectedProduct.name} style={{ width: '200px', height: 'auto', margin: '16px 0' }} />
                        ) : (
                            <div style={{ margin: '16px 0', opacity: 0.5 }}>[No Image]</div>
                        )}
                        <p>{selectedProduct.description}</p>
                        <p>Category: {selectedProduct.category}</p>
                        <p>Quantity: {selectedProduct.quantity} {selectedProduct.unit}</p>
                    </div>
                )}
            </Modal>
        </ProductListContainer>
    );
};

export default ProductList;
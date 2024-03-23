import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetailPage = () => {
    const { id } = useParams();

    return <h2>ProductDetailPage with id: {id}</h2>;
};

export default ProductDetailPage;

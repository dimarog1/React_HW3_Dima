import React from 'react';
import { Card, CardContent, CardMedia, Typography, Tooltip, Box } from '@mui/material';

type ProductCardProps = {
    name: string;
    description: string;
    category: string;
    quantity: number;
    unit: string;
    imageUrl?: string;
    onClick: () => void;
};

const ProductCard: React.FC<ProductCardProps> = ({ name, description, category, quantity, unit, imageUrl, onClick }) => (
    <Tooltip title={description} arrow>
        <Card onClick={onClick} sx={{ width: 220, height: 350, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 0, border: '1px solid #ddd', borderRadius: 4, backgroundColor: '#fff', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', transition: 'transform 0.2s ease, box-shadow 0.2s ease', '&:hover': { transform: 'scale(1.1)', boxShadow: '0 6px 12px rgba(94, 194, 255, 0.7)', cursor: 'pointer' } }}>
            <CardContent sx={{ paddingTop: 2 }}>
                <Typography variant="h5" sx={{ fontWeight: 'bold', fontSize: 18, margin: '0 0 8px', textAlign: 'center' }}>
                    {name}
                </Typography>
                <Box sx={{ width: '100%', height: 150, marginBottom: 2 }}>
                    {imageUrl ? (
                        <CardMedia
                            component="img"
                            image={imageUrl}
                            alt={name}
                            sx={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 1 }}
                        />
                    ) : (
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: '100%',
                                height: '100%',
                                backgroundColor: '#f2f2f2',
                                color: '#888',
                                fontSize: 14,
                                borderRadius: 1,
                            }}
                        >
                            No Image
                        </Box>
                    )}
                </Box>
                <Typography
                    variant="body2"
                    sx={{
                        fontSize: 14,
                        color: '#555',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        WebkitLineClamp: 1,
                        WebkitBoxOrient: 'vertical',
                        marginBottom: 1,
                        wordWrap: 'break-word',
                        maxHeight: 54,
                        wordBreak: 'break-word',
                    }}
                >
                    {description}
                </Typography>
                <Typography variant="body2" sx={{ fontSize: 14, color: '#666', margin: '4px 0', fontWeight: 'bold' }}>
                    Category: <Typography component="span" sx={{ fontWeight: 'normal' }}>{category}</Typography>
                </Typography>
                <Typography variant="body2" sx={{ fontSize: 14, color: '#666', margin: '4px 0', fontWeight: 'bold' }}>
                    Quantity: <Typography component="span" sx={{ fontWeight: 'normal' }}>{quantity} {unit}</Typography>
                </Typography>
            </CardContent>
        </Card>
    </Tooltip>
);

export default ProductCard;
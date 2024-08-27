"use client";
import React, { useState } from 'react';
import { Card, CardContent, CardMedia, IconButton, Typography } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

const images = [
  { src: '/assets/hus.jpg', alt: 'Hotel Room 1' },
  { src: '/assets/natt.jpeg', alt: 'Hotel Room 2' },
  { src: '/assets/testbild.jpg', alt: 'Hotel Room 3' },
];

const CardWithCarousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <Card sx={{ width: '90%', maxWidth: '1200px', margin: '10px auto', position: 'relative', height: '600px' }}> {/* Justera höjden på kortet här */}
      <CardMedia
        component="img"
        sx={{ 
          height: '100%', // Gör att bilden fyller hela höjden på kortet
          objectFit: 'cover' // Håller proportionerna för bilden utan att sträcka ut den
        }}
        image={images[currentImageIndex].src}
        alt={images[currentImageIndex].alt}
      />
      <IconButton
        onClick={handlePrev}
        sx={{ 
          position: 'absolute', 
          top: '50%', 
          left: '10px', 
          transform: 'translateY(-50%)', 
          backgroundColor: 'rgba(255, 255, 255, 0.7)' 
        }}
      >
        <ArrowBackIos />
      </IconButton>
      <IconButton
        onClick={handleNext}
        sx={{ 
          position: 'absolute', 
          top: '50%', 
          right: '10px', 
          transform: 'translateY(-50%)', 
          backgroundColor: 'rgba(255, 255, 255, 0.7)' 
        }}
      >
        <ArrowForwardIos />
      </IconButton>
      <CardContent sx={{ padding: '10px', position: 'absolute', bottom: '0', width: '100%', background: 'rgba(255, 255, 255, 0.8)' }}> {/* Minska padding för att minska höjden */}
        <Typography variant="h6" gutterBottom> {/* Lägg till gutterBottom för bättre spacing */}
          Discover Our Rooms
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Explore our beautifully designed rooms with modern amenities. Perfect for a relaxing stay.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardWithCarousel;

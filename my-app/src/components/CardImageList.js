"use client";
import React, { useState } from 'react';
import Image from 'next/image'; // Importera Next.js Image-komponent
import { Card, CardContent, IconButton, Typography } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

const images = [
  { src: '/assets/natt.jpeg', alt: 'Hotel Room 2', width: 1200, height: 800 },
  { src: '/assets/hus.jpg', alt: 'Hotel Room 1', width: 1200, height: 800 },
  { src: '/assets/testbild.jpg', alt: 'Hotel Room 3', width: 1200, height: 800 },
];

const CardImageList = () => {
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
    <Card sx={{ width: '90%', maxWidth: '1200px', margin: '10px auto', position: 'relative', height: '500px' }}>
   
      <Image
        src={images[currentImageIndex].src}
        alt={images[currentImageIndex].alt}
        width={images[currentImageIndex].width}
        height={images[currentImageIndex].height} 
        style={{
          objectFit: 'cover', 
          width: '100%', 
          height: '100%' 
        }}
        priority 
      />
      
      <IconButton
        onClick={handlePrev}
        sx={{ 
          position: 'absolute', 
          top: '50%', 
          left: '10px', 
          transform: 'translateY(-50%)', 
          backgroundColor: 'rgba(255, 255, 255, 0.7)',
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
          }
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
          backgroundColor: 'rgba(255, 255, 255, 0.7)',
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
          }
        }}
      >
        <ArrowForwardIos />
      </IconButton>
      
      <CardContent sx={{ padding: '10px', position: 'absolute', bottom: '0', width: '100%', background: 'rgba(255, 255, 255, 0.8)' }}>
        <Typography variant="h6" gutterBottom>
          Discover Our Rooms
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Explore our beautifully designed rooms with modern amenities. Perfect for a relaxing stay.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardImageList;

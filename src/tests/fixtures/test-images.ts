// Test image fixtures for unit tests

// A simple SVG data URI that can be used as an image source in tests
export const TEST_IMAGE_SVG = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"%3E%3Crect width="400" height="300" fill="%23cccccc"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="24" fill="%23666666"%3ETest Image%3C/text%3E%3C/svg%3E';

// Carousel test images
export const CAROUSEL_IMAGE_1 = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="400"%3E%3Crect fill="%23e74c3c" width="800" height="400"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="48" fill="white"%3ECarousel Image 1%3C/text%3E%3C/svg%3E';

export const CAROUSEL_IMAGE_2 = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="400"%3E%3Crect fill="%233498db" width="800" height="400"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="48" fill="white"%3ECarousel Image 2%3C/text%3E%3C/svg%3E';

export const CAROUSEL_IMAGE_3 = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="400"%3E%3Crect fill="%232ecc71" width="800" height="400"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="48" fill="white"%3ECarousel Image 3%3C/text%3E%3C/svg%3E';

// Alternative test images if needed
export const TEST_IMAGE_PLACEHOLDER = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100" height="100"%3E%3Crect width="100" height="100" fill="%23f0f0f0"/%3E%3C/svg%3E';

// Invalid image URL for testing error handling
export const TEST_IMAGE_INVALID = 'https://invalid-url-that-does-not-exist.test/image.jpg';

export const TEST_IMAGES = [
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23e74c3c" width="400" height="300"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="24" fill="white"%3ESlide 1%3C/text%3E%3C/svg%3E',
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%233498db" width="400" height="300"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="24" fill="white"%3ESlide 2%3C/text%3E%3C/svg%3E',
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%232ecc71" width="400" height="300"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="24" fill="white"%3ESlide 3%3C/text%3E%3C/svg%3E',
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23f39c12" width="400" height="300"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="24" fill="white"%3ESlide 4%3C/text%3E%3C/svg%3E',
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%239b59b6" width="400" height="300"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="24" fill="white"%3ESlide 5%3C/text%3E%3C/svg%3E',
];

import React, { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import image1 from '../../assets/images/Pylna_FRONT_003 2.png'
import image2 from '../../assets/images/Pylna_OGROD_002 2.png'
import image3 from '../../assets/images/Pylna_TARAS_001 2.png'
import image4 from '../../assets/images/PYLNA_III_int___002.png'
import image5 from '../../assets/images/PYLNA_III_int___003.png'
import image6 from '../../assets/images/PYLNA_III_int___004.png'
import image7 from '../../assets/images/PYLNA_III_int___001.png'

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7
];

function PhotoGallery() {
  const carouselRef = useRef();
  const [width, setWidth] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const [dragged, setDragged] = useState(false);
  const [calcWidth, setCalcWith] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(null);

  useEffect(() => {
    const updateWidth = () => {
      if (carouselRef.current) {
        setWidth(
          carouselRef.current.scrollWidth - carouselRef.current.offsetWidth
        );
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth);
  }, [calcWidth]);

  const handleImageClick = (index) => {
    if (!dragged) {
      setCurrentIndex(index);
      setSelectedImage(images[index]);
    }
  };

  const handleNext = (e) => {
    e.stopPropagation();
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedImage(images[currentIndex + 1]);
    }
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setSelectedImage(images[currentIndex - 1]);
    }
  };

  return (
    <section id="galeria">
      <div className="grid grid-cols-12 w-full h-full absolute -z-10">
        <div className="col-span-12 md:col-span-9 bg-white"></div>
        <div className="col-span-12 md:col-span-3 bg-[#55694B]"></div>
      </div>
      <div className="py-12 md:py-24">
        <div className="container max-w-[1596px] mx-auto px-6">
          <h2 className="font-poppins text-[#55694B] text-4xl md:text-5xl lg:text-[65px] font-extralight mb-12 md:mb-24">Galeria</h2>
        </div>
        <div className="overflow-hidden w-full px-4 relative">
          <motion.div
            ref={carouselRef}
            className="flex cursor-grab active:cursor-grabbing"
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            onDragStart={() => setDragged(true)}
            onDragEnd={() => setDragged(false)}
            onMouseEnter={() => setCalcWith(!calcWidth)}
          >
            {images.map((src, index) => (
              <motion.div
                key={index}
                className="min-w-[300px] md:min-w-[550px] mr-4"
                onClick={() => !dragged && handleImageClick(index)}
              >
                <img
                  src={src}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-auto pointer-events-none"
                />
              </motion.div>
            ))}
          </motion.div>

          <AnimatePresence>
            {selectedImage && (
              <motion.div
                className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedImage(null)}
              >
                <button onClick={handlePrev} className="text-white text-3xl p-0 md:px-4"><svg class="w-12 h-12 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="m15 19-7-7 7-7" />
                </svg>
                </button>
                <motion.img
                  src={selectedImage}
                  alt="Enlarged"
                  className="rounded-lg shadow-2xl w-[80%] h-auto max-w-4xl"
                  initial={{ scale: 0.5 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.5 }}
                  onClick={(e) => e.stopPropagation()}
                />
                <button onClick={handleNext} className="text-white text-3xl p-0 md:px-4"><svg class="w-12 h-12 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="m9 5 7 7-7 7" />
                </svg>
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

export default PhotoGallery;
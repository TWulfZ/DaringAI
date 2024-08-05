import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ranks = ['S', 'A', 'B', 'C', 'D'];
const colors = {
  S: '#FFD700', // Dorado
  A: '#C0C0C0', // Plateado
  B: '#CD7F32', // Bronce
  C: '#4682B4', // Azul acero
  D: '#708090'  // Gris pizarra
};

const RankAnimation = () => {
  const [currentRank, setCurrentRank] = useState('');

  useEffect(() => {
    const randomRank = ranks[Math.floor(Math.random() * ranks.length)];
    setCurrentRank(randomRank);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-800">
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        className="text-9xl font-bold"
        style={{ color: colors[currentRank] }}
      >
        {currentRank}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-4 text-2xl text-white"
      >
        Rank {currentRank}
      </motion.div>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="mt-8 px-6 py-2 bg-blue-500 text-white rounded-full"
        onClick={() => {
          const newRank = ranks[Math.floor(Math.random() * ranks.length)];
          setCurrentRank(newRank);
        }}
      >
        Obtener nuevo rank
      </motion.button>
    </div>
  );
};

export default RankAnimation;
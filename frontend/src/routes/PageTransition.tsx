import { motion } from 'framer-motion';
import { ReactNode } from 'react';

const PageTransition = ({ children, delay }: { children: ReactNode, delay?: number }) => {

  const delayTime = delay || 0;

  return (
    <motion.div
      
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 1, ease: 'easeInOut', delay: delayTime }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
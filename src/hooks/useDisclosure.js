import React from 'react';

const useDisclosure = () => {
    const [isOpen, setopen] =useState(false);
      const onOpen =()=>{
        setopen(true);
      }
      const onClose =()=>{
        setopen(false);
      }
  return {onClose,onOpen,isOpen};
    
  
};

export default useDisclosure;

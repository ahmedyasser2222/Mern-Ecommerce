import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollReverse = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    document.documentElement.scroll({
      top : 0 ,
      left : 0,
      behavior : "smooth"
    })
  }, [pathname]);

  return null;
};
export default ScrollReverse;

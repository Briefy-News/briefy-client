import { useEffect, RefObject, useState, Dispatch, SetStateAction } from 'react';

interface UseInfinite {
  setData: Dispatch<SetStateAction<number[]>>
  targetRef: RefObject<HTMLDivElement>
}

const useInfinite = ({ setData, targetRef } : UseInfinite) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!targetRef.current) return;

    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setLoading(true);
          setTimeout(() => {
            setData((prevData) => [...prevData, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
            setLoading(false);
          }, 350);
        }
      });
    };
    const options = { root: null, rootMargin: '0px', threshold: 0 };
    const observer = new IntersectionObserver(callback, options);
    observer.observe(targetRef.current);

    return () => {
      observer.disconnect();
    };
  }, [targetRef.current]);

  return { loading };
};

export default useInfinite;

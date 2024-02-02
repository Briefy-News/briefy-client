import { useEffect, useState } from 'react';

const useCategoryTxt = (category: string | undefined) => {
  const [categoryTxt, setCategoryTxt] = useState('');

  useEffect(() => {
    if (!category) {
      setCategoryTxt('전체');
      return;
    }

    let menu;
    switch (category) {
      case 'all':
        menu = '전체';
        break;
      case 'business':
        menu = '비지니스';
        break;
      case 'technique':
        menu = '기술';
        break;
      case 'health':
        menu = '건강';
        break;
      case 'entertainment':
        menu = '엔터테이먼트';
        break;
      case 'sports':
        menu = '스포츠';
        break;
      case 'environment':
        menu = '환경';
        break;
      case 'science':
        menu = '과학';
        break;
      case 'travel':
        menu = '여행';
        break;
      case 'media':
        menu = '미디어';
        break;
      case 'food':
        menu = '푸드';
        break;
      default:
        menu = '전체';
    }
    setCategoryTxt(menu);
  }, [category]);

  return categoryTxt;
};

export default useCategoryTxt;

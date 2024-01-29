import { useParams } from 'react-router-dom';
import FadeInLayout from 'src/components/Layout/FadeInLayout';

function CategoryPage() {
  const { category } = useParams();

  return (
    <>
      <FadeInLayout>
        <div>CategoryPage</div>
        {category}
      </FadeInLayout>
    </>
  );
}

export default CategoryPage;

import { useParams } from 'react-router-dom';
import DefaultLayout from 'src/components/Layout/DefaultLayout';
import FadeInLayout from 'src/components/Layout/FadeInLayout';

function CategoryPage() {
  const { category } = useParams();

  return (
    <>
      <FadeInLayout>
        <DefaultLayout>
          <div>CategoryPage</div>
          {category}
        </DefaultLayout>
      </FadeInLayout>
    </>
  );
}

export default CategoryPage;

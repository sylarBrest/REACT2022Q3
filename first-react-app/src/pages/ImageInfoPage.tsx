import { Link, Navigate, useParams } from 'react-router-dom';
import { ImageInfoRouterPropsType } from 'data/types';
import { ImageInfoContent } from 'components/Main/ImageInfo/ImageInfoContent';
import { useGlobalContext } from 'context/globalContext';

export const ImageInfoPage = () => {
  const { imageId } = useParams<ImageInfoRouterPropsType>();
  const { state } = useGlobalContext();

  const { hits } = state.search.results;

  const imageInfoData = hits.filter((image) => imageId && image.id === +imageId);

  return (
    <section className="section image-info-section" data-testid="image-info-page">
      <h1 className="title">Id {imageId}</h1>
      {imageInfoData.length ? (
        <ImageInfoContent {...imageInfoData[0]} />
      ) : (
        <Navigate replace to="/" />
      )}
      <Link className="back-link" to="/" data-testid="back-link">
        &lt; Back to search
      </Link>
    </section>
  );
};

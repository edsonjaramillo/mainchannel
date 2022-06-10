import { StoreImagesType } from '@/lib/graphcms/types';
import { BlurImage } from '@/components/index';

const ImageGrid = (images: StoreImagesType) => {
  console.table(images);

  return (
    <div className='store__imagesgrid responsive-width'>
      <StoreImage id={1} src={images.firstImage.url} alt={images.firstImageDescription} />
      <StoreImage id={2} src={images.secondImage.url} alt={images.secondImageDescription} />
      <StoreImage id={3} src={images.thirdImage.url} alt={images.thirdImageDescription} />
      <StoreImage id={4} src={images.fourthImage.url} alt={images.fourthImageDescription} />
    </div>
  );
};
interface StoreImage {
  id: number;
  src: string;
  alt: string;
}

const StoreImage = ({ id, src, alt }: StoreImage) => (
  <div className='store__image' id={`image-${id}`}>
    <BlurImage src={src} layout='fill' objectFit='cover' quality={35} alt={alt} />
  </div>
);

export default ImageGrid;

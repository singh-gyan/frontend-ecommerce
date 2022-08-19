interface IWishlistProps {
  wishList: { [key: string]: string | Number };
  productId: string;
}

const FavouriteSVG = ({ wishList, productId }: IWishlistProps) => {
  let isFavourite = false;
  if (wishList[productId]) {
    isFavourite = true;
  }
  return (
    <svg
      fill='none'
      className={
        isFavourite
          ? 'stroke-red-500 w-4 h-4'
          : 'stroke-white w-4 h-4 currentColor'
      }
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      id={productId}
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        className={isFavourite ? 'fill-red-500' : ''}
        id={productId}
        d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
      ></path>
    </svg>
  );
};

export default FavouriteSVG;

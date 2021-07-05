interface IProps {
  cls: string;
  figureId: string | null;
  srcDefault: string;
  srcMobile: string;
  srcTablet: string;
  srcDesktop: string;
  alt: string;
}

const ImagesContainer = ({
  cls,
  figureId,
  srcDefault,
  srcMobile,
  srcTablet,
  srcDesktop,
  alt,
}: IProps) => {
  return (
    <figure className={cls} id={figureId}>
      <picture>
        <source media="(min-width:1024px)" srcSet={srcDesktop} />
        <source media="(min-width:768px)" srcSet={srcTablet} />
        <source media="(min-width:320px)" srcSet={srcMobile} />
        <img src={srcDefault} alt={alt} />
      </picture>
    </figure>
  );
};

export default ImagesContainer;

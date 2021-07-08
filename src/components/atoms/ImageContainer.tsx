interface IProps {
  children: any | null;
  cls: string;
  figureId: string | null;
  srcDefault: string;
  srcMobile: string;
  srcTablet: string;
  srcDesktop: string;
  alt: string;
}

const ImagesContainer = ({
  children,
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
      {children}
      <picture>
        <source media="(min-width:1024px)" srcSet={srcDesktop} />
        <source media="(min-width:768px)" srcSet={srcTablet} />
        <source media="(min-width:320px)" srcSet={srcMobile} />
        <img src={srcDefault} alt={alt} sizes="284px" />
      </picture>
    </figure>
  );
};

export default ImagesContainer;

import Image from "next/image";

const ImageComponent: React.FC<{
  src: string;
  className: string;
  alt: string;
}> = ({ src, className, ...props }) => {
  return (
    <div className={`relative ${className}`}>
      <Image src={src} {...props} layout="fill" alt="oo" />
    </div>
  );
};

export default ImageComponent;

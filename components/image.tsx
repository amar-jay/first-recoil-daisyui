import Image from "next/image";

const ImageComponent: React.FC<{ src: string; className: string }> = ({
  src,
  className,
}) => {
  return (
    <div className={`relative ${className}`}>
      <Image src={src} alt="Image" layout="fill" />
    </div>
  );
};

export default ImageComponent;

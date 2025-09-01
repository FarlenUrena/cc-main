import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;
  return (
    <div className="w-full">
      <div
        className="wow fadeInUp w-full flex flex-col items-center text-center"
        data-wow-delay=".15s"
      >
        {/* Icono */}
        <div className="bg-primary/10 text-primary mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md">
          {icon}
        </div>

        {/* Título */}
        <h3 className="mb-5 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl dark:text-white">
          {title}
        </h3>

        {/* Párrafo */}
        <p className="text-body-color text-base leading-relaxed font-medium max-w-[300px]">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleFeature;

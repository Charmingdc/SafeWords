import Button from "@/components/ui/Button";
import type { Feature } from "@/types/index";

const FeatureBox = ({ featureDetails }: { featureDetails: Feature }) => {
  const { icon, title, content } = featureDetails;

  return (
    <div className='w-full flex flex-col gap-2 py-[1.5rem] px-[5%] md:w-[18rem] md:px-[2rem]'>
      <Button width='w-fit' className='border-[.080rem] mb-3'>
        {icon}
      </Button>

      <h3 className='font-bold text-xl'> {title} </h3>

      <p> {content} </p>
    </div>
  );
};

export default FeatureBox;

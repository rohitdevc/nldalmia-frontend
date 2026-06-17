import { MSRImpact } from "@/types/api";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

type Props = {
    impact: MSRImpact
}

export const ImpactCard = ({ impact }: Props) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  const match = String(impact.impact_count).match(/^(\d+(?:\.\d+)?)(.*)$/);

  const count = match ? Number(match[1]) : 0;
  const suffix = match ? match[2] : "";

  return (
    <div ref={ref} className="bg-[#FFCC33] w-35 h-35 sm:w-60 sm:h-50 px-2 flex flex-col justify-center items-center text-center gap-5 transition-all duration-300 ease-in-out hover:lg:-mt-5">
      <h2 className="text-2xl sm:text-5xl font-semibold lg:font-normal">
        {
        inView ? (
            <CountUp start={0} end={count} duration={1} separator="," />) : (0)
        }
        <span>{suffix}</span>
      </h2>
      <span className="text-burgundy">{impact.impact_name}</span>
    </div>
  );
};
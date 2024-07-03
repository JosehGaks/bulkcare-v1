import SectionTitle from "../Common/SectionTitle";

import featureBenefitsData from "./featureBenefitsData";
import SingleFeatureBenefit from "./SingleFeatureBenefit";


const FeaturesBenefits = () => {
  return (
    <section className="pb-8 pt-20 lg:pb-[70px] lg:pt-[120px] bg-gray-1 pb-8 pt-20 dark:bg-dark-2">
      <div className="container">
        <SectionTitle
          subtitle="Benefits"
          title="Benefits of Outsourcing Customer Support"
          paragraph="Choosing to outsource your customer support offers several key advantages that can enhance both your service quality and operational efficiency. Here’s what you gai"
          center
        />

        <div className="-mx-4 mt-12 flex flex-wrap lg:mt-20">
          {featureBenefitsData.map((feature, i) => (
            <SingleFeatureBenefit key={i} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesBenefits;

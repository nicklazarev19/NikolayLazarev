import { type PricePlan, type PricesData } from "@/constants/pricesData";

export const SectionPrices = ({ pricesData }: { pricesData: PricesData }) => {
  const hasPlans = pricesData.plans.length > 0;
  const hasAdditional = pricesData.additional.length > 0;

  return (
    <section className="mt-[50px]">
      {hasPlans && (
        <div className="flex flex-col lg:flex-row items-center justify-center gap-[25px]">
          {pricesData.plans.map((plan) => (
            <PriceCard key={plan.title} plan={plan} />
          ))}
        </div>
      )}

      {hasAdditional && (
        <div className="mt-[24px] mb-[50px]">
          <AditionalCard pricesData={pricesData} />
        </div>
      )}
    </section>
  );
};

const titleStyles =
  "text-black text-center text-[30px] font-medium font-Newsreader leading-[120%] tracking-[0.38px]";

const PriceCard = ({ plan }: { plan: PricePlan }) => {
  return (
    <div className="w-full items-center justify-center bg-[#F5F5F4] py-[25px] px-[20px]">
      <h3 className={titleStyles}>{plan.title}</h3>
      <div className="mt-[30px] flex flex-col gap-[10px] items-center justify-center">
        {plan.includes.map((item) => (
          <PriceCardItem key={item} text={item} />
        ))}
      </div>

      <p className="mt-[60px] text-black text-center text-[30px] font-bold font-Newsreader leading-[120%] tracking-[0.38px]">
        {plan.price}
      </p>
    </div>
  );
};

const AditionalCard = ({ pricesData }: { pricesData: PricesData }) => {
  return (
    <div className="w-full items-center justify-center bg-[#F5F5F4] py-[25px] px-[20px]">
      <h3 className={titleStyles}>{pricesData.additionalSectionTitle}</h3>
      <div className="mt-[30px] flex w-full max-w-full flex-col gap-[10px] items-stretch justify-center lg:items-center">
        {pricesData.additional.map((item) => (
          <AditionalCardItem
            key={item.title}
            text={item.title}
            price={item.price}
          />
        ))}
      </div>

      <p className="mt-[30px] text-center text-[#4B4B4B] text-[14px] font-light font-Poppins leading-[130%] tracking-[0.38px]">
        The price includes VAT.
      </p>
    </div>
  );
};

const PriceCardItem = ({ text }: { text: string }) => {
  return (
    <div className="flex items-center gap-[10px] flex-nowrap">
      <span className="text-[#89865D]">•</span>
      <p className="text-black text-[18px] lg:text-[20px] font-light font-Poppins leading-[120%] tracking-[0.38px]">
        {text}
      </p>
      <span className="text-[#89865D]">•</span>
    </div>
  );
};

const AditionalCardItem = ({
  text,
  price,
}: {
  text: string;
  price: string;
}) => {
  return (
    <div
      className="flex w-full max-w-full flex-row items-start justify-between gap-[12px] 
      lg:items-center lg:justify-center lg:gap-[10px]"
    >
      <p
        className="min-w-0 flex-1 text-left text-[18px] lg:flex-none lg:text-center lg:text-[20px] 
        font-light font-Poppins leading-[120%] tracking-[0.38px] text-black"
      >
        {text}
      </p>
      <span className="hidden shrink-0 text-[#89865D] lg:block">•</span>
      <p
        className="shrink-0 text-right text-[18px] font-semibold lg:text-center lg:text-[20px] 
        font-Poppins leading-[120%] tracking-[0.38px] text-black"
      >
        {price}
      </p>
    </div>
  );
};

export type PricePlan = {
  title: string;
  price: string;
  includes: string[];
};

export type AdditionalPriceItem = {
  title: string;
  price: string;
};

export type PricesData = {
  additionalSectionTitle: string;
  plans: PricePlan[];
  additional: AdditionalPriceItem[];
};

//https://lazarevwedding.com/prices/k7m2v9q4 PLN

//https://lazarevwedding.com/prices/t3p8x6n1 EUR

export type PriceCurrency = "pln" | "eur";

export const pricesDataByCurrency: Record<PriceCurrency, PricesData> = {
  pln: {
    additionalSectionTitle: "Additional options",
    plans: [
      {
        title: "Moment Forever",
        price: "8500 PLN",
        includes: [
          "1 Videographer",
          "8 Hours Shooting",
          "1 Min Highlights",
          "5 Min Cinematic Film",
          "Full Speeches",
          "Drone",
        ],
      },
      {
        title: "A Story For Two",
        price: "10500 PLN",
        includes: [
          "1 Videographer",
          "10 Hours Shooting",
          "1–2 Min Highlights",
          "8 Min Cinematic Film",
          "Full Speeches",
          "Drone",
        ],
      },
      {
        title: "Movie About US",
        price: "13500 PLN",
        includes: [
          "2 Videographers",
          "12 Hours Shooting",
          "2 Min Highlights",
          "10–15 Min Cinematic Film",
          "Full Speeches",
          "Drone",
        ],
      },
    ] satisfies PricePlan[],
    additional: [
      {
        title: "Extra Shooting Hour",
        price: "800 PLN",
      },
      {
        title: "Fast Wedding Video Editing (within 1 month)",
        price: "1200 PLN",
      },
      {
        title: "Documentary Film",
        price: "2000 PLN",
      },
      {
        title: "SDE (Same Day Edit)",
        price: "1600 PLN",
      },
    ] satisfies AdditionalPriceItem[],
  },
  eur: {
    additionalSectionTitle: "Additional options",
    plans: [
      {
        title: "A Story For Two",
        price: "3000 EUR",
        includes: [
          "1 Videographer",
          "10 Hours Shooting",
          "1–2 Min Highlights",
          "8 Min Cinematic Film",
          "Full Speeches",
          "Drone",
        ],
      },
      {
        title: "Movie About US",
        price: "5000 EUR",
        includes: [
          "2 Videographers",
          "12 Hours Shooting",
          "2 Min Highlights",
          "10–15 Min Cinematic Film",
          "Full Speeches",
          "Drone",
        ],
      },
    ] satisfies PricePlan[],
    additional: [
      {
        title: "Extra Shooting Hour",
        price: "250 EUR",
      },
      {
        title: "Fast Wedding Video Editing (within 1 month)",
        price: "500 EUR",
      },
      {
        title: "Documentary Film",
        price: "500 EUR",
      },
      {
        title: "SDE (Same Day Edit)",
        price: "250 EUR",
      },
    ] satisfies AdditionalPriceItem[],
  },
};

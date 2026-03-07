declare module "indian-states-cities-list" {
  export const INDIAN_STATES_AND_UT_ARRAY: string[];

  export const STATE_WISE_CITIES: {
    [state: string]: string[];
  };

  const IndianStatesCities: {
    INDIAN_STATES_AND_UT_ARRAY: string[];
    STATE_WISE_CITIES: { [state: string]: string[] };
  };

  export default IndianStatesCities;
}
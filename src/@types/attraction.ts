export type Attraction = {
  id: number,
  image: string,
  description_short: string,
  description_long: string, 
  opening_time: string,
  closing_time: string,
  disable_access: string,
  weather_hazard: string,
  height_restriction: number,
  health_hazard: string,
  categories: Category[];
}

export type Category = {
id: number, 
name: string;
}
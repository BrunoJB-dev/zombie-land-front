export type Attraction = {
  id: number,
  name: string,
  image: string,
  description_short: string,
  description_long: string, 
  opening_time: string,
  closing_time: string,
  disable_access: string,
  weather_hazard: string,
  height_restriction: number,
  health_hazard: string,
  caroussel1: string,
  caroussel2: string,
  caroussel3: string,
  categories: Category[]
}

export type Category = {
id: number, 
name: string;
}
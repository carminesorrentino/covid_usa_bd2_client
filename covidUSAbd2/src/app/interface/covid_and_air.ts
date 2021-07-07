import { CityAndAir } from "./city_and_air";

export interface CovidAndAir{
    _id : string,
    date ?: Date,
    state ?: string,
    county ?: string,
    cases ?: number,
    deaths ?: number, 
    type ?: string,
    cities_air_quality ?: CityAndAir[]
}


import { CityAndAir } from "./city_and_air";

export interface Risposta{
    _id ?: string,
    date ?: string,
    county ?: string,
    state ?: string,
    cases ?: number,
    deaths ?: number,
    lockdown ?: string,
    cities_air_quality ?: CityAndAir[]
}
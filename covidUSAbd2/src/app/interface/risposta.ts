import { CityAndAir } from "./city_and_air";

export interface Risposta{
    _id ?: string,
    date ?: string,
    county ?: string,
    state ?: string,
    cases ?: number,
    deaths ?: number,
    lockdown ?: string,
    cities_air_quality ?: CityAndAir[],
    qf_categories ?: string[],
    qf_cases ?: string[],
    qf_deaths ?: string[],
    qf_air_quality ?: number[]
}
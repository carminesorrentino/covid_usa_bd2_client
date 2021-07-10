import { AirQuality } from "./airQuality";
import { Covid } from "./covid";
import { Lockdown } from "./lockdown";
import { SearchBy } from "./searchBy";

export interface Integration{
    covid: Covid,      
    airQuality : AirQuality;
    lockdown : Lockdown;
    criterioDiRicerca: SearchBy;
}
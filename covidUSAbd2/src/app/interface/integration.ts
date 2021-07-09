import { AirQuality } from "./airQuality";
import { Covid } from "./covid";
import { Lockdown } from "./lockdown";

export interface Integration{
    covid: Covid,      
    airQuality : AirQuality;
    lockdown : Lockdown
}
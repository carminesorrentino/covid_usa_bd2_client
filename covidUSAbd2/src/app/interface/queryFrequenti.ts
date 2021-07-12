import { Lockdown } from "./lockdown";

export interface QueryFrequenti {
    tipo_query : string,
    stato1 ?: string,
    stato2 ?: string,
    lockdown_stato1 ?: Lockdown[],
}
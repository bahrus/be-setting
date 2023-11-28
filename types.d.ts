import { ActionOnEventConfigs } from "trans-render/froop/types";
import {IBE} from 'be-enhanced/types';
import {ElTypes, SignalRefType} from 'be-linked/types';

export interface EndUserProps extends IBE{
    settingStatements: Array<SettingStatement>;
}

export interface AllProps extends EndUserProps{
    
}

export type SettingStatement = string;

export type AP = AllProps;

export type PAP = Partial<AP>;

export type ProPAP = Promise<PAP>;

export type POA = [PAP | undefined, ActionOnEventConfigs<PAP, Actions>];

export interface Actions{
    onCamelized(self: this): ProPAP;
    hydrate(self: this): ProPAP;
}

export interface SettingRule{
    remoteProp: string,
    remoteType: ElTypes,
    observeProp: string,
    observeType: ElTypes
}


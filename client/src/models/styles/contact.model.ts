import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

export interface IContact{
    name : string;
}

export interface IIconParam extends SvgIconProps{
    iconName? : string;
    mapName?: string;
}
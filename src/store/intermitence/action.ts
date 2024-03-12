import { COLLAPSE_DRAWER, EXPAND_DRAWER } from './action-types';
import { actionObject } from '../../utils';

export const expandDrawer = () => actionObject(EXPAND_DRAWER);
export const collapseDrawer = () => actionObject(COLLAPSE_DRAWER);

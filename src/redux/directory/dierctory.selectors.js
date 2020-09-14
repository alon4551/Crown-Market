import {createSelector} from 'reselect';

const selectDierctory =state=>state.directory;

export const selectSections=createSelector(
    [selectDierctory],
    (directory)=>directory.sections
)
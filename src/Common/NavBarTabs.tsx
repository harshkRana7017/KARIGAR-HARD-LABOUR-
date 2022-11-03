import React, { FC, memo } from 'react';

type  NavBarTabsProps = {
    children: React.ReactNode;
};

const  NavBarTabs: FC< NavBarTabsProps> = ({children}) => <>
    <div className='font-bold bg-blue-200 w-24 p-2 rounded-lg'>{children}</div>
</>;
export default memo( NavBarTabs);

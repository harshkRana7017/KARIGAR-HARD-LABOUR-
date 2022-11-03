import React, { FC, memo } from 'react';

type  NavBarTabsProps = {
    children: React.ReactNode;
};

const  NavBarTabs: FC< NavBarTabsProps> = ({children}) => <>
    <div className=' bg-cyan-700 w-24 p-2 rounded-lg '>{children}</div>
</>;
export default memo( NavBarTabs);

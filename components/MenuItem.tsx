import { HTMLAttributes } from "react";

type MenuItemAttributes = HTMLAttributes<HTMLDivElement>;

export const MenuItem = ({ children }: MenuItemAttributes) => {
	return <div className='px-3 py-1'>{children}</div>;
};

import { Flex, Title } from "@tremor/react";
import Link from "next/link";
import { ProfilePic } from "./ProfilePic";

type NavigationProps = {
	title: string;
};

const Navigation = ({ title }: NavigationProps) => {
	return (
		<nav className='px-12 py-2 h-16 fixed top-0 w-full flex justify-between'>
			<Flex justifyContent='between' alignItems='center' className='h-full'>
				<Link href='/'>
					<Title>{title}</Title>
				</Link>
			</Flex>
			<ProfilePic />
		</nav>
	);
};

export default Navigation;

"use client";

import { Menu } from "@headlessui/react";
import { Button, Card, Divider, Text } from "@tremor/react";
import Image from "next/image";
import { MenuItem } from "./MenuItem";

export const ProfilePic = () => (
	<Menu>
		{({ open }) => (
			<>
				<Menu.Button>
					<Image
						src='https://picsum.photos/seed/picsum/48/48'
						width={48}
						height={48}
						alt='Profile image'
						className='rounded-full p-[2px] border-[2px] border-white'
					/>
				</Menu.Button>
				{open && (
					<Card className='fixed top-11 right-20 z-10' onClick={() => {}}>
						<MenuItem>
							<Text>Hello</Text>
						</MenuItem>
						<Divider m />
						<MenuItem>
							<Button variant='light'>Log out</Button>
						</MenuItem>
					</Card>
				)}
			</>
		)}
	</Menu>
);

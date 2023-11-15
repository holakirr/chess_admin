"use client";

import {
	Badge,
	Button,
	Flex,
	Icon,
	MultiSelect,
	MultiSelectItem,
	Select,
	SelectItem,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeaderCell,
	TableRow,
	Title,
} from "@tremor/react";
import { useState } from "react";
import { AiFillDelete } from "react-icons/ai";

export type SubscriptionStatus = "payed" | "notPayed" | "closeToTheEnd";
export type Pupil = {
	name: string;
	restOfSubscription: number;
	subscription: number;
	lastLesson: string;
	homework: string;
	status: SubscriptionStatus;
};

export const pupils: Pupil[] = [
	{
		name: "Ваня Петров",
		restOfSubscription: 2,
		subscription: 8,
		lastLesson: "Обсуждение осуждения",
		homework: "Домашнее задание",
		status: "payed",
	},
	{
		name: "Кирилл Петров",
		restOfSubscription: 2,
		subscription: 8,
		lastLesson: "Обсуждение осуждения",
		homework: "Домашнее задание",
		status: "payed",
	},
	{
		name: "Алия Талиева",
		restOfSubscription: 2,
		subscription: 8,
		lastLesson: "Обсуждение осуждения",
		homework: "Домашнее задание",
		status: "payed",
	},
	{
		name: "Владимир Путин",
		restOfSubscription: 2,
		subscription: 8,
		lastLesson: "Обсуждение осуждения",
		homework: "Домашнее задание",
		status: "closeToTheEnd",
	},
	{
		name: "Алексей Навальный",
		restOfSubscription: 2,
		subscription: 8,
		lastLesson: "Обсуждение осуждения",
		homework: "Домашнее задание",
		status: "notPayed",
	},
];

export const InfoTable = () => {
	const [selectedStatus, setSelectedStatus] = useState("all");
	const [selectedNames, setSelectedNames] = useState<string[]>([]);

	const isPupilSelected = (pupil: Pupil) =>
		(pupil.status === selectedStatus || selectedStatus === "all") &&
		(selectedNames.includes(pupil.name) || selectedNames.length === 0);

	return (
		<>
			<div>
				<Flex className='mb-3' justifyContent='start' alignItems='center'>
					<Title>Ученики</Title>
				</Flex>
			</div>
			<Flex justifyContent='start' className='gap-6'>
				<MultiSelect
					className='max-w-full sm:max-w-xs'
					onValueChange={setSelectedNames}
					placeholder='Select Salespeople...'
				>
					{pupils.map(item => (
						<MultiSelectItem key={item.name} value={item.name}>
							{item.name}
						</MultiSelectItem>
					))}
				</MultiSelect>
				<Select className='max-w-full sm:max-w-xs' defaultValue='all' onValueChange={setSelectedStatus}>
					<SelectItem value='all'>Все статусы</SelectItem>
					<SelectItem value='payed'>Оплачено</SelectItem>
					<SelectItem value='closeToTheEnd'>Скоро закончится</SelectItem>
					<SelectItem value='notPayed'>Неоплачено</SelectItem>
				</Select>
			</Flex>
			<Table className='mt-6'>
				<TableHead>
					<TableRow>
						<TableHeaderCell>Имя</TableHeaderCell>
						<TableHeaderCell className='text-right'>Кол-во занятий</TableHeaderCell>
						<TableHeaderCell className='text-right'>Крайняя тема/Домашнее задание</TableHeaderCell>
						<TableHeaderCell className='text-right'>Статус</TableHeaderCell>
					</TableRow>
				</TableHead>

				<TableBody>
					{pupils
						.filter(pupil => isPupilSelected(pupil))
						.map(pupil => (
							<TableRow key={pupil.name}>
								<TableCell>{pupil.name}</TableCell>
								<TableCell className='text-right'>
									{pupil.restOfSubscription}/{pupil.subscription}
								</TableCell>
								<TableCell className='text-right'>
									{pupil.lastLesson} / {pupil.homework}
								</TableCell>
								<TableCell className='text-right'>
									<Badge color={pupil.status === "payed" ? "green" : "red"} size='xs'>
										{pupil.status}
									</Badge>
								</TableCell>
								<TableCell className='text-right'>
									<Button variant='secondary'>
										Удалить
										<Icon className='ml-2' icon={AiFillDelete} size='xs' aria-label='Delete' />
									</Button>
								</TableCell>
							</TableRow>
						))}
				</TableBody>
			</Table>
		</>
	);
};

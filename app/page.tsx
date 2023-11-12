"use client";

import { KpiCard } from "@src/components/Card";
import { ChartView } from "@src/components/Chart";
import { InfoTable } from "@src/components/InfoTable";
import { Card, Grid, Tab, TabGroup, TabList, TabPanel, TabPanels, Text, Title } from "@tremor/react";

export default function DashboardExample() {
	return (
		<main className='p-12'>
			<Title>Dashboard</Title>
			<Text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</Text>

			<TabGroup className='mt-6'>
				<TabList>
					<Tab>Overview</Tab>
					<Tab>Detail</Tab>
				</TabList>
				<TabPanels>
					<TabPanel>
						<Grid numItemsMd={2} numItemsLg={3} className='gap-6 mt-6'>
							<KpiCard />
							<Card>
								{/* Placeholder to set height */}
								<div className='h-28' />
							</Card>
							<Card>
								{/* Placeholder to set height */}
								<div className='h-28' />
							</Card>
						</Grid>
						<div className='mt-6'>
							<Card>
								<ChartView />
							</Card>
						</div>
					</TabPanel>
					<TabPanel>
						<div className='mt-6'>
							<Card>
								<InfoTable />
							</Card>
						</div>
					</TabPanel>
				</TabPanels>
			</TabGroup>
		</main>
	);
}

"use client";

import { KpiCard } from "@src/components/Card";
import { ChartView } from "@src/components/Chart";
import { InfoTable } from "@src/components/InfoTable";
import {
    Card,
    Flex,
    Tab,
    TabGroup,
    TabList,
    TabPanel,
    TabPanels,
    Text,
    Title,
} from "@tremor/react";

export default function Dashboard() {
    return (
        <main className="p-12">
            <Flex flexDirection="col" alignItems="start" className="mb-6">
                <Title>Дэшборд</Title>
                <Text>Дэшборд на главной странице</Text>
            </Flex>

            <TabGroup>
                <TabList className="mb-6">
                    <Tab>Overview</Tab>
                    <Tab>Detail</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                        <Flex justifyContent="between">
                            <KpiCard />
                            <KpiCard />
                            <KpiCard />
                        </Flex>
                        <div className="mt-6">
                            <Card>
                                <InfoTable />
                            </Card>
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <Card>
                            <ChartView />
                        </Card>
                    </TabPanel>
                </TabPanels>
            </TabGroup>
        </main>
    );
}

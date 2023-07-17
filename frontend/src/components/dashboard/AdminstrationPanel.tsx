import { Callout, Card, Grid, Metric, TabPanel, Text } from '@tremor/react';

export const AdminstrationPanel = () => {
    return (
        <TabPanel>
            <Grid numItems={3} className="gap-6 mt-6">
                <Card className="max-w-md">
                    <Text>Current wind speed: Turbine 1</Text>
                    <Metric>18.4knts</Metric>
                    <Callout
                        className="h-12 mt-4"
                        title="Critical speed limit reached"
                        color="rose"
                    >
                        Turbine reached critical speed. Immediately reduce turbine speed.
                    </Callout>
                </Card>

                <Card className="max-w-md">
                    <Text>Current wind speed: Turbine 1</Text>
                    <Metric>18.4knts</Metric>
                    <Callout
                        className="h-12 mt-4"
                        title="Critical speed limit reached"
                        color="rose"
                    >
                        Turbine reached critical speed. Immediately reduce turbine speed.
                    </Callout>
                </Card>

                <Card className="max-w-md">
                    <Text>Current wind speed: Turbine 1</Text>
                    <Metric>18.4knts</Metric>
                    <Callout
                        className="h-12 mt-4"
                        title="Critical speed limit reached"
                        color="rose"
                    >
                        Turbine reached critical speed. Immediately reduce turbine speed.
                    </Callout>
                </Card>

                <Card className="max-w-md">
                    <Text>Current wind speed: Turbine 1</Text>
                    <Metric>18.4knts</Metric>
                    <Callout
                        className="h-12 mt-4"
                        title="Critical speed limit reached"
                        color="rose"
                    >
                        Turbine reached critical speed. Immediately reduce turbine speed.
                    </Callout>
                </Card>
            </Grid>
        </TabPanel>
    );
};

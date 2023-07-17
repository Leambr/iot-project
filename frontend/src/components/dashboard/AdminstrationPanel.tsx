import {
    Callout,
    Card,
    Metric,
    TabPanel,
    Text,
    Grid,
    Flex,
    CategoryBar,
    MarkerBar,
    ProgressBar,
    Legend,
    BadgeDelta,
} from '@tremor/react';
import { InputCardRange } from './inputLuminosityRange/InputCardRange';

type Props = {
    room: string;
};

export const AdminstrationPanel = (props: Props) => {
    return (
        <TabPanel>
            <Grid numItems={3} className="gap-6 mt-6">
                <Card className="max-w-md">
                    <Text>Dernière dépense énergétique : {props.room} </Text>
                    <Metric className="text-black">18.4 KWh</Metric>
                    <Callout
                        className="h-24 mt-4"
                        title="La consommation éléctrique est bonne."
                        color="green"
                    >
                        Vous n'avez pas besoin de régulerer votre consommation
                    </Callout>
                </Card>

                <Card className="max-w-md">
                    <Text>Humidité actuelle : {props.room}</Text>
                    <Metric className="text-black">24%</Metric>
                    <Callout
                        className="h-24 mt-4"
                        title="Attention au taux important d'humiditié dans l'air."
                        color="orange"
                    >
                        Régulerez l'aération de la salle.
                    </Callout>
                </Card>

                <Card className="h-auto">
                    <Flex>
                        <Text>Concentration de CO2 en pourcentage</Text>
                        <Text></Text>
                        <Text className="font-semibold ">1200 (ppm)</Text>
                    </Flex>
                    <CategoryBar
                        values={[55, 12, 33]}
                        colors={['emerald', 'yellow', 'orange', 'rose']}
                        markerValue={(1200 / 1500) * 100}
                        className="mt-16"
                    />
                </Card>

                <Card className="h-auto ">
                    <InputCardRange
                        title="Luminosité"
                        room={props.room}
                        mesure="%"
                        stepRange={10}
                    />
                </Card>

                <Card className="h-auto">
                    <InputCardRange title="Ventilation" room={props.room} mesure="°C" />
                </Card>

                <Card className="max-w-md mx-auto">
                    <BadgeDelta deltaType="moderateIncrease" isIncreasePositive={true} size="xs">
                        +12.3%
                    </BadgeDelta>
                    <Text>Total des utilisateurs</Text>
                    <Metric>54</Metric>
                </Card>
            </Grid>
        </TabPanel>
    );
};

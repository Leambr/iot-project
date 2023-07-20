import { StatusOnlineIcon } from '@heroicons/react/outline';
import {
    Badge, Callout,
    Card, Grid, Metric,
    TabPanel,
    Text
} from '@tremor/react';
import { InputCardRange } from '../inputLuminosityRange/InputCardRange';

type Props = {
    room: string;
};

export const WomenChangingRoom = (props: Props) => {
    return (
        <TabPanel>
            <Grid numItems={3} className="gap-6 mt-16">
                <Card className="max-w mx-auto">
                    <Text>Dernière dépense énergétique : {props.room} </Text>
                    <Metric className="text-black">876.3 KWh</Metric>
                    <Callout
                        className="h-24 mt-4"
                        title="La consommation éléctrique est bonne."
                        color="green"
                    >
                        Vous n'avez pas besoin de régulerer votre consommation
                    </Callout>
                </Card>

                <Card className="max-w mx-auto">
                    <Text>Humidité actuelle : {props.room}</Text>
                    <Metric className="text-black">21.4%</Metric>
                    <Callout
                        className="h-24 mt-4"
                        title="Attention au taux important d'humiditié dans l'air."
                        color="orange"
                    >
                        Régulerez l'aération de la salle.
                    </Callout>
                </Card>

                <Card className="max-w mx-auto">
                    <InputCardRange title="Ventilation" value={20.44} room={props.room} mesure="°C" />
                </Card>

                <Card className="max-w mx-auto">
                    <Badge icon={StatusOnlineIcon} size="md">
                        Light Turn On
                    </Badge>
                    <Text>Total des utilisateurs </Text>
                    <Metric>6 </Metric>
                </Card>
            </Grid>
        </TabPanel>
    );
};

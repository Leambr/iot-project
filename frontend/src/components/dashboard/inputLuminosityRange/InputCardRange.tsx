import { useState } from 'react';
import s from './InputCardRange.module.css';

type Props = {
    title: string;
    room: string;
    stepRange?: number;
    mesure: string;
    value: number;
};

export const InputCardRange = (props: Props) => {
    const [inputRange, setInputRange] = useState(`${props.value}`);
    const handleInputRange = (event: React.ChangeEvent<HTMLInputElement>) => {
        // ajouter async post
        setInputRange(event.target.value);
    };
    return (
        <div className={s.inputCard}>
            <div className={s.headerCard}>
                <span>
                    {props.title} : {props.room}
                </span>
            </div>
            <div className={s.contentCard}>
                <div className="text-3xl font-semibold ">
                    {inputRange} {props.mesure}
                </div>

                <form action="" method="POST">
                    <input
                        type="range"
                        min="0"
                        max="100"
                        value={inputRange}
                        // step="10"
                        step={props.stepRange}
                        onChange={handleInputRange}
                    />
                </form>
            </div>
        </div>
    );
};

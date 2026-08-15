"use client"

import { FC } from "react";

import { NumberTicker } from "../ui/number-ticker";

const entries: {
    value?: number;
    prefix?: string;
    suffix: string;
    subtext: string;
}[] = [
    {
        value: 7,
        suffix: '+',
        subtext: 'years shipping software'
    },
    {
        value: 100,
        suffix: 'k+',
        subtext: 'users served daily'
    },
    {
        value: 20,
        suffix: 'm+',
        subtext: 'of rows handled daily'
    },
    {
        value: 80,
        prefix: '-',
        suffix: '%',
        subtext: 'deployment time'
    }
]

const StatsBanner: FC = () => (
    <section id='stats' className='bg-nord-5 p-16 w-full'>
        <div className='container mx-auto grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16'>
            {entries.map(e => (
                <div className="text-center text-nord-10">
                    <p className='text-4xl md:text-6xl mb-4 tracking-tight'>
                        <span>{e.prefix}</span>
                        {!!e.value && <NumberTicker value={e.value} className="text-nord-10!" />}
                        <span>{e.suffix}</span>
                    </p>
                    <p className="text-sm md:text-base">{e.subtext}</p>
                </div>
            ))}
        </div>
    </section>
)

export default StatsBanner;
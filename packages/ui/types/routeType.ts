import { React } from 'react';

export type NavRoute={
    element: React.FunctionComponent;
    path: string;
}

export type NavLink={
    label: string;
    path: string;
}
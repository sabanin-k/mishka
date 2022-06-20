import { Wrapper } from '@googlemaps/react-wrapper';
import { FC } from 'react';
import { Map } from './Map';

export const GMap: FC = () => {
    const API_KEY = process.env.REACT_APP_API_KEY
    return (
        <Wrapper apiKey={`${API_KEY}`}>
            <Map />
        </Wrapper>
    )
}

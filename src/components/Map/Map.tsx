import { FC, useEffect, useRef, useState } from 'react'
import styles from './Map.module.scss'

export const Map: FC = () => {
    const ref = useRef<HTMLDivElement>(null);
    const [map, setMap] = useState<google.maps.Map>();

    useEffect(() => {
        if (ref.current && !map) {
            setMap(new window.google.maps.Map(ref.current, {
                center: { lat: 59.93878635369167, lng: 30.323036638629556},
                zoom: 16
            }));
        }
    }, [ref, map]);

    return (
        <div ref={ref} className={styles.map} />
    )
}

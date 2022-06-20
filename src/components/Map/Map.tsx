import { FC, useEffect, useRef, useState } from 'react'

export const Map: FC = () => {
    const ref = useRef<HTMLDivElement>(null);
    const [map, setMap] = useState<google.maps.Map>();
    const style = { height: '457px', width: '525px'}

    useEffect(() => {
        if (ref.current && !map) {
            setMap(new window.google.maps.Map(ref.current, {
                center: { lat: 59.93878635369167, lng: 30.323036638629556},
                zoom: 16
            }));
        }
    }, [ref, map]);

    return (
        <div ref={ref} style={style} />
    )
}

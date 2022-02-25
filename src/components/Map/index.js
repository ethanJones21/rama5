import { isValidElement, cloneElement, Children, useRef, useState, useEffect } from 'react';

function Map({ zoom, center, children }) {
  const ref = useRef(null);
  const [map, setMap] = useState(null);

  useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, { zoom, center }));
    }
  }, [ref, map, zoom, center]);
  return (
    <>
      <div ref={ref} style={{ height: '400px' }} />
      {Children.map(children, (child) => {
        if (isValidElement(child)) {
          // set the map prop on the child component
          return cloneElement(child, { map });
        }
      })}
    </>
  );
}

export default Map;

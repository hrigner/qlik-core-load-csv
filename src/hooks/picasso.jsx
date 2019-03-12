import { useState, useEffect } from 'react';
import picassoQ from 'picasso-plugin-q';
import picasso from 'picasso.js';

picasso.use(picassoQ);

export default function usePicasso(element, settings, layout) {
  const [pic, setPicasso] = useState(null);

  useEffect(() => {
    if (!element.current || !settings || !layout) return;
    const data = [{
      type: 'q',
      key: 'qHyperCube',
      data: layout.qHyperCube,
    }];

    if (!pic) {
      setPicasso(picasso({ renderer: { prio: ['canvas'] } }).chart({
        element: element.current,
        data,
        settings,
      }));
    } else {
      pic.update({ settings, data });
    }
  });

  return pic;
}

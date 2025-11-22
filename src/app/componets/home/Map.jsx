import React from 'react';

export default function Map() {
  return (
    <div className="w-full h-96 md:h-[500px]">
      <iframe
        src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=perfect global consultacy FIRST FLOOR, PREHLAD MARKET, B-4, Block 52, Karol Bagh, New Delhi, Delhi, 110005, India&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        width="100%"
        height="100%"
        frameBorder="0"         // ✅ Correct camelCase
        allowFullScreen         // ✅ Correct
        style={{ border: 0 }}   // optional, ensures no border
        loading="lazy"          // optional, improves performance
      ></iframe>
    </div>
  );
}

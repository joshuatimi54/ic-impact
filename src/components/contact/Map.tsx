import React from 'react';

const Map: React.FC = () => {
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.5699797324605!2d5.155578407098203!3d7.2896673719621665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10478ec543883bdf%3A0x3294ddea9af5e616!2sFuta%20South%20Gate%2C%20Akure%20340110%2C%20Ondo!5e0!3m2!1sen!2sng!4v1734728628738!5m2!1sen!2sng"
        width="100%"
        height="450"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;

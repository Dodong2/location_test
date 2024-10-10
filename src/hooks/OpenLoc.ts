export const handleOpenMap1 = () => {
    const location = 'Dimla Compound, 12419 J. Aquino St, Los Baños, Laguna';
    const url = `https://www.google.com/maps?q=${encodeURIComponent(location)}`;
    window.open(url, '_blank');
  };

  //get user location
  const destination1 = 'Manila S Rd, corner Jamboree Rd, Los Baños, Laguna';

  export const handleOpenMap2 = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        const origin = `${latitude},${longitude}`;
        const destinationEncoded = encodeURIComponent(destination1);
        const url = `https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${destinationEncoded}`;
        window.open(url, '_blank');
      }, (error) => {
        console.error("Error getting location:", error);
        alert("Unable to retrieve your location.");
      });
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  };

  //origin location to destination

  const origin = 'Dimla Compound, 12419 J. Aquino St, Los Baños, Laguna'; // Your fixed origin
  const destination2 = '56VM+JW7, Los Baños, Laguna'; // Your destination

  export const handleOpenMap3 = () => {
    const originEncoded = encodeURIComponent(origin);
    const destinationEncoded = encodeURIComponent(destination2);
    const url = `https://www.google.com/maps/dir/?api=1&origin=${originEncoded}&destination=${destinationEncoded}`;
    window.open(url, '_blank');
  };
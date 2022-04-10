import { useState } from "react"

const useTrackLocation = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [latLong, setlatLong] = useState('');
  const [isFindingLocation, setIsFindingLocation] = useState(false);

  const success = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    setlatLong(`${latitude},${longitude}`)
    setIsFindingLocation(false);
  }

  const error = () => {
    setIsFindingLocation(false);
    setErrorMessage('Unable to retrieve your location')
  }

  const handleTrackLocation = () => {
    setIsFindingLocation(true);
    if (!navigator.geolocation) {
      setErrorMessage('Geolocation is not supported by your browser');
      setIsFindingLocation(false);
    } else {
      navigator.geolocation.getCurrentPosition(success, error);
    }
  }

  return {
    latLong,
    handleTrackLocation,
    errorMessage,
    isFindingLocation
  }

}

export default useTrackLocation;

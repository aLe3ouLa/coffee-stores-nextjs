import { useState } from "react"

const useTrackLocation = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [latLong, setlatLong] = useState('');

  const success = () => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    setlatLong(`${latitude},${longitude}`)
  }

  const error = () => {
    setErrorMessage('Unable to retrieve your location')
  }

  const handleTrackLocation = () => {
    if (!navigator.geolocation) {
      setErrorMessage('Geolocation is not supported by your browser');
    } else {
      navigator.geolocation.getCurrentPosition(success, error);
    }
  }

  return {
    latLong,
    handleTrackLocation,
    errorMessage
  }

}

export default useTrackLocation;

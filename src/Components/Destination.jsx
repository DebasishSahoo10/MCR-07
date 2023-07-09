import { useContext } from "react";
import { DataContext } from "../Context/DataContext";
import { useParams } from "react-router";

export const Destination = () => {
  const { state } = useContext(DataContext);
  const { city } = useParams();
  const selectedContinent = state.allData.filter(
    (conti) => conti.name === state.currentContinent
  );
  const selectedCountry = selectedContinent[0].countries.filter(
    (count) => count.name === state.currentCountry
  );
  const selectedCity = selectedCountry[0].destinations.filter(
    (desti) => desti.name === city.split("%20").join("")
  );
  return (
    <>
      <h3>Your Selected City : </h3>
      <>
        <img src={selectedCity[0].image} alt="" width={400} />
        <h2>{selectedCity[0].name}</h2>
        <p>{selectedCity[0].description}</p>
        <p>Opening Hour : {selectedCity[0].openingHours}</p>
        <p>Rating : {selectedCity[0].ratings}</p>
        <p>Reviews : {selectedCity[0].reviews}</p>
        <p>Ticket Price : {selectedCity[0].ticketPrice}</p>
        <a href={selectedCity[0].website}>Visit the website here</a>
      </>
    </>
  );
};

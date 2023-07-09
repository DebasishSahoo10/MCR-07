import { useContext } from "react";
import { DataContext } from "../Context/DataContext";
import { NavLink, useParams } from "react-router-dom";

export const City = () => {
  const { state } = useContext(DataContext);
  const {country} = useParams()
  const selectedContinent  = state.allData.filter(conti => conti.name===state.currentContinent)
  const selectedCountry = selectedContinent[0].countries.filter(count => count.name===country)
  return (
    <>
      <h3>Top {country}an Cities for your next holiday</h3>
      <ul
        style={{
          paddingInlineStart: "0",
          listStyle: "none",
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        {selectedCountry[0].countries.map((city) => {
          return (
            <li key={city.id}>
              <NavLink to={`/cities/${country.name}`} >
                <img src={country.image} alt="" width={280} />
                <h4>{country.name}</h4>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </>
  );
};

import { useContext, useEffect } from "react";
import { DataContext } from "../Context/DataContext";
import { NavLink, useParams } from "react-router-dom";

export const City = () => {
  const { state, dispatch } = useContext(DataContext);
  const {country} = useParams()
  const selectedContinent  = state.allData.filter(conti => conti.name===state.currentContinent)
  const selectedCountry = selectedContinent[0].countries.filter(count => count.name===country)
  useEffect(()=>{
    dispatch({type : "SET_COUNTRY", payload : selectedCountry[0].name})
  },[])
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
        {selectedCountry[0].destinations.map((city) => {
          return (
            <li key={city.id}>
              <NavLink to={`/destination/${city.name}`} >
                <img src={city.image} alt="" width={280} />
                <h4>{city.name}</h4>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </>
  );
};

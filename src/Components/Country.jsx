import { useContext, useEffect } from "react";
import { DataContext } from "../Context/DataContext";
import { NavLink, useParams } from "react-router-dom";

export const Country = () => {
  const { state, dispatch } = useContext(DataContext);
  const {continent} = useParams()
  const selectedContinent  = state.allData.filter(conti => conti.name===continent)
  useEffect(()=>{
    dispatch({type : "SET_CONTINENT", payload  : continent})
  },[continent])
  return (
    <>
      <h3>Top {continent}an Countries for your next holiday</h3>
      <ul
        style={{
          paddingInlineStart: "0",
          listStyle: "none",
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        {selectedContinent[0].countries.map((country) => {
          return (
            <li key={country.id}>
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

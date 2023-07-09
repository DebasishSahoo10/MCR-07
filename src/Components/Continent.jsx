import { useContext } from "react";
import { DataContext } from "../Context/DataContext";
import { NavLink } from "react-router-dom";

export const Continent = () => {
  const { state } = useContext(DataContext);
  return (
    <>
      <h3>Top Continents for your next holiday</h3>
      <ul
        style={{
          paddingInlineStart: "0",
          listStyle: "none",
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        {state.allData.map((continent) => {
          return (
            <li key={continent.id}>
              <NavLink to={`/countries/${continent.name}`} >
                <img src={continent.image} alt="" width={280} />
                <h4>{continent.name}</h4>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </>
  );
};

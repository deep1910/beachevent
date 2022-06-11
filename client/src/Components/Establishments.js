import React from "react";
import styled from "styled-components";

import beachstory from ".../assets/beachstory.jpg";
import { useQuery } from "@apollo/react-hooks";
import { QUERY_ESTABLISHMENTS } from "../utils/queries";

const Section = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-color: lightblue; */
  background-image: url(./backestablish.jpg);
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const locationContainer = styled.div`
    height: min-content;
    width: 20vw;
    text-align: center;
    border: 3px solid black;
    padding: 1vw;
    margin: 1vw;
    color: #0ffff0;
}
`;

const EstablishContainer = styled.div`
    border: 3px solid black;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 4vw;
    padding: 3vw;
}
`;

const Establishments = () => {
  const { loading, data: establishData } = useQuery(QUERY_ESTABLISHMENTS);
  console.log(establishData);
  return (
    <Section>
      <header>
        <h1>Locations</h1>
        <h2>A place is only as good as people in it..</h2>
      </header>
      <EstablishContainer>
        <locationContainer>
          <h2>Beach Story</h2>
          <img src={beachstory.jpg} alt="beachstory" />
          <p>
            Whimsical beach-themed restaurant with a trendy ambiance serving
            snacks & classic cuisine. Service options: Dine-in · Takeaway ·
            Hours: Closed ⋅ Opens 4PM Order: swiggy.com
          </p>
          <h3>
            Address: 19, Koradi Rd, Om Nagar, Shambhu Nagar, Nagpur, Maharashtra
            440026
          </h3>
          <h3>Phone no --23462934987</h3>
        </locationContainer>
        <locationContainer>
          <h2>Beach Story</h2>
          <img src={beachstory.jpg} alt="beachstory" />
          <p>
            Whimsical beach-themed restaurant with a trendy ambiance serving
            snacks & classic cuisine. Service options: Dine-in · Takeaway ·
            Hours: Closed ⋅ Opens 4PM Order: swiggy.com
          </p>
          <h3>
            Address: 19, Koradi Rd, Om Nagar, Shambhu Nagar, Nagpur, Maharashtra
            440026
          </h3>
          <h3>Phone no --23462934987</h3>
        </locationContainer>
        <locationContainer>
          <h2>Beach Story</h2>
          <img src={beachstory.jpg} alt="beachstory" />
          <p>
            Whimsical beach-themed restaurant with a trendy ambiance serving
            snacks & classic cuisine. Service options: Dine-in · Takeaway ·
            Hours: Closed ⋅ Opens 4PM Order: swiggy.com
          </p>
          <h3>
            Address: 19, Koradi Rd, Om Nagar, Shambhu Nagar, Nagpur, Maharashtra
            440026
          </h3>
          <h3>Phone no --23462934987</h3>
        </locationContainer>
        <locationContainer>
          <h2>Beach Story</h2>
          <img src={beachstory.jpg} alt="beachstory" />
          <p>
            Whimsical beach-themed restaurant with a trendy ambiance serving
            snacks & classic cuisine. Service options: Dine-in · Takeaway ·
            Hours: Closed ⋅ Opens 4PM Order: swiggy.com
          </p>
          <h3>
            Address: 19, Koradi Rd, Om Nagar, Shambhu Nagar, Nagpur, Maharashtra
            440026
          </h3>
          <h3>Phone no --23462934987</h3>
        </locationContainer>
        <locationContainer>
          <h2>Beach Story</h2>
          <img src={beachstory.jpg} alt="beachstory" />
          <p>
            Whimsical beach-themed restaurant with a trendy ambiance serving
            snacks & classic cuisine. Service options: Dine-in · Takeaway ·
            Hours: Closed ⋅ Opens 4PM Order: swiggy.com
          </p>
          <h3>
            Address: 19, Koradi Rd, Om Nagar, Shambhu Nagar, Nagpur, Maharashtra
            440026
          </h3>
          <h3>Phone no --23462934987</h3>
        </locationContainer>
        <locationContainer>
          <h2>Beach Story</h2>
          <img src={beachstory.jpg} alt="beachstory" />
          <p>
            Whimsical beach-themed restaurant with a trendy ambiance serving
            snacks & classic cuisine. Service options: Dine-in · Takeaway ·
            Hours: Closed ⋅ Opens 4PM Order: swiggy.com
          </p>
          <h3>
            Address: 19, Koradi Rd, Om Nagar, Shambhu Nagar, Nagpur, Maharashtra
            440026
          </h3>
          <h3>Phone no --23462934987</h3>
        </locationContainer>
      </EstablishContainer>
    </Section>
  );
};

export default Establishments;

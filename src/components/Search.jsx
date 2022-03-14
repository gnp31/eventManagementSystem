import { useEffect, useState } from "react";
import SearchIcon from "../assets/search.svg";
import EventCard from "./EventCard";
import "../styles/Search.css";

const API_URL = "https://my-json-server.typicode.com/ShrikaraVarna/demodata/db";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [events, setEvents] = useState([]);

  useEffect(() => {
    searchEvents("");
  }, []);

  const searchEvents = async (title) => {
    const response = await fetch(`${API_URL}`);
    const data = await response.json();

    setEvents(data.Search);
    console.log(data.Search);
  };
  return (
    <>
      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for events"
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchEvents(searchTerm)}
        />
      </div>
      {events?.length > 0 ? (
        <div className="container">
          {events.map((event) => (
            <EventCard event={event} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No event found</h2>
        </div>
      )}
    </>
  );
};

export default Search;

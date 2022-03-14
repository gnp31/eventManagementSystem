import React, { useState } from "react";
import Popup from "./Popup";

const EventCard = ({
  event: {
    eventID,
    Year,
    Poster,
    BreifDescription,
    DetailedDescription,
    Timings,
    Venue,
    Date,
    Title,
    Type,
    Price,
  },
}) => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <div className="event" key={eventID}>
        <div>
          <p>{Year}</p>
          <p>
            <br />
            {BreifDescription}
          </p>
        </div>

        <div>
          <img
            src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"}
            alt={Title}
            onClick={() => setShowPopup(true)}
          />
        </div>

        <div>
          <span>{Type}</span>
          <h3>{Title}</h3>
          <h3>Rs {Price}/-</h3>
        </div>
      </div>
      <Popup trigger={showPopup} setTrigger={setShowPopup}>
        <h3>{Title}</h3>
        <h5>{Type}</h5>
        <p>
          <br />
          {DetailedDescription}
          <br />
        </p>
        <h4>Venue is {Venue}</h4>
        <h4>The event is going to be held on {Date}</h4>
        <h4>
          The event timings are as follows <br /> {Timings}
        </h4>
      </Popup>
    </>
  );
};

export default EventCard;

import React from "react";
import EventCard from "./EventCard";
import "../styles/styles.css";

const events = [
  { 
    id: 1, title: "Ben’s Chili Bowl Halal", date: "Open Late", 
    location: "1213 U St NW, Washington, DC 20009", 
    mapsLink: "https://www.google.com/maps/search/Ben's+Chili+Bowl+Halal+1213+U+St+NW+Washington+DC+20009", 
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/5b/2d/2b/bens-chili-bowl.jpg" 
  },
  { 
    id: 2, title: "Shawarma & Co.", date: "Open Late", 
    location: "4915 Elm St, Bethesda, MD 20814", 
    mapsLink: "https://www.google.com/maps/search/Shawarma+&+Co.+4915+Elm+St+Bethesda+MD+20814", 
    image: "https://media-cdn.tripadvisor.com/media/photo-o/17/5f/5e/9c/shawarma-co.jpg" 
  },
  { 
    id: 3, title: "Halal Guys", date: "Open Late", 
    location: "1331 Connecticut Ave NW, Washington, DC 20036", 
    mapsLink: "https://www.google.com/maps/search/Halal+Guys+1331+Connecticut+Ave+NW+Washington+DC+20036", 
    image: "https://upload.wikimedia.org/wikipedia/commons/3/38/The_Halal_Guys_Food_Truck.JPG" 
  },
  { 
    id: 4, title: "Moby Dick House of Kabob", date: "Open Late", 
    location: "1070 31st St NW, Washington, DC 20007", 
    mapsLink: "https://www.google.com/maps/search/Moby+Dick+House+of+Kabob+1070+31st+St+NW+Washington+DC+20007", 
    image: "https://s3-media0.fl.yelpcdn.com/bphoto/ZG6E92mf02DwZT0Oa40wxQ/l.jpg" 
  },
  { 
    id: 5, title: "Food Corner Kabob House", date: "Open Late", 
    location: "7031 Little River Turnpike, Annandale, VA 22003", 
    mapsLink: "https://www.google.com/maps/search/Food+Corner+Kabob+House+7031+Little+River+Turnpike+Annandale+VA+22003", 
    image: "https://s3-media0.fl.yelpcdn.com/bphoto/OnB2J8_xz5HhLsdZ4zLOKw/l.jpg" 
  },
  { 
    id: 6, title: "Ravi Kabob", date: "Open Late", 
    location: "305 N Glebe Rd, Arlington, VA 22203", 
    mapsLink: "https://www.google.com/maps/search/Ravi+Kabob+305+N+Glebe+Rd+Arlington+VA+22203", 
    image: "https://s3-media0.fl.yelpcdn.com/bphoto/FVfF_o7YZcBptBXPPZ2ElA/l.jpg" 
  },
  { 
    id: 7, title: "Zaytinya", date: "Open Late", 
    location: "701 9th St NW, Washington, DC 20001", 
    mapsLink: "https://www.google.com/maps/search/Zaytinya+701+9th+St+NW+Washington+DC+20001", 
    image: "https://media.cntraveler.com/photos/5b69f2c44c34af1008437ed6/master/pass/Zaytinya__2018_CR_CarlyDiaz-2.jpg" 
  },
  { 
    id: 8, title: "City Kabob & Curry House", date: "Open Late", 
    location: "204 Michigan Ave NE, Washington, DC 20017", 
    mapsLink: "https://www.google.com/maps/search/City+Kabob+&+Curry+House+204+Michigan+Ave+NE+Washington+DC+20017", 
    image: "https://s3-media0.fl.yelpcdn.com/bphoto/Bz5TYJdx6zjDoKMAYoL1QA/l.jpg" 
  },
  { 
    id: 9, title: "Falafel Inc.", date: "Open Late", 
    location: "1210 Potomac St NW, Washington, DC 20007", 
    mapsLink: "https://www.google.com/maps/search/Falafel+Inc.+1210+Potomac+St+NW+Washington+DC+20007", 
    image: "https://media-cdn.tripadvisor.com/media/photo-o/10/9e/66/0a/the-walls-tell-the-story.jpg" 
  },
  { 
    id: 10, title: "Tarbouch Mediterranean Grill", date: "Open Late", 
    location: "7203 Little River Turnpike, Annandale, VA 22003", 
    mapsLink: "https://www.google.com/maps/search/Tarbouch+Mediterranean+Grill+7203+Little+River+Turnpike+Annandale+VA+22003", 
    image: "https://s3-media0.fl.yelpcdn.com/bphoto/n-T45_bP2We2Zm14TzZeqQ/l.jpg" 
  }
];

export default function CommunityBoard() {
  return (
    <div className="container">
      <h1 className="title">Halal DMV Late Night Bitez</h1>
      <div className="grid">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}

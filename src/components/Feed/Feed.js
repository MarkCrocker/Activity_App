import Activity from "./Activity";
import ScrollMenu from "./ScrollMenu";
import SearchBar from "./SearchBar";

import { FontAwesomeIcon as FAIcon} from '@fortawesome/react-fontawesome';
import { faVideo, faStickyNote } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

function Feed({match}) {
  const feedArray = [
    {
      id: 0,
      title: "Looking for biking friends for a trip this weekend",
      img_desc: "biking",
      category: "outdoor"
    },
    {
      id: 1,
      title: "Weekly Fortnite Party",
      img_desc: "fortnite",
      category: "games"
    },
    {
      id: 2,
      title: "First time rock climbing group going this weekend, available to all.",
      img_desc: "rock,climbing",
      category: "outdoor"
    },
    {
      id: 3,
      title: "Yoga class - 3 times a week",
      img_desc: "yoga",
      category: "gym"
    },
    {
      id: 4,
      title: "Anyone want a fishing buddy?",
      img_desc: "fishing",
      category: "outdoor"
    },
    {
      id: 5,
      title: "Poetry Open Night",
      img_desc: "poetry",
      category: "cafe"
    },
    {
      id: 6,
      title: "Swim group, we meet every 2nd Thursday.",
      img_desc: "swimming",
      category: "sports"
    }
  ];

  let search;
  if (match.params.cat === undefined) {
    search = "all";
  } else {
    search = match.params.cat.toLowerCase();  
  }

  return (
    <>
      <div className="search">
        <ScrollMenu />
        <SearchBar />
      </div>
      <div className="act-feed">
      <Link style={{textDecoration: 'none', color: 'inherit'}} to="/singlepost">
        {search === "all" ?
        feedArray.map((e)=>{
          return (
            <Activity
              id={e.id} 
              img_desc={e.img_desc}
              title={e.title}
            />
            );
          }) :
        feedArray.filter(it => it.category === search).map((e)=>{
          return (
            <Activity 
              id={e.id} 
              img_desc={e.img_desc}
              title={e.title}
            />
            );
          })  
        }
        </Link>
      </div>
      <div className="post-buttons">
        <Link to="/post">
          <button className="btn blue-btn large"><FAIcon icon={faStickyNote} color="red" /> New Post</button>
        </Link>
        <Link to="/post">
          <button className="btn blue-btn large"><FAIcon icon={faVideo} color="red" /> New Video</button>
        </Link>          
      </div>
    </>
  )
  }

export default Feed

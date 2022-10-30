import photo from "../images/Capture.PNG";
import classes from "./SmallNews.module.css";
import { Link } from "react-router-dom";

const SmallNews = (props) => {
  console.log(props.info.id);

  return (
    <div className={classes["news-container"]}>
      <div className={classes.news}>
        <img src={props.photo} alt="news" className={classes.doggo} />
        <div className={classes.textbox}>
          <p className={classes["news-name"]}>
            {" "}
            {props.info.name}'s proposal for {props.info.city}{" "}
          </p>
          <p className={classes["date-place"]}>
            From {props.info.cidate} to {props.info.codate}{" "}
          </p>
        </div>
        <Link to={`/list/${props.info.id}`} className={classes["btn--news"]}>
          <span>Read more</span>
        </Link>
      </div>
    </div>
  );
};

export default SmallNews;

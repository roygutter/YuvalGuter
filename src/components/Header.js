import classes from "./Header.module.css";
import logoYuvalGuter from "../images/logoYuvalGuter.png";

function Header() {
  return (
    <div className={classes.topPart}>
      <img src={logoYuvalGuter} />
<p>עורך דין יובל גוטר</p>    </div>
  );
}

export default Header;

import jss from "jss";
import preset from "jss-preset-default";
import MenuButton from "./MenuButton";

jss.setup(preset());

const style = {
  nav: {
    border: "red 2px solid",
    "& ul": {
      display: "flex",
      "justify-content": "space-evenly",
      "list-style": "none",
      margin: 0,
    },
  },
};

const { classes } = jss.createStyleSheet(style).attach();

const Navbar = () => {
  const ManufacturingYears = [1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005];
  const listYears = ManufacturingYears.map((year) => (
    <MenuButton year={year} key={year}></MenuButton>
  ));
  return (
    <nav className={classes.nav}>
      <ul className={classes.ul}>{listYears}</ul>
    </nav>
  );
};

export default Navbar;

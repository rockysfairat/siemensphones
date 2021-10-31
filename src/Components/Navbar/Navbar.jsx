import jss from "jss";
import preset from "jss-preset-default";
import MenuButton from "./MenuButton";

jss.setup(preset());

const style = {
  nav: {
    border: "wheat 2px solid",
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
  const numbers = [1, 2, 3, 4, 5];
  const listItems = numbers.map((number) => (
    <MenuButton key={number}>{number}</MenuButton>
  ));
  return (
    <nav className={classes.nav}>
      <ul className={classes.ul}>{listItems}</ul>
    </nav>
  );
};

export default Navbar;

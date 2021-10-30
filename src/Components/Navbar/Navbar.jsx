import jss from "jss";
import preset from "jss-preset-default";

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
  return (
    <nav className={classes.nav}>
      <ul className={classes.ul}>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </nav>
  );
};

export default Navbar;

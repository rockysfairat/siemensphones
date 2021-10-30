import jss from "jss";
import jssPresetDefault from "jss-preset-default";

jss.setup(jssPresetDefault());

const style = {
  header: {
    border: "white 1px solid",
    display: "flex",
    justifyContent: "center",
  },

  h1: {
    margin: 0,
  },
};

const { classes } = jss.createStyleSheet(style).attach();

const Header = () => {
  return (
    <header className={classes.header}>
      <h1 className={classes.h1}>Siemens Phones</h1>
    </header>
  );
};

export default Header;

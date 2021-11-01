import jss from "jss";
import jssPresetDefault from "jss-preset-default";

jss.setup(jssPresetDefault());

const style = {
  menuButton: {
    width: 150,
    height: 50,
    margin: 10,
    "background-color": "white",
    color: "red",
    border: 0,
    "& span": {
      "background-color": "red",
    },
  },
};

const { classes } = jss.createStyleSheet(style).attach();

const MenuButton = ({ innerText }) => {
  return <button className={classes.menuButton}>{innerText}</button>;
};

export default MenuButton;

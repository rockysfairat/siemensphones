import jss from "jss";
import jssPresetDefault from "jss-preset-default";

jss.setup(jssPresetDefault());

const style = {
  footer: {
    border: "white 1px solid",
    bottom: 1,
    "box-sizing": "border-box",
    display: "flex",
    "justify-content": "center",
    position: "absolute",
    width: "100%",
  },
};

const { classes } = jss.createStyleSheet(style).attach();

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <p>Ålexander Yurchenko 2021</p>
    </footer>
  );
};

export default Footer;

import jss from "jss";
import jssPresetDefault from "jss-preset-default";

jss.setup(jssPresetDefault());

const style = {
  cardPreview: {
    width: "400px",
    "background-color": "lightblue",
    border: "green 2px dotted",
    margin: "5px",
  },
};

const { classes } = jss.createStyleSheet(style).attach();

const Thumbnail = () => {
  return (
    <div className={classes.cardPreview}>
      <p>Test test test</p>
      <p>Test test test</p>
      <p>Test test test</p>
      <p>Test test test</p>
    </div>
  );
};

export default Thumbnail;

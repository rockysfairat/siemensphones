import jss from "jss";
import jssPresetDefault from "jss-preset-default";

// components:
import Thumbnail from "./Thumbnail";

jss.setup(jssPresetDefault());

const style = {
  main: {
    width: "96vw",
  },
};

const { classes } = jss.createStyleSheet(style).attach();

const Main = () => {
  return (
    <main className={classes.main}>
      <Thumbnail />
    </main>
  );
};

export default Main;

import jss from "jss";
import jssPresetDefault from "jss-preset-default";
import global from "jss-plugin-global";

/* Components: */
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import MenuButton from "./Components/Navbar/MenuButton";

/* Global styles: */
jss.setup(jssPresetDefault());
jss.use(global());

const style = {
  "@global": {
    "#root": {
      width: "100%",
      height: "100vh",
      margin: 0,
      "box-sizing": "border-box",
    },
    body: {
      "box-sizing": "border-box",
      "background-color": "#1e96fc;",
    },
    container: {
      "background-color": "rgb(92, 53, 200)",
    },
  },
};

const { classes } = jss.createStyleSheet(style).attach();

function App() {
  return (
    <div className={classes.container}>
      <Header />
      <Navbar />
      <MenuButton />
      <h1>Test</h1>
      <Footer />
    </div>
  );
}

export default App;

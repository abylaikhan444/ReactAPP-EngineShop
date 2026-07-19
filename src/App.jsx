import Header from "./components/Header";
import Footer from "./components/Footer";
import { Items } from "./components/Items";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 1,
          title: "K20A",
          img: "K20A.jpg",
          text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
          category: "engine",
          price: "700.000",
        },
        {
          id: 2,
          title: "K24A3",
          img: "K24A3.jpg",
          text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
          category: "engine",
          price: "700.000",
        },
        {
          id: 3,
          title: "3S-GTE",
          img: "3S-GTE.jpg",
          text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
          category: "engine",
          price: "700.000",
        },
        {
          id: 4,
          title: "1JZ-GTE",
          img: "1JZ-GTE.jpg",
          text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
          category: "engine",
          price: "700.000",
        },
        {
          id: 5,
          title: "2JZ-GTE",
          img: "2JZ-GTE.jpg",
          text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
          category: "engine",
          price: "700.000",
        },
      ],
    };
  }

  render() {
    return (
      <div className="wrapper">
        <Header />
        <Items items={this.state.items} />
        <Footer />
      </div>
    );
  }
}

export default App;

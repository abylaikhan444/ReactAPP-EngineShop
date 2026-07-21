import Header from "./components/Header";
import Footer from "./components/Footer";
import ShowFullItem from "./components/ShowFullItem";
import Categories from "./components/Categories";
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
          category: "honda",
          price: "700000",
        },
        {
          id: 2,
          title: "K24A3",
          img: "K24A3.jpg",
          text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
          category: "honda",
          price: "500000",
        },
        {
          id: 3,
          title: "3S-GTE",
          img: "3S-GTE.jpg",
          text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
          category: "toyota",
          price: "1200000",
        },
        {
          id: 4,
          title: "1JZ-GTE",
          img: "1JZ-GTE.jpg",
          text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
          category: "toyota",
          price: "1000000",
        },
        {
          id: 5,
          title: "2JZ-GTE",
          img: "2JZ-GTE.jpg",
          text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
          category: "toyota",
          price: "1500000",
        },
        {
          id: 6,
          title: "VR38DETT",
          img: "VR38DETT.jpg",
          text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
          category: "nissan",
          price: "2500000",
        },
        {
          id: 7,
          title: "EJ20",
          img: "EJ20.jpg",
          text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
          category: "subaru",
          price: "600000",
        },
      ],
      orders: [],
      currentItems: [],
      showFullItem: false,
      fullItem: {},
    };
    this.state.currentItems = this.state.items;
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
    this.onShowItem = this.onShowItem.bind(this);
  }

  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Categories chooseCategory={this.chooseCategory} />
        <Items
          onShowItem={this.onShowItem}
          items={this.state.currentItems}
          onAdd={this.addToOrder}
        />
        {this.state.showFullItem && (
          <ShowFullItem
            item={this.state.fullItem}
            onAdd={this.addToOrder}
            onShowItem={this.onShowItem}
          />
        )}
        <Footer />
      </div>
    );
  }

  onShowItem(item) {
    this.setState({ fullItem: item });
    this.setState({ showFullItem: !this.state.showFullItem });
  }

  chooseCategory(category) {
    if (category === "all") {
      this.setState({ currentItems: this.state.items });
      return;
    }
    this.setState({
      currentItems: this.state.items.filter((el) => el.category === category),
    });
  }

  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter((el) => el.id !== id) });
  }

  addToOrder(item) {
    let isInArr = false;
    this.state.orders.forEach((el) => {
      if (el.id === item.id) isInArr = true;
    });
    if (!isInArr) {
      this.setState({ orders: [...this.state.orders, item] });
    }
  }
}

export default App;

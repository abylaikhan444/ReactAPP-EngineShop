import { Component } from "react";

export class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        {
          key: "all",
          name: "Всё",
        },
        {
          key: "honda",
          name: "Honda",
        },
        {
          key: "toyota",
          name: "Toyota",
        },
        {
          key: "subaru",
          name: "Subaru",
        },
        {
          key: "nissan",
          name: "Nissan",
        },
      ],
    };
  }
  render() {
    return (
      <div className="categories">
        {this.state.categories.map((el) => (
          <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>
            {el.name}
          </div>
        ))}
      </div>
    );
  }
}

export default Categories;

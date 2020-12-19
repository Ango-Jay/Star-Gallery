import React, { Component } from "react";
import ImageCard from "./imagecard";
import ImageSearch from "./imagesearch";

class Gallery extends Component {
  state = {
    images: [],
    isLoading: true,
    term: "",
  };

  componentDidMount(prevState) {
    fetch(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${this.state.term}&image_type=photo&pretty=true`
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState({ images: data.hits, isLoading: false });
      })
      .catch((err) => console.log(err));
  }
  componentDidUpdate(prevState) {
    if (this.state.term !== prevState.term) {
      fetch(
        `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${this.state.term}&image_type=photo&pretty=true`
      )
        .then((res) => res.json())
        .then((data) => {
          this.setState({ images: data.hits, isLoading: false });
        })
        .catch((err) => console.log(err));
    }
  }

  render() {
    const { images } = this.state;
    return (
      <div className="container mx-auto">
        <ImageSearch
          searchText={(text) =>
            this.setState({
              term: text,
            })
          }
        />
        {images.length === 0 && (
          <h1 className="text-5xl text-center mx-auto mt-32">
            No images found
          </h1>
        )}
        <div className="grid grid-cols-3 gap-4 pb-8">
          {images.map((image) => (
            <ImageCard key={image.id} image={image} />
          ))}
        </div>
      </div>
    );
  }
}

export default Gallery;

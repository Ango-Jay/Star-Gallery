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
        <nav className="flex items-center justify-between flex-wrap bg-gray-50 p-6">
          <div className="flex items-center flex-shrink-0 text-indigo-500 mr-6">
            <h1 className="font-light text-7xl">Star Gallery</h1>
            <p className="text-sm pt-10 text-purple-500">
              made with pixabay api...
            </p>
          </div>
          <div className="w-full block flex-grow sm:flex sm:items-center sm:w-auto">
            <div className="text-sm sm:flex-grow"></div>
          </div>
        </nav>
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

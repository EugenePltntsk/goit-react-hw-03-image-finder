import { searchImages } from 'Helpers/API';
import { Component } from 'react';
import { ImageGallery } from './ImageGallery';
import { Modal } from './Modal';
import { Searchbar } from './Searchbar';
import css from './App.module.css';
import { Button } from './Button';

export class App extends Component {
  state = {
    imageName: '',
    images: [],
    page: 1,
    largeImage: '',
    isLoading: false,
  };

  async componentDidUpdate(_, prevState) {
    if (
      this.state.imageName !== prevState.imageName ||
      this.state.page !== prevState.page
    ) {
      this.setState({ isLoading: true });

      const resultData = await searchImages(
        this.state.imageName,
        this.state.page
      );
      this.setState(prevState => ({
        images: [...prevState.images, ...resultData.hits],
        isLoading: false,
      }));
    }
  }

  getLargeImage = event => {
    this.setState({ largeImage: event.target.dataset.image });
  };

  closeModal = event => {
    if (event?.target === event?.currentTarget || event.key === 'Escape') {
      this.setState({ largeImage: '' });
    }
  };

  changePage = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  saveDataToState = query => {
    this.setState({ imageName: query, page: 1, images: [] });
  };

  render() {
    return (
      <div className={css.App}>
        <Searchbar
          isLoading={this.state.isLoading}
          saveDataToState={this.saveDataToState}
        />

        <ImageGallery
          getLargeImage={this.getLargeImage}
          images={this.state.images}
        />
        {this.state.images.length !== 0 && (
          <Button changePage={this.changePage} />
        )}
        {this.state.largeImage && (
          <Modal closeModal={this.closeModal} src={this.state.largeImage} />
        )}
      </div>
    );
  }
}

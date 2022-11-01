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
    images: [], //записати з дід маунта. і відмалювати результати запиту.
    page: 1,
    largeImage: "",
    
  };
  getLargeImage = event => {
 this.setState({ largeImage: event.target.dataset.image })
  }

  closeModal = (event) => {
    
    if (event?.target === event?.currentTarget || event.key === "Escape") {
      this.setState({ largeImage: "" })
      
    } 
    
  }
  changePage = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  //  componentDidMount () {

  //  }

  async componentDidUpdate(_, prevState) {
    if (this.state.imageName !== prevState.imageName) {
      const resultData = await searchImages(
        this.state.imageName,
        this.state.page
      );
      this.setState({ images: resultData.hits });
    } else if (this.state.page !== prevState.page) {
      const resultNextPage = await searchImages(
        this.state.imageName,
        this.state.page
      );
      this.setState(prevState => ({
        images: [...prevState.images, ...resultNextPage.hits],
      }));
    }
  }

  saveDataToState = query => {
    this.setState({ imageName: query, page: 1 });

  };

  render() {
    return (
      <div className={css.App}>

        <Searchbar saveDataToState={this.saveDataToState} />
        <ImageGallery getLargeImage={this.getLargeImage} images={this.state.images} />
        <Button changePage={this.changePage} />
        { this.state.largeImage && <Modal closeModal={this.closeModal} src={this.state.largeImage} />}
      </div>
    );
  }
}

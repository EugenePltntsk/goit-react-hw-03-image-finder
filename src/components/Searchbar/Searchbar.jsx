import { Loader } from 'components/Loader';
import { Component } from 'react';
import css from './Searchbar.module.css';
import PropTypes from 'prop-types';
import { FcSearch } from 'react-icons/fc';

export class Searchbar extends Component {
  state = {
    query: '',
  };

  handleChange = e => {
    this.setState({ query: e.target.value });
  };

  submitForm = e => {
    e.preventDefault();

    this.props.saveDataToState(this.state.query);
  };

  render() {
    return (
      <header className={css.Searchbar}>
        {this.props.isLoading && <Loader />}
        <form onSubmit={this.submitForm} className={css.SearchForm}>
          <button type="submit" className={css.SearchFormButton}>
            <FcSearch style={{ width: '36px', height: '36px' }} />
          </button>

          <input
            name="input"
            onChange={this.handleChange}
            className={css.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  saveDataToState: PropTypes.func.isRequired,
};

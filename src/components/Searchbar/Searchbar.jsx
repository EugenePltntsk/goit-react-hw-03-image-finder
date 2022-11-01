import { Component } from 'react';
import css from "./Searchbar.module.css"

export class Searchbar extends Component {
    state = {
        query: "",
    }

handleChange = e => {
this.setState({ query: e.target.value })
}

submitForm = e => {
e.preventDefault();

this.props.saveDataToState(this.state.query)
}


  render() {
    return (
      <header className={css.Searchbar}>
        <form onSubmit={this.submitForm} className={css.SearchForm}>
          <button type="submit" className={css.SearchFormButton}>
            <span className={css.SearchFormButtonLabel}>Search</span>
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

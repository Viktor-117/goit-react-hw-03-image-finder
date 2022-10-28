import { Component } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { SearchBox } from './Searchbar.styled';

export default class Searchbar extends Component {
  render() {
    return (
      <SearchBox>
        <header class="searchbar">
          <form class="form">
            <button type="submit" class="button">
              <AiOutlineSearch />
              <span class="button-label">Search</span>
            </button>

            <input
              class="input"
              type="text"
              autocomplete="off"
              autofocus
              placeholder="Search images and photos"
            />
          </form>
        </header>
      </SearchBox>
    );
  }
}

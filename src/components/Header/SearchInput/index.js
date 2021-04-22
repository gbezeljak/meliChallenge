import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { useHistory } from 'react-router'

import { setSearchInputValue, fetchProducts } from 'actions/mainSearch'

import { SearchWrapper, SearchInput, SearchButton, StyledImg } from './styles'

import magnifyingGlass from 'assets/images/magnifyingGlass.png'

import commonText from 'constants/commonText'

const { HINTS } = commonText

const Search = (props) => {
  const history = useHistory()
  return (
    <SearchWrapper>
      <SearchInput
        onChange={(e) => props.setSearchInputValue(e.target.value)}
        value={props.mainSearch.inputValue}
        placeholder={HINTS.SEARCH_PLACEHOLDER}
        onKeyDown={(e) =>
          e.key === 'Enter' && props.fetchProducts(props.mainSearch.inputValue, history)
        }
      />
      <SearchButton onClick={() => props.fetchProducts(props.mainSearch.inputValue, history)}>
        <StyledImg src={magnifyingGlass} />
      </SearchButton>
    </SearchWrapper>
  )
}

const mapStateToProps = ({ mainSearch }) => ({ mainSearch })

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ setSearchInputValue, fetchProducts }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Search)

import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import styled from 'styled-components'

export const Container = styled.div`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Image = styled.img`
  max-width: ${({ size }) => size}px;
  display: ${({ loaded }) => (loaded ? 'inherit' : 'none')};
  margin-right: 15px;
  align-self: center;
`

class LazyImage extends React.Component {
  state = {
    loaded: false
  }

  componentDidUpdate = prevProps => {
    if (prevProps.src !== this.props.src) {
      this.setState({ loaded: false })
    }
  }

  render() {
    return (
      <Container size={this.props.size || 40}>
        {!this.state.loaded ? <CircularProgress size={20} /> : null}
        <Image
          src={this.props.src}
          size={this.props.size || 40}
          loaded={this.state.loaded}
          onLoad={() => this.setState({ loaded: true })}
        />
      </Container>
    )
  }
}

export default LazyImage

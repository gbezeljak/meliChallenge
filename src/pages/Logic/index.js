import React, { Component } from 'react'

class Logic extends Component {
  state = { input: '' }
  render() {
    return (
      <div style={{ height: '100%', display: 'flex' }}>
        <div
          style={{
            margin: 'auto',
            border: '1px solid',
            width: '60%',
            height: '80%',
          }}
        >
          <button onClick={() => this.props.history.push('/')}>Go Back</button>
          <div style={{ display: 'flex', width: '100%', height: '97%' }}>
            <div
              style={{
                width: '60%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <input
                placeholder={'input'}
                onChange={(e) => this.setState({ input: e.target.value })}
              />
            </div>{' '}
            <div
              style={{
                width: '40%',
                borderLeft: '1px solid',
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <div
                style={{
                  flexDirection: 'column',
                  display: 'flex',
                  justifyContent: 'space-evenly',
                  padding: '0px 0px 0px 10px',
                }}
              >
                <p style={{ fontWeight: 'bold' }}>Input</p>
                <p>aabbbc </p>
                <p>abbcabb </p>
                <p>abcd </p>
                <p>zzzz </p>
                <p>wwwwwwwawwwwwww </p>
                <p>ssiiggkooo </p>
                <p>adfaaa </p>
                <p>bbjaadlkjdl </p>
              </div>
              <div
                style={{
                  flexDirection: 'column',
                  display: 'flex',
                  justifyContent: 'space-evenly',
                  padding: '0px 0px 0px 10px',
                }}
              >
                <p style={{ fontWeight: 'bold' }}>Expected Out</p>
                <p>2a3bc </p>
                <p>a2bca2b </p>
                <p>abcd </p>
                <p>4z </p>
                <p>7wa7w </p>
                <p>2s2i2gk3o </p>
                <p>adf3a </p>
                <p>2bj2adlkjdl </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Logic

import styled from 'styled-components'

const PageBlock = styled.div`
  height: 100%;
  width: 100%;
  max-width: ${({ narrow }) => (narrow ? 700 : 1000)}px;
  margin: 0 auto;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow-y: visible;
`

export default PageBlock

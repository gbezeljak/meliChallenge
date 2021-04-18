import React from 'react'

import Header from 'components/Header'
import PageBlock from 'components/PageBlock'

import { PageContainer, PageWrapper } from './styled'

const Page = ({ children, ...otherProps }) => (
  <PageContainer {...otherProps}>
    {otherProps.withHeader && <Header />}
    <PageWrapper {...otherProps}>
      <PageBlock {...otherProps}>{children}</PageBlock>
    </PageWrapper>
  </PageContainer>
)

export default Page

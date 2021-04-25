import React from 'react'
import { useHistory } from 'react-router'

import Header from 'components/Header'
import PageBlock from 'components/PageBlock'
import InternalNav from 'components/InternalNav'

import { PageContainer, PageWrapper } from './styled'

const Page = ({ children, ...otherProps }) => {
  const history = useHistory()
  return (
    <PageContainer {...otherProps}>
      {otherProps.withHeader && <Header />}
      <PageWrapper {...otherProps}>
        <PageBlock {...otherProps}>
          {otherProps.withInternalNav && <InternalNav history={history} />}
          {children}
        </PageBlock>
      </PageWrapper>
    </PageContainer>
  )
}

export default Page

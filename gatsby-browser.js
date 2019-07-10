import React from 'react'
import { globalHistory } from '@reach/router'
import { QueryParamProvider } from 'use-query-params'

export const wrapRootElement = ({ element }) => (
  <QueryParamProvider reachHistory={globalHistory}>
    {element}
  </QueryParamProvider>
)

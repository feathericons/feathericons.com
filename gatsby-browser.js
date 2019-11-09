import React from 'react'
import { globalHistory } from '@reach/router'
import { QueryParamProvider } from 'use-query-params'
import { OptionsProvider } from './src/components/OptionsContext'

export const wrapRootElement = ({ element }) => (
  <QueryParamProvider reachHistory={globalHistory}>
    <OptionsProvider>{element}</OptionsProvider>
  </QueryParamProvider>
)

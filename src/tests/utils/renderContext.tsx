import { render } from '@testing-library/react'
import React from 'react'

const renderWithContext = (Element:any, Context:React.Context<any>, valueContext:any) => {
  return render(<Context.Provider value={valueContext}><Element/></Context.Provider>)
}
export { renderWithContext }

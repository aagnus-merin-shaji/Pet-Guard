import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Admin from './Admin'


function Index() {
  return (
    <BrowserRouter>
      <Admin/>
    </BrowserRouter>
  )
}

export default Index
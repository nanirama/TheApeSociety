import React from "react"
import PropTypes from "prop-types"
import { DataProvider } from "../Context/DataContext"
const Layout = ({ children }) => {
  return (
    <DataProvider>
      {children}
    </DataProvider>
  )
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

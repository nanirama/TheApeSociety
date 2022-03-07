import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Header = ({ siteTitle }) => (
  <header>
  <div className="flex flex-wrap items-center justify-between max-w-8xl p-4 mx-auto md:p-8">
   
      <Link to="/">
        <StaticImage src="../assets/images/logo.png" alt="" />
      </Link>

      
  
  </div>
</header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

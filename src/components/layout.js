/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import "./global.css"

const Layout = ({
  children,
  data, handleInputChange, handleFilterChange, 
  AccessoryState, setAccessoryState,
  BackgroundState, setBackgroundState,
  BodyState, setBodyState,
  CClassState, setCClassState,
  EarsState, setEarsState,
  EyesState, setEyesState,
  FacialHairState, setFacialHairState,
  FamilyState, setFamilyState,
  HatState, setHatState,
  HeadState, setHeadState,
  WeaponState, setWeaponState
}) => {
  const data2 = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)


  return (
    <>
      <Header siteTitle={data2.site.siteMetadata?.title || `Title`}
      data={data}
      handleInputChange={handleInputChange}
      handleFilterChange={handleFilterChange}
      AccessoryState={AccessoryState} setAccessoryState={setAccessoryState}
      BackgroundState={BackgroundState} setBackgroundState={setBackgroundState}
      BodyState={BodyState} setBodyState={setBodyState}
      CClassState={CClassState} setCClassState={setCClassState}
      EarsState={EarsState} setEarsState={setEarsState}
      EyesState={EyesState} setEyesState={setEyesState}
      FacialHairState={FacialHairState} setFacialHairState={setFacialHairState}
      FamilyState={FamilyState} setFamilyState={setFamilyState}
      HatState={HatState} setHatState={setHatState}
      HeadState={HeadState} setHeadState={setHeadState}
      WeaponState={WeaponState} setWeaponState={setWeaponState}
      />
      <div className="flex-1 w-full max-w-5xl mx-auto"
      >
         <main>{children}</main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

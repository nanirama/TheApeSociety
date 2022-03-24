import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Navbar from "../components/nav"

const Header = () => {
  return (
    <header>
      <div className="flex flex-wrap items-center justify-between max-w-8xl p-4 mx-auto md:p-8">
        <Link to="/">
          <StaticImage
            src="../assets/images/logo.png"
            alt=""
            className="logo"
            height={50}
          />
        </Link>
        <Navbar />
      </div>
    </header>
  )
}
// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

export default Header

// export const pageQuery = graphql`
//   query ListItems {
//     AllStats: dataJson {
//       Accessory {
//         Bubblegum
//         Cigar
//         Dagger
//         Diamond_Grill
//         Gold_Teeth
//         Harmonica
//         None
//         Paint_Brush
//         Pipe
//         Wheat
//       }
//       Background {
//         Aqua
//         Blue
//         Cold
//         Green
//         Neutral
//         Red
//         Oker
//         Warm
//       }
//       Body {
//         Zombie
//         Suit
//         Robot
//         Rainbow_Suit
//         Prisoner_Uniform
//         Orange
//         Lumberjack_Shirt
//         Knight_Armor
//         Gold_Linen
//         Doublet
//         Chainmail
//         Cardigan
//         Cardano
//         Brown_Suit
//         Black_Wool_Coat
//         Ape
//         Alien
//       }
//       CClass: Class {
//         Royal_Advisors
//         Merchants
//         Explorers
//         Craftsmen
//         Artists
//         Nobles
//         Military_Officers
//       }
//       Ears {
//         Silver_Earring
//         Plain
//         Earphones
//         Cardano_Earring
//         Feather_Pen
//       }
//       Eyes {
//         Aviators
//         Monocle
//         Normal
//         Safety_Goggles
//         Shutter_Shades
//         Spectacles
//         Sunglasses
//         VR_Headset
//         Wraparound_Glasses
//       }
//       Facial_Hair {
//         Normal
//         Mustache
//         Long_White_Beard
//         Goatee
//         Big_Beard
//       }
//       Family {
//         Amato
//         Baldwin
//         Best
//         Brown
//         Castillo
//         Chiesa
//         Cataldi
//         Cortes
//         Cox
//         Davies
//         Edwards
//         Evans
//         Ford
//         Garc_a
//         Green
//         Hill
//         King
//         Lavigne
//         Maddock
//         Mars
//         Monet
//         Rich
//         Roberts
//         Robinson
//         Smith
//         Taylor
//         Thomas
//         Ventucci
//         Walker
//         White
//         Wilson
//         Wright
//         de_Balboa
//         de__Medici
//         de_la_Cruz
//       }
//       Hat {
//         Feather_Hat
//         Fruit_Basket
//         Gold_Helmet
//         Halo
//         Hoodie
//         King_s_Crown
//         Knight_Helmet
//         None
//         Pirate_Hat
//         Privateer_Hat
//         Sombrero
//         Spinner_Hat
//         Top_Hat
//         Voltaire_Wig
//         Wool_Cap
//       }
//       Head {
//         Alien
//         Ape
//         Cardano
//         Orange
//         Robot
//         Zombie
//       }
//       Weapon {
//         Arrows
//         None
//         Rifle
//         Spear
//         Sword
//       }
//     }
//     AllApes: allManifestJson {
//       edges {
//         node {
//           id
//           name
//           Accessory {
//             name
//             image
//           }
//           Background {
//             name
//             image
//           }
//           Body {
//             name
//             image
//           }
//           Ears {
//             name
//             image
//           }
//           Eyes {
//             name
//             image
//           }
//           Facial_Hair {
//             name
//             image
//           }
//           Hat {
//             image
//             name
//           }
//           Head {
//             name
//             image
//           }
//           Weapon {
//             name
//             image
//           }
//           cname: class
//         }
//       }
//     }
//   }
// `

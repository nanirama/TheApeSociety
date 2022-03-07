import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Sidebar from "../components/home/sidebar";
import ApeIndex from "../components/home/ApeIndex";
import Popup from "../components/home/popup";

const IndexPage = ({data}) => {
  const { AllApes, AllStats } = data
  return(
  <Layout>
    <Seo title="Home" />

    <section className="flex flex-wrap">

      <div className="lg:w-3/12 w-full px-3 xl:pr-10 mb-4">
        <Sidebar data={AllStats} />
      </div>
      <div className="lg:w-9/12 w-full px-3">
        <ApeIndex data={AllApes} />
      </div>
    </section>

  </Layout>
)
}

export default IndexPage

export const pageQuery = graphql`
  query ApesList{
    AllStats: dataJson {
      Accessory {
        Bubblegum
        Cigar
        Dagger
        Diamond_Grill
        Gold_Teeth
        Harmonica
        None
        Paint_Brush
        Pipe
        Wheat
      }
      Background {
        Aqua
        Blue
        Cold
        Green
        Neutral
        Red
        Oker
        Warm
      }
      Body {
        Zombie
        Suit
        Robot
        Rainbow_Suit
        Prisoner_Uniform
        Orange
        Lumberjack_Shirt
        Knight_Armor
        Gold_Linen
        Doublet
        Chainmail
        Cardigan
        Cardano
        Brown_Suit
        Black_Wool_Coat
        Ape
        Alien
      }
      Class {
        Royal_Advisors
        Merchants
        Explorers
        Craftsmen
        Artists
        Nobles
        Military_Officers
      }
      Ears {
        Silver_Earring
        Plain
        Earphones
        Cardano_Earring
        Feather_Pen
      }
      Eyes {
        Aviators
        Monocle
        Normal
        Safety_Goggles
        Shutter_Shades
        Spectacles
        Sunglasses
        VR_Headset
        Wraparound_Glasses
      }
      Facial_Hair {
        Normal
        Mustache
        Long_White_Beard
        Goatee
        Big_Beard
      }
      Family {
        Amato
        Baldwin
        Best
        Brown
        Castillo
        Chiesa
        Cataldi
        Cortes
        Cox
        Davies
        Edwards
        Evans
        Ford
        Garc_a
        Green
        Hill
        King
        Lavigne
        Maddock
        Mars
        Monet
        Rich
        Roberts
        Robinson
        Smith
        Taylor
        Thomas
        Ventucci
        Walker
        White
        Wilson
        Wright
        de_Balboa
        de__Medici
        de_la_Cruz
      }
      Hat {
        Feather_Hat
        Fruit_Basket
        Gold_Helmet
        Halo
        Hoodie
        King_s_Crown
        Knight_Helmet
        None
        Pirate_Hat
        Privateer_Hat
        Sombrero
        Spinner_Hat
        Top_Hat
        Voltaire_Wig
        Wool_Cap
      }
      Head {
        Alien
        Ape
        Cardano
        Orange
        Robot
        Zombie
      }
      Weapon {
        Arrows
        None
        Rifle
        Spear
        Sword
      }
    }
    AllApes : allManifestJson(limit: 12) {
      edges {
        node {
          id
          name
          Accessory {
            name
            image
          }
          Background {
            name
            image
          }
          Body {
            name
            image
          }
          Ears {
            name
            image
          }
          Eyes {
            name
            image
          }
          Facial_Hair {
            name
            image
          }
          Hat {
            image
            name
          }
          Head {
            name
            image
          }
          Weapon {
            name
            image
          }
          cname: class
        }
      }
    } 
  }
`


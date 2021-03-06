import React, { useState, useEffect, useContext  } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

import dataContext from "../Context/DataContext";
import Sidebar from "../components/home/sidebar";
import ApeIndex from "../components/home/ApeIndex";
import ApeSearchIndex from "../components/home/ApeSearchIndex";
import Popup from "../components/home/popup";

const IndexPage = (props) => {

  const { filterData, updateData } = dataContext();
  const { AllApes, AllStats } = props.data

  const [AccessoryState, setAccessoryState] = useState([])
  const [BackgroundState, setBackgroundState] = useState([])
  const [BodyState, setBodyState] = useState([])
  const [CClassState, setCClassState] = useState([])
  const [EarsState, setEarsState] = useState([])
  const [EyesState, setEyesState] = useState([])
  const [FamilyState, setFamilyState] = useState([])
  const [FacialHairState, setFacialHairState] = useState([])
  const [HatState, setHatState] = useState([])
  const [HeadState, setHeadState] = useState([])
  const [WeaponState, setWeaponState] = useState([])

  useEffect(() => {
    
  }, [
    AccessoryState,
    BackgroundState,
    BodyState,
    CClassState,
    EarsState, 
    EyesState,
    FamilyState, 
    FacialHairState,
    HatState,
    HeadState,
    WeaponState
  ]);

  

  const handleFilterChange = (filteredData) => {
    // console.log('filter data', filteredData)
    // const query ='filter'
    //  setState({    
    //     query,
    //     filteredData,
    //   })
    // const posts = AllApes.edges || []  
    // console.log('EarsState',EarsState)
    // let NewData = []
    // const filteredData = posts.filter(post => {
    //   const { Accessory, Background, Body, CClass, Ears, Eyes, Facial_Hair, Hat, Head, Weapon  } = post.node    
    //   AccessoryState.map((item)=>{
    //     if(item===Accessory.name)
    //     {
    //       NewData.push(item)
    //     }
    //   })
    //   BackgroundState.map((item)=>{
    //     if(item===Background.name)
    //     {
    //       NewData.push(item)
    //     }
    //   })
    //   BodyState.map((item)=>{
    //     if(item===Body.name)
    //     {
    //       NewData.push(item)
    //     }
    //   })
    //   CClassState.map((item)=>{
    //     if(item===CClass)
    //     {
    //       NewData.push(item)
    //     }
    //   })
    //   EarsState.map((item)=>{
    //     if(item===Ears.name)
    //     {
    //       NewData.push(item)
    //     }
    //   })
    //   EyesState.map((item)=>{
    //     if(item===Eyes.name)
    //     {
    //       NewData.push(item)
    //     }
    //   })
    //   FacialHairState.map((item)=>{
    //     if(item===Facial_Hair.name)
    //     {
    //       NewData.push(item)
    //     }
    //   })
    //   HatState.map((item)=>{
    //     if(item===Hat.name)
    //     {
    //       NewData.push(item)
    //     }
    //   })
    //   HeadState.map((item)=>{
    //     if(item===Head.name)
    //     {
    //       NewData.push(item)
    //     }
    //   })
    //   WeaponState.map((item)=>{
    //     if(item===Weapon.name)
    //     {
    //       NewData.push(item)
    //     }
    //   })
    //   return NewData
    // })
    // if(filteredData.length>0)
    // {
    //   setState({    
    //     query,
    //     filteredData,
    //   })
    // }
    // else
    // {
    //   setState({    
    //     query:'',
    //     filteredData:posts,
    //   }) 
    // }
    
  }



  const handleInputChange = event => {
    const query = event.target.value
    const posts = AllApes.edges || []
    const filteredData = posts.filter(post => {
      const { name  } = post.node
      return(
        name.toLowerCase().includes(query.toLowerCase())
      )      
    })
    updateData(filteredData)
  }


  return(
  <Layout>
    <Seo title="Home" />
    <section className="flex flex-wrap">
      <div className="lg:w-3/12 w-full px-3 xl:pr-10 mb-4 sidebar">
        <Sidebar data={AllStats}
          posts = {AllApes.edges}
          handleInputChange={handleInputChange}
          handleFilterChange={handleFilterChange}
          AccessoryState={AccessoryState} setAccessoryState={setAccessoryState}
          BackgroundState={BackgroundState} setBackgroundState={setBackgroundState}
          BodyState={BodyState} setBodyState={setBodyState}
          CClassState={CClassState} setCClassState={setCClassState}
          EarsState={EarsState} setEarsState={setEarsState}
          EyesState={EyesState} setEyesState={setEyesState}
          FacialHairState={FacialHairState} setFacialHairState={setFacialHairState}
          HatState={HatState} setHatState={setHatState}
          HeadState={HeadState} setHeadState={setHeadState}
          WeaponState={WeaponState} setWeaponState={setWeaponState}
        />
      </div>
      <div className="lg:w-9/12 w-full px-3">
        {/* { hasSearchResults ? <ApeSearchIndex data={filteredData}/> : <ApeIndex data={filterData}/>}         */}
        {filterData.length>0 ? <ApeSearchIndex data={filterData}/> : <ApeIndex data={AllApes.edges}/>}
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
      CClass : Class {
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
    AllApes : allManifestJson{
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
          CClass: class
        }
      }
    } 
  }
`
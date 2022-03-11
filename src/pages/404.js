import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Sidebar from "../components/home/sidebar";
import ApeIndex from "../components/home/ApeIndex";
import ApeSearchIndex from "../components/home/ApeSearchIndex";
import Popup from "../components/home/popup";

const NotFoundPage = ({data}) => {
  const { AllApes, AllStats } = data
  const emptyQuery = '';
  const [state, setState] = useState({
    filteredData: [],
    query: emptyQuery
  })
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
    console.log('state',state)
  }, [
    state,
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
  

  const handleFilterChange = () => {
    const query ='filter'
    const posts = AllApes.edges || []  
    console.log('EarsState',EarsState)
    let NewData = []
    const filteredData = posts.filter(post => {
      const { Accessory, Background, Body, CClass, Ears, Eyes, Facial_Hair, Hat, Head, Weapon  } = post.node    
      AccessoryState.map((item)=>{
        if(item===Accessory.name)
        {
          NewData.push(item)
        }
      })
      BackgroundState.map((item)=>{
        if(item===Background.name)
        {
          NewData.push(item)
        }
      })
      BodyState.map((item)=>{
        if(item===Body.name)
        {
          NewData.push(item)
        }
      })
      CClassState.map((item)=>{
        if(item===CClass)
        {
          NewData.push(item)
        }
      })
      EarsState.map((item)=>{
        if(item===Ears.name)
        {
          NewData.push(item)
        }
      })
      EyesState.map((item)=>{
        if(item===Eyes.name)
        {
          NewData.push(item)
        }
      })
      FacialHairState.map((item)=>{
        if(item===Facial_Hair.name)
        {
          NewData.push(item)
        }
      })
      HatState.map((item)=>{
        if(item===Hat.name)
        {
          NewData.push(item)
        }
      })
      HeadState.map((item)=>{
        if(item===Head.name)
        {
          NewData.push(item)
        }
      })
      WeaponState.map((item)=>{
        if(item===Weapon.name)
        {
          NewData.push(item)
        }
      })
      return NewData
    })
    if(filteredData.length>0)
    {
      setState({    
        query,
        filteredData,
      })
    }
    else
    {
      setState({    
        query:'',
        filteredData:posts,
      }) 
    }
    
  }



  const handleInputChange = event => {
    const query = event.target.value
    const posts = AllApes.edges || []

    const filteredData = posts.filter(post => {
      const { name  } = post.node
      
      
    })

    console.log('filter data',filteredData)
    setState({    
      query,
      filteredData,
    })
  }
  const { filteredData, query } = state
  const hasSearchResults = filteredData && query !== emptyQuery
  console.log('hasSearchResults',hasSearchResults)
  
  const ApesData = hasSearchResults ? filteredData : AllApes.edges


  return(
  <Layout data={AllStats}
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
  WeaponState={WeaponState} setWeaponState={setWeaponState}>
   <Seo title="404: Not found" />
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)
}

export default NotFoundPage

export const pageQuery = graphql`
  query ApesList404{
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
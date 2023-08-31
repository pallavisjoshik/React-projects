import React from 'react'
import pic1dif from './amazonprimepics/pic1dif.jpg'
import pic2dif from './amazonprimepics/pic2dif.jpg'
import remote2 from './amazonprimepics/remote2.jpg'
import cartoon from './amazonprimepics/cartoon.jpg'
import logo from './amazonprimepics/logo.png'
import mubi from './amazonprimepics/mubi.jpg'
import manorama from './amazonprimepics/manorama.jpg'
import discovery from './amazonprimepics/discovery.jpg'
import docubay from './amazonprimepics/docubay.jpg'
import erosnow from './amazonprimepics/erosnow.jpg'
import hoichi from './amazonprimepics/hoichi.jpg'
import lionsgate from './amazonprimepics/lionsgate.jpg'
import stingray from './amazonprimepics/stingray.png'
import curiosity from './amazonprimepics/curiosity.png'
import iwonder from './amazonprimepics/iwonder.png'
import vrot from './amazonprimepics/vrot.png'
import Amc from './amazonprimepics/Amc.png'



export default function Content() {
    
    const cont6={
        backgroundColor: "grey"
        
    }
    const last ={
        color: "rgb(78, 168, 241)"
    }
    const channel={
        padding:'8px'
    }
    const colright={
        width:'50%',
       
    }
    const colleft={
        width:'49%',
    }
    const btn1={
        marginLeft:'30px',
    }
    const btn2={
        marginLeft:'700px',
    }


    console.log(pic1dif)
    console.log(pic2dif)
    console.log(remote2)
    console.log(cartoon)
    console.log(logo)
    console.log(discovery)
    console.log(docubay)
    console.log(erosnow)
    console.log(hoichi)
    console.log(lionsgate)
    console.log(manorama)
    console.log(mubi)
    console.log(Amc)
    console.log(curiosity)
    console.log(iwonder)
    console.log(stingray)
    console.log(vrot)

  return (
    <>
        <div className="container1" width = '100%'>
            <h1>Welcome to Prime Video</h1>
            <h4>Watch the latest movies, TV shows, and award-winning <br /> Amazon Originals</h4>
            <button class="btn btn-primary" type="submit" style={btn1}>Sign in to join Prime</button>
        </div>
        <div className="container2">
            <h1>Movie rentals on Prime Video</h1>
            <h4>Early Access to new movies, before digital subscription</h4>
            <button class="btn btn-primary" id='btn1' type="submit" style={btn2}>Rent Now</button>
        </div>
        <div className="container3" height = '150px' width = '100%'>
            <div className="colleft" width = '49%' height = '150px'>
            <h1>Your favorite channels all in one place</h1>
           <h4>With Prime Video Channels, find shows and movies <br />from your favorite channels all in one place. Enjoy <br /> with an add-on subscription to Channels of your <br />choice</h4>
            </div>
            <div className="colright" width = '49%' height = '150px' style={colright}>
                <img src={discovery} className="rounded float-start" alt="error" height = '150px' width = '200px' style={channel}/>
                <img src={docubay} className="rounded float-start" alt="error" height = '150px' width = '200px' style={channel}/>
                <img src={erosnow} className="rounded float-start" alt="error" height = '150px' width = '200px'style={channel}/>
                <img src={hoichi} className="rounded float-start" alt="error" height = '150px' width = '200px'style={channel}/>
                <img src={lionsgate} className="rounded float-start" alt="error" height = '150px' width = '200px' style={channel} />
                <img src={manorama} className="rounded float-start" alt="error" height = '150px' width = '200px' style={channel}/>
                <img src={mubi} className="rounded float-start" alt="error" height = '150px' width = '200px'style={channel}/>
                <img src={stingray} className="rounded float-start" alt="error" height = '150px' width = '200px'style={channel}/>
                <img src={Amc} className="rounded float-start" alt="error" height = '150px' width = '200px'style={channel}/>
                <img src={curiosity} className="rounded float-start" alt="error" height = '150px' width = '200px'style={channel}/>
                <img src={iwonder} className="rounded float-start" alt="error" height = '150px' width = '200px'style={channel}/>
                <img src={vrot} className="rounded float-start" alt="error" height = '150px' width = '200px'style={channel}/>
            </div>
        </div>
        <div className="container4">
                <h1>Even better with Fire TV Stick</h1>
            <h4>The biggest movies and TV shows are always better on a big <br /> screen. Simply plug in your Amazon Fire TV Stick and <br />stream on any HDTV. Press the voice button on the remote <br /> and say the name of the title you want to watch to find it in <br /> seconds.</h4>
            <button class="btn btn-primary" type="submit" style={btn2}>Get Started</button>
        </div>
        <div className="container5">
            <h1>Family Friendly</h1>
            <h4>With easy to use Parental Controls and a dedicated kids page,<br /> enjoy secure, ad-free kids entertainment. Kids can <br />enjoy popular TV shows like Peppa Pig, Powerpuff Girls, and <br />Chhota Bheem.</h4>
            <button class="btn btn-primary" type="submit" style={btn1}>Get Started</button>
        </div>
        <div className="container6 text-center" style={cont6} height = '80px'>
                <img src={logo} className='rounded mx-auto d-block' alt="error" />
                <a className='rounded mx-auto d-inline ' href="/">Terms and Privacy Notice</a>
                <a className='rounded mx-auto d-inline' href="/">Send us Feedback  </a>
                <a className='rounded mx-auto d-inline' href="/">Help</a>
                <p style = {last}>© 1996-2023, Amazon.com, Inc. or its affiliates</p>
        </div>
    </>
  )
}

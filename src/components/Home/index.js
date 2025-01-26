import React from 'react'
import './index.css'
const Home = () => {
  return (
    <div className='main-container'>
        <h2 className='main-heading'>COMMUNITIES WE MANAGE</h2>
        <div className='all-card-container'>
            <div className='card-container'>
                <img src="/images/arabian-ranches.jpg" alt="ArabianRanch" className='home-image'/>
                <div className='card-para'>
                <p className='sub-para'>Arabian Ranches offers a modern interpretation of the 
                    soothing charm of the surrounding desertscape. The development
                    features a number of residential communities that draw inspiration 
                    from spanish and 
                </p>
                </div>
                <div className='card-heading'>
                <h1 className='sub-heading'>Arabian Ranches</h1>
                </div>
            </div>

            <div className='card-container'>
                <img src="/images/arabian-ranches-ii.jpg" alt="ArabianRanch2" className='home-image'/>
                <div className='card-para'>
                <p className='sub-para'>Arabian Ranches offers a modern interpretation of the 
                    soothing charm of the surrounding desertscape. The development
                    features a number of residential communities that draw inspiration 
                    from spanish and 
                </p>
                </div>
                <div className='card-heading'>
                <h1 className='sub-heading'>Arabian Ranches II</h1>
                </div>
            </div>

            <div className='card-container'>
                <img src="/images/downtown-dubai.jpg" alt="ArabianRanch" className='home-image'/>
                <div className='card-para'>
                <p className='sub-para'>The Centre of Now. The most prestigious square 
                    kilometre in the world. Downtown Dubai is no stranger to such accolades, 
                    and yet it’s hard to overstate the prominence of this community.
                </p>
                </div>
                <div className='card-heading'>
                <h1 className='sub-heading'>Downtown Dubai</h1>
                </div>
            </div>


            <div className='card-container'>
                <img src="/images/dubai-hills-estate.jpg" alt="DubiaHills Estate" className='home-image'/>
                <div className='card-para'>
                <p className='sub-para'>Sustainably designed, Dubai Hills Estate is a first of its kind destination. 
                    This masterfully-planned 2,700-acre multi-purpose development will form an integral 
                    part of the Mohammed Bin Rashid City.
                </p>
                </div>
                <div className='card-heading'>
                <h1 className='sub-heading'>Dubai Hills Estate</h1>
                </div>
            </div>


            <div className='card-container'>
                <img src="/images/dubai-marina.png" alt="Dubai marina" className='home-image'/>
                <div className='card-para'>
                <p className='sub-para'>Dubai Marina is one of the world’s largest, most meticulously planned waterfront developments
                     and offers the exhilaration and vibrancy of a chic, urban lifestyle together 
                     with all the advantages of living on the water.
                </p>
                </div>
                <div className='card-heading'>
                <h1 className='sub-heading'>Dubai Marina</h1>
                </div>
            </div>


            <div className='card-container'>
                <img src="/images/emirates-living.jpg" alt="emirates-living" className='home-image'/>
                <div className='card-para'>
                <p className='sub-para'>Launched in 2003, Emirates Living is a modern lifestyle community
                     focused on outdoor leisure. Emirates Living offers a serene nature-filled sanctuary, 
                    with 8,659 premium villas nestled within 52.2 million square feet of lush greenery.
                </p>
                </div>
                <div className='card-heading'>
                <h1 className='sub-heading'>Emirates Living</h1>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Home
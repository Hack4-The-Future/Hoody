import { async } from '@firebase/util'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import image1 from '../../../../assets/image1.jpg'
import img1 from '../../../../assets/img1.jpg'
import img2 from '../../../../assets/img2.jpg'
import img3 from '../../../../assets/img3.jpg'
import { getItemsByCategory } from '../../../../DB/getItemsByCategory'
import { Iframe } from './Iframe'
import haversine from 'haversine-distance'
import { UilMap } from '@iconscout/react-unicons'
import swal from 'sweetalert'

export const OthersItems = ({ id }) => {
    const [category, setICategoty] = useState(null)
    const [items, setItems] = useState(null)
    const [coordination, setCoordination] = useState({ latitude: null, longitude: null })

    //open map
    function openMap(params) {
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12109.26968137635!2d22.9416259!3d40.64493285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sgr!4v1668249436974!5m2!1sen!2sgr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
       
    }

    async function GetItemsByCategory(e) {
        //getting location
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            console.log("Geolocation is not supported by this browser.");
        }

        function showPosition(position) {
            setCoordination({ latitude: position.coords.latitude, longitude: position.coords.longitude });
        }
        await console.log('coordination0000000000000', coordination)

        //get items by filter category
        await getItemsByCategory(id, e.target.innerText, coordination).then((data) => {
            setItems(data)
            console.log('eeeeeeeeeeeeeeeeeeee', data.map((d) => { console.log(d.coordination) }), items)
        })
        // && Number((haversine(currentLocation, prof.coordination)/1000).toFixed(2))>1
    }

    //home 
    const a = { latitude: 40.6477262, longitude: 22.9393645 }

    // masoom's home
    // const b = { latitude: 40.6500294, longitude: 22.9365368 }                   

    //Red cross
    const b = { latitude: 40.6380324, longitude: 22.9412795 }

    //reza's home
    // const b = { latitude: 50.0981675, longitude: 8.6449389 }

    console.log('dissssssssstance', Number((haversine(a, b) / 1000).toFixed(2)))

    return (
        <div className='others-items'>

            <div className='map'>
                <div className='location'>
                    <div className='your-location'>
                        <i className="fas fa-location"></i>
                    </div>
                    {/* <div className='flash-down'>
                        <i className="uil uil-angle-down"></i>
                    </div> */}
                    <div className="search-box-loc">
                        {/* <input type="text" placeholder='Search location ...' /> */}
                        {/* style="font-family:Arial, FontAwesome" */}
                        {/* placeholder="&#xF002;" */}
                        {/* <span htmlFor="" className="search-icon">
                            <i className="fas fa-search"></i>
                        </span> */}
                    </div>
                    <UilMap onClick={openMap} />
                </div>

                <div className="item-categories">
                    <ul>
                        <li onClick={GetItemsByCategory}>Costume</li>
                        <li onClick={GetItemsByCategory}>Sports</li>
                        <li onClick={GetItemsByCategory}>Appliance Home</li>
                        <li onClick={GetItemsByCategory}>Toys</li>
                        <li onClick={GetItemsByCategory}>Electronic</li>
                        <li onClick={GetItemsByCategory}>Gaming</li>
                        <li onClick={GetItemsByCategory}>Discount</li>
                    </ul>
                </div>

                <div className='items-box'>
                    {/* 1 */}
                    <div className="item-card">
                        <div className='item-img'>
                            <img src={image1} alt="" />
                        </div>

                        <div className='item-content'>
                            <h4>name</h4>
                            <h5>Price: 10$</h5>
                            <p>
                                <i className="uil uil-map-marker"></i> 500 m
                            </p>
                            <p>
                                <i className="fa-regular fa-comment-dots"></i> message
                            </p>
                            <p className='save'><i className="fa-regular fa-star"></i> <span className='details'>read more</span> </p>
                        </div>
                    </div>
                    {/* 1 */}


                    <div className="item-card">
                        <div className='item-img'>
                            <img src={image1} alt="" />
                        </div>

                        <div className='item-content'>
                            <h4>name</h4>
                            <h5>Price: free</h5>
                            <p>
                                <i className="uil uil-map-marker"></i> 500 m
                            </p>
                            <p>
                                <i className="fa-regular fa-comment-dots"></i> message
                            </p>
                            <p className='save'><i className="fa-regular fa-star"></i> <span className='details'>read more</span> </p>
                        </div>
                    </div>

                    <div className="item-card">
                        <div className='item-img'>
                            <img src={image1} alt="" />
                        </div>

                        <div className='item-content'>
                            <h4>name</h4>
                            <h5>Price: 10$</h5>
                            <p>
                                <i className="uil uil-map-marker"></i> 500 m
                            </p>
                            <p>
                                <i className="fa-regular fa-comment-dots"></i> message
                            </p>
                            <p className='save'><i className="fa-regular fa-star"></i> <span className='details'>read more</span> </p>
                        </div>
                    </div>

                    <div className="item-card">
                        <div className='item-img'>
                            <img src={image1} alt="" />
                        </div>

                        <div className='item-content'>
                            <h4>name</h4>
                            <h5>Price: free</h5>
                            <p>
                                <i className="uil uil-map-marker"></i> 500 m
                            </p>
                            <p>
                                <i className="fa-regular fa-comment-dots"></i> message
                            </p>
                            <p className='save'><i className="fa-regular fa-star"></i> <span className='details'>read more</span> </p>
                        </div>
                    </div>

                    <div className="item-card">
                        <div className='item-img'>
                            <img src={image1} alt="" />
                        </div>

                        <div className='item-content'>
                            <h4>name</h4>
                            <h5>Price: free</h5>
                            <p>
                                <i className="uil uil-map-marker"></i> 500 m
                            </p>
                            <p>
                                <i className="fa-regular fa-comment-dots"></i> message
                            </p>
                            <p className='save'><i className="fa-regular fa-star"></i> <span className='details'>read more</span> </p>
                        </div>
                    </div>

                    <div className="item-card">
                        <div className='item-img'>
                            <img src={image1} alt="" />
                        </div>

                        <div className='item-content'>
                            <h4>name</h4>
                            <h5>Price: free</h5>
                            <p>
                                <i className="uil uil-map-marker"></i> 500 m
                            </p>
                            <p>
                                <i className="fa-regular fa-comment-dots"></i> message
                            </p>
                            <p className='save'><i className="fa-regular fa-star"></i> <span className='details'>read more</span> </p>
                        </div>
                    </div>

                    <div className="item-card">
                        <div className='item-img'>
                            <img src={image1} alt="" />
                        </div>

                        <div className='item-content'>
                            <h4>name</h4>
                            <h5>Price: free</h5>
                            <p>
                                <i className="uil uil-map-marker"></i> 500 m
                            </p>
                            <p>
                                <i className="fa-regular fa-comment-dots"></i> message
                            </p>
                            <p className='save'><i className="fa-regular fa-star"></i> <span className='details'>read more</span> </p>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

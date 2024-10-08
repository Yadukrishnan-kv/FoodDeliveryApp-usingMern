import React from 'react'
import RestNav from '../Components/RestaurantNavbar/RestNav'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Login from '../Pages/Login/Login'
import Signup from '../Pages/Signup/Signup'
import Add from '../Pages/HotelPages/Add/Add'
import List from '../Pages/HotelPages/List/List'
import Order from '../Pages/HotelPages/Orders/Order'
import Hotelhome from '../Pages/HotelPages/Hotelhome'
import Profile from '../Components/Profile/Profile'
import Viewupdate from '../Pages/HotelPages/List/Viewupdate'
import Review from '../Pages/HotelPages/Review/Review'
import Views from '../Pages/HotelPages/List/Views'
import ProfileUpdate from '../Components/Profile/ProfileUpdate'
import Singleviews from '../Pages/HotelPages/List/Singleviews'
import ReviewSingleView from '../Pages/HotelPages/Review/ReviewSingleView'
import ExploreMenu from '../Components/ExploreMenu/ExploreMenu'
import Header from '../Components/Header/Header'
import SearchProduct from '../Components/SearchProduct/SearchProduct'
import Footer from '../Components/Footer/Footer'




function HotelRoutes() {
  return (
    <div>
         <BrowserRouter>
        
        <Routes>
            <Route path='/' element={ <> <RestNav/><Hotelhome/><Footer/></> }></Route>
            <Route path='/home' element={<> <RestNav/><Hotelhome/><Footer/></> }></Route>
            <Route path='/add-item' element={<> <RestNav/><Add/></>}></Route>
            <Route path='/list-item' element={<> <RestNav/><Views/></>}></Route>
            <Route path='/update/:id' element={<> <RestNav/><Viewupdate/></>}></Route>
            <Route path='/view' element={<> <RestNav/><List/></>}></Route>
            <Route path='/orders' element={<> <RestNav/><Order/></>}></Route>
            <Route path='/restaurant/reviews' element={<> <RestNav/><Review/></>}></Route>
            <Route path='/login' element={<><Login/></> }></Route>
            <Route path='/sign-up' element={<><Signup/></> }></Route>
            <Route path='/profile/:id' element={<><RestNav/><Profile/></> }></Route>
            <Route path='/profileUpdate/:id' element={<><RestNav/><ProfileUpdate/></> }></Route>
            <Route path='/product/:id' element={<><RestNav/><Singleviews/></>}></Route>
            <Route path='/product/getReviews/:id' element={<><RestNav/><ReviewSingleView/></>}></Route>
            <Route path='/searchproduct' element={<><RestNav/><Header/><ExploreMenu/><SearchProduct/><Footer/></>}></Route>


        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default HotelRoutes
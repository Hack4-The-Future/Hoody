
import React, { lazy } from 'react'
import { getItemsById } from '../../../../DB/getItems'

import { OthersItems } from './OthersItems'
import { UserItems } from './UserItems'
import { useEffect , useState } from 'react'
import { useUser } from '../../../../DB/useUser'


export const MainContent = ({coordination  , setOpenModalChat ,setOpenMap}) => {
    const { user: { uid } } = useUser()
    
    
    
    

    return (
        <div className='main-profileContent'>
            <OthersItems uid={uid} coordination={coordination} setOpenModalChat={setOpenModalChat} setOpenMap={setOpenMap}/>
            {/* {items ? <UserItems id={id} items={items} /> : ""} */}
            {/* <UserItems uid={uid} items={items} setItems = {setItems} /> */}
        </div>
    )
}

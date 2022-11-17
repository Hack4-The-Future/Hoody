import { arrayUnion, collection, doc, getDoc, getDocs, query, serverTimestamp, setDoc, Timestamp, updateDoc, where } from 'firebase/firestore'
import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { DbContext } from '../../../../Context/DBContext'
import { userContext } from '../../../../Context/userContext'
import { v4 as uuid } from 'uuid'
import { ChatContext } from '../ChatRoom/context/chatContext'


export const CardItems = ({ item, setOpenModalChat }) => {
    const { user } = useContext(userContext)
    const { db } = useContext(DbContext)
    const [userSearch, setUserSearch] = useState({})
    const { dispatch } = useContext(ChatContext)

    const handleDirect = async (e) => {
        //check whether the group(chats in firestore) exists, if not create
        console.log('searching', userSearch,)

        const combinedId =
            user.uid > e.target.id
                ? user.uid + e.target.id
                : e.target.id + user.uid;

        try {
            const res = await getDoc(doc(db, "chats", combinedId));
            //
            //if this is for the first time to chat
            if (!res.exists()) {
                //create a chat in chats collection
                await setDoc(doc(db, "chats", combinedId), { messages: [] });
                await updateDoc(doc(db, 'chats', combinedId), {
                    messages: arrayUnion({
                        id: uuid(),
                        text: '',
                        senderId: user.uid,
                        date: Timestamp.now(),
                        img: e.target.parentElement.parentElement.children[0].children[0].src
                    })
                })

                await updateDoc(doc(db, "userChats", e.target.id), {
                    [combinedId + ".userInfo"]:
                    {
                        uid: user.uid,
                        displayName: user.displayName,
                        // photoURL: user.photoURL
                    }
                    , [combinedId + ".date"]: serverTimestamp()
                });

                await updateDoc(doc(db, "userChats", user.uid), {
                    [combinedId + ".userInfo"]:
                    {
                        uid: userSearch.uid,
                        displayName: userSearch.displayName,
                        // photoURL: userSearch.photoURL
                    }
                    , [combinedId + ".date"]: serverTimestamp()
                });
            }
            console.log('userChats updated')
        } catch (err) { }
        console.log('error')
        setUserSearch(null);
    };

    //search owner
    const searchOwner = async (e) => {
        console.log('src-------->', e.target.parentElement.parentElement.children[0].children[0].src)
        setOpenModalChat(true)
        try {
            const q = query(collection(db, 'users'), where('uid', '==', e.target.id))
            const snapShot = await getDocs(q)
            snapShot.docs.map((doc) => { setUserSearch(doc.data()) })
        } catch (error) {
            // setErr(true)
            console.log('user not find')
        }
        const u = {displayName:userSearch.displayName , photoURL:'' , uid: e.target.id}
        dispatch({ type: "CHANGE_USER", payload: u })
        // console.log(u)
        handleDirect(e)
        console.log('searchUser:', userSearch)
    }
    return (
        <div className="item-card">
            <div className='item-img'>
                <img src={item.linkImage} alt="" />
            </div>

            <div className='item-content'>
                <h4>{item.owner}</h4>
                <h5>{item.price === 0 ? 'Free' : item.price}</h5>
                <p>
                    <i className="uil uil-map-marker"></i>{item.distance}
                </p>
                <p onClick={searchOwner} className='direct' id={item.uid}>
                    Got to direct <i className="fa-regular fa-comment-dots"></i>
                </p>
                {/* <p className='save'><i className="fa-regular fa-star"></i> <span className='details'>read more</span> </p> */}
            </div>
        </div>
    )
}

import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "./firebase";
import haversine from 'haversine-distance'

export async function getItemsByCategory(id, category, coordination) {
    const currentLocation = { latitude: coordination.latitude, longitude: coordination.longitude }
    console.log('currentLocation', currentLocation)
    // targetLocation={latitude:0 , longitude: 0 }
    const base = 5.2

    const q = query(collection(db, 'items'), where('category', '==', category))
    const snapshot = await getDocs(q)
    const items = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })).filter((prof) => prof.userDocId !== id).filter((dt) => base < Number((haversine(currentLocation, dt.coordination) / 1000).toFixed(2)));

    console.log('get-items-by-category', items)
    return items

}
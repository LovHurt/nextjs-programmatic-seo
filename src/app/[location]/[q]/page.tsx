import Header from "@/components/Header";
import { searchRestaurants } from "@/data/restaurants";

interface PageProps {
  params: Promise<{ location: string; q: string }>;
}

export default async function Page({params}:PageProps) {
    const {location, q} = await params;

    const qDecoded = decodeURIComponent(q);
    const locationDecoded = decodeURIComponent(location);

    const results = await searchRestaurants(qDecoded, locationDecoded);

    return <div>
        <Header q={qDecoded} location={locationDecoded}/>
    </div>
}

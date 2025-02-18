import Header from "@/components/Header";
import RestaurantItem from "@/components/RestaurantItem";
import { searchRestaurants } from "@/data/restaurants";
import { Metadata } from "next";
import { cache } from "react";

interface PageProps {
  params: Promise<{ location: string; q: string }>;
}

const getRestaurants = cache(searchRestaurants);

async function getDecodedParamsAndResults({ params }: PageProps) {
    const { location, q } = await params;
    const qDecoded = decodeURIComponent(q);
    const locationDecoded = decodeURIComponent(location);
    const results = await getRestaurants(qDecoded, locationDecoded);
    return { qDecoded, locationDecoded, results };
  }

export async function generateMetadata(props: PageProps): Promise<Metadata>{
  
    const { qDecoded, locationDecoded, results } = await getDecodedParamsAndResults(props);

    return {
        title: `Top ${results.length} ${qDecoded} in ${locationDecoded} - Updated ${new Date().getFullYear()}`,
        description: `Find the best ${qDecoded} near ${locationDecoded} with our curated list of top restaurants.`,
    }
}

export default async function Page(props: PageProps) {

    const { qDecoded, locationDecoded, results } = await getDecodedParamsAndResults(props);

    return <div>
        <Header q={qDecoded} location={locationDecoded}/>
        <main className="container mx-auto space-y-8 px-4 py-8">
            <h1 className="text-center text-3xl font-bold">Best {results.length} {qDecoded} in {locationDecoded}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {results.map((restaurant) => (
                    <RestaurantItem key={restaurant.id} restaurant={restaurant}/>
                ))}
            </div>
        </main>
    </div>
}

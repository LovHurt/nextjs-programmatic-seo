import Header from "@/components/Header";
import RestaurantItem from "@/components/RestaurantItem";
import { getAllTags, locations, searchRestaurants } from "@/data/restaurants";
import { Metadata } from "next";
import { cache } from "react";

interface PageProps {
  params: Promise<{ location: string; q: string }>;
}

//this static render things only work at COMPILE TIME so when we do npm run build (not npm run dev)

export const revalidate = 86400; //Refresh cached pages once every 24 hours

export async function generateStaticParams() {
    const allTags = await getAllTags({ 
        //if we have many pages we can render this much of it at compile-time
        //the rest will be rendered & cached at first access
        //limit:10
     });

    return allTags.map(tag => locations.map(location => ({
        location, q:tag
    }))).flat();

    //instead of this we can in this function: 
    //return []; 
    //thus only the first user, who opened the page, would wait for the render, 
    //the second and the other users will take the serverside RENDERED page, so they wont wait that long
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

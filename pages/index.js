import Head from 'next/head'
import Header from '../components/Header';
import Banner from '../components/Banner';
import Smallcard from '../components/Smallcard';
import MediumCard from '../components/MediumCard'
import LargCard from '../components/LargCard'
import Footer from '../components/Footer'



export default function Home({exploreData, cardsData}) {
return (
    <div className=''>
      <Head>
        <title>Create Next App</title>
      
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <Banner/>

      <main className='max-w-7xl mx-auto px-8 sm:px-16' >
        <section className='pt-6'>
          <h2 className='text-4xl font-semibold pb-5'> Explore Nearby</h2>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {exploreData?.map(({img, distance, location}) =>(
           <Smallcard
           key={img}
           img={img}
           distance={distance}
           location={location}
          />
          ))}
        </div> 
        </section>

        <section>
          <h2 className='text-4xl font-semibold py-8'>Live Anywhere</h2>
        <div className='flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3'>
        {cardsData.map(item =>(
            <MediumCard 
            key={item.img}
            img={item.img}
            title={item.title}/>
          ))}
        </div>
        </section>

        <LargCard
        img="https://links.papareact.com/4cj"
        title="The Greatest Outdoors"
        description="Whishlist curated by Airbnb"
        buttonText="Get Inspired"
        />
      </main>

     <Footer/>
     
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch('https://www.jsonkeeper.com/b/4G1G');
  const exploreData = await res.json();


  const response = await fetch('https://www.jsonkeeper.com/b/VHHT'); 
  const cardsData = await response.json();
   
  return {
    props: {
      exploreData,
      cardsData,
    },
  };
}


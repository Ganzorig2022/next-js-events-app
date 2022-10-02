import { getFeaturedEvents } from '../dummy-data';
import EventList from '../components/events/event-list';
import Head from 'next/head';

function HomePage(props) {
  return (
    <div>
      <Head>
        <title>NextJs Events</title>
        <meta
          name='description'
          content='Find a lot of great events that
        allow you to evlove'
        />
      </Head>
      <EventList items={props.events} />
    </div>
  );
}

//=====Static Site Generation (SSR) on home page http://localhost:3000
export const getStaticProps = async () => {
  //turdee local-aas awaw. Ug ni gadnaas /helper/utils-aar gadnaas fetch hiih estoi.
  const featuredEvents = getFeaturedEvents();
  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 1800, //30min tutamd database shinechlegdsen esehiig shalgana.
  };
};
export default HomePage;

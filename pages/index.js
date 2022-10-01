import { getFeaturedEvents } from '../dummy-data';
import EventList from '../components/events/event-list';

function HomePage(props) {
  return (
    <div>
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
  };
};
export default HomePage;

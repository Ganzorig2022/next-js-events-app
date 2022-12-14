import { useRouter } from 'next/router';
import { getAllEvents } from '../../dummy-data';
import EventList from '../../components/events/event-list';
import EventsSearch from '../../components/events/events-search';

const AllEventsPage = (props) => {
  const router = useRouter();

  const { events } = props;

  const findEventsHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  };

  return (
    <>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </>
  );
};

export const getStaticProps = async () => {
  const events = getAllEvents();

  return {
    props: {
      events: events,
    },
    revalidate: 60,
  };
};

export default AllEventsPage;

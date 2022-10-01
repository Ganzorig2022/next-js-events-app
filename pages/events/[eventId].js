import { Fragment } from 'react';
// import { useRouter } from 'next/router';

import { getEventById, getAllEvents } from '../../dummy-data';
import EventSummary from '../../components/event-detail/event-summary';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventContent from '../../components/event-detail/event-content';
import ErrorAlert from '../../components/ui/error-alert';

function EventDetailPage(props) {
  // const router = useRouter();
  // const eventId = router.query.eventId;

  const event = props.selectedEvent;

  if (!event) {
    return (
      <ErrorAlert>
        <p>No event found!</p>
      </ErrorAlert>
    );
  }

  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
}

//=====Static Site Generation (SSR) on http://localhost:3000/events/e2
export const getStaticProps = async (context) => {
  const eventId = context.params.eventId;

  const event = getEventById(eventId);

  return {
    props: {
      selectedEvent: event,
    },
  };
};

//=================Which event params.id============================
export const getStaticPaths = async () => {
  const events = getAllEvents();

  //events array-aas id-uudaar ni paths[] uusgeh
  const paths = events.map((event) => ({
    params: { eventId: event.id },
  }));

  return {
    paths: paths, // id ni bwal huudas ruuga vserne.
    fallback: false, //oor id-rvv vserwel 404.
  };
};

export default EventDetailPage;

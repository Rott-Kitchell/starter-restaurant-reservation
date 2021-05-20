import { Link } from "react-router-dom";

export default function ResList({ reservations }) {
  if (reservations) {
    return reservations.map((res) => {
      const {
        reservation_id,
        mobile_number,
        reservation_date,
        reservation_time,
        people,
        first_name,
        last_name,
      } = res;
      return (
        <div className="card mb-1" key={reservation_id} id={reservation_id}>
          <div className="card-body">
            <div className="text-center">
              <h5 className="d-inline-block card-title">{last_name}</h5>
              {", "}
              <h6 className="d-inline-block card-subtitle text-muted">
                {first_name}
              </h6>
            </div>
            <ul class="list-group list-group">
              <li class="list-group-item">Contact: {mobile_number}</li>
              <li class="list-group-item">Party size: {people}</li>
              <li class="list-group-item">Date: {reservation_date}</li>
              <li class="list-group-item">Time: {reservation_time}</li>
            </ul>

            <Link
              to={`/reservations/${reservation_id}/seat`}
              className="btn btn-primary mt-2"
            >
              Seat
            </Link>
          </div>
        </div>
      );
    });
  } else {
    return <div>No reservations on this date</div>;
  }
}

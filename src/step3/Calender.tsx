import { apiCalendar } from '../api';
export default function Calender() {
  return (
    <div>
      <div>
        <button
          onClick={() => {
            console.log('click');
            apiCalendar.handleAuthClick();
          }}
        >
          api 버튼
        </button>
        <button
          onClick={() => {
            console.log('click');
            apiCalendar.handleSignoutClick();
          }}
        >
          api 버튼
        </button>
        <button
          onClick={() => {
            console.log('click');
            apiCalendar
              .createEventFromNow(
                {
                  time: 480,
                  summary: 'test summary text',
                },
                'a01035587180@gmail.com'
              )
              .then((result) => {
                console.log(result);
              })
              .catch((err) => {
                console.log(err);
              });
          }}
        >
          api 버튼
        </button>
      </div>
    </div>
  );
}

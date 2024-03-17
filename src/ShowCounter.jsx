import DateTimeDisplay from "./DateTimeDisplay";

export const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="show-counter flex flex-col lg:flex-row md:flex-row  w-full">
        <DateTimeDisplay value={days} type={'Days'} isDanger={days <= 3} />
        <p>:</p>
        <DateTimeDisplay value={hours} type={'Hours'} isDanger={false} />
        <p>:</p>
        <DateTimeDisplay value={minutes} type={'Mins'} isDanger={false} />
        <p>:</p>
        <DateTimeDisplay value={seconds} type={'Seconds'} isDanger={false} />
    </div>
  );
};
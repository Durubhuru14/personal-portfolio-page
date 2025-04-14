import { nanoid } from "nanoid";
import { hobbies } from "../Data";

const Hobbies = () => {
  return (
    <div className="self-start">
      <div className="inline-block bg-[#DA589C] text-xl text-[#F5F5F5] px-4 py-2 rounded-xl shadow-(--clay-pink-shadow-heading) font-bold md:text-2xl ">
        <h3>Hobbies:</h3>
      </div>
      <ul className="list-disc list-inside text-base text-gray-900 mt-1 md:text-lg ">
        {hobbies.map((hobbie) => (
          <li key={nanoid()}>{hobbie}</li>
        ))}
      </ul>
    </div>
  );
};

export default Hobbies;

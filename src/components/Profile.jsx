import pfp from "../assets/pfp.svg";
import { username } from "../Data";

const Profile = () => {
  return (
    <section className="flex justify-center items-center flex-col gap-y-3">
      {/* Profile picture section */}
      <div className="h-34 w-34 bg-[#F86CB5] p-2 rounded-4xl flex items-center justify-center shadow-(--clay-pink-shadow-pfp) md:size-52">
        <img src={pfp} alt="Profile Picture" className="size-4/5" />
      </div>
      {/* Greetings and name */}
      <div className="w-fit text-center">
        <h1 className="text-gray-900 text-4xl mb-1 md:text-5xl">Hello, I am</h1>
        <article className="bg-[#DA589C] text-2xl text-[#F5F5F5] p-2 rounded-xl shadow-(--clay-pink-shadow-heading) font-bold md:text-3xl md:p4">
          <h3>{username}</h3>
        </article>
      </div>
    </section>
  );
};
export default Profile;

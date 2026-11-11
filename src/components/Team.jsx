const members = [
  "Hailey Carter",
  "James Walker",
  "Jessica Morgan",
  "Ashley Bennett",
  "Emily Parker",
  "Ryan Mitchell",
];

function Team() {
  return (
    <section className="py-20 px-10">
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold">
          Meet the team
        </h2>

        <p className="text-gray-500 mt-4">
          A passionate team dedicated to your success.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {members.map((member, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl flex items-center gap-4 shadow-sm"
          >
            <img
              src={`https://i.pravatar.cc/150?img=${index + 10}`}
              alt=""
              className="w-16 h-16 rounded-full"
            />

            <div>
              <h3 className="font-semibold">
                {member}
              </h3>

              <p className="text-gray-500 text-sm">
                Team Member
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Team;
function HomePage() {
  return (
    <div className="relative w-full h-screen">
      {/* Background Image */}
      <img
        src="https://cdn.dribbble.com/userupload/42868844/file/original-0b0843a01723616045e5d5a74498e331.png?resize=400x0"
        className="w-full h-full object-cover brightness-80"
        alt="Banking Background"
      />

      {/* Overlay Text Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          It's not about having the right opportunity.
        </h1>
        <h2 className="text-2xl md:text-3xl mb-6">
          It's about handling the opportunity right.
        </h2>
        <p className="text-lg md:text-xl mb-8">
          Your trusted banking app for every step of your journey.
        </p>

        {/* Call to Action Buttons */}
        <div className="space-x-4">
          <button className="bg-transparent border-2 border-white px-6 py-3 rounded-lg text-white font-semibold hover:bg-white hover:text-blue-600 transition">
            Explore Features
          </button>
        </div>
      </div>
    </div>
  );
}

export { HomePage };

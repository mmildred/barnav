const Home = () => {
  return (
    <section
      id="/home"
      className="h-screen flex flex-col items-center justify-center bg-linear-to-br from-gray-50 to-blue-100 px-4"
    >
      <div className="text-center max-w-3xl">
        
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
          <span className="typing-animation block text-gray-800">
            Bienvenido a
          </span>
          <span className="block mt-2">
            <span className="gradient-text animate-pulse-gentle">
              MLD Cursos
            </span>
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-600 mb-10">
          Aprende tecnología de forma <span className="font-semibold text-primary">clara</span>, 
          <span className="font-semibold text-primary"> práctica</span> y 
          <span className="font-semibold text-primary"> a tu ritmo</span>.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          
          <button className="px-8 py-3 rounded-xl border border-primary text-primary font-semibold hover:bg-primary hover:text-white transition">
            Empezar gratis
          </button>
        </div>

        <div className="flex justify-center space-x-4 mt-14">
          <div className="w-3 h-3 rounded-full bg-primary animate-bounce"></div>
          <div
            className="w-3 h-3 rounded-full bg-blue-400 animate-bounce"
            style={{ animationDelay: "0.2s" }}
          ></div>
          <div
            className="w-3 h-3 rounded-full bg-primary animate-bounce"
            style={{ animationDelay: "0.4s" }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Home;

const Home = () => {
  return (
    <section
      id="/"
      className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50 px-4"
    >
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          <span className="typing-animation block">
            Bienvenido a 
          </span>
          <span className="text-primary mt-2 block">
            <span className="gradient-text animate-pulse-gentle">
              MLD Cursos
            </span>
          </span>
        </h1>
        
        {/* Elementos decorativos animados */}
        <div className="flex justify-center space-x-4 mt-12">
          <div className="w-3 h-3 rounded-full bg-primary animate-bounce"></div>
          <div className="w-3 h-3 rounded-full bg-blue-400 animate-bounce" style={{animationDelay: '0.2s'}}></div>
          <div className="w-3 h-3 rounded-full bg-primary animate-bounce" style={{animationDelay: '0.4s'}}></div>
        </div>
      </div>
    </section>
  );
};

export default Home;
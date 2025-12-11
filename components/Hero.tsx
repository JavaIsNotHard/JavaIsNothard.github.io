export default function Hero() {
  return (
    <section className="max-w-4xl px-6 py-16">
      <div className="flex flex-col md:flex-row gap-8 items-start mb-16">
        {/* Bio Content */}
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
            Hi, I am Jibesh
          </h1>
          <h3 className="text-xl text-gray-600 mb-6 font-light italic">
            Explorer and a Healthy Procrastinator | Backend Engineer | Emerging Dev-ops Engineer
          </h3>

          <div className="text-gray-700 leading-7 space-y-4">
            <p>
              Here lies my description
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 mt-6">
            <span className="text-gray-300">•</span>
            <a
              href="https://www.linkedin.com/in/jibesh-shrestha-469b60210"
              className="text-gray-600 hover:text-blue-600 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <span className="text-gray-300">•</span>
            <a
              href="https://github.com/javaisnothard"
              className="text-gray-600 hover:text-blue-600 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
import React from 'react'

function Hero() {
  return (
    <section className="bg-slate-100">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Build your form
            <strong className="font-extrabold text-primary sm:block">
              in seconds, not hours
            </strong>
          </h1>

          <p className="mt-4 sm:text-xl/relaxed text-gray-500">
            Effortlessly create stunning, high-converting forms with AI—say
            goodbye to tedious manual work!.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-green-500 transition-all duration-200 focus:outline-none focus:ring active:bg-blue-800 sm:w-auto"
              href="#"
            >
              Create Your form
            </a>

            <a
              className="block w-full rounded px-12 py-3 text-sm font-medium text-primary shadow hover:text-green-500 focus:outline-none focus:ring active:text-primary sm:w-auto"
              href="#"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fff8df]">
      <section className="relative overflow-hidden bg-gradient-to-b from-sky-300 via-sky-100 to-green-100 px-4 py-8 md:px-10">
        <div className="absolute left-6 top-10 text-6xl">☁️</div>
        <div className="absolute right-8 top-8 text-7xl">☀️</div>

        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="flex flex-col items-center gap-4 md:flex-row md:justify-center md:gap-10">
            <Image
              src="/logo.png"
              alt="3H Blossom Home Daycare"
              width={180}
              height={180}
              priority
              className="w-36 md:w-44"
            />

            <div className="text-center">
              <div className="rounded-xl bg-amber-700 px-6 py-3 text-2xl font-black text-white shadow-xl md:text-4xl">
                Licensed Home Daycare
              </div>

              <div className="mt-3 rounded-xl bg-pink-500 px-6 py-3 text-xl font-black text-white shadow-xl md:text-3xl">
                A Loving, Safe & Happy Place for Your Child
              </div>
            </div>
          </div>

          <div className="mt-6 grid items-center gap-8 md:grid-cols-2">
            <div className="text-center md:text-left">
              <h1 className="text-5xl font-black leading-none text-pink-600 drop-shadow-lg sm:text-6xl md:text-7xl">
                NOW
              </h1>

              <h2 className="text-4xl font-black leading-none text-purple-700 drop-shadow-lg sm:text-5xl md:text-7xl">
                ENROLLING!
              </h2>

              <p className="mx-auto mt-6 max-w-sm px-4 text-xl font-extrabold leading-snug text-slate-700 sm:text-2xl md:max-w-none md:px-0 md:text-3xl">
                Your Child&apos;s Second Home,
                <br />
                A Place to Learn and Grow
              </p>

              <div className="mx-auto mt-8 flex w-full max-w-sm flex-col gap-3 px-4 sm:flex-row sm:justify-center sm:px-0 md:max-w-none md:justify-start">
                <a
                  href="tel:3062611074"
                  className="rounded-full bg-pink-600 px-6 py-4 text-center font-black text-white shadow-lg"
                >
                  CALL: 306-261-1074
                </a>

                <a
                  href="sms:3062611074"
                  className="rounded-full bg-green-600 px-6 py-4 text-center font-black text-white shadow-lg"
                >
                  MESSAGE TO BOOK A TOUR
                </a>
              </div>
            </div>

            <div className="rounded-[2rem] border-8 border-white bg-lime-100 p-4 shadow-2xl">
  <img
    src="/children-reading.png"
    alt="Children reading together at 3H Blossom"
    className="h-auto w-full rounded-[1.5rem]"
  />
</div>
          </div>
        </div>
      </section>
     
     <section className="bg-[#fff8df] px-4 py-14">
  <div className="mx-auto max-w-6xl">
    <h2 className="text-center text-4xl font-black text-purple-700 md:text-5xl">
      Children of All Ages Are Welcome!
    </h2>

    <p className="mt-4 text-center text-lg text-slate-600 md:text-xl">
      Providing loving, age-appropriate care and activities for every stage of childhood.
    </p>

    <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

      <div className="rounded-3xl bg-white p-6 text-center shadow-lg">
        <div className="text-5xl">🧸</div>
        <h3 className="mt-4 text-2xl font-black text-pink-600">
          Infant
        </h3>
        <p className="mt-3 text-slate-600">
          A safe, loving, and caring environment for babies. We provide feeding, naps, playtime, and lots of attention throughout the day.
        </p>
      </div>

      <div className="rounded-3xl bg-white p-6 text-center shadow-lg">
        <div className="text-5xl">🎨</div>
        <h3 className="mt-4 text-2xl font-black text-pink-600">
          Toddler
        </h3>
        <p className="mt-3 text-slate-600">
          Toddlers learn through play, exploration, and interaction. We help children build confidence, language skills, and social skills through daily activities and guided play.
        </p>
      </div>

      <div className="rounded-3xl bg-white p-6 text-center shadow-lg">
        <div className="text-5xl">🚶</div>
        <h3 className="mt-4 text-2xl font-black text-pink-600">
          Pre-Schooler
        </h3>
        <p className="mt-3 text-slate-600">
          Pre-schoolers enjoy hands-on learning through crafts, stories, games, and educational activities. We help build confidence and skills that prepare children for school.
        </p>
      </div>

      <div className="rounded-3xl bg-white p-6 text-center shadow-lg">
        <div className="text-5xl">🚌</div>
        <h3 className="mt-4 text-2xl font-black text-pink-600">
          School Age
        </h3>
        <p className="mt-3 text-slate-600">
          School-age children enjoy a safe and welcoming environment before and after school, with homework support, creative activities, and time to relax.
        </p>
      </div>

    </div>
  </div>
</section>

<section className="bg-[#fff8df] px-4 py-8">
  <div className="mx-auto max-w-6xl rounded-[2rem] border-4 border-pink-100 bg-white p-8 shadow-xl md:p-14 relative overflow-hidden">
    
    <div className="absolute right-8 top-8 text-5xl opacity-60">🌸</div>
    <div className="absolute left-6 bottom-6 text-5xl opacity-60">💗</div>
    <div className="absolute right-10 bottom-8 text-4xl opacity-60">💕</div>
    
    <h2 className="text-center text-4xl font-black text-pink-600 md:text-6xl">
  Meet the Heart Behind
</h2>

<h3 className="mt-2 text-center text-3xl font-black text-purple-700 md:text-5xl">
  3H Blossom
</h3>

    <div className="mx-auto mt-5 flex max-w-md items-center justify-center gap-4">
      <div className="h-1 w-24 bg-pink-300"></div>
      <span className="text-4xl">🌸</span>
      <div className="h-1 w-24 bg-pink-300"></div>
    </div>

    <div className="mx-auto mt-10 max-w-4xl text-lg leading-relaxed text-slate-700 md:text-2xl md:leading-relaxed">
      <p>
        Hi, I&apos;m <strong>Fozia Waqar Younus</strong>, the owner and caregiver at
        <strong> 3H Blossom Home Daycare</strong>.
      </p>

      <p className="mt-6">
        As a mother of three children—two daughters and a son, including a set of
        twins—I have firsthand experience raising children with different
        personalities, needs, and stages of development. Motherhood has taught me
        the importance of patience, understanding, and creating a loving
        environment where children feel safe, supported, and encouraged to grow.
      </p>

      <p className="mt-6">
        In addition to my parenting experience, I have over four years of
        experience working in home daycare environments. This valuable experience
        inspired me to open my own licensed daycare, where I can provide the same
        level of care, attention, and dedication to children and families.
      </p>

      <p className="mt-6">
        My goal is to provide families with peace of mind, knowing their children
        are cared for with patience, kindness, respect, and genuine love every day. ❤️
      </p>
    </div>
  </div>
</section>

<div className="py-6 text-center">
  <div className="flex items-center justify-center gap-4">
    <div className="h-1 w-20 rounded-full bg-pink-300"></div>

    <span className="text-4xl">🌸</span>
    <span className="text-4xl">💗</span>
    <span className="text-4xl">🌸</span>

    <div className="h-1 w-20 rounded-full bg-pink-300"></div>
  </div>
</div>


<section className="bg-[#fff8df] px-4 py-16">
  <div className="mx-auto max-w-5xl">
    

    <div className="mt-4 grid gap-6 md:grid-cols-3">
      <div className="rounded-3xl bg-pink-500 p-6 text-center text-white shadow-xl">
        <div className="text-5xl">🕒</div>
        <h3 className="mt-4 text-2xl font-black">Hours</h3>
        <p className="mt-3 text-lg font-semibold">Monday - Friday</p>
        <p className="font-semibold">7:30 AM - 5:00 PM</p>
      </div>

      <a
        href="https://maps.google.com/?q=246+Stromberg+Court+Saskatoon+SK"
        target="_blank"
        rel="noopener noreferrer"
        className="block rounded-3xl bg-green-500 p-6 text-center text-white shadow-xl transition hover:scale-105"
      >
        <div className="text-5xl">📍</div>
        <h3 className="mt-4 text-2xl font-black">Location</h3>
       <p className="text-xl font-bold">
  246 Stromberg Court
</p>

<p className="text-lg">
  Kensington, Saskatoon, SK
</p>
      </a>

      <div className="rounded-3xl bg-orange-500 p-6 text-center text-white shadow-xl">
        <div className="text-5xl">📞</div>
       <h3 className="mt-4 text-3xl font-black text-white">
  Contact
</h3>

<p className="mt-4 text-xl font-bold text-white">
  306-261-1074
</p>
<a
  href="tel:3062611074"
  className="mt-4 block rounded-full bg-white px-8 py-3 font-bold text-orange-600 shadow-md transition hover:scale-105"
>
  Call Now
</a>

<a
  href="sms:3062611074"
  className="mt-4 block rounded-full bg-white px-8 py-3 font-bold text-green-600 shadow-md transition hover:scale-105"
>
  Text Now
</a>
<a
  href="mailto:foziawy@gmail.com"
  className="mt-2 block text-lg font-semibold text-white hover:underline"
>
  FOZIAWY@GMAIL.COM
</a>


      </div>
    </div>
  </div>
</section>

<section className="bg-white px-4 py-16">
  <div className="mx-auto max-w-6xl">
    <h2 className="text-center text-4xl font-black text-pink-600 md:text-5xl">
      Why Parents Choose 3H Blossom
    </h2>

    <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {[
  [
    "🛡️",
    "Safe & Secure Environment",
    "Your child's safety is our top priority in a licensed and caring home daycare setting.",
  ],
  [
    "❤️",
    "Loving Home Atmosphere",
    "A warm, welcoming environment where every child feels valued and supported.",
  ],
  [
    "🍎",
    "Healthy Meals & Snacks",
    "Nutritious meals and snacks served daily to help children grow strong and healthy.",
  ],
  [
    "🎨",
    "Learning Through Play",
    "Fun educational activities that encourage creativity, exploration, and development.",
  ],
  [
    "🌳",
    "Outdoor Play Time",
    "Daily outdoor activities that promote exercise, fresh air, and healthy habits.",
  ],
  [
    "👶",
    "Small Group Personal Care",
    "Individual attention and personalized care in a small group environment.",
  ],
].map(([icon, title, description]) => (

        <div
          key={title}
          className="rounded-3xl border-4 border-pink-100 bg-[#fff8df] p-6 text-center shadow-lg"
        >
          <div className="text-5xl">{icon}</div>

          <h3 className="mt-4 text-xl font-black text-purple-700">
            {title}
          </h3>

          <p className="mt-3 text-slate-600">
  {description}
</p>
        </div>
      ))}
    </div>
  </div>
</section>

<section className="bg-pink-100 px-4 py-16 text-center">
  <div className="mx-auto max-w-4xl">

    <div className="text-6xl">🌸</div>

    <h2 className="mt-4 text-4xl font-black text-pink-600 md:text-6xl">
      Limited Spots Available
    </h2>

    <p className="mt-6 text-xl text-slate-700 md:text-2xl">
      We are currently accepting new enrollments for children in a
      safe, loving, and nurturing home daycare environment.
    </p>

    <p className="mt-4 text-lg font-semibold text-purple-700 md:text-xl">
      Schedule a tour and discover why families choose 3H Blossom Home Daycare.
    </p>

    <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

      <a
        href="tel:3062611074"
        className="rounded-full bg-pink-600 px-10 py-4 text-xl font-bold text-white shadow-lg transition hover:scale-105"
      >
        📞 Call 306-261-1074
      </a>

      <a
        href="sms:3062611074"
        className="rounded-full bg-green-500 px-10 py-4 text-xl font-bold text-white shadow-lg transition hover:scale-105"
      >
        💬 Message to Book a Tour
      </a>

    </div>

  </div>
</section>

<footer className="bg-slate-800 px-4 py-8 text-center text-white">
  <div className="mx-auto max-w-4xl">

    <h3 className="text-xl font-bold">
      3H Blossom Home Daycare
    </h3>

    <p className="mt-2 text-slate-300">
      Licensed Home Daycare
    </p>

    <p className="text-slate-300">
      Saskatoon, Saskatchewan
    </p>

    <p className="mt-4 text-sm text-slate-400">
      © 2026 3H Blossom Home Daycare. All Rights Reserved.
    </p>

  </div>
</footer>

    </main>
  );
}
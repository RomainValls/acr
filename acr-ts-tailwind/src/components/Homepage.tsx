import React from "react";
import { Link } from "react-router-dom";
const Homepage = () => {
  return (
    <div>
      
        <Banner
        imageUrl="https://upload.wikimedia.org/wikipedia/commons/1/15/Cat_August_2010-4.jpg"
        altText="save the cats pls"
        heading="Hello from cats! meow meow"
        //here - buttons
      />
      
      <section
        className="p-64 bg-cover"
        style={{ backgroundImage: "url('/images/cat_grass.jpg')" }}
      >
        <h2 className="text-white  font-bold text-4xl">
          Mieux vivre ensemble avec les chats de nos rues
        </h2>
        <button>J'adopte</button>
        <button>Je donne</button>
        <button>Perdu ou trouvé</button>
      </section>
      <section className="bg-slate-50 flex p-20">
        <div className=" w-1/2 flex items-center justify-center">
          <img src="" alt="animaux" />
        </div>
        <div className="w-1/2 p-3 flex flex-col justify-center">
          <h2 className="mb-3 font-bold text-2xl text-center sm:text-left">
            Nous souhaitons partager la ville avec les animaux qui nous
            entourent
          </h2>
          <p className="text-center sm:text-left">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus
            beatae nemo, soluta necessitatibus sunt nihil cupiditate, aspernatur
            itaque facere eos earum corporis perspiciatis omnis sed vero
            nesciunt. Deleniti iste, adipisci odio earum modi repudiandae
            architecto magni! Quod, in sed. Iste ea rerum a ullam, aut sapiente
            enim nihil illum officiis!
          </p>
          <Link to="/missions">
            <button className="bg-orange-400 rounded-lg p-3">
              Nos missions
            </button>
          </Link>
        </div>
      </section>
      <section className="bg-amber-100 flex p-20">
        <div className="w-1/2 p-3 flex flex-col justify-center">
          <h2 className="mb-3 font-bold text-2xl text-center sm:text-left">
            Nous souhaitons partager la ville avec les animaux qui nous
            entourent
          </h2>
          <p className="text-center sm:text-left">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus
            beatae nemo, soluta necessitatibus sunt nihil cupiditate, aspernatur
            itaque facere eos earum corporis perspiciatis omnis sed vero
            nesciunt. Deleniti iste, adipisci odio earum modi repudiandae
            architecto magni! Quod, in sed. Iste ea rerum a ullam, aut sapiente
            enim nihil illum officiis!
          </p>
          <Link to="/activites">
            <button className="bg-orange-400 rounded-lg p-3">
              Nos activités
            </button>
          </Link>
        </div>
        <div className=" w-1/2 flex items-center justify-center">
          <img src="" alt="animaux" />
        </div>
      </section>
      <section className="bg-slate-50 flex p-20">
        <div className=" w-1/2 flex items-center justify-center">
          <img src="" alt="animaux" />
        </div>
        <div className="w-1/2 p-3 flex flex-col justify-center">
          <h2 className="mb-3 font-bold text-2xl text-center sm:text-left">
            Nous souhaitons partager la ville avec les animaux qui nous
            entourent
          </h2>
          <p className="text-center sm:text-left">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus
            beatae nemo, soluta necessitatibus sunt nihil cupiditate, aspernatur
            itaque facere eos earum corporis perspiciatis omnis sed vero
            nesciunt. Deleniti iste, adipisci odio earum modi repudiandae
            architecto magni! Quod, in sed. Iste ea rerum a ullam, aut sapiente
            enim nihil illum officiis!
          </p>
          <Link to="/actualites">
            <button className="bg-orange-400 rounded-lg p-3">
              Nos actualités
            </button>
          </Link>
        </div>
      </section>

      <section></section>
    </div>
  );
};

export default Homepage

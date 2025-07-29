import bioPicPozo from "../assets/bioPicPozo.jpg";

export default function About() {
  return (
    <div className="flex flex-row flex-end">
      <div className=" py-12 ml-5 hidden md:block">
        <figure>
          <img
            src={bioPicPozo}
            alt="About Escarleth Romo Pozo"
            className="rounded-lg"
          />
          <figcaption className=" text-[8px] text-red-500 mt-2">
            Photographer: Thero Mamani Valles
          </figcaption>
        </figure>
      </div>
      <div className="max-w-2xl mx-auto px-6 py-12 text-red-500  leading-relaxed text-justify text-sm font-light ">
        <p className="mb-4">
          <b>Escarleth Romo Pozo</b> (1986.NIC/PER) is a performer and
          choreographer based in Copenhagen and Stockholm.
        </p>

        <p className="mb-4">
          Treating the performing body as a site of transformation she works
          with choreography to explore entangled temporalities, emotional excess
          and resilience. Through rupture & re- collection of embodied memories
          she is interested in that which haunts us.
        </p>

        <p className="mb-4">
          As a choreographer, Escarleth’s work is rooted in somatic practices,
          improvisation and a deeply embodied movement language. Her first full
          evening piece, <em>Yielding</em>, explores surrender as a form of
          strength. Audiences are drawn into a vibrating, hypnotic world
          teetering on the edge of collapse. Within this space, interdependence
          emerges not as weakness, but as a force that binds, heals, and
          reshapes us.
        </p>
        <p className="mb-4">
          Escarleth is particularly fascinated by the expanded presence of a
          performer, rooted in strong intuition, trust in instant composition,
          and willingness to fall into unknown spaces and vulnerable
          inter-relations.
        </p>

        <p className="mb-4">
          She is currently developing her newest work, <em>La Mala</em>, a raw
          and unapologetic examination of femininity, rebellion, and ancestral
          rage. The project is set to premiere autumn 2026.
        </p>
        <p className="mb-4">
          Escarleth completed her Master in Performance from London Contemporary
          Dance School after her Post Graduate Degree as a company member of
          Edge, the graduate company of London Contemporary School after
          completing her Bachelor in Contemporary Dance from Northern School of
          Contemporary Dance(UK). As a performer she has danced and toured with
          various choreographers and independent companies across Europe.
        </p>
        <p className="mb-4">
          She continues to create, teach, and collaborate across borders,
          weaving together her lived experiences and artistic path into moving
          works that disrupt, heal and question.
        </p>
        <p className="mb-4">
          Her work has been presented in theatres and galleries across
          Scandinavia: MDT, Dansehallerne, Dansekapellet, Atalante,
          Dansstationen, Örebro Konsthall
        </p>
      </div>
    </div>
  );
}

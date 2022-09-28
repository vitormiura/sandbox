import { Character } from "../../types";
import Image from "next/image";
import ImageLoader from "../../imageLoader";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";

// export async function getStaticPaths() {
//   const res = await fetch("https://rickandmortyapi.com/api/character");
//   const { results }: getCharacterResults = await res.json();

//   return {
//     paths: results.map((character) => {
//       return { params: { id: String(character.id) } };
//     }),
//     fallback: false
//   };
// }

CharacterPage.getLayout = function getLayout(page: typeof CharacterPage) {
  return <Layout>{page}</Layout>;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(
    `https://rickandmortyapi.com/api/character/${context.query.id}`
  );
  const character = await res.json();

  return {
    props: {
      character,
    },
  };
};

export default function CharacterPage({ character }: { character: Character }) {
  const router = useRouter()
  console.log(router.query)
  return (
    <>
      <div>{character.name}</div>
      <Image
        loader={ImageLoader}
        unoptimized
        src={character.image}
        alt={character.name}
        width="200"
        height="200"
      />
    </>
  );
}

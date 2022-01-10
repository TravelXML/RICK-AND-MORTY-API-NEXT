import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import globalStyles from '../assets/styles/global.js';
import { navLinks } from "../src/data";


//const fs = require('fs');
const defaultEndpoint = process.env.RICKNMORTYMALEENDPOINT;

export async function getServerSideProps() {
  const res = await fetch(defaultEndpoint)
  const data = await res.json();
  //fs.writeFileSync(process.env.LOGDIR+'/'+Date.now()+'.'+process.env.DEFAULTLOGTYPE, JSON.stringify(data));
  return {
    props: {
      data
    }
  }
}

export default function Home({ data }) {
  const { info, results: defaultResults = [] } = data;
  const [results, updateResults] = useState(defaultResults);
  const [page, updatePage] = useState({
    ...info,
    current: defaultEndpoint
  });
  const { current } = page;

  useEffect(() => {
    // Don't bother making a request if it's the default endpoint as we
    // received that on the server

    if ( current === defaultEndpoint ) return;

    // In order to use async/await, we need an async function, and you can't
    // make the `useEffect` function itself async, so we can create a new
    // function inside to do just that

    async function request() {
      const res = await fetch(current)
      const nextData = await res.json();

      updatePage({
        current,
        ...nextData.info
      });

      // If we don't have `prev` value, that means that we're on our "first page"
      // of results, so we want to replace the results and start fresh

      if ( !nextData.info?.prev ) {
        updateResults(nextData.results);
        return;
      }      
    }

    request();
  }, [current]);

  function handleLoadMore() {
    updatePage(prev => {
      return {
        ...prev,
        current: page?.next
      }
    });
  }  
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <motion.div initial="hidden" animate="visible" variants={{
          hidden: {
            scale: .8,
            opacity: 0
          },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: .4
            }
          },
        }}>
          <h1 className="title">
          GET Characters From the Rick and Morty API 
          </h1>
        </motion.div>

        <p className="description">
         Male And Alive
        </p>    
         
        {navLinks.map((link, index) => {
          return (
            <ul class="menu">
              <Link href={link.path}>
                <li key={index} >{link.name}</li>
              </Link>
            </ul>
          );
        })}
          
       
        <ul className="grid">
          {results.slice(0, 2 ).map(result => {
            const { id, name, image, gender, location, status } = result;
            return (
              <motion.li key={id} className="card" whileHover={{
                position: 'relative',
                zIndex: 1,
                background: 'white',
                scale: [1, 1.4, 1.2],
                rotate: [0, 10, -10, 0],
                filter: [
                  'hue-rotate(0) contrast(100%)',
                  'hue-rotate(360deg) contrast(200%)',
                  'hue-rotate(45deg) contrast(300%)',
                  'hue-rotate(0) contrast(100%)'
                ],
                transition: {
                  duration: .2
                }
              }}>
                <Link href="/character/[id]" as={`/character/${id}`}>
                  <a>
                    <img src={image} alt={`${name} Thumbnail`} />
                    <name> { name } </name> 
                    <gender> [X: { gender }] </gender>
                    <status> { status } </status>
                    <h6> { location?.name } </h6>                               
                  </a>
                </Link>
              </motion.li>
            )}
          ) }           
        </ul>        
      </main>

      <footer>
        Assignment @e-arth
      </footer>     
      <style jsx global>
        {globalStyles}
      </style>      
    </div>
  )
}

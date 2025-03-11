import React, {useState} from 'react';
import {motion} from 'framer-motion';
import {GithubLanguageStats} from '../hooks/index';


function Github() {
    const [projectStats, setProjectStats] = useState("");
    (async ()=> {
        setProjectStats(await GithubLanguageStats());
    })();
    console.log(projectStats);
    
  return (
    <>
        <motion.div
        className=''>
        </motion.div>
    </>
  )
}

export default Github;
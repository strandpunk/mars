import { Route, Routes } from 'react-router-dom';
import classes from './Content.module.css';

import { Canvas } from "@react-three/fiber"
import { OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';
import { Model1, Model2 } from '../loader/Loader';

function Content() {
  return (

    <div className={classes.content}>
      <Routes>
        <Route path='/main' element={<div><p>Mars 2020 is a Mars rover mission that includes the rover Perseverance, the small robotic helicopter Ingenuity, and associated delivery systems, as part of NASA's Mars Exploration Program. Mars 2020 was launched from Earth on an Atlas V launch vehicle at 11:50:01 UTC on 30 July 2020, and confirmation of touch down in the Martian crater Jezero was received at 20:55 UTC on 18 February 2021. On 5 March 2021, NASA named the landing site of the rover Octavia E. Butler Landing. As of 27 May 2023, Perseverance and Ingenuity have been on Mars for 806 sols (828 total days; 2 years, 98 days).

          Perseverance is investigating an astrobiologically relevant ancient environment on Mars for its surface geological processes and history, and assessing its past habitability, the possibility of past life on Mars, and the potential for preservation of biosignatures within accessible geological materials. It will cache sample containers along its route for retrieval by a potential future Mars sample-return mission. The Mars 2020 mission was announced by NASA in December 2012 at the fall meeting of the American Geophysical Union in San Francisco. Perseverance's design is derived from the rover Curiosity, and it uses many components already fabricated and tested in addition to new scientific instruments and a core drill. The rover also employs nineteen cameras and two microphones, allowing for the audio recording of the Martian environment. On April 30, 2021, Perseverance became the first spacecraft to hear and record another spacecraft, the Ingenuity helicopter, on another planet.

          The launch of Mars 2020 was the third of three space missions sent toward Mars during the July 2020 Mars launch window, with missions also launched by the national space agencies of the United Arab Emirates (the Emirates Mars Mission with the orbiter Hope on 19 July 2020) and China (the Tianwen-1 mission on 23 July 2020, with an orbiter, deployable and remote cameras, lander, and Zhurong rover).</p></div>} />

        <Route path='/cost' element={<div><p>NASA plans to expend roughly US$2.8 billion on the Mars 2020 mission over 10 years: almost US$2.2 billion on the development of the Perseverance rover, US$80 million on the Ingenuity helicopter, US$243 million for launch services, and US$296 million for 2.5 years of mission operations. Adjusted for inflation, Mars 2020 is the sixth-most expensive robotic planetary mission made by NASA and is cheaper than its predecessor, the Curiosity rover. As well as using spare hardware, Perseverance also used designs from Curiosity's mission without needing to redesign them, which helped save "probably tens of millions, if not 100 million dollars" according to Mars 2020 Deputy Chief Engineer Keith Comeaux.</p></div>} />

        <Route path='/model_perseverance' element={<div className={classes.canvSize}>
          <Canvas>
            <OrbitControls></OrbitControls>
            <Suspense fallback={null}>
              <Model1 />
              <ambientLight intensity={0.5} />
              <pointLight position={[1, 0, 1]} />
              <pointLight position={[-1, 0, -1]} />
            </Suspense>
          </Canvas>
        </div>} />

        <Route path='/model_ingenuity' element={<div className={classes.canvSize}>
          <Canvas>
            <OrbitControls></OrbitControls>
            <Suspense fallback={null}>
              <Model2 />
              <ambientLight intensity={1} />
              <pointLight position={[1, 0, 1]} />
              <pointLight position={[-1, 0, -1]} />
            </Suspense>
          </Canvas>
        </div>} />
      </Routes>
    </div>

  );
}

export default Content;

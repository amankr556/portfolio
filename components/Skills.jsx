"use client";
import {motion} from 'framer-motion';
import {onMouseMoveTilt,onMouseLeaveTilt} from '@/components/tilt';
const skills=["Java","OOPs","DSA","HTML","CSS","JavaScript","React","Next.js","TailwindCSS","Git/GitHub","Content Writing","Script Editing","Canva/CapCut"];
export default function Skills(){return(<section id="skills" className="py-20 bg-gray-950"><div className="max-w-6xl mx-auto px-6"><h2 className="text-3xl md:text-5xl font-extrabold mb-10">Skills</h2><div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">{skills.map((s,i)=>(<motion.div key={s} className="card-tilt rounded-xl border border-white/10 bg-white/5 backdrop-blur p-4 text-center hover:shadow-glow" initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.04}} onMouseMove={(e)=>onMouseMoveTilt(e,12)} onMouseLeave={onMouseLeaveTilt} style={{transformStyle:'preserve-3d'}}>{s}</motion.div>))}</div></div></section>)}

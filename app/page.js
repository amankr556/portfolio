"use client";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
export default function Page(){return(<main className="min-h-screen"><Navbar/><Hero/><About/><Skills/><Projects/><Contact/><footer className="py-10 text-center text-sm text-gray-400">© {new Date().getFullYear()} Aman Kumar — RCBIAN_AMAN1K</footer></main>)}

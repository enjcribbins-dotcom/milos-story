import fs from "node:fs";
import path from "node:path";
import { notFound } from "next/navigation";

const chapters = [
  ["01","The Forest Cabin","the-forest-cabin"],["02","Strange Tracks","strange-tracks"],["03","The Hidden Egg","the-hidden-egg"],
  ["04","Ember Hatches","ember-hatches"],["05","The First Flight","the-first-flight"],["06","A Dragon's Secret","a-dragons-secret"],
  ["07","Into the Ancient Forest","into-the-ancient-forest"],["08","Meeting Verdant & Azuren","meeting-verdant-and-azuren"],
  ["09","The Shadow Stirs","the-shadow-stirs"],["10","The Journey Begins","the-journey-begins"],["11","The Portal Opening","the-portal-opening"]
] as const;

export function generateStaticParams(){ return chapters.map(([, , slug]) => ({slug})); }

export default async function ChapterPage({params}:{params:Promise<{slug:string}>}) {
  const {slug}=await params;
  const index=chapters.findIndex(([, , value])=>value===slug);
  if(index<0) notFound();
  const [number,title]=chapters[index];
  const markdown=fs.readFileSync(path.join(process.cwd(),"chapters",number+"-"+slug+".md"),"utf8");
  const paragraphs=markdown.split(/\n\s*\n/).map(p=>p.trim()).filter(Boolean);
  const previous=chapters[index-1], next=chapters[index+1];

  return <main>
    <nav><a href="/" className="brand">MILO'S STORY</a><span>Guardians of the Elements</span></nav>
    <article className="chapter-page">
      <header className="chapter-header">
        <div className="eyebrow">CHAPTER {number}</div>
        <h1>{title}</h1>
        <a href="/#chapters" className="back-link">← All chapters</a>
      </header>
      <div className="chapter-prose">
        {paragraphs.map((paragraph,i)=>{
          if(paragraph.startsWith("# ")) return <h1 key={i}>{paragraph.slice(2)}</h1>;
          if(paragraph.startsWith("*") && paragraph.endsWith("*")) return <p className="chapter-note" key={i}>{paragraph.slice(1,-1)}</p>;
          return <p key={i}>{paragraph.replace(/^> /,"")}</p>;
        })}
      </div>
      <nav className="chapter-nav" aria-label="Chapter navigation">
        {previous ? <a href={`/chapter/${previous[2]}`}><small>PREVIOUS</small><strong>← {previous[1]}</strong></a> : <span/>}
        {next ? <a className="next" href={`/chapter/${next[2]}`}><small>NEXT</small><strong>{next[1]} →</strong></a> : <span/>}
      </nav>
    </article>
    <footer><span>MILO'S STORY</span><span>Guardians of the Elements</span><span>© {new Date().getFullYear()}</span></footer>
  </main>;
}
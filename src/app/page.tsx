import InfoCard from "@/components/InfoCard";


export default function Home() {
  return (
    <div className="space-y-6">
     <h1 className="text-3xl font-bold">This is priyanka . I am commiting my third commit  I write firty commit in gitbash </h1>
     <InfoCard 
     title="Nest.js + TypeScript"
     description="A small demo UI build with modern tools "
     />
     <InfoCard 
     title="Tailwind CSS"
     description="beautiful utility-first styling with zero efferd"
     />

    </div>
  );
}
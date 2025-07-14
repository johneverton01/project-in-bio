import { ProjectCard } from "@/app/components/commons/ProjectCard";
import { TotalVisits } from "@/app/components/commons/TotalVisits";
import UserCard from "@/app/components/commons/UserCard";

export default async function ProfilePage({ 
  params 
}: { 
  params: { profileId: string }
}) {
 console.log("Profile ID:", params.profileId); 
 const { profileId } = await params;
  return (
    <div className="relative h-screen flex p-20 overflow-hidden">
      <div className="w-1/2 flex justify-center h-min">
        <UserCard />
      </div>
      <div className="w-full flex justify-center content-start gap-4 flex-wrap overflow-y-auto">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
      <div className="absolute bottom-4 left-0 right-0 w-min mx-auto">
        <TotalVisits />
      </div>
    </div>
  )
}
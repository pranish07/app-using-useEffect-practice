import { HabitTracker } from "./components/HabitTracker";
import { HabitTrackerUnarchived } from "./components/HabitTrackerUnarchived";
import Product from "./components/Product";
import { ProjectApi } from "./components/ProjectsApi";
import { SocialMedia } from "./components/SocialMedia";
import { SocialMediaProfile } from "./components/SocialMediaProfile";
import { Todo } from "./components/Todo";
import { UserProfile } from "./components/UserProfile";
import { VideoApi } from "./components/VideoApi";
import { VideoLibrary } from "./components/VideoLibrary";

export default function App (){
 return(
  <>
  <h1>Set6</h1>
  <Product />
  <Todo />
  <HabitTracker />
  <VideoLibrary />
  <SocialMedia />
  <HabitTrackerUnarchived />
  <ProjectApi />
  <UserProfile />
  <VideoApi />
  <SocialMediaProfile />
  </>
 )
}
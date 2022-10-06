import './App.css';
import './styles/img.css'
import {Routes, Route, Navigate} from 'react-router-dom'
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import WorkoutBanner1 from './components/WorkoutBanner1';
import WorkoutBanner2 from './components/WorkoutBanner2';
import DisplayExercise from './components/DisplayExercise';
import AllExercises from './components/AllExercises';
import Legs from './components/Legs';
import Arms from './components/Arms';
import News from './components/News';
import NewsBanner from './components/NewsBanner';
import SearchResult from './components/SearchResult';
import Chest from './components/Chest';
import MyWorkouts from './components/MyWorkouts';
import AddWorkout from './components/AddWorkout';
import SessionResult from './components/SessionResult';
import Community from './components/Community';

function App() {
  return (
    <>
      <NavBar/>

      <Routes>
        <Route path='*' element={<Navigate to='/home' replace/>}/>

        <Route path = '/home' element={
          <>
            <Banner/>
            <NewsBanner/>
            <WorkoutBanner1/>
            <WorkoutBanner2/>
          </>
        }/>

        <Route path='/exercises/:search' element={<SearchResult/>}/>

        <Route path = '/exercises' element={<AllExercises/>}/>

        <Route path='/exercise/:id' element={<DisplayExercise/>}/>

        <Route path='/exercises/legs' element={<Legs/>}/>

        <Route path='/exercises/arms' element={<Arms/>}/>

        <Route path='/exercises/chest' element={<Chest/>}/>

        <Route path='/news' element={<News/>}/>

        <Route path='/myworkout' element={<MyWorkouts/>}/>

        <Route path='/myworkout/generate/session' element={<SessionResult/>}/>

        <Route path='/myworkout/add' element={<AddWorkout/>}/>

        <Route path='/community' element={<Community/>}/>
      </Routes>
      
    </>
  );
}

export default App;

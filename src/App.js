
import { useState } from 'react';
import './App.css';
import Cart from './Components/Cart/Cart';
import Course from './Components/course/Course';

const courses = [
  {
    title: "Learn Web development 1",
    price: 200,
    by: "Shafin",
    id:1
  },
  {
    title: "Learn Web development 2",
    price: 210,
    by: "Shafin",
    id:2
  },
  {
    title: "Learn Web development 3",
    price: 220,
    by: "Shafin",
    id:3
  },
  {
    title: "Learn Web development 4",
    price: 230,
    by: "Shafin",
    id:4
  },
  {
    title: "Learn Web development 5",
    price: 240,
    by: "Shafin",
    id:5
  },
  {
    title: "Learn Web development 6",
    price: 250,
    by: "Shafin",
    id:6
  },
  {
    title: "Learn Web development 7",
    price: 260,
    by: "Shafin",
    id:7
  },
  {
    title: "Learn Web development 8",
    price: 270,
    by: "Shafin",
    id:8
  },
  {
    title: "Learn Web development 9",
    price: 280,
    by: "Shafin",
    id:9
  },
  {
    title: "Learn Web development 10",
    price: 290,
    by: "Shafin",
    id:10
  },
  {
    title: "Learn Web development 11",
    price: 300,
    by: "Shafin",
    id:11
  },
  {
    title: "Learn Web development 12",
    price: 310,
    by: "Shafin",
    id:12
  },
  {
    title: "Learn Web development 13",
    price: 320,
    by: "Shafin",
    id:13
  },
  {
    title: "Learn Web development 14",
    price: 330,
    by: "Shafin",
    id:14
  },
  {
    title: "Learn Web development 15",
    price: 340,
    by: "Shafin",
    id:15
  },
]

function App() {

  const [courseCount, setCourseCount]=useState([])
  
  const courseAdded =(singleCourse)=>{
    const newCount = [...courseCount, singleCourse]
    setCourseCount(newCount)
  }

  return (
    <div className="App">
      <header className="App-header">
      <h1>this is heading</h1>
        <div className='main-container'>       
            <div className="course-container">
            {
              
              courses.map(course => <Course singleCourse={course} key={course.id} courseAdded={courseAdded}></Course>)
            }
            </div>
            <div className='cart'>
              <Cart courseCount={courseCount} ></Cart>
            </div>
        </div>
        
      </header>
    </div>
  );
}

export default App;

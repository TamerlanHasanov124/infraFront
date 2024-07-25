import React from 'react';
import './SideBar.css'
import useSideBar from './useSideBar';

const SideBar = () => {

    const {todos} = useSideBar();

  return (
    <div className="sideBar">
      <div className="sideElement">
        <div className="topHeader">
          <div className="avatar">
            {/* Avatar goes here */}
          </div>
          <div className="personInfo">
            <p>Tamerlan Hasanov</p>
            <p>28 years</p>
          </div>
        </div>
        <div className="bottomHeader">
          <div className="subTopHeader">
            <div className="descImg">
              <svg width="32" height="32" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 20h10"></path>
                <path d="m6 6 6-1 6 1"></path>
                <path d="M12 3v17"></path>
                <path d="M9 12 6 6l-3 6a3 3 0 0 0 6 0Z"></path>
                <path d="m21 12-3-6-3 6a3 3 0 0 0 6 0Z"></path>
              </svg>
            </div>
            <div className="descInfo">
              <p>Weight</p>
              <p>80 kg</p>
            </div>
          </div>

          <div className="subTopHeader">
            <div className="descImg">
              <svg width="32" height="32" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 20h10"></path>
                <path d="m6 6 6-1 6 1"></path>
                <path d="M12 3v17"></path>
                <path d="M9 12 6 6l-3 6a3 3 0 0 0 6 0Z"></path>
                <path d="m21 12-3-6-3 6a3 3 0 0 0 6 0Z"></path>
              </svg>
            </div>
            <div className="descInfo">
              <p>Height</p>
              <p>183 cm</p>
            </div>
          </div>

          <div className="subTopHeader">
            <div className="descImg">
              <svg width="32" height="32" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 20h10"></path>
                <path d="m6 6 6-1 6 1"></path>
                <path d="M12 3v17"></path>
                <path d="M9 12 6 6l-3 6a3 3 0 0 0 6 0Z"></path>
                <path d="m21 12-3-6-3 6a3 3 0 0 0 6 0Z"></path>
              </svg>
            </div>
            <div className="descInfo">
              <p>Weight</p>
              <p>80 kg</p>
            </div>
          </div>
        </div>
      </div>
      <div className="sideElement" style={{ gap: '12px', overflowY: 'auto', overflowX: 'hidden', maxHeight: '280px', paddingTop: todos.length > 3 ? '64px' : '25px' }}>
      {todos?.map((todo, index) => (
          <div key={index} className="todo">
            {todo.icon}
            <div className="todoElement">
              <p>{todo.title}</p>
              <p>{todo.description}</p>
            </div>
            <p>{todo.time}</p>
          </div>
        ))}

      </div>
    </div>
  );
};

export default SideBar;

import React from 'react';
import ExtraNavbar from '../ExtraNavbar/ExtraNavbar';

const Home = () => {
	return (
    <div className="container">
      <div className="col-md-6">
        <input className=" col-12 px-2" type="text" placeholder='Search'/>
	</div>
			<ExtraNavbar></ExtraNavbar>
      <h1>This is Home Page.</h1>
    </div>
  );
};

export default Home;
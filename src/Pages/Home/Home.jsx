import React from 'react';
import Banner from './Banner';
import JobCards from './JobCards';
import HotJobs from './HotJobs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <JobCards></JobCards>
            <HotJobs></HotJobs>
        </div>
    );
};

export default Home;
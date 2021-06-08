import React from 'react'
import Charts from '../../components/Charts/Charts';
import FeaturedInfo from '../../components/FeaturedInfo/FeaturedInfo';
import JoinMember from '../../components/JoinMember/JoinMember';
import Transaction from '../../components/Transaction/Transaction';
import {userData} from "../../DummyData/dummyData"
import './home.css'

const Home = () => {
    return (
        <div className="home">
            <FeaturedInfo />
            <Charts data={userData} title="User Analytics" grid dataKey="Active User"/>
            <div className="homeWidgets">
                <JoinMember />
                <Transaction />
            </div>
        </div>
    )
}

export default Home

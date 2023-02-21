import { React, useEffect, useState } from 'react'
import { DashboardBody } from '../Components/DashboardBody';
import { getDegree } from '../Utils/DataFetcher';
import { Helmet } from 'react-helmet';

export const Dashboard = () => {
  const [degree, setDegree] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getDegree().then(({ data }) => {
      setDegree(data);
      setLoading(false);
    });

    return () => {
      setLoading(true);
    }
  }, []);
  if (loading) {
    return (
      <div className="loading">
        <span class="loader"></span>
      </div>
    )
  }
  return (
    <>
      <Helmet>
        <title>
          Welcome !
        </title>
      </Helmet>
      <DashboardBody degree={degree} />
    </>


  )
}

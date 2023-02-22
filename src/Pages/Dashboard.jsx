import { React, useEffect, useState } from 'react'
import { DashboardBody } from '../Components/DashboardBody';
import { getData } from '../Utils/DataFetcher';
import { Helmet } from 'react-helmet';

export const Dashboard = () => {
  const [values, setValues] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData().then(({ data }) => {
      setValues(data);
      setLoading(false);
    }); 

    return () => {
      setLoading(true);
    }
  }, [])

  useEffect(() => {
    setInterval(() => {
      getData().then(({ data }) => {
        setValues(data);
        setLoading(false);
      });
    }, 1000);
    
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
      <DashboardBody values={values} />
    </>


  )
}

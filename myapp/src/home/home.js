import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./home.css"

import DataTable from '../table/table'
import Header from "./header";





const Home = () => {

    const navigate = useNavigate()
    const username = localStorage.getItem('username')
    const password = localStorage.getItem('password')

    useEffect(() => {
        if (username !== "admin" && password !== "admin")
            navigate('/')
    }, [])

    return <>
        <Header />
        <DataTable />
    </>
}
export default Home;
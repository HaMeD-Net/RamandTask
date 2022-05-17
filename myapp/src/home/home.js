import "./home.css"

import DataTable from '../table/table'
import Header from "./header";





const Home = () => {

    const username = localStorage.getItem('username')
    const password = localStorage.getItem('password')

    if (!username || !password)
        return null

    return <>
        <Header />
        <DataTable />
    </>
}
export default Home;
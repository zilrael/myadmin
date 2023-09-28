import { Table } from "antd";
import { useEffect, useState } from "react";

export function Posts(){
    const [posts, setPosts] = useState([])
    const[loading, setLoading] = useState(false)

   const columns = [
    {
        title: 'ID',
        dataIndex: 'id',
        key:'id',
    },
    {
        title: 'Título',
        dataIndex: 'title',
        key:'title',
    }
   ];
   const data = [
    {
        name:'Kaveh',
        age:'24',
    },
    {
        name:'Nahida',
        age:'500'
    },
    {
        name:'Alhaitham',
        age:'26'
    },
   ]

   useEffect(()=> {
    async function fetchPosts() {
   
        setLoading
        const response = await fetch("https://jsonplaceholder.typicode.com/");
        const data = await response.json()

        setLoading(false) 
        setPosts(data)
    }

    fetchPosts()
   }, [])


   return(
    <div>
        <h1>Posts</h1>
            <Table rowKey="id" columns={columns} dataSource={posts}  />
    </div>
   )
}
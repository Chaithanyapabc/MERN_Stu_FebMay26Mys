//Crud operation using Axios

import {useEffect, useState} from "react";
import api from "../services/api"

export function CRUDOperation(){
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    const [result,setResult]=useState(null)

    function resetState(){
        setError("")
        setResult(null)
    }

    //create
    async function createPost() {
        setLoading(true)
        resetState()
        try{
            const response=await api.post("/posts",{
                title:"React learning",
                body:"POST request example",
                userId:1
            })
            console.log("created post:",response.data)
            setResult({
                action:"POST",
                message:"POST created successfully",
                data:response.data,
            })
        }
        catch(error){
            console.log("error while creating post:",error)
            setError(error.message || "Failed to create post.")
        }
        finally{
            setLoading(false)
        }
    }

    //update
    async function updatePost() {
        setLoading(true)
        resetState()
        try{
            const response=await api.put("/posts/1",{
                id:1,
                title:"updated React learning",
                body:"updated body content",
                userId:1
            })
            console.log("updated post:",response.data)
            setResult({
                action:"PUT",
                message:"POST updated  successfully",
                data:response.data,
            })
        }
        catch(error){
            console.log("error while updating post:",error)
            setError(error.message || "Failed to update post.")
        }
        finally{
            setLoading(false)
        }
    }

    //delete
    async function deletePost() {
        setLoading(true)
        resetState()
        try{
            const response=await api.delete("/posts/1")
            console.log("deleted post:",response.data)
            setResult({
                action:"DELETE",
                message:"POST deleted  successfully",
                data:response.data,
            })
        }
        catch(error){
            console.log("error while deleting post:",error)
            setError(error.message || "Failed to delete post.")
        }
        finally{
            setLoading(false)
        }
    }

    return(
        <section>
            <h2>CRUD Operation </h2>
            <button onClick={createPost} disabled={loading}>POST</button>
            <button onClick={updatePost} disabled={loading}>UPDATE</button>
            <button onClick={deletePost} disabled={loading}>DELETE</button>

            {/* Loading UI */}
            {loading && <p>Request in progress....</p>}

            {/* Error UI */}
            {!loading && error && <p>Error : {error}</p>}

            {!loading && result && (
                <div>
                    <h3>{result.action}Result</h3>
                    <p>{result.message}</p>
                    <pre>JSON.stringify(result.data,null,2)</pre>

                </div>
            )}
        </section>
    )
}
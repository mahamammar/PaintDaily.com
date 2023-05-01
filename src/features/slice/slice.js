import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit"
import axios from "axios";

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async ()=>{
    try{
        const response = await axios.get("https://dummyjson.com/products/1")
        return [...response.data];
    }catch(err){
        return err.message;
    }

})

const initialState = {
    posts:[],
    status:'idle',
    error:null  
}

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded:{
            reducer(state,action){
                state.data.push(action.payload);
            },
            prepare(title,content,userId){
                return{
                    payload:{
                        id:nanoid(),
                        title,
                        content,
                        date:new Date().toISOString(),
                        userId
                    }
                }
            },
            reactionAdded(state,action){
                const {postId,reaction} = action.payload
                const existingPost = state.posts.find(post=> post.id  === postId)
                if(existingPost){
                    existingPost.reaction[reaction]++
                }
            }
        }
    },
    extraReducers(builder){
        builder.addCase(fetchPosts.pending,(state,action)=>{
            state.message='loading'
        })
        builder.addCase(fetchPosts.fulfilled,(state,action)=>{
            state.message("something");
            state.posts.push(action.payload);
        })
        builder.addCase(fetchPosts.rejected,(state,action)=>{
            state.message='failed'
        })
    }
});

export const selectAllPosts = (state) => state.posts.posts;
export const getPostsStatus = (state) => state.posts.message;

export const {postAdded,reactionAdded} = postsSlice.actions
export default postsSlice.reducer
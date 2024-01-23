import Post from "./Post"


export const Posts = () => {
    // return
    // <>
    // { posts.length > 0 && posts.map(( post ) => {
    //     return <p key={post.id}></p>
    
    // }) : <p>No Posts to Display</p>}
    // </>
    
    const posts =  [
		{
			"body": "Editing from insomni 2",
			"id": "3",
			"timestamp": "2024-01-03T00:35:27.568774",
			"user_id": "1"
		},
		{
			"body": "POST from insomnia 32",
			"id": "4",
			"timestamp": "2024-01-03T00:54:46.188100",
			"user_id": "1"
		},
		{
			"body": "POST from insomnia 332",
			"id": "5",
			"timestamp": "2024-01-03T00:54:49.010977",
			"user_id": "1"
		},
		{
			"body": "POST from insomnia 3332",
			"id": "6",
			"timestamp": "2024-01-03T00:54:50.843257",
			"user_id": "1"
		}
	]

//   return (
//     <>
//     <container fluid data-bs-theme='dark'className= 'app' >
//       <h1>Padawans Portal</h1>
      
//       { posts.length > 0 && posts.map(( post ) => {
//         return <p key={post.id}>
//           {/* <b>{post.author} </b><br /> */}
//           {post.body}
//         </p>
//       }) : <p>No Posts to Display</p>}
//      </>
  
  return (
    <>
      
      { posts.length > 0 ? posts.map(( post ) => {
            return <Post key={post.id}post={post} />
        
      }) : <p> No Posts to Display</p>}
      
      
    </>
  )
}  

// {/* <b>{post.author} </b><br /> */}
// {post.body}
// </p>
  
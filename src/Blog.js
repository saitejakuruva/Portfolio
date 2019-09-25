import React,{Component} from 'react'
import ReactDOM from 'react-dom'
class Blog extends  Component{
render(){
    return(


<ol className='list-medium'>
  <div className='blocks'>
    <div className='Header'>
   <h2>From the <span className='blog'>Blog</span></h2>
    </div>
    {this.props.items.map((item,i)=> (
      <div className='blogs'>
      <li key={i}>
        <div className='title-item'>
          <h3>{item.title}</h3>
        </div>
        <div >
              <a href={item.link}><img src={item.thumbnail} className='medium-images' alt='medium-images' /></a>
        </div>
         <div>
          <h4>By {item.author}</h4>
          </div>
          <div>
          <p>{item.description}</p>
          </div>
     </li>
   </div>
    ))}
  </div>
  <div>

  </div>

  </ol>
)
  }
}
export default Blog
